import torch
from diffusers import StableDiffusionPipeline
from PIL import Image
import gradio as gr
import requests
import base64
import tempfile
import os

# ======== Initial story to be used in both visual + prompt ========
INITIAL_LORE = """
Neo City is under attack. The evil villain Darkstorm has plunged the skyline into shadows. Buildings vanish. People panic.

From the sky: "No one can save you now!"

But then, hope arises. A new protector is being imagined — by you.
"""

# ======== Load DreamShaper Model ========
model_path = "./models/dreamshaper_8.safetensors"
device = "cuda" if torch.cuda.is_available() else "cpu"
dtype = torch.float16 if device == "cuda" else torch.float32

pipe = StableDiffusionPipeline.from_single_file(
    model_path,
    torch_dtype=dtype,
    safety_checker=None
).to(device)

# ======== Story Generator Function ========
def generate_story(image):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
        image.save(tmp.name)
        temp_image_path = tmp.name

    with open(temp_image_path, "rb") as f:
        encoded_image = base64.b64encode(f.read()).decode("utf-8")
    os.unlink(temp_image_path)

    full_prompt = f"""
    Continue this story:

    {INITIAL_LORE}

    Look at the hero in the image. Based on their appearance, imagine how they fought Darkstorm and saved Neo City.
    Write the rest of the story using this image. Be dramatic, fun, and simple for young readers.
    
    Make sure the story includes:
    - A beginning, middle, and heroic ending
    - How the superhero defeats or outsmarts Darkstorm
    - A sense of joy or peace returning to the city

    Only return the story. No extra commentary or notes.
    """

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llava",
            "prompt": full_prompt,
            "images": [encoded_image],
            "stream": False,
            "max_tokens": 450,
            "temperature": 0.7
        }
    )

    if response.status_code == 200:
        return response.json().get("response", "[No story returned]")
    else:
        return f"[Error] Story generation failed: {response.status_code} - {response.text}"

# ======== Hero Generator ========
def generate_superhero(prompt):
    image = pipe(prompt, num_inference_steps=1, guidance_scale=7.5).images[0]
    return image

# ======== Gradio UI ========
story_intro = f"""
<div class='story-block'>
<h2>📖 The Story So Far...</h2>
<p>{INITIAL_LORE}</p>
</div>
"""

call_to_action = """
<div class='cta-block'>
<h2>🦸 Create Your Hero</h2>
<p>Describe your superhero in words. They can be magical, futuristic, mythical — anything you imagine!</p>
</div>
"""

with gr.Blocks(css="""
/* Global styles */
.gradio-container {
    overflow: visible !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
    color: #333;
}

/* Shared card styles */
.story-block, .cta-block, #story-output {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-block:hover,
.cta-block:hover,
#story-output:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

/* Heading style */
h2 {
    color: #2e3a59;
    font-size: 24px;
    margin-bottom: 12px;
}

/* Paragraph style */
p {
    color: #444;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

/* Story output overrides */
#story-output {
    background-color: #f0f8ff;
    color: #222;
    font-size: 18px;
    line-height: 1.7;
}

/* Button styling */
button {
    background-color: #1e2a48 !important;
    color: white !important;
    border: none !important;
    border-radius: 12px !important;
    padding: 10px 20px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: background-color 0.3s ease, transform 0.2s ease !important;
}

button:hover {
    background-color: #2c3e60 !important;
    transform: scale(1.03);
}
/* Image output styling */
#image-output {
    border-radius: 16px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
#image-output:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}
"""
) as demo:

    gr.Markdown(story_intro)
    gr.Markdown(call_to_action)

    with gr.Row():
        with gr.Column():
            prompt = gr.Textbox(label="📝 Describe Your Superhero", placeholder="A glowing ninja with thunder boots", lines=3)
            generate_button = gr.Button("💥 Generate Hero!")
        with gr.Column():
            image_output = gr.Image(label="🖼️ Your Hero Appears")

    with gr.Row():
        continue_button = gr.Button("📜 See How Your Hero Saved The City")
        loading_text = gr.Markdown(visible=False)
        story_output = gr.Markdown(elem_id="story-output")


    state_image = gr.State()

    # Hookup 1: Hero generation
    def full_generate(prompt):
        image = generate_superhero(prompt)
        return image, image
    generate_button.click(fn=full_generate, inputs=prompt, outputs=[image_output, state_image])

    # Hookup 2: Story generation with visual cue
    def show_loading():
        return gr.update(value="⏳ Generating the story... please wait!", visible=True), ""

    def hide_loading_and_show_story(image):
        story = generate_story(image)
        return gr.update(visible=False), story

    continue_button.click(fn=show_loading, outputs=[loading_text, story_output])
    continue_button.click(fn=hide_loading_and_show_story, inputs=state_image, outputs=[loading_text, story_output], queue=True)

demo.launch()