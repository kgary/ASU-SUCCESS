import sys
import os
from PIL import Image
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from img_to_story import load_image, generate_story

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
    story = generate_story(image)
    print("\nStory:")
    print(story)

if __name__ == "__main__":
    main()