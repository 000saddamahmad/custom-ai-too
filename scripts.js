const tools = [
  
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
    logo: "https://www.deepseek.com/favicon.ico",
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
    logo: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png",
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
    logo: "https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico",
    link: "https://ai.meta.com/llama/",
    category: "Text"
  },
  {
    name: "MyUnite AI",
    description: "AI-powered automation and assistance tool.",
    logo: "https://myunite.ai/favicon.ico",
    link: "https://myunite.ai/",
    category: "Automation"
  },
  {
    name: "Bolt.new",
    description: "AI-driven business tools.",
    logo: "https://bolt.new/static/favicon.svg",
    link: "https://bolt.new/",
    category: "Business"
  },
  {
    name: "InstaInfluencer",
    description: "AI for Instagram growth.",
    logo: "https://www.instainfluencer.ai/favicon.ico",
    link: "https://www.instainfluencer.ai/",
    category: "Social Media"
  },
  {
    name: "Informly Idea Validator",
    description: "AI-powered idea validation tool.",
    logo: "https://validator.informly.ai/static/tenants/validator/img/favicon.svg",
    link: "https://validator.informly.ai/",
    category: "Business"
  },
  {
    name: "Eternity AC",
    description: "AI for digital immortality.",
    logo: "https://eternity.ac/favicon.ico",
    link: "https://eternity.ac/",
    category: "AI Research"
  },
  {
    name: "AutoUGC",
    description: "AI-driven user-generated content creator.",
    logo: "https://autougc.com/favicon.ico",
    link: "https://autougc.com/",
    category: "Content Creation"
  },
  {
    name: "BoTDojo",
    description: "AI automation for chatbots.",
    logo: "https://botdojo.com/favicon.ico",
    link: "https://botdojo.com/",
    category: "Automation"
  },
  {
    name: "Generor",
    description: "AI-powered idea generation tool.",
    logo: "https://generor.com/img/favicon/apple-touch-icon.png",
    link: "https://generor.com/",
    category: "Productivity"
  },
  {
    name: "MyAI Ninja",
    description: "AI-powered productivity assistant.",
    logo: "https://myaininja.com/favicon.ico",
    link: "https://myaininja.com/",
    category: "Productivity"
  },
  {
    name: "ThetaWave AI",
    description: "AI-driven sound and meditation tools.",
    logo: "https://thetawave.ai/favicon.ico",
    link: "https://thetawave.ai/",
    category: "Wellness"
  },
  {
    name: "ThatNeedle",
    description: "Instant AI summaries for YouTube videos",
    logo: "https://media.theresanaiforthat.com/icons/thatneedle.svg",
    link: "https://gist.thatneedle.com/",
    category: "Search"
  },
  {
    name: "Sparkle AI",
    description: "AI-based design and branding tool.",
    logo: "https://sparkle.ai/favicon.ico",
    link: "https://sparkle.ai/",
    category: "Design"
  },
  {
    name: "ScanRelief",
    description: "AI-driven document scanner and optimizer.",
    logo: "https://scanrelief.com/favicon.ico",
    link: "https://scanrelief.com/",
    category: "Productivity"
  },
  {
    name: "The Good AI",
    description: "Ethical AI-powered automation tools.",
    logo: "https://thegoodai.com/favicon.ico",
    link: "https://thegoodai.com/",
    category: "Automation"
  },
  {
    name: "Zoviz Branding Expert",
    description: "AI-powered branding and marketing insights.",
    logo: "https://zoviz.com/favicon.ico",
    link: "https://zoviz.com/",
    category: "Marketing"
  },
  {
    name: "Sheetsy",
    description: "AI automation for spreadsheets.",
    logo: "https://sheetsy.com/favicon.ico",
    link: "https://sheetsy.com/",
    category: "Productivity"
  },
  {
    name: "Syft AI",
    description: "AI for data analytics and automation.",
    logo: "https://syft.ai/favicon.ico",
    link: "https://syft.ai/",
    category: "Data"
  },
  {
    name: "ReedPartner",
    description: "AI recruitment and job-matching tool.",
    logo: "https://reedpartner.com/favicon.ico",
    link: "https://reedpartner.com/",
    category: "HR"
  },
  {
    name: "WatchMyCompetitor",
    description: "AI-powered competitive intelligence tool.",
    logo: "https://watchmycompetitor.com/favicon.ico",
    link: "https://watchmycompetitor.com/",
    category: "Business"
  },
  {
    name: "Interpret AI",
    description: "AI-powered text and voice analysis.",
    logo: "https://interpret.ai/favicon.ico",
    link: "https://interpret.ai/",
    category: "AI Research"
  },
  {
    name: "Video to Blog",
    description: "Convert videos into blog articles using AI.",
    logo: "https://videotoblog.com/favicon.ico",
    link: "https://videotoblog.com/",
    category: "Content Creation"
  },
  {
    name: "Deep Sequencer",
    description: "AI-powered music composition.",
    logo: "https://deepsequencer.com/favicon.ico",
    link: "https://deepsequencer.com/",
    category: "Music"
  },
  {
    name: "Veriff",
    description: "AI-driven identity verification.",
    logo: "https://veriff.com/favicon.ico",
    link: "https://veriff.com/",
    category: "Security"
  },
  {
    name: "OneTask",
    description: "AI-powered task manager and automation tool.",
    logo: "https://onetask.com/favicon.ico",
    link: "https://onetask.com/",
    category: "Productivity"
  },
  {
    name: "HuggingChat",
    description: "Open-source conversational AI.",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
    link: "https://huggingface.co/chat",
    category: "Text"
  },
  {
    name: "Muze Art",
    description: "AI-powered art generation platform.",
    logo: "https://muze.art/favicon.ico",
    link: "https://muze.art/",
    category: "Art"
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
