## Setting Up the LLaVA Model via Ollama

1. **Install Ollama:**
   Follow the instructions for installing Ollama from the [Ollama website](https://ollama.com).

2. **Pull the LLaVA Model:**
   Once Ollama is installed, pull the LLaVA model by running:
   ```bash
   ollama pull llava
   ```
   This will download and set up the LLaVA model locally.


1. **Navigate to folder AI>img-story-generator:**

   cd AI/img-story-generator

2. **Create a Virtual Environment Using Python 3.13:**


   py -3.13 -m venv .venv
   .\.venv\Scripts\activate


3. **Install Project Dependencies:**
   
   pip install --upgrade pip
   pip install -r requirements.txt

## Usage

### CLI :
Run the CLI version with:

python cli_app.py <image_path>

### Web Interface :

To launch the web application (Gradio interface), run:

python web_app.py

- Then, open the provided local URL in your browser to interact with the app.

