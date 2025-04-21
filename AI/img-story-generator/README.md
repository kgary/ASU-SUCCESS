
# 🦸‍♂️ AI-Powered Superhero Story Generator

This is a fun, educational, and interactive AI storytelling experience designed especially for students. Users can:

1. Read the beginning of a story where a villain attacks the city.
2. Describe a superhero who can save the day.
3. Generate a superhero image using the **DreamShaper model**.
4. Generate the continuation of the story using that image via **LLaVA (using Ollama)**.

---

## 📁 Project Structure

```
img_story_generator/
├── models/
│   └── dreamshaper_8.safetensors     # Put the DreamShaper model here
├── main_app.py                       # Full Gradio application (image + story)
├── requirements.txt                  # Dependencies for the project
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo & Navigate to

```bash
cd img_story_generator
```

---

### 2. Create a Local Environment with Python 3.11 or lower

---

### 3. Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

---

### 4. Set Up the DreamShaper Model

1. Download the DreamShaper model from the following link:  
   🔗 [https://civitai.com/models/4384/dreamshaper](https://civitai.com/models/4384/dreamshaper)

2. Rename the downloaded file to:

```
dreamshaper_8.safetensors
```

3. Move it into the `models/` folder:

```
img_story_generator/models/dreamshaper_8.safetensors
```

> **Note:** Make sure `main_app.py` is referencing the correct relative path.

---

### 5. Set Up the LLaVA Model via Ollama

1. Install **Ollama**:  
   Follow the instructions here:  
   🔗 [https://ollama.com](https://ollama.com)

2. Once Ollama sup and running, Pull the LLaVA model using below command:

Run it in the same file location i.e -->> ./ASU-SUCCESS/AI/img-story-generator
```bash
ollama pull llava
```

> This will download and prepare the LLaVA vision-language model for local inference at `http://localhost:11434/api/generate`.

---

## 🚀 Usage

### 🔹 Run the Full Application (Image + Story)

```bash
python main_app.py
```

This will launch a Gradio UI where you can:
- Read a comic-style story intro.
- Describe a superhero.
- Generate their image using DreamShaper.
- Click a button to continue the story using that image with LLaVA.

---

## 📌 Notes

- Requires a **GPU** for fast image generation via DreamShaper.
- LLaVA model can work on CPU or GPU, depending on Ollama configuration.
- Fully offline; all models run locally — no external API calls needed.

---

