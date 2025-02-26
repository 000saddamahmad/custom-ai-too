const tools = [
  {
    name: "HuggingChat",
    description: "Open-source conversational AI.",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
    link: "https://huggingface.co/chat",
    category: "Text"
  },
  {
    name: "ChatGPT",
    description: "AI-powered chatbot by OpenAI.",
    logo: "https://openai.com/favicon.ico",
    link: "https://chat.openai.com/",
    category: "Text"
  },
  {
    name: "DeepSeek",
    description: "AI model for search and conversational tasks.",
    logo: "https://cdn.deepseek.com/chat/icon.png",
    link: "https://www.deepseek.com/",
    category: "Text"
  },
  {
    name: "Perplexity AI",
    description: "AI-powered search engine with contextual understanding.",
    logo: "https://www.perplexity.ai/favicon.ico",
    link: "https://www.perplexity.ai/",
    category: "Text"
  },
  {
    name: "Claude",
    description: "Conversational AI by Anthropic.",
    logo: "https://www.anthropic.com/favicon.ico",
    link: "https://www.anthropic.com/",
    category: "Text"
  },
  {
    name: "Google Bard",
    description: "AI-powered chatbot by Google.",
    logo: "https://bard.google.com/favicon.ico",
    link: "https://bard.google.com/",
    category: "Text"
  },
  {
    name: "Mistral AI",
    description: "Open-weight language models.",
    logo: "https://mistral.ai/favicon.ico",
    link: "https://mistral.ai/",
    category: "Text"
  },
  {
    name: "Llama by Meta",
    description: "Meta's large language model.",
    logo: "https://about.fb.com/wp-content/uploads/2019/11/meta-logo.png",
    link: "https://ai.meta.com/llama/",
    category: "Text"
  }
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