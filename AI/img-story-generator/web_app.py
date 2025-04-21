import gradio as gr
from PIL import Image
from img_to_story import generate_story

def generate_story_from_image(image: Image.Image) -> str:
    
    if image is None:
        return "[Error] No image was uploaded."

    story = generate_story(image)

    return (
        "### Story:\n"
        f"{story}\n\n"

    )

demo = gr.Interface(
    fn=generate_story_from_image,
    inputs=gr.Image(type="pil", label="Upload an Anime-Style Image"),
    outputs=gr.Markdown(label="Anime-Style Story"),
    title="Anime-Style Superhero Story Generation using Generative AI",
    description="Upload an image and get an anime-style superhero  story."
)

if __name__ == "__main__":
    demo.launch()
