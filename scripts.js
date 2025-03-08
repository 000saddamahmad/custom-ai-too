const tools = [

  {
    "name": "Grok",
    "description": "AI-powered tool for data analysis and insights.",
    "logo": "data:image/png;base64,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", // Placeholder logo
    "link": "https://grok.com/",
    "category": "Data Analysis"
  },
  {
    "name": "Leonardo.ai",
    "description": "AI platform for creative design and art generation.",
    "logo": "https://leonardo.ai/wp-content/uploads/2025/02/thumb_KG_leonardo.jpg", // Placeholder logo
    "link": "https://leonardo.ai/",
    "category": "Creative Design"
  },
  {
    "name": "Apob AI",
    "description": "AI-driven solutions for automation and optimization.",
    "logo": "https://apob.ai/wp-content/uploads/2024/04/Frame.png", // Placeholder logo
    "link": "https://apob.ai/",
    "category": "Automation"
  },
  {
    "name": "ElevenLabs.io",
    "description": "AI-powered voice synthesis and text-to-speech platform.",
    "logo": "data:image/png;base64,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", // Placeholder logo
    "link": "https://elevenlabs.io/",
    "category": "Voice Synthesis"
  },
  {
  name: "CerebrasCoder",
  description: "AI-powered coding assistant by Cerebras.",
  logo: "https://stevekrouse-blob_admin.web.val.run/api/public/CerebrasCoderOG.jpg", // Placeholder logo
  link: "https://cerebrascoder.com/",
  category: "Coding"
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
    name: "Llama by Meta",
    description: "Meta's large language model.",
    logo: "https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico",
    link: "https://ai.meta.com/llama/",
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
    "name": "NotebookLM",
    "description": "NotebookLM is an AI-powered research assistant that can help you get to critical insights faster and easier, all grounded in the information you provide.",
    "logo": "https://notebooklm.google.com/_/static/branding/v4/light_mode/favicon/favicon-32x32.png",
    "link": "https://notebooklm.google.com/",
    "category": "Productivity"
}
  {
    name: "Claude",
    description: "Conversational AI by Anthropic.",
    logo: "https://www.anthropic.com/favicon.ico",
    link: "https://www.anthropic.com/",
    category: "Text"
  },
   {
    "name": "Hailuoai.video",
    "description": "AI platform for creative design and art generation.",
    "logo": "https://hailuoai.video/assets/logo/favicon.png", // Placeholder logo
    "link": "https://hailuoai.video/",
    "category": "Creative Design"
  },
  {
    name: "Mistral AI",
    description: "Open-weight language models.",
    logo: "https://mistral.ai/favicon.ico",
    link: "https://mistral.ai/",
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
    description: "AI essay writer that writes your essays for you.",
    logo: "https://www.the-good-ai.com/icon.png",
    link: "https://www.the-good-ai.com/",
    category: "Automation"
  },
  {
    name: "Zoviz Branding Expert",
    description: "AI-powered branding and marketing insights.",
    logo: "https://cdn.zoviz.com/ssr/images/zoviz-logo-dark.svg",
    link: "https://ai-branding.zoviz.com/",
    category: "Marketing"
  },
  {
    name: "Sheetsy",
    description: "AI automation for spreadsheets.",
    logo: "https://sheetsy.co/_next/static/media/logo.5788bcf4.svg",
    link: "https://sheetsy.co/",
    category: "Productivity"
  },
  {
    name: "Syft AI",
    description: "AI for data analytics and automation.",
    logo: "https://justsyft.com/favicon.ico",
    link: "https://justsyft.com/",
    category: "Data"
  },
  {
    name: "ReedPartner",
    description: "AI assistant for automated news digests and quick summaries of Websites, Videos and Documents.",
    logo: "https://cdn.prod.website-files.com/665ea7a71991a37e15f1062c/66bc7cb88252c4fdcf0a7005_favicon-32x32.png",
    link: "https://readpartner.com/",
    category: "Productivity"
  },
  {
    name: "WatchMyCompetitor",
    description: "AI-powered competitive intelligence tool.",
    logo: "https://watchmycompetitor.com/Content/img/logo_thumb.png",
    link: "https://www.watchmycompetitor.com/",
    category: "Business"
  },
  {
    name: "Interpret AI",
    description: "AI-powered text and voice analysis.",
    logo: "https://interpretapp.ai/favicon.ico",
    link: "https://interpretapp.ai/",
    category: "AI Research"
  },
  {
    name: "Video to Blog",
    description: "Instantly convert videos into powerful blog articles using AI.",
    logo: "https://www.videotoblog.ai/_next/static/media/mark.54390744.svg",
    link: "https://www.videotoblog.ai/",
    category: "Content Creation"
  },
  {
    name: "Deep Sequencer",
    description: "Generate or transform your content with multi-step AI workflows.",
    logo: "https://media.theresanaiforthat.com/icons/deep-sequencer.png",
    link: "https://deepsequencer.netlify.app/",
    category: "Productivity"
  },
  {
    name: "Veriff",
    description: "AI-driven identity verification.",
    logo: "https://www.veriff.com/favicon/apple-icon-57x57.png",
    link: "https://veriff.com/",
    category: "Security"
  },
  {
    name: "OneTask",
    description: "AI to-do app that prioritizes tasks for creatives",
    logo: "https://media.theresanaiforthat.com/icons/onetask.svg",
    link: "https://onetask.me/",
    category: "Task management"
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
    description: "Turn music into viral videos for social media.",
    logo: "https://www.muzeart.ai/wp-content/uploads/2023/09/logo-e1694783642299.webp",
    link: "https://www.muzeart.ai/",
    category: "Spotify Canvas"
  },
  {
    name: "AI Magic Tools (by runway)",
    description: "creativity tools to edit and generate content",
    logo: "",
    link: "https://runwayml.com/ai-magic-tools/",
    category: "Art & Creativity"
  },
  {
    name: "AvatarAI",
    description: "create photorealistic AI avatars",
    logo: "",
    link: "https://avatarai.me/",
    category: "Art & Creativity"
  },
  {
    name: "ClipDrop",
    description: "apps, plugins, and resources for creators, powered by AI",
    logo: "",
    link: "https://clipdrop.co/",
    category: "Art & Creativity"
  },
  {
    name: "DreamStudio",
    description: "open-sourced image generation model to product realistic images",
    logo: "",
    link: "https://stability.ai/",
    category: "Art & Creativity"
  },
  {
    name: "Lensa",
    description: "AI-powered image editing app for avatars",
    logo: "",
    link: "https://prisma-ai.com/lensa",
    category: "Art & Creativity"
  },
  {
    name: "Midjourney",
    description: "AI-powered art generator",
    logo: "",
    link: "https://www.midjourney.com/app/",
    category: "Art & Creativity"
  },
  {
    name: "Noble Shapes",
    description: "AI Image Prompt Generator Assistant - Explore a curated collection of premium digital design assets.",
    logo: "",
    link: "https://nobleshapes.com",
    category: "Art & Creativity"
  },
  {
    name: "Phraser",
    description: "the collaborative creative AI tool",
    logo: "",
    link: "https://phraser.tech",
    category: "Art & Creativity"
  },
  {
    name: "Playground",
    description: "search prompts for art generation",
    logo: "",
    link: "https://playgroundai.com/",
    category: "Art & Creativity"
  },
  {
    name: "Synthesia",
    description: "AI video creation platform",
    logo: "",
    link: "https://www.synthesia.io/",
    category: "Art & Creativity"
  },
  {
    name: "Rytr",
    description: "Automating the design process",
    logo: "",
    link: "https://rytr.me/",
    category: "Art & Creativity"
  },
  {
    name: "Craiyon (Formerly DALL-E Mini)",
    description: "Free online AI image generator from text",
    logo: "",
    link: "https://www.craiyon.com/",
    category: "Art & Creativity"
  },
  {
    name: "IRIS Clarity Studio",
    description: "AI powered online tool for voice isolation/noise cancellation",
    logo: "",
    link: "https://studio.iris.audio/",
    category: "Art & Creativity"
  },
  {
    name: "Human Generator",
    description: "AI powered generator of people",
    logo: "",
    link: "https://generated.photos/human-generator",
    category: "Art & Creativity"
  },
  {
    name: "Let's Enhance",
    description: "Image enhancer & upscaler without losing quality",
    logo: "",
    link: "https://letsenhance.io/",
    category: "Art & Creativity"
  },
  {
    name: "The Multiverse AI",
    description: "Turn your selfies into professional headshots",
    logo: "",
    link: "https://themultiverse.ai/",
    category: "Art & Creativity"
  },
  {
    name: "StockPhotoAI.net",
    description: "Great stock photos, made for you.",
    logo: "",
    link: "https://www.stockphotoai.net/?ref=Top-AI-Tools",
    category: "Art & Creativity"
  },
  {
    name: "FairyTailAI",
    description: "Personalized bedtime story generator",
    logo: "",
    link: "https://fairytailai.com/",
    category: "Art & Creativity"
  },
  {
    name: "eBank",
    description: "eBank is a AI Art Generator and AI Art Search Engine where you can search millions of community AI Artworks.",
    logo: "",
    link: "https://eBank.nz",
    category: "Art & Creativity"
  },
  {
    name: "Architecture Helper",
    description: "Analyze any building architecture, and generate your own custom styles, in seconds.",
    logo: "",
    link: "https://architecturehelper.com",
    category: "Art & Creativity"
  },
  {
    name: "VocalReplica",
    description: "AI-Powered Vocal and Instrumental Isolation for Your Favorite Tracks",
    logo: "",
    link: "https://vocalreplica.com/",
    category: "Art & Creativity"
  },
  {
    name: "X Headshot",
    description: "Professional AI Headshot Generator",
    logo: "",
    link: "https://xheadshot.com",
    category: "Art & Creativity"
  },
  {
    name: "Jamorphosia",
    description: "AI-Powered Instrument remover and isolation",
    logo: "",
    link: "https://www.jamorphosia.com/",
    category: "Art & Creativity"
  },
  {
    name: "Content Studio AI",
    description: "AI-Powered Faceless Video Creation",
    logo: "",
    link: "https://contentstudioai.com",
    category: "Art & Creativity"
  },
  {
    name: "Podcast Clip Maker",
    description: "Automatically generate podcast clips from long-form video and audio",
    logo: "",
    link: "https://recast.studio/tools/podcast-clip-maker",
    category: "Art & Creativity"
  },
  {
    name: "Black Headshots",
    description: "AI headshots generator for black professionals",
    logo: "",
    link: "https://www.blackheadshots.com",
    category: "Art & Creativity"
  },
  {
    name: "AISaver",
    description: "Collection of AI Powered Video and Photo Tools",
    logo: "",
    link: "https://aisaver.io",
    category: "Art & Creativity"
  },
  {
    name: "AI Watermark Remover",
    description: "Remove watermarks from images and videos",
    logo: "",
    link: "https://aiwatermarkremover.io/",
    category: "Art & Creativity"
  },
  {
    name: "Pixvify AI",
    description: "Free realistic AI photo generator platform",
    logo: "",
    link: "https://pixvify.com/",
    category: "Art & Creativity"
  },
  {
    name: "Pawtrait",
    description: "AI Pet Portraits",
    logo: "",
    link: "https://www.pawtrait.art/",
    category: "Art & Creativity"
  },
  {
    name: "AI Boost",
    description: "All-in-one service for creating and editing images with AI",
    logo: "",
    link: "https://boost.pictures/",
    category: "Art & Creativity"
  },
  {
    name: "EchoWave",
    description: "Online video editor",
    logo: "",
    link: "https://echowave.io/",
    category: "Art & Creativity"
  },
  {
    name: "The Birthday Poem",
    description: "AI Birthday Poem Generator",
    logo: "",
    link: "https://www.thebirthdaypoem.com/",
    category: "Art & Creativity"
  },
  {
    name: "Character.AI",
    description: "conversational AI for open-ended conversations",
    logo: "",
    link: "https://beta.character.ai/",
    category: "Conversational AI"
  },
  {
    name: "ChatGPT (by OpenAI)",
    description: "conversational AI system powered by large language models",
    logo: "",
    link: "https://chat.openai.com/",
    category: "Conversational AI"
  },
  {
    name: "Gemini (by Google)",
    description: "conversational AI chat service from Google that can access and process information from the web",
    logo: "",
    link: "https://gemini.google.com/",
    category: "Conversational AI"
  },
  {
    name: "DoNotPay",
    description: "the world's first robot lawyer",
    logo: "",
    link: "https://donotpay.com/",
    category: "Conversational AI"
  },
  {
    name: "Replika",
    description: "an AI companion",
    logo: "",
    link: "https://replika.ai/",
    category: "Conversational AI"
  },
  {
    name: "AICamp",
    description: "ChatGPT for Teams",
    logo: "",
    link: "https://aicamp.so/",
    category: "Conversational AI"
  },
  {
    name: "Netwrck",
    description: "AI Character Chat Social Network, saying 'Appears' makes the AI make Art.",
    logo: "",
    link: "https://netwrck.com/",
    category: "Conversational AI"
  },
  {
    name: "Claude",
    description: "Talk to Claude, an AI assistant from Anthropic.",
    logo: "",
    link: "https://claude.ai/",
    category: "Conversational AI"
  },
  {
    name: "Pleasuredomes",
    description: "AI Image and chatbot",
    logo: "",
    link: "http://pleasuredomes.ai/",
    category: "Conversational AI"
  },
  {
    name: "ChatSweetie",
    description: "Free AI Girlfriend Chat",
    logo: "",
    link: "https://chatsweetie.ai/",
    category: "Conversational AI"
  },
  {
    name: "DreamjourneyAI",
    description: "AI roleplay and character chat platform",
    logo: "",
    link: "https://dreamjourneyai.com",
    category: "Conversational AI"
  },
  {
    name: "Interior AI",
    description: "interior design mockups and virtual staging",
    logo: "",
    link: "https://interiorai.com/",
    category: "Design"
  },
  {
    name: "stockimg.ai",
    description: "AI-powered designs",
    logo: "",
    link: "https://stockimg.ai/",
    category: "Design"
  },
  {
    name: "Brand Mark",
    description: "Generating brand logos",
    logo: "",
    link: "https://brandmark.io/",
    category: "Design"
  },
  {
    name: "Magic Eraser",
    description: "Removing unwanted elements from images",
    logo: "",
    link: "https://www.magiceraser.io/",
    category: "Design"
  },
  {
    name: "bigJPG",
    description: "Increasing image resolution",
    logo: "",
    link: "https://bigjpg.com/",
    category: "Design"
  },
  {
    name: "Profile Pic Maker",
    description: "Creating profile pictures",
    logo: "",
    link: "https://pfpmaker.com/",
    category: "Design"
  },
  {
    name: "Musicfy",
    description: "Create AI covers of your favorite songs in seconds",
    logo: "",
    link: "https://www.musicfy.lol/",
    category: "Design"
  },
  {
    name: "Room Reinvented",
    description: "Transform your room effortlessly with Room Reinvented! Upload a photo and let AI create over 30 stunning interior styles. Elevate your space today.",
    logo: "",
    link: "https://roomreinvented.com",
    category: "Design"
  },
  {
    name: "Unwatermark",
    description: "Easily remove watermarks with advanced AI image recognition technology",
    logo: "",
    link: "https://unwatermark.ai/",
    category: "Design"
  },
  {
    name: "AI Logo Generator",
    description: "Free online AI logo creator that generates professional company, business, and brand logos",
    logo: "",
    link: "https://www.ailogogenerator.org",
    category: "Design"
  },
  {
    name: "Unblurimage AI",
    description: "A free online tool to unblur images swiftly",
    logo: "",
    link: "https://unblurimage.ai",
    category: "Design"
  },
  {
    name: "ImgUpscaler AI",
    description: "Free image & video upscaler",
    logo: "",
    link: "https://imgupscaler.ai/",
    category: "Design"
  },
  {
    name: "Seede AI",
    description: "Helps you create a poster in 1 min",
    logo: "",
    link: "https://seede.ai/",
    category: "Design"
  },
  {
    name: "Lootgod.com",
    description: "generative ai apparel using print-on-demand",
    logo: "",
    link: "https://www.lootgod.com/",
    category: "E-commerce"
  },
  {
    name: "Rupert AI",
    description: "AI tools for designers and marketers",
    logo: "",
    link: "https://www.getrupert.com/",
    category: "E-commerce"
  },
  {
    name: "morpher.com",
    description: "Morpher AI is a comprehensive tool for financial market analysis that acts as your personal investment analyst.",
    logo: "",
    link: "https://www.morpher.com/ai",
    category: "Finance"
  },
  {
    name: "COUNT",
    description: "AI-powered accounting for small businesses",
    logo: "",
    link: "https://getcount.com",
    category: "Finance"
  },
  {
    name: "Anypod.ai",
    description: "semantic search engine for YouTube and podcast content",
    logo: "",
    link: "https://www.anypod.ai/",
    category: "Education"
  },
  {
    name: "Ask Botta",
    description: "personal teaching assistant",
    logo: "",
    link: "https://askbotta.com/",
    category: "Education"
  },
  {
    name: "Podly.ai",
    description: "summarized podcasts",
    logo: "",
    link: "https://podly.ai/",
    category: "Education"
  },
  {
    name: "Lorro",
    description: "Practice speaking English with an AI tutor",
    logo: "",
    link: "https://lorro.io/",
    category: "Education"
  },
  {
    name: "SlidesAI.io",
    description: "An AI Powered Text to Presentation Tool, Works with Google Slides",
    logo: "",
    link: "https://slidesai.io",
    category: "Education"
  },
  {
    name: "Flair",
    description: "AI design tool for branded content",
    logo: "",
    link: "https://withflair.ai/",
    category: "Education"
  },
  {
    name: "Twee",
    description: "A.I. Powered Tools For English Teachers",
    logo: "",
    link: "https://twee.com",
    category: "Education"
  },
  {
    name: "Wilco Sierra",
    description: "A platform that generates engineering challenges for software engineers using AI",
    logo: "",
    link: "https://trywilco.com/sierra",
    category: "Education"
  },
  {
    name: "Yomu",
    description: "AI writing assistant for students and academics",
    logo: "",
    link: "https://www.yomu.ai",
    category: "Education"
  },
  {
    name: "PDFPeer",
    description: "Chat with any PDF in seconds!",
    logo: "",
    link: "https://pdfpeer.com/",
    category: "Education"
  },
  {
    name: "Sourcely",
    description: "Academic Citation Finding Tool with AI",
    logo: "",
    link: "https://www.sourcely.net/",
    category: "Education"
  },
  {
    name: "LangMagic",
    description: "Learn languages from native content.",
    logo: "",
    link: "https://easytolearn.io",
    category: "Education"
  },
  {
    name: "Auto Streamer",
    description: "Learn & teach anything on demand. Create course websites in minutes.",
    logo: "",
    link: "https://www.autostreamer.live/",
    category: "Education"
  },
  {
    name: "SopCreator",
    description: "Create your Statement of Purpose with AI",
    logo: "",
    link: "https://www.sopcreator.com",
    category: "Education"
  },
  {
    name: "MathSolver",
    description: "Use AI to solve math problems and study",
    logo: "",
    link: "https://www.mathsolver.top/",
    category: "Education"
  },
  {
    name: "ResumeDive",
    description: "A resume boosting service using AI",
    logo: "",
    link: "https://resumedive.com",
    category: "Education"
  },
  {
    name: "Exam Samurai",
    description: "AI Exam Generator",
    logo: "",
    link: "https://www.examsamur.ai/",
    category: "Education"
  },
  {
    name: "iColoring",
    description: "Free AI Coloring Pages Generator",
    logo: "",
    link: "https://icoloring.ai",
    category: "Education"
  },
  {
    name: "Remusic",
    description: "AI Music Generator and Music Learning Platform Online Free",
    logo: "",
    link: "https://remusic.ai/en",
    category: "Education"
  },
  {
    name: "CasperPractice",
    description: "AI tutor for the CASPer test",
    logo: "",
    link: "https://casperpractice.org/",
    category: "Education"
  },
  {
    name: "RabbitHoles AI",
    description: "Chat with AI on an Infinite Canvas",
    logo: "",
    link: "https://www.rabbitholes.ai/",
    category: "Education"
  },
  {
    name: "bugfree.ai",
    description: "Guided Practice on System Design Behavior Problems like the way you do at Leetcode.",
    logo: "https://bugfree.ai/favicon.ico",
    link: "https://bugfree.ai/",
    category: "Education"
  },
];

 
const toolList = document.getElementById("tool-list");
// Display tools
function displayTools(filteredTools) {
  const toolList = document.getElementById("tool-list");
  if (!toolList) return; // Exit if tool-list isn’t found (e.g., on non-tool pages)
  toolList.innerHTML = "";
  filteredTools.forEach(tool => {
    const card = `
      <div class="col-md-4">
        <div class="card">
          <img src="${tool.logo}" class="card-img-top" alt="${tool.name}" onerror="this.src='logo.png';">
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
}

// Only run search and filter logic on the index page
if (document.getElementById("search")) {
  // Search functionality
  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTools = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm)
    );
    displayTools(filteredTools);
  });

  // Category filter functionality
  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.dataset.category;
      const filteredTools = category === "all" 
        ? tools 
        : tools.filter(tool => tool.category === category);
      displayTools(filteredTools);
    });
  });

  // Initial display of all tools
  displayTools(tools);
}

// Hide splash screen after load
window.addEventListener('load', function() {
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) splashScreen.style.display = 'none';
});



