from PIL import Image
import requests
import base64
import tempfile
import os

def load_image(image_path):
    """
    Loads an image in RGB mode.
    """
    try:
        image = Image.open(image_path).convert("RGB")
        return image
    except Exception as e:
        print(f"Error loading image: {e}")
        return None

def generate_description(image):
    """
    Sends the image to a local LLaVA endpoint (via Ollama) to get an anime-style superhero description.
    """
    # Save image to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
        image.save(tmp.name)
        temp_image_path = tmp.name

    # Encode the image in base64
    with open(temp_image_path, "rb") as f:
        encoded_image = base64.b64encode(f.read()).decode("utf-8")

    # Clean up the temp file
    os.unlink(temp_image_path)

    # Post to local Ollama server (LLaVA model)
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llava",
            "prompt": "Describe this anime-style superhero scene in detail.",
            "images": [encoded_image],
            "stream": False
        }
    )

    # Parse response
    if response.status_code == 200:
        return response.json().get("response", "[No description returned]")
    else:
        return f"[Error] LLaVA API returned status {response.status_code}: {response.text}"

