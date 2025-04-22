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
Neo City once buzzed with joy, light, and floating buses — until one day, Darkstorm returned.

From a swirling storm cloud, he emerged with a sneer, casting shadows that made entire buildings vanish. “No one can save you now!” he boomed. Fear spread through every corner of the city.

But then... the people remembered something important: imagination is powerful. With hope in their hearts, they began to imagine a hero — someone with brilliant powers, dazzling courage, and a heart full of kindness.

That hero is now taking form — created by you — ready to rise and bring the light back to Neo City.
"""


# ======== Load DreamShaper Model ========
model_path = "./models/dreamshaper_8.safetensors"
device = "cuda" if torch.cuda.is_available() else "cpu"
dtype = torch.float16 if device == "cuda" else torch.float32

pipe = StableDiffusionPipeline.from_single_file(
    model_path,
    torch_dtype=dtype,
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
        You are an imaginative children's storyteller. Continue the story below, using the image provided of the superhero created by the user.

        Story so far:
        {INITIAL_LORE}

        Your task:
        Based on the image of the superhero, write a vivid and exciting story (2–3 paragraphs) about how they save Neo City from Darkstorm.

        Make the story:
        - Easy to read and follow (aimed at 10–14 year-olds)
        - Full of action, imagination, and emotion
        - Uplifting and satisfying, with a strong ending

        Include:
        - How the superhero arrives and reacts to the destruction
        - A challenge or battle with Darkstorm
        - A clever or powerful way the hero wins
        - Joy returning to Neo City

        Avoid giving explanations — just tell the story in narrative format. No titles or intros. Just the story.
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
    negative_prompt = (
        "nude, nudity, nsfw, blood, guns, weapons, violence, scary, horror, "
        "zombie, demon, dark, creepy, disturbing, mature, gore, inappropriate, evil"
    )
    image = pipe(prompt,negative_prompt=negative_prompt, num_inference_steps=25, guidance_scale=7.5).images[0]
    return image

# ======== Gradio UI ========
# Read external HTML and CSS
with open("story_blocks.html", "r") as f:
    story_html = f.read()

with open("styles.css", "r") as f:
    custom_css = f.read()

with gr.Blocks(css=custom_css) as demo:
    gr.HTML(story_html)

    with gr.Row():
        with gr.Column(elem_classes=["story-block"]):
            prompt = gr.Textbox(label="📝 Describe Your Superhero", placeholder="A glowing ninja with thunder boots", lines=3)
            generate_button = gr.Button("💥 Generate Hero!")
        with gr.Column():
            image_output = gr.Image(label="🖼️ Your Hero Appears")

    with gr.Column():
        continue_button = gr.Button("📜 See How Your Hero Saved The City")
        loading_text = gr.Markdown(visible=False)
        story_output = gr.HTML()



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
        return gr.update(visible=False), f"<div class='story-block'><p>{story}</p></div>"


    continue_button.click(fn=show_loading, outputs=[loading_text, story_output])
    continue_button.click(fn=hide_loading_and_show_story, inputs=state_image, outputs=[loading_text, story_output], queue=True)

demo.launch(show_api=False, show_error=True, share=False)