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
    // Add more tools here
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