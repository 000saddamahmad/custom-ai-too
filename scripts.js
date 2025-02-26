const tools = [
  {
    name: "HuggingChat",
    description: "Open-source conversational AI.",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
    link: "https://huggingface.co/chat",
    category: "Text"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model.",
    logo: "https://stability.ai/logo.png",
    link: "https://stability.ai/",
    category: "Image"
  },
  {
    name: "Coqui TTS",
    description: "Open-source text-to-speech.",
    logo: "https://coqui.ai/logo.png",
    link: "https://coqui.ai/",
    category: "Audio"
  },
  {
    name: "Remove.bg",
    description: "Free background removal tool.",
    logo: "https://www.remove.bg/apple-touch-icon.png",
    link: "https://www.remove.bg/",
    category: "Image"
  },
  {
    name: "Whisper by OpenAI",
    description: "Open-source speech recognition.",
    logo: "https://openai.com/favicon.ico",
    link: "https://github.com/openai/whisper",
    category: "Audio"
  },
  {
    name: "LibreTranslate",
    description: "Open-source translation tool.",
    logo: "https://libretranslate.com/static/favicon.ico",
    link: "https://libretranslate.com/",
    category: "Text"
  },
  {
    name: "GPT-Neo",
    description: "Open-source text generation model.",
    logo: "https://eleuther.ai/favicon.ico",
    link: "https://github.com/EleutherAI/gpt-neo",
    category: "Text"
  },
  {
    name: "DeepArt.io",
    description: "Free AI art generator.",
    logo: "https://deepart.io/favicon.ico",
    link: "https://deepart.io/",
    category: "Image"
  },
  {
    name: "Runway ML",
    description: "Free tier for AI video editing.",
    logo: "https://runwayml.com/favicon.ico",
    link: "https://runwayml.com/",
    category: "Video"
  },
  {
    name: "Pandas AI",
    description: "Open-source AI for data analysis.",
    logo: "https://pandas-ai.vercel.app/favicon.ico",
    link: "https://github.com/gventuri/pandas-ai",
    category: "Data"
  },
  {
    name: "DALL-E Mini (Craiyon)",
    description: "Free image generation tool.",
    logo: "https://www.craiyon.com/favicon.ico",
    link: "https://www.craiyon.com/",
    category: "Image"
  },
  {
    name: "DeepCode",
    description: "Free AI-powered code review.",
    logo: "https://www.deepcode.ai/favicon.ico",
    link: "https://www.deepcode.ai/",
    category: "Coding"
  },
  {
    name: "MuseNet",
    description: "Free AI music generator.",
    logo: "https://openai.com/favicon.ico",
    link: "https://openai.com/blog/musenet/",
    category: "Audio"
  },
  {
    name: "TensorFlow.js",
    description: "Run AI models directly in the browser.",
    logo: "https://www.tensorflow.org/favicon.ico",
    link: "https://www.tensorflow.org/js",
    category: "Coding"
  },
  {
    name: "DeepAI Image Editor",
    description: "Free image enhancement tool.",
    logo: "https://deepai.org/favicon.ico",
    link: "https://deepai.org/machine-learning-model/torch-srgan",
    category: "Image"
  },
  {
    name: "Vosk",
    description: "Offline speech recognition.",
    logo: "https://alphacephei.com/vosk/favicon.ico",
    link: "https://alphacephei.com/vosk/",
    category: "Audio"
  },
  {
    name: "Pictory",
    description: "Free AI video summarization.",
    logo: "https://pictory.ai/favicon.ico",
    link: "https://pictory.ai/",
    category: "Video"
  },
  {
    name: "Deepware Scanner",
    description: "Free deepfake detection tool.",
    logo: "https://deepware.ai/favicon.ico",
    link: "https://deepware.ai/",
    category: "Video"
  },
  {
    name: "CodeGPT",
    description: "Open-source code generation.",
    logo: "https://codegpt.co/favicon.ico",
    link: "https://github.com/apple/coremltools",
    category: "Coding"
  },
  {
    name: "Google Text-to-Speech",
    description: "Free text-to-speech API.",
    logo: "https://cloud.google.com/favicon.ico",
    link: "https://cloud.google.com/text-to-speech",
    category: "Audio"
  }
  // Add more AI tools here to reach 100 total
];
  
  const toolList = document.getElementById("tool-list");
  
  // Display tools
  tools.forEach(tool => {
    const card = `
      <div class="col-md-4">
        <div class="card">
          <img src="${tool.logo}" class="card-img-top" alt="${tool.name}">
          <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="btn btn-primary">Visit Tool</a>
          </div>
        </div>
      </div>
    `;
    toolList.innerHTML += card;
  });
  
  // Search functionality
  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTools = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm)
    );
    toolList.innerHTML = "";
    filteredTools.forEach(tool => {
      const card = `
        <div class="col-md-4">
          <div class="card">
            <img src="${tool.logo}" class="card-img-top" alt="${tool.name}">
            <div class="card-body">
              <h5 class="card-title">${tool.name}</h5>
              <p class="card-text">${tool.description}</p>
              <a href="${tool.link}" target="_blank" class="btn btn-primary">Visit Tool</a>
            </div>
          </div>
        </div>
      `;
      toolList.innerHTML += card;
    });
  });