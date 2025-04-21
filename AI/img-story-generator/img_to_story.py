from PIL import Image
import requests
import base64
import tempfile
import os

def load_image(image_path):
    try:
        # image.resize((512, 512))
        image = Image.open(image_path).convert("RGB")
        image = image.resize((512, 512), Image.Resampling.LANCZOS)

        return image
    except Exception as e:
        print(f"Error loading image: {e}")
        return None

def generate_story(image):
    # Save image to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
        image.save(tmp.name)
        temp_image_path = tmp.name

    # Encode the image in base64
    with open(temp_image_path, "rb") as f:
        encoded_image = base64.b64encode(f.read()).decode("utf-8")

    # Clean up the temp file
    os.unlink(temp_image_path)

    prompt = f"""
        1. Identify the key elements and characters in the scene.
        2. Describe the overall mood and setting based on the image.
        3. Using this information, craft a short, dramatic story in simple language. 
            Ensure the narrative includes:
            - A clear beginning, middle, and end
            - A sense of tension or conflict
            - A satisfying resolution or conclusion

        Focus on making the story approachable for all readers, yet still imaginatLook at this image carefullyive and vivid.
        Only display story in proper format without any extra text or explanation."""

    # Post to local Ollama server (LLaVA model)
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llava",
            "prompt": prompt,
            "images": [encoded_image],
            "stream": False,
            "max_tokens": 450,   
            "temperature": 0.7
        }
    )

    # Parse response
    if response.status_code == 200:
        return response.json().get("response", "[No description returned]")
    else:
        return f"[Error] LLaVA API returned status {response.status_code}: {response.text}"

