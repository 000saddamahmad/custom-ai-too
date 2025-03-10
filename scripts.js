const tools = [
  {
    "name": "Leonardo.ai",
    "description": "AI platform for creative design and art generation.",
    "logo": "https://leonardo.ai/wp-content/uploads/2023/07/logo-leonardo-ai.svg", // Placeholder logo
    "link": "https://leonardo.ai/",
    "category": "Image"
  },
  {
    "name": "Apob AI",
    "description": "AI-driven solutions for automation and optimization.",
    "logo": "https://apob.ai/wp-content/uploads/2024/04/Frame.png", // Placeholder logo
    "link": "https://apob.ai/",
    "category": "Image"
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
    name: "NotebookLM",
    description: "NotebookLM is an AI-powered note-taking and knowledge management tool by Google.",
    logo: "https://notebooklm.google.com/_/static/branding/v4/light_mode/favicon/favicon-32x32.png",
    link: "https://notebooklm.google.com/",
    category: "Audio"
},
  {
    name: "Manus ai",
    description: " Manus AI can independently execute tasks such as report writing, data analysis, content generation",
    logo: "https://manus.im/icon.png?cf131ec9640e9d99",
    link: "https://manus.im/",
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
    name: "Google IDX",
    description: "AI-assisted workspace for full-stack, multiplatform app development in the cloud.",
    logo: "https://developers.google.com/static/idx/images/icon-192.png", // Placeholder logo
    link: "https://idx.dev/",
    category: "Codeing"
  },
   {
    "name": "Hailuoai.video",
    "description": "AI platform for creative design and art generation.",
    "logo": "https://hailuoai.video/assets/logo/favicon.png", // Placeholder logo
    "link": "https://hailuoai.video/",
    "category": "video"
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
    logo: "https://meta.magicstudio.com/assets/studio-logo.svg",
    link: "https://www.magiceraser.io/",
    category: "Design"
  },
  {
    name: "bigJPG",
    description: "Increasing image resolution",
    logo: "https://bigjpg.com/htdocs/favicon.ico",
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
    logo: "https://cdn.unwatermark.ai/userspace/unwatermark/logo/logo-unwatermark.webp",
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
