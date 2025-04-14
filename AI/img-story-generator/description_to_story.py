import requests

def generate_story(description):

    prompt = (
        "Convert the following anime-style superhero scene description into an engaging, dramatic story:\n\n"
        f"{description}\n\n"
        "Story:"
    )

    # Post to the local LLaVA endpoint
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llava",
            "prompt": prompt,
            "stream": False
        }
    )

    # Parse response
    if response.status_code == 200:
        return response.json().get("response", "[No story returned]")
    else:
        return f"[Error] LLaVA API returned status {response.status_code}: {response.text}"

if __name__ == "__main__":
    # Default description for testing.
    default_description = (
        "This is a colorful illustration of an anime-style superhero. "
        "The character has spiky blue hair, intense eyes, and stands confidently "
        "amid a futuristic cityscape, ready to fight evil."
    )
    story = generate_story(default_description)
    print("Generated Story:")
    print(story)