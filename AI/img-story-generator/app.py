import sys
import os
from PIL import Image
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from image_to_description import load_image, generate_description
from description_to_story import generate_story

def main():
    if len(sys.argv) != 2:
        print("Usage: python main.py <image_path>")
        return

    image_path = sys.argv[1]
    image = load_image(image_path)

    if image is None:
        print("Failed to load image.")
        return

    print("Processing image through LLaVA...")
    description = generate_description(image)
    print("\nDescription:")
    print(description)
    print("\nGenerating anime story...")
    story = generate_story(description)
    print("\nGenerated Story:")
    print(story)

if __name__ == "__main__":
    main()