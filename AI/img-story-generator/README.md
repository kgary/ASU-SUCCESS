# 🦸‍♂️ AI-Powered Superhero Story Generator

A fun, educational, and interactive AI storytelling experience designed especially for students. Kids can:

1. Read the beginning of a comic-style story where a villain attacks Neo City.
2. Describe a superhero who can save the day.
3. Generate a superhero image using the **DreamShaper model**.
4. Use that image to continue the story using **LLaVA (via Ollama)**.

---

## 📁 Project Structure

```
img_story_generator/
├── models/
│   └── dreamshaper_8.safetensors     # Put the DreamShaper model here
├── styles.css                        # Custom playful theme
├── story_blocks.html                 # Custom story blocks
├── story_blocks.html                 # HTML blocks for story and CTA
├── main_app.py                       # Gradio app (image + story generator)
├── requirements.txt                  # Dependencies for the project
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd img_story_generator
```

---


### 2. Create a Virtual Environment (Python 3.10 or 3.11)

### **Please Install Python 3.11**  
Make sure that **Python 3.11** is installed on your system before proceeding to create the virtual environment. You can download Python 3.11 from [here](https://www.python.org/downloads/release/python-3110/).  
Once Python 3.11 is installed, proceed to create the virtual environment.

#### 🖥️ macOS/Linux:

```bash
python3.11 -m venv .venv
source .venv/bin/activate
```

#### 🪟 Windows:

```bash
py -3.11 -m venv .venv
.venv\Scripts\activate
```

---

### 3. Install Python Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

---

### 4. Set Up the DreamShaper Model

1. Download the DreamShaper model from:  
   🔗 [https://civitai.com/models/4384/dreamshaper](https://civitai.com/models/4384/dreamshaper)

2. Rename the downloaded file to:

```
dreamshaper_8.safetensors
```

3. Move it to the `models/` directory:

```bash
mv dreamshaper_8.safetensors ./models/
```

> **Note:** Ensure `main_app.py` correctly references the path to the model.

---

### 5. Set Up the LLaVA Model via Ollama

1. Install [Ollama](https://ollama.com) on your system.

2. Pull the LLaVA model by running:

```bash
ollama pull llava
```

> ⚠️ Make sure Ollama is actively running and accessible at `http://localhost:11434`.

---

## 🚀 Run the Full Application

```bash
python main_app.py
```

Once started, a Gradio interface will launch in your browser. You can:

- 📖 Read the initial comic-style story.
- ✏️ Describe a superhero in your own words.
- 🎨 Generate the superhero's image.
- 📜 Continue the story based on your generated hero.

---

## 📌 Notes

- 🧠 **All models run locally** — no API keys or external services required.
- ⚡ For best results, **DreamShaper image generation requires a GPU**.
- 💡 **LLaVA model via Ollama** supports both CPU and GPU execution.
- 🎈 The web app is designed with a **colorful, kid-friendly theme**.

---

## ✅ Requirements

Make sure you are using:

- Python: `>=3.10, <3.12`

### Required packages:

```
torch==2.2.2
diffusers==0.33.1
transformers==4.51.3
gradio==4.25.2
safetensors==0.5.3
Pillow==11.2.0
requests==2.32.3
```

Install them all with:

```bash
pip install -r requirements.txt
```

---

## 🧠 Credits

- 🎨 **DreamShaper** by Lykon → [CivitAI](https://civitai.com/models/4384/dreamshaper)
- 🔍 **LLaVA** via [Ollama](https://ollama.com)
- Built with 💻 Python, 🤗 Diffusers, 🎨 Gradio, 🖼️ Pillow

---
