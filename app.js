/**
 * Sovannaphumi School 25, Takeo Campus - Main Application Logic
 * ជំនួស Code.gs, JS.gs និង JavaScript.html
 */

// ១. ទិន្នន័យស្ថិតិ Dashboard ជាក់ស្តែង (Real-time Data)
const dashboardData = {
  totalStaff: 131,
  documents: 3,
  compliance: "0%",
  eventsToday: 5
};

// ២. ទិន្នន័យ E-Lab & AI Tools (១២៦ Tools + ៨ Library Portals + ៨ AI Prompt Templates)
const teacherTools = [
  { name: "Google Classroom", icon: "🏫", desc: "Manage classes and assignments.", url: "https://classroom.google.com/", subject: "general", type: "LMS & Class Management", badge: "🏫 Class LMS" },
  { name: "Kahoot!", icon: "🎮", desc: "Game-based learning platform.", url: "https://kahoot.com/", subject: "quiz", type: "Gamified Quiz", badge: "🎯 Quiz & Game" },
  { name: "Quizizz", icon: "🎯", desc: "Interactive quizzes and lessons.", url: "https://quizizz.com/", subject: "quiz", type: "Interactive Assessment", badge: "🎯 Quiz & Test" },
  { name: "Padlet", icon: "📋", desc: "Collaborative digital bulletin board.", url: "https://padlet.com/", subject: "general", type: "Collaborative Board", badge: "📋 Collab" },
  { name: "Nearpod", icon: "📱", desc: "Interactive slides and assessments.", url: "https://nearpod.com/", subject: "general", type: "Interactive Lessons", badge: "📱 Lesson" },
  { name: "Edpuzzle", icon: "🧩", desc: "Make any video your lesson.", url: "https://edpuzzle.com/", subject: "video_lab", type: "Interactive Video Lesson", badge: "🎥 Video Lesson" },
  { name: "MoEYS E-Learning", icon: "🇰🇭", desc: "Official Ministry of Education resources.", url: "https://elearning.moeys.gov.kh/", subject: "general", type: "Official Curriculum", badge: "🇰🇭 MoEYS" },
  { name: "E-School Cambodia", icon: "🏫", desc: "Khmer school management system.", url: "https://e-schoolcambodia.com/", subject: "general", type: "School Management", badge: "🏫 School App" },
  { name: "Canva Education", icon: "🎨", desc: "Create educational graphics.", url: "https://www.canva.com/education/", subject: "general", type: "Visual & Slide Design", badge: "🎨 Design" },
  { name: "ClassDojo", icon: "👾", desc: "Classroom behavior management.", url: "https://www.classdojo.com/", subject: "general", type: "Behavior & Community", badge: "👾 Classroom" },
  { name: "Blooket", icon: "🎲", desc: "Review games with trivia.", url: "https://www.blooket.com/", subject: "quiz", type: "Review Games & Trivia", badge: "🎲 Quiz Game" },
  { name: "Sala.co", icon: "💻", desc: "Khmer LMS and student management.", url: "https://www.sala.co/", subject: "general", type: "Khmer LMS & Guidance", badge: "💻 Guidance" },
  { name: "Tesdopi", icon: "🔬", desc: "Khmer STEM learning application.", url: "https://tesdopi.com/", subject: "bio_stem", type: "Khmer STEM Learning", badge: "🔬 STEM" },
  { name: "PhET Simulations", icon: "🧪", desc: "Interactive math & science simulations.", url: "https://phet.colorado.edu/", subject: "physics_chem", type: "Interactive Science Lab", badge: "🧪 Science Lab" },
  { name: "GeoGebra", icon: "📐", desc: "Dynamic mathematics software.", url: "https://www.geogebra.org/", subject: "math", type: "Dynamic Mathematics", badge: "📐 Math & 3D" },
  { name: "Desmos", icon: "📈", desc: "Advanced graphing calculator.", url: "https://www.desmos.com/", subject: "math", type: "Graphing Calculator", badge: "📈 Graphing" },
  { name: "Scratch", icon: "🐱", desc: "Block-based coding for kids.", url: "https://scratch.mit.edu/", subject: "ict", type: "Kids Visual Coding", badge: "💻 Coding" },
  { name: "Code.org", icon: "💻", desc: "Computer science learning platform.", url: "https://code.org/", subject: "ict", type: "Computer Science Course", badge: "💻 CS Learning" },
  { name: "Krou.kh", icon: "📚", desc: "Khmer teacher resource sharing platform.", url: "https://krou.moeys.gov.kh/", subject: "general", type: "Khmer Teacher Resource", badge: "📚 Lesson Plans" },
  { name: "Edemy", icon: "🎓", desc: "Khmer blended learning platform.", url: "https://edemy.co/", subject: "english", type: "Khmer Blended English", badge: "🎓 English" },
  { name: "Khan Academy", icon: "🏛️", desc: "Free world-class education for anyone.", url: "https://www.khanacademy.org/", subject: "math", type: "Free K-12 Academy", badge: "🏛️ Academy" },
  { name: "TED-Ed", icon: "🎥", desc: "Educational videos and lessons.", url: "https://ed.ted.com/", subject: "video_lab", type: "Educational Video Lessons", badge: "🎥 TED Lessons" },
  { name: "Quizlet", icon: "📇", desc: "Flashcards and study sets.", url: "https://quizlet.com/", subject: "quiz", type: "Flashcards & Quiz Study", badge: "📇 Flashcards" },
  { name: "Pear Deck", icon: "🍐", desc: "Add interactivity to presentations.", url: "https://www.peardeck.com/", subject: "quiz", type: "Interactive Slides & Poll", badge: "🍐 Slides Poll" },
  { name: "Flipgrid", icon: "📹", desc: "Video discussion platform.", url: "https://info.flip.com/", subject: "video_lab", type: "Video Discussion & Voice", badge: "📹 Video Voice" },
  { name: "Moodle", icon: "🎓", desc: "Open-source learning management.", url: "https://moodle.org/", subject: "general", type: "Open-source LMS", badge: "🎓 Online LMS" },
  { name: "Seesaw", icon: "📁", desc: "Student driven digital portfolios.", url: "https://web.seesaw.me/", subject: "general", type: "Digital Student Portfolios", badge: "📁 Portfolios" },
  { name: "Socrative", icon: "📝", desc: "Real-time formative assessment.", url: "https://www.socrative.com/", subject: "quiz", type: "Formative Assessment", badge: "📝 Assessment" },
  { name: "Mentimeter", icon: "📊", desc: "Interactive presentations and polling.", url: "https://www.mentimeter.com/", subject: "quiz", type: "Interactive Polling & Quiz", badge: "📊 Live Poll" },
  { name: "Trello", icon: "📋", desc: "Project organization for teachers.", url: "https://trello.com/", subject: "general", type: "Task Organization", badge: "📋 Task Board" },
  { name: "Notion", icon: "📓", desc: "All-in-one workspace and planning.", url: "https://www.notion.so/", subject: "general", type: "All-in-one Notes & Wiki", badge: "📓 Workspace" },
  { name: "Zoom", icon: "📹", desc: "Virtual classrooms and meetings.", url: "https://zoom.us/", subject: "video_lab", type: "Virtual Classroom & Meetings", badge: "📹 Video Class" },
  { name: "Microsoft Teams", icon: "🤝", desc: "Collaboration and communication hub.", url: "https://www.microsoft.com/en-us/education/products/teams", subject: "general", type: "Collaboration & Video", badge: "🤝 Team Collab" },
  { name: "Google Workspace", icon: "☁️", desc: "Docs, Sheets, and Drive for education.", url: "https://edu.google.com/workspace-for-education/", subject: "general", type: "Docs, Sheets & Drive", badge: "☁️ Workspace" },
  { name: "Labster", icon: "🔬", desc: "Virtual science laboratory simulations.", url: "https://www.labster.com/", subject: "physics_chem", type: "3D Virtual Lab Simulations", badge: "🔬 3D Lab" },
  { name: "ChemCollective", icon: "🧪", desc: "Virtual chemistry lab and activities.", url: "http://chemcollective.org/", subject: "physics_chem", type: "Virtual Chemistry Lab", badge: "🧪 Chemistry" },
  { name: "TPT", icon: "🍎", desc: "Marketplace for lesson plans.", url: "https://www.teacherspayteachers.com/", subject: "general", type: "Teacher Resource Hub", badge: "🍎 Lesson Hub" },
  { name: "Edutopia", icon: "💡", desc: "Teaching strategies and tips.", url: "https://www.edutopia.org/", subject: "general", type: "Pedagogy Strategies & Tips", badge: "💡 Pedagogy" },
  { name: "Mengly Library", icon: "📖", desc: "Khmer educational library resources.", url: "https://www.mjqeducation.edu.kh/", subject: "general", type: "Khmer Educational Library", badge: "📖 Library" },
  { name: "Khmer Academy", icon: "🇰🇭", desc: "Khmer online learning platform.", url: "https://khmeracademy.org/", subject: "ict", type: "Khmer Tech & Math Tutorials", badge: "🇰🇭 Video Course" },
  { name: "ChatGPT", icon: "🤖", desc: "AI assistant for lesson planning.", url: "https://chatgpt.com/", subject: "ai", type: "AI Lesson & Quiz Generator", badge: "🤖 AI Assistant" },
  { name: "Claude AI", icon: "🧠", desc: "Advanced AI for educational tasks.", url: "https://claude.ai/", subject: "ai", type: "AI Long-form Analysis & Plan", badge: "🧠 AI Reasoning" }
];

const studentTools = [
  { name: "Google Classroom", icon: "🏫", desc: "Access classwork and assignments.", url: "https://classroom.google.com/", subject: "general", type: "Student Homework & Files", badge: "🏫 Homework" },
  { name: "Khan Academy", icon: "🏛️", desc: "Free online courses and practice.", url: "https://www.khanacademy.org/", subject: "math", type: "Free Courses & Practice", badge: "🏛️ Free Courses" },
  { name: "MoEYS E-Learning", icon: "🇰🇭", desc: "Official MoEYS curriculum & videos.", url: "https://elearning.moeys.gov.kh/", subject: "general", type: "Official Curriculum Videos", badge: "🇰🇭 MoEYS Video" },
  { name: "E-School Cambodia", icon: "🏫", desc: "Khmer school learning app.", url: "https://e-schoolcambodia.com/", subject: "general", type: "Mobile Learning Lessons", badge: "🏫 E-Lessons" },
  { name: "Tesdopi", icon: "🔬", desc: "Khmer STEM learning & exercises.", url: "https://tesdopi.com/", subject: "bio_stem", type: "STEM Practice & Tests", badge: "🔬 STEM Exam" },
  { name: "Sala.co", icon: "💻", desc: "University majors & career tests.", url: "https://www.sala.co/", subject: "general", type: "Major & Career Discovery", badge: "💻 Career Test" },
  { name: "Duraseksa", icon: "📡", desc: "Distance learning program.", url: "https://duraseksa.com/", subject: "general", type: "Distance Learning Video", badge: "📡 Distance Learning" },
  { name: "Khmer Academy", icon: "🇰🇭", desc: "Khmer coding and tech tutorials.", url: "https://khmeracademy.org/", subject: "ict", type: "Khmer Coding & Math", badge: "🇰🇭 Tech Video" },
  { name: "Mengly Library", icon: "📖", desc: "Khmer educational library resources.", url: "https://www.mjqeducation.edu.kh/", subject: "general", type: "E-Books & Reading Material", badge: "📖 E-Books" },
  { name: "BacII App", icon: "🎓", desc: "Grade 12 national exam prep.", url: "https://moeys.gov.kh/", subject: "general", type: "Grade 12 National Exam Prep", badge: "🎓 BacII Prep" },
  { name: "Koompi Academy", icon: "🐧", desc: "Khmer open-source learning.", url: "https://academy.koompi.com/", subject: "ict", type: "Open-source Tech Learning", badge: "🐧 Tech Academy" },
  { name: "Edemy", icon: "📝", desc: "Khmer English learning platform.", url: "https://edemy.co/", subject: "english", type: "English Listening & Reading", badge: "📝 English App" },
  { name: "Quizlet", icon: "📇", desc: "Flashcards and study sets.", url: "https://quizlet.com/", subject: "quiz", type: "Vocabulary Flashcards", badge: "📇 Flashcards" },
  { name: "Duolingo", icon: "🦉", desc: "Learn languages for free.", url: "https://www.duolingo.com/", subject: "english", type: "Gamified Language Learning", badge: "🦉 Languages" },
  { name: "Photomath", icon: "📸", desc: "Scan and solve math problems.", url: "https://photomath.com/", subject: "math", type: "Camera Math Step Solver", badge: "📸 Math Solver" },
  { name: "Wolfram Alpha", icon: "∑", desc: "Computational knowledge engine.", url: "https://www.wolframalpha.com/", subject: "math", type: "Computational Knowledge Engine", badge: "∑ Math Engine" },
  { name: "Desmos", icon: "📈", desc: "Advanced graphing calculator.", url: "https://www.desmos.com/", subject: "math", type: "Online Graphing & Geometry", badge: "📈 Graphing" },
  { name: "GeoGebra", icon: "📐", desc: "Dynamic mathematics software.", url: "https://www.geogebra.org/", subject: "math", type: "Dynamic Math & Calculus", badge: "📐 Math & 3D" },
  { name: "PhET Simulations", icon: "🧪", desc: "Interactive math & science labs.", url: "https://phet.colorado.edu/", subject: "physics_chem", type: "Interactive Science Lab", badge: "🧪 Science Lab" },
  { name: "Scratch", icon: "🐱", desc: "Block-based coding for kids.", url: "https://scratch.mit.edu/", subject: "ict", type: "Game & Animation Coding", badge: "🐱 Game Coding" },
  { name: "Code.org", icon: "💻", desc: "Computer science learning platform.", url: "https://code.org/", subject: "ict", type: "Beginner Coding Puzzles", badge: "💻 Code Puzzles" },
  { name: "Codecademy", icon: "👨💻", desc: "Learn to code interactively.", url: "https://www.codecademy.com/", subject: "ict", type: "Hands-on Programming", badge: "👨💻 Web & Python" },
  { name: "Wikipedia", icon: "🌐", desc: "Free online encyclopedia.", url: "https://www.wikipedia.org/", subject: "general", type: "Free Encyclopedia Research", badge: "🌐 Research" },
  { name: "Google Scholar", icon: "🎓", desc: "Search academic research.", url: "https://scholar.google.com/", subject: "general", type: "Academic Papers Search", badge: "🎓 Research" },
  { name: "ResearchGate", icon: "🔬", desc: "Discover scientific knowledge.", url: "https://www.researchgate.net/", subject: "bio_stem", type: "Scientific Research Network", badge: "🔬 Science Papers" },
  { name: "PubMed", icon: "🧬", desc: "Life sciences and biomedical research.", url: "https://pubmed.ncbi.nlm.nih.gov/", subject: "bio_stem", type: "Biomedical & Life Sciences", badge: "🧬 Bio Research" },
  { name: "Brainly", icon: "🧠", desc: "Peer-to-peer homework help.", url: "https://brainly.com/", subject: "general", type: "Peer Homework Community", badge: "🧠 Q&A Help" },
  { name: "TED-Ed", icon: "🎥", desc: "Educational videos and lessons.", url: "https://ed.ted.com/", subject: "video_lab", type: "Thought-Provoking Lessons", badge: "🎥 Video Lessons" },
  { name: "CrashCourse", icon: "🎬", desc: "High-quality educational videos.", url: "https://thecrashcourse.com/", subject: "video_lab", type: "High-Energy Course Videos", badge: "🎬 Crash Courses" },
  { name: "Coursera", icon: "🎓", desc: "Online courses from universities.", url: "https://www.coursera.org/", subject: "general", type: "Global University Courses", badge: "🎓 University" },
  { name: "edX", icon: "🏫", desc: "Access 2000 free online courses.", url: "https://www.edx.org/", subject: "general", type: "Free Ivy League Courses", badge: "🏫 Online Course" },
  { name: "Grammarly", icon: "✍️", desc: "Writing and grammar assistant.", url: "https://www.grammarly.com/", subject: "english", type: "AI Grammar & Writing Checker", badge: "✍️ Grammar" },
  { name: "Hemingway", icon: "📝", desc: "Make your writing bold and clear.", url: "https://hemingwayapp.com/", subject: "english", type: "Clarity & Readability Editor", badge: "📝 Essay Editor" },
  { name: "Canva", icon: "🎨", desc: "Create presentations and designs.", url: "https://www.canva.com/", subject: "general", type: "Student Presentations & Posters", badge: "🎨 Poster/Slides" },
  { name: "Notion", icon: "📓", desc: "All-in-one workspace and planning.", url: "https://www.notion.so/", subject: "general", type: "Study Notes & Planner", badge: "📓 Study Notes" },
  { name: "Evernote", icon: "🐘", desc: "Note-taking and organization.", url: "https://evernote.com/", subject: "general", type: "Note-Taking & Web Clipper", badge: "🐘 Note App" },
  { name: "Forest", icon: "🌳", desc: "Stay focused, be present app.", url: "https://www.forestapp.cc/", subject: "general", type: "Focus & Anti-Distraction Timer", badge: "🌳 Focus Timer" },
  { name: "Pomofocus", icon: "🍅", desc: "Pomodoro timer for studying.", url: "https://pomofocus.io/", subject: "general", type: "Customizable Pomodoro Timer", badge: "🍅 Pomodoro" },
  { name: "Kahoot!", icon: "🎮", desc: "Play learning games and quizzes.", url: "https://kahoot.it/", subject: "quiz", type: "Join Live Game with PIN", badge: "🎮 Join Game" },
  { name: "Quizizz", icon: "🎯", desc: "Play multiplayer review games.", url: "https://quizizz.com/join", subject: "quiz", type: "Self-Paced Practice Quizzes", badge: "🎯 Join Quiz" },
  { name: "ChatGPT", icon: "🤖", desc: "AI assistant for study help.", url: "https://chatgpt.com/", subject: "ai", type: "24/7 AI Homework Tutor", badge: "🤖 AI Tutor" },
  { name: "Perplexity AI", icon: "🔍", desc: "AI search engine for research.", url: "https://www.perplexity.ai/", subject: "ai", type: "AI Search with Real Citations", badge: "🔍 AI Search" }
];

const aiTools = [
  { name: "ChatGPT", icon: "💬", desc: "OpenAI's conversational AI model.", url: "https://chatgpt.com/", subject: "ai", type: "Conversational & Reasoning AI", badge: "💬 Chat AI" },
  { name: "Claude AI", icon: "🧠", desc: "Anthropic's advanced AI assistant.", url: "https://claude.ai/", subject: "ai", type: "Advanced Reasoning & Writing", badge: "🧠 Logic & Doc" },
  { name: "Google Gemini", icon: "✨", desc: "Google's multimodal AI model.", url: "https://gemini.google.com/", subject: "ai", type: "Multimodal Search & Vision AI", badge: "✨ Google AI" },
  { name: "Microsoft Copilot", icon: "💻", desc: "Your everyday AI companion.", url: "https://copilot.microsoft.com/", subject: "ai", type: "GPT-4 & Office AI Companion", badge: "💻 Copilot" },
  { name: "Midjourney", icon: "🎨", desc: "High-quality AI image generation.", url: "https://www.midjourney.com/", subject: "ai", type: "Photorealistic AI Image Art", badge: "🎨 Image Gen" },
  { name: "DALL-E 3", icon: "🖼️", desc: "Create images from text by OpenAI.", url: "https://openai.com/dall-e-3", subject: "ai", type: "Text-to-Image by OpenAI", badge: "🖼️ Image Gen" },
  { name: "Stable Diffusion", icon: "🌌", desc: "Open-source image generator.", url: "https://stability.ai/", subject: "ai", type: "Open-source Image Generator", badge: "🌌 Open AI Art" },
  { name: "Leonardo AI", icon: "🖌️", desc: "Create production-quality assets.", url: "https://leonardo.ai/", subject: "ai", type: "Game Assets & Illustration AI", badge: "🖌️ Creative AI" },
  { name: "RunwayML", icon: "🎬", desc: "Advancing creativity with AI video.", url: "https://runwayml.com/", subject: "ai", type: "Next-Gen AI Video Creator", badge: "🎬 Video Gen" },
  { name: "Sora", icon: "🎥", desc: "OpenAI's text-to-video model.", url: "https://openai.com/sora", subject: "ai", type: "Cinematic Text-to-Video AI", badge: "🎥 Video AI" },
  { name: "Synthesia", icon: "👩💼", desc: "Create AI avatar videos easily.", url: "https://www.synthesia.io/", subject: "ai", type: "AI Avatar Video Generator", badge: "👩💼 Avatar Video" },
  { name: "HeyGen", icon: "🗣️", desc: "AI video generation for teams.", url: "https://www.heygen.com/", subject: "ai", type: "Multilingual AI Video Creator", badge: "🗣️ Video Studio" },
  { name: "ElevenLabs", icon: "🎙️", desc: "Realistic AI voice generator.", url: "https://elevenlabs.io/", subject: "ai", type: "Realistic Voice Cloning & TTS", badge: "🎙️ Voice AI" },
  { name: "Suno AI", icon: "🎵", desc: "Create songs from text prompts.", url: "https://suno.com/", subject: "ai", type: "Text-to-Music & Song Creator", badge: "🎵 Song Gen" },
  { name: "Udio", icon: "🎧", desc: "High-fidelity AI music creation.", url: "https://www.udio.com/", subject: "ai", type: "High-Fidelity AI Music Studio", badge: "🎧 Music Studio" },
  { name: "Notion AI", icon: "📓", desc: "Work faster with AI writing tools.", url: "https://www.notion.so/product/ai", subject: "ai", type: "Productivity & Note Writing AI", badge: "📓 Note AI" },
  { name: "GrammarlyGO", icon: "✍️", desc: "AI communication assistant.", url: "https://www.grammarly.com/ai", subject: "english", type: "Context-Aware Writing Assistant", badge: "✍️ Writing AI" },
  { name: "Jasper AI", icon: "📝", desc: "AI copilot for marketing teams.", url: "https://www.jasper.ai/", subject: "ai", type: "Enterprise Content & Marketing AI", badge: "📝 Copywriter" },
  { name: "Copy.ai", icon: "🖊️", desc: "Generate copy and content faster.", url: "https://www.copy.ai/", subject: "ai", type: "Marketing Copy & Automation", badge: "🖊️ Copy AI" },
  { name: "Writesonic", icon: "⚡", desc: "AI writer and SEO content creator.", url: "https://writesonic.com/", subject: "ai", type: "AI Article & Essay Generator", badge: "⚡ Fast Writer" },
  { name: "Rytr", icon: "✒️", desc: "AI writing assistant & content generator.", url: "https://rytr.me/", subject: "ai", type: "Budget-Friendly AI Writer", badge: "✒️ Article AI" },
  { name: "QuillBot", icon: "🔄", desc: "AI paraphrasing and writing tool.", url: "https://quillbot.com/", subject: "english", type: "AI Paraphraser & Summarizer", badge: "🔄 Paraphrase" },
  { name: "Perplexity", icon: "🔍", desc: "AI-powered search and discovery.", url: "https://www.perplexity.ai/", subject: "ai", type: "Real-Time AI Research Engine", badge: "🔍 Search AI" },
  { name: "You.com", icon: "🔎", desc: "The AI search engine you control.", url: "https://you.com/", subject: "ai", type: "Privacy-Focused AI Search", badge: "🔎 Search AI" },
  { name: "Phind", icon: "💻", desc: "AI search engine for developers.", url: "https://www.phind.com/", subject: "ict", type: "AI Search Engine for Developers", badge: "💻 Dev Search" },
  { name: "GitHub Copilot", icon: "🐙", desc: "Your AI pair programmer.", url: "https://github.com/features/copilot", subject: "ict", type: "AI Code Autocomplete & Chat", badge: "🐙 Code Copilot" },
  { name: "Cursor", icon: "⌨️", desc: "The AI-first code editor.", url: "https://cursor.sh/", subject: "ict", type: "AI-Powered Code Editor", badge: "⌨️ AI IDE" },
  { name: "Gamma", icon: "📊", desc: "A new medium for presenting ideas.", url: "https://gamma.app/", subject: "ai", type: "AI Slide & Webpage Generator", badge: "📊 Slide AI" },
  { name: "Tome", icon: "📖", desc: "AI-powered storytelling format.", url: "https://tome.app/", subject: "ai", type: "AI Story & Presentation Creator", badge: "📖 Story AI" },
  { name: "Beautiful.ai", icon: "🎨", desc: "Presentation maker with AI design.", url: "https://www.beautiful.ai/", subject: "ai", type: "Smart Presentation Designer", badge: "🎨 Smart Slides" },
  { name: "Hugging Face", icon: "🤗", desc: "The AI community building the future.", url: "https://huggingface.co/", subject: "ict", type: "Open AI Models Community", badge: "🤗 AI Models" },
  { name: "Replicate", icon: "⚙️", desc: "Run machine learning models in cloud.", url: "https://replicate.com/", subject: "ict", type: "Cloud AI Model Runner & API", badge: "⚙️ Cloud API" },
  { name: "Fireflies.ai", icon: "🔥", desc: "Automate your meeting notes.", url: "https://fireflies.ai/", subject: "ai", type: "AI Meeting Transcriber & Summary", badge: "🔥 Meeting Notes" },
  { name: "Otter.ai", icon: "🦦", desc: "AI meeting assistant and transcription.", url: "https://otter.ai/", subject: "ai", type: "Real-Time Speech-to-Text Notes", badge: "🦦 Voice Notes" },
  { name: "Llama", icon: "🦙", desc: "Meta's open foundation models.", url: "https://llama.meta.com/", subject: "ict", type: "Meta Open-Source LLM Family", badge: "🦙 Open LLM" },
  { name: "Mistral AI", icon: "💨", desc: "Frontier AI in your hands.", url: "https://mistral.ai/", subject: "ai", type: "Fast & Precise European AI", badge: "💨 Fast AI" },
  { name: "Character.ai", icon: "🎭", desc: "Chat with AI characters and personas.", url: "https://character.ai/", subject: "ai", type: "Interactive AI Personas & Roleplay", badge: "🎭 Persona Chat" },
  { name: "Pi by Inflection", icon: "🥧", desc: "Your personal AI companion.", url: "https://pi.ai/", subject: "ai", type: "Empathetic Conversational AI", badge: "🥧 Personal AI" },
  { name: "Krea AI", icon: "🖌️", desc: "Real-time AI image generation.", url: "https://www.krea.ai/", subject: "ai", type: "Real-Time Canvas AI Painting", badge: "🖌️ Live Painting" },
  { name: "Magnific AI", icon: "✨", desc: "AI image upscaler and enhancer.", url: "https://magnific.ai/", subject: "ai", type: "Ultra-High Resolution AI Upscaler", badge: "✨ 4K Upscale" },
  { name: "Canva Magic Studio", icon: "🪄", desc: "All the power of AI, all in Canva.", url: "https://www.canva.com/magic/", subject: "ai", type: "All-in-One Graphic Design AI", badge: "🪄 Design AI" },
  { name: "Adobe Firefly", icon: "🦋", desc: "Generative AI for creators.", url: "https://firefly.adobe.com/", subject: "ai", type: "Commercial-Safe Generative Art", badge: "🦋 Adobe AI" }
];

// ៤. ធនធានបណ្ណាល័យឌីជីថល និងកម្រងវិញ្ញាសាប្រឡង (MoEYS E-Library & Past Exam Papers)
const libraryResources = [
  {
    id: "lib-1",
    title: "សៀវភៅពុម្ពក្រសួងអប់រំ ថ្នាក់ទី១ ដល់ទី១២ (MoEYS Textbooks)",
    badge: "MoEYS Official",
    icon: "📚",
    desc: "ទាញយក ឬអានសៀវភៅពុម្ពផ្លូវការរបស់ក្រសួងអប់រំ យុវជន និងកីឡា គ្រប់កម្រិតថ្នាក់ (PDF ឥតគិតថ្លៃ)",
    url: "https://elearning.moeys.gov.kh/",
    grade: "Grade 1-12",
    subject: "all",
    btnText: "ចូលអានសៀវភៅពុម្ព"
  },
  {
    id: "lib-2",
    title: "កម្រងវិញ្ញាសា និងអត្រាកំណែប្រឡងបាក់ឌុប (Grade 12 BacII Exam Papers)",
    badge: "BacII Exam",
    icon: "🎓",
    desc: "បណ្តុំវិញ្ញាសាប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) គ្រប់ឆ្នាំ គណិត រូប គីមី ជីវ ខ្មែរ អង់គ្លេស អមដោយដំណោះស្រាយលម្អិត",
    url: "https://moeys.gov.kh/",
    grade: "Grade 12",
    subject: "math, physics_chem, bio_stem",
    btnText: "មើលវិញ្ញាសាបាក់ឌុប"
  },
  {
    id: "lib-3",
    title: "កម្រងវិញ្ញាសាប្រឡងឌីប្លូម ថ្នាក់ទី៩ (Grade 9 Diploma Exam Papers)",
    badge: "Diploma Exam",
    icon: "📝",
    desc: "កម្រងវិញ្ញាសាត្រៀមប្រឡងសញ្ញាបត្របឋមភូមិ (ឌីប្លូម) ថ្នាក់ទី៩ គ្រប់មុខវិជ្ជាស្នូល ជាមួយគន្លឹះដោះស្រាយ",
    url: "https://elearning.moeys.gov.kh/",
    grade: "Grade 9",
    subject: "math, physics_chem, bio_stem",
    btnText: "មើលវិញ្ញាសាឌីប្លូម"
  },
  {
    id: "lib-4",
    title: "បណ្ណាល័យឌីជីថល Krou.kh សម្រាប់គ្រូបង្រៀន (Teacher Resources)",
    badge: "For Teachers",
    icon: "👨‍🏫",
    desc: "ប្រភពទាញយកកិច្ចតែងការបង្រៀន សន្លឹកកិច្ចការ និងគរុកោសល្យបង្រៀនបែបទំនើបផ្ទៀងផ្ទាត់ដោយ MoEYS",
    url: "https://krou.moeys.gov.kh/",
    grade: "All Grades",
    subject: "all",
    btnText: "ចូលបណ្ណាល័យគ្រូ"
  },
  {
    id: "lib-5",
    title: "Cambridge Assessment English & Worksheets",
    badge: "Cambridge IEP",
    icon: "🇬🇧",
    desc: "ធនធានបង្រៀន និងរៀនភាសាអង់គ្លេសស្តង់ដារ Cambridge (Starters, Movers, Flyers, KET, PET) និង Worksheets ជំនួយស្មារតី",
    url: "https://www.cambridgeenglish.org/learning-english/",
    grade: "IEP & GEP",
    subject: "english",
    btnText: "Explore Cambridge"
  },
  {
    id: "lib-6",
    title: "Tesdopi STEM Learning & Practice App",
    badge: "STEM Cambodia",
    icon: "🔬",
    desc: "កម្មវិធីហ្វឹកហាត់លំហាត់វិទ្យាសាស្ត្រ STEM ថ្នាក់ទី ៧-១២ តាមប្រព័ន្ធស្វ័យសិក្សា និងការវាស់ស្ទង់សមត្ថភាពឌីជីថល",
    url: "https://tesdopi.com/",
    grade: "Grade 7-12",
    subject: "bio_stem, math, physics_chem",
    btnText: "ចូលទៅកាន់ Tesdopi"
  },
  {
    id: "lib-7",
    title: "Khmer Academy - វីដេអូបង្រៀនវិទ្យាសាស្ត្រ និង Coding",
    badge: "Video Lectures",
    icon: "💻",
    desc: "បណ្តុំវីដេអូបង្រៀនគណិតវិទ្យា វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកុំព្យូទ័រជាភាសាខ្មែរជាង ៣,០០០+ មេរៀន",
    url: "https://khmeracademy.org/",
    grade: "Grade 7-12 & ICT",
    subject: "ict, math, physics_chem",
    btnText: "ទស្សនា Khmer Academy"
  },
  {
    id: "lib-8",
    title: "Khan Academy in Khmer & International",
    badge: "Free World Class",
    icon: "🏛️",
    desc: "វេទិកាសិក្សាអន្តរជាតិឥតគិតថ្លៃ គ្របដណ្តប់លើមុខវិជ្ជា គណិតវិទ្យា រូបវិទ្យា គីមីវិទ្យា ជីវវិទ្យា និងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    url: "https://www.khanacademy.org/",
    grade: "All Grades",
    subject: "math, physics_chem, bio_stem, ict",
    btnText: "ចូលរៀន Khan Academy"
  }
];

// ៤.១ កម្រងសៀវភៅពុម្ពផ្លូវការក្រសួងអប់រំ K-12 (Instant MoEYS Textbook & Exam Catalog)
const moeysBookCatalog = [
  {
    "id": "sala-00007986",
    "title": "Cambodia National Report Southeast Asia Primary Learning Metrics (Sea-PLM 2024)",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/9cc13260-e2e2-4025-b054-23d31c566b01.jpg",
    "author": "SEA-PLM",
    "views": 229,
    "desc": "និពន្ធ/រៀបចំដោយ៖ SEA-PLM • អ្នកអាន 229 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5d10f6eb-2607-438a-9a77-553b942ee555.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007985",
    "title": "របាយការណ៍ថ្នាក់ជាតិ ស្ដីពីរង្វាយតម្លៃលទ្ធផលសិក្សារបស់សិស្សកម្រិតបឋមសិក្សានៅតំបន់អាស៊ីអាគ្នេយ៍ឆ្នាំ២០២៤ (SEA-PLM 2024) របស់កម្ពុជា",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d9ac7ca5-4a0f-4b6b-9dbe-c2d7178d7943.jpg",
    "author": "តេស្តរង្វាយតម្លៃលទ្ធផលសិក្សាកម្រិតបឋមសិក្សានៅតំបន់អាស៊ីអាគ្នេយ៍",
    "views": 237,
    "desc": "និពន្ធ/រៀបចំដោយ៖ តេស្តរង្វាយតម្លៃលទ្ធផលសិក្សាកម្រិតបឋមសិក្សានៅតំបន់អាស៊ីអាគ្នេយ៍ • អ្នកអាន 237 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6aff7e00-eb25-4139-a4a8-6713b83c50db.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007975",
    "title": "ចំនួនកុំផ្លិចថ្នាក់ទី១២",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១២",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/images/26bfb6cc-72d2-4212-8cd2-0cff2f3ada0d.png",
    "author": "ខែម  ពុទ្ធី",
    "views": 3309,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខែម  ពុទ្ធី • អ្នកអាន 3,309 ដង",
    "url": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/pdf/fd4b5a4a-fa7a-4f3b-9233-ebab15e61091.pdf",
    "badge": "ត្រៀមបាក់ឌុប"
  },
  {
    "id": "sala-00007974",
    "title": "ការបង្រៀនមុខវិជ្ជាវិទ្យាសាស្ត្រ តាមបែបគោលវិធីសិស្សមជ្ឈមណ្ឌល ផ្នែកទី៣",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/17351425-d252-40fe-999e-701fbfc992fa.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 2468,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 2,468 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4327139e-6b03-4979-a7cf-131d34e84493.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007973",
    "title": "ការបង្រៀនមុខវិជ្ជាវិទ្យាសាស្ត្រ តាមបែបគោលវិធីសិស្សមជ្ឈមណ្ឌល ផ្នែកទី 2",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/28020e98-53b2-4084-8378-bd8158ade818.png",
    "author": "នាយកដ្ឋានបណ្តុះបណ្តាល និងវិក្រឹតការ",
    "views": 2483,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបណ្តុះបណ្តាល និងវិក្រឹតការ • អ្នកអាន 2,483 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/43cd4f9d-ac75-469d-be3b-ec2ff03bf7e5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007972",
    "title": "ការបង្រៀនមុខវិជ្ជាវិទ្យាសាស្ត្រ តាមបែបគោលវិធីសិស្សមជ្ឈមណ្ឌល ផ្នែកទី 1",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b4094b01-2287-4a16-91ff-6f5073281996.png",
    "author": "នាយកដ្ឋានបណ្តុះបណ្តាល និងវិក្រឹតការ",
    "views": 2207,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបណ្តុះបណ្តាល និងវិក្រឹតការ • អ្នកអាន 2,207 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/be27bd94-aa2c-4d23-9776-3053ce74288c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007968",
    "title": "អក្ខរកម្មឌីជីថលប្រព័ន្ធផ្សព្វផ្សាយ និងព័ត៌មាន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e494c1df-30d2-4965-9ecf-df94632333b6.jpg",
    "author": "នាយកដ្ឋានបរិវត្តកម្មឌីជីថល",
    "views": 6301,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបរិវត្តកម្មឌីជីថល • អ្នកអាន 6,301 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ecfc5a17-ca9c-445f-892c-b14a104b4f9e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007967",
    "title": "លីមីត នឹង ភាពជាប់នៃអនុគមន៍",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/images/176a090c-6973-49ce-8592-a7635608fd18.png",
    "author": "ខែម ពុទ្ធី",
    "views": 15060,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខែម ពុទ្ធី • អ្នកអាន 15,060 ដង",
    "url": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/pdf/6449830e-2a27-43ff-b3d5-ad1353a06e8f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007961",
    "title": "សៀវភៅប្រតិបត្តិគណិតវិទ្យា សិស្សរៀនសម្របតាមសមត្ថភាព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ba45dfdf-5997-4616-873c-626f29df7d91.png",
    "author": "នាយកដ្ឋានបឋមសិក្សា",
    "views": 10665,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបឋមសិក្សា • អ្នកអាន 10,665 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/303002af-b342-4df8-b972-dec041c0aa9a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007960",
    "title": "សៀវភៅណែនាំប្រតិបត្តិស្តីពីការបង្រៀនសម្របតាមសមត្ថភាពសិស្ស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0d30aa90-d1cb-4135-8959-0ae274e19446.png",
    "author": "នាយកដ្ឋានបឋមសិក្សា",
    "views": 13284,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបឋមសិក្សា • អ្នកអាន 13,284 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4504028e-864f-471d-85f2-b72342dc683c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007949",
    "title": "កាលិកបត្រអប់រំកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2fd6e9a2-4ad7-4faa-9b93-20c552657fab.png",
    "author": "កាលិកបត្រអប់រំកម្ពុជា",
    "views": 20895,
    "desc": "និពន្ធ/រៀបចំដោយ៖ កាលិកបត្រអប់រំកម្ពុជា • អ្នកអាន 20,895 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/56eba78c-d43d-40dc-beff-3eadcdf69a03.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007933",
    "title": "ទស្សនាវដ្តី គន្លឹះអប់រំ លេខ២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/0bcbdfbc-da19-4af7-95c9-afea63be1fcd.jpg",
    "author": "NGPRD",
    "views": 26262,
    "desc": "និពន្ធ/រៀបចំដោយ៖ NGPRD • អ្នកអាន 26,262 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/cec1d739-bc13-419a-8d59-c726dedc4605.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007932",
    "title": "ព្រះសាទព្រះវិហារ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3141685a-34e8-4ab1-b6d0-bd1f5b7f4fa1.jpg",
    "author": "បណ្ឌិតសភាចារ្យ ហង់ជួន ណារ៉ុន",
    "views": 36141,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិតសភាចារ្យ ហង់ជួន ណារ៉ុន • អ្នកអាន 36,141 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/644ac28f-56a9-4cec-adbf-5e6758287b0f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007931",
    "title": "រឿងល្ខោន ពិសោធន៍ស្នេហា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/94352bf8-e232-4afe-bfec-f3f2b2c2602a.png",
    "author": "ហង្ស ធុនហាក់ ហង់ ជួន និង ផឹក សំផេន",
    "views": 25849,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហង្ស ធុនហាក់ ហង់ ជួន និង ផឹក សំផេន • អ្នកអាន 25,849 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8ce7f241-2d7a-4b5b-bf38-ec27007c5468.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007924",
    "title": "សំណួរតេស្តគំរូនៃកម្មវិធីអន្តរជាតិ(PISA) រូបវិទ្យា ថ្នាក់ទី ៨ (សម្រាប់សិស្ស)",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៨",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/fd98e94e-ef23-4172-a09c-de18e21624b2.png",
    "author": "វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី",
    "views": 101508,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី • អ្នកអាន 101,508 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/c5d5afe3-8b67-432a-946e-ee8cd28b568b.pdf",
    "badge": "អនុវិទ្យាល័យ"
  },
  {
    "id": "sala-00007923",
    "title": "សំណួរតេស្តគំរូនៃកម្មវិធីអន្តរជាតិ (PISA)រូបវិទ្យា ថ្នាក់ទី៧(សម្រាប់គ្រូ)",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៧",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ca89735b-7a9f-41fd-a190-5ab3456de55c.png",
    "author": "វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី",
    "views": 99994,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី • អ្នកអាន 99,994 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d10ddb28-d87b-4672-b08e-68b6ecaa7929.pdf",
    "badge": "អនុវិទ្យាល័យ"
  },
  {
    "id": "sala-00007922",
    "title": "សំណួរតេស្តគំរូនៃកម្មវិធីអន្តរជាតិ(PISA) រូបវិទ្យា ថ្នាក់ទី ៨ (សម្រាប់គ្រូ)",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៨",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/5fc8b8f1-0b80-4294-83d2-539e998ae401.png",
    "author": "វិទ្យាល័យព្រះស៊ីសុវត្ថិ-សាលារៀនជំនាន់ថ្មី",
    "views": 93349,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាល័យព្រះស៊ីសុវត្ថិ-សាលារៀនជំនាន់ថ្មី • អ្នកអាន 93,349 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e5ad5d3e-f49b-4366-a4fe-9f1861f5a1f9.pdf",
    "badge": "អនុវិទ្យាល័យ"
  },
  {
    "id": "sala-00007921",
    "title": "សៀវភៅកម្រងស្នាដៃសិក្ខាកាមឆ្នាំ២០២៥",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/images/766e955a-c5bd-4573-a1fd-754951a406d4.jpg",
    "author": "លោកគ្រូ អោ ប៉េងសុង",
    "views": 33230,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកគ្រូ អោ ប៉េងសុង • អ្នកអាន 33,230 ដង",
    "url": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/pdf/31ed31ae-2c97-4116-b9e6-3fef62ecab1b.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007920",
    "title": "សៀវភៅស្នាដៃសិក្ខាកាមជំនាញកុំព្យូទ័ររដ្ឋបាល ឆ្នាំ២០២៤",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/images/512f92de-4762-47a8-a65c-01cfb1b8c1eb.jpg",
    "author": "លោកគ្រូ អោ ប៉េងសុង",
    "views": 33012,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកគ្រូ អោ ប៉េងសុង • អ្នកអាន 33,012 ដង",
    "url": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/pdf/64299667-06c2-4856-abd7-a520e1172e3a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007919",
    "title": "សំណួរតេស្តគំរូនៃកម្មវិធីអន្តរជាតិ(PISA)  ជីវវិទ្យា ថ្នាក់ទី ៧ (សម្រាប់សិស្ស)",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៧",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/cc814ee9-1ce0-4229-8850-6bcea23bf54b.png",
    "author": "វិទ្យាល័យព្រះស៊ីសុវត្ថិ-សាលារៀនជំនាន់ថ្មី",
    "views": 59856,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាល័យព្រះស៊ីសុវត្ថិ-សាលារៀនជំនាន់ថ្មី • អ្នកអាន 59,856 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/134a5a38-1ff6-4572-9cb9-9c1ceea261cf.pdf",
    "badge": "អនុវិទ្យាល័យ"
  },
  {
    "id": "sala-00007918",
    "title": "សំណួរតេស្តគំរូនៃកម្មវិធីអន្តរជាតិ (PISA) គីមីវិទ្យា ថ្នាក់ទី៧ (សម្រាប់សិស្ស)",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៧",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c0c728dc-9f9e-4b33-a33b-51c4e162d204.png",
    "author": "វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី",
    "views": 56590,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាល័យព្រះស៊ីសុវត្ថិ សាលារៀនជំនាន់ថ្មី • អ្នកអាន 56,590 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e0aa0c2f-5bc6-442d-bd72-9c1264ccd140.pdf",
    "badge": "អនុវិទ្យាល័យ"
  },
  {
    "id": "sala-00007916",
    "title": "បណ្ណាល័យ សម្តេចព្រះសង្ឃរាជ ជួន ណាត ផែនការយុទ្ធសាស្ត្រ ២០២៤ - ២០២៨",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2553fbc4-e5b5-4fe9-b2f4-e83f10e76022.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 32050,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 32,050 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/f46b22fe-5233-4de0-a636-18fb81f78859.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007915",
    "title": "សៀវភៅណែនាំប្រតិបត្តិសម្រាប់ បណ្ណារក្សសាលាមធ្យមសិក្សា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/816c1c76-25ce-4705-8291-ae626b6443ee.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 29417,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 29,417 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/933d587c-5192-4131-8328-92eed845d924.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007914",
    "title": "ក្របខ័ណ្ឌការវាយតម្លៃការសិក្សារបស់សិស្ស កម្រិតមត្តេយ្យសិក្សា ដល់មធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/9cabebf0-5b6b-4648-acc8-475b4861bb88.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 25353,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 25,353 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/144cff13-6ad4-44ec-814d-b81827262643.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007913",
    "title": "ម៉ូឌុលទី៥ ការកៀរគរធនធាន និងការចូលរួមភាគីពាក់ព័ន្ធ កម្រោងវិទ្យាសាស្ត្រ និងបរច្ចេកវិទ្យាសម្រាប់ការអប់រំ កម្រិតមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f0c58221-62d3-4f53-b018-b0e71ee3d201.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 23006,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 23,006 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a478450b-7f8e-4f3c-ac65-cd414cb667e1.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007912",
    "title": "ម៉ូឌុលទី៤ ការសាងដៃគូរសហការ កម្រោងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាសម្រាប់ការអប់រំ កម្រិតមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f30becc2-ffb4-4d0e-8e3a-2ad6d2ba5fa4.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 17536,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 17,536 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/44261743-fc61-420e-918b-c43b424c562e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007911",
    "title": "ម៉ូឌុលទី៣ ការត្រួតពិនិត្យការបង្រៀន កម្រោងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាសម្រាប់ការអប់រំ កម្រិតមធ្យមសិក្សាទុតិយភូមិ (STEP UP)",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/9b39446f-4dca-4222-b654-b429939ccd91.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 10063,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 10,063 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0eab108f-ce6b-4e68-a4f7-5a3a0d56496a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007910",
    "title": "ម៉ូឌុលទី២ គន្លងអាជីពគ្រូបង្រៀន កម្រោងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាសម្រាប់ការអប់រំ កម្រិតមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a80422fc-1e80-4613-8326-c58bf0199046.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 8554,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 8,554 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/825cba60-7e9b-4eda-bc51-3e51ebdc07cd.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007909",
    "title": "ម៉ូឌុលទី១ ការដឹកនាំ និងគ្រប់គ្រងសាលារៀន កម្រោងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាសម្រាប់ការអប់រំ កម្រិតមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f7d35a02-df8f-4868-9fc6-23eb18a0733e.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា\tក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 7885,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា\tក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 7,885 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0a3fcb9e-a20c-4cfa-af46-8ad895362037.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007908",
    "title": "សៀវភៅណែនាំពិសោធន៍វិទ្យាសាស្ត្រ សម្រាប់ការរៀន និងបង្រៀន នៅមធ្យមសិក្សាទុតិយភូមិ មុខវិជ្ជា រូបវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/781d4631-f948-49e5-b25a-07ade706f8bc.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 35582,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 35,582 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d3463be7-dfc7-4b0e-9231-855295480d4f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007907",
    "title": "ឯកសារក្រុមប្រឹក្សាធម្មនុញ្ញ សមិទ្ធផលរយៈពេល៣០ឆ្នាំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/64c22d1f4c132a9ce61bd63d/images/7cbe4a06-302e-4284-826d-16efa5a9e35b.png",
    "author": "ក្រុមប្រឹក្សាធម្មនុញ្ញ",
    "views": 9468,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាធម្មនុញ្ញ • អ្នកអាន 9,468 ដង",
    "url": "https://api.saladigital.org/public/orgs/64c22d1f4c132a9ce61bd63d/pdf/de608e39-fe77-4a0e-80dc-12586fe2f8ba.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007906",
    "title": "សៀវភៅណែនាំពិសោធន៍វិទ្យាសាស្ត្រ សម្រាប់ការរៀន និងបង្រៀន នៅមធ្យមសិក្សាទុតិយភូមិ មុខវិជ្ជា ផែនដីវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "science",
    "icon": "🔬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/aebb6fa6-779b-45ac-abed-1425fce8ecb8.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 12256,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 12,256 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d764060f-adae-4378-94f9-b4b35cf22b58.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007905",
    "title": "សៀវភៅណែនាំពិសោធន៍វិទ្យាសាស្ត្រ សម្រាប់ការរៀន និងបង្រៀន នៅមធ្យមសិក្សាទុតិយភូមិ មុខវិជ្ជា ជីវវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d285f40f-1ef3-4cf2-a5be-1d105666b60e.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 10828,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 10,828 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/46a61399-c6d6-4eac-9f75-f21206820118.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007904",
    "title": "សៀវភៅណែនាំពិសោធន៍វិទ្យាសាស្ត្រ សម្រាប់ការរៀន និងបង្រៀន នៅមធ្យមសិក្សាទុតិយភូមិ មុខវិជ្ជា គីមីវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/959caccb-c727-4a90-aa97-ac00cdca7b3e.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 10261,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 10,261 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/da495f49-3d31-43c4-bd54-83126a8d2d7d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007903",
    "title": "ឯកសារណែនាំ ស្តីពី ការគ្រប់គ្រង និងដំណើរការប្រតិបត្តិ ការផ្តល់សេវាបណ្តុះបណ្តាលជំនាញបន្ថែម ផ្នែកស្ទែម នៅវិទ្យាល័យធនធាន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a6c70f5e-bc7b-48bd-b0e4-31f1d4f822d6.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 4872,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 4,872 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8d58aba0-9e40-47cc-998b-fd2cb9e69681.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007902",
    "title": "សៀវភៅ គ្រប់គ្រងបន្ទប់ពិសោធន៍ និងប្រើប្រាស់សម្ភារពិសោធន៍ រូបវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/45b1ebca-81af-4af3-a404-cf8666d2e0b8.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 7949,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 7,949 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/150ff4fb-f88a-4d91-acb1-61827aa46fed.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007901",
    "title": "សៀវភៅ គ្រប់គ្រងបន្ទប់ពិសោធន៍ និងប្រើប្រាស់សម្ភារពិសោធន៍ ផែនដីវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b9527629-231c-4f40-b18c-b97ee7435010.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 1665,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 1,665 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/35015e6c-f779-49b7-a4b0-385dc20ef3e9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007899",
    "title": "សៀវភៅ គ្រប់គ្រងបន្ទប់ពិសោធន៍ និងប្រើប្រាស់សម្ភារពិសោធន៍ ជីវវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/82e5b585-3daf-4820-8874-0f450188b63a.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 2345,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 2,345 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e4d88dc0-6bea-4584-bba4-60f74542065f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007898",
    "title": "សៀវភៅ គ្រប់គ្រងបន្ទប់ពិសោធន៍ និងប្រើប្រាស់សម្ភារពិសោធន៍ គីមីវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ce392209-b0b2-489a-b7bc-4b4eb5901f54.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 2367,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 2,367 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/addb98ad-9c7a-4864-bb85-72b0f06315c4.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007897",
    "title": "របាយការណ៍សិក្សាស្រាវជ្រាវ ស្តីពី ផលជះនៃការអនុវត្តកម្មវិធី ការផ្តល់សេវាបណ្តុះបណ្តាលជំនាញបន្ថែម ផ្នែកស្ទែមនៅវិទ្យាល័យធនធាន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/10189efe-0d54-4b98-acbf-37a2581d19ee.png",
    "author": "នាយកដ្ឋានតម្រង់ទិសវិជ្ជាជីវៈ",
    "views": 13093,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានតម្រង់ទិសវិជ្ជាជីវៈ • អ្នកអាន 13,093 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/c4667abe-8690-48e8-a201-7b35c1ef6e1f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007895",
    "title": "ការសិក្សាបែបគម្រោង ផែនការបង្រៀនសម្រាប់អ្នកសម្របសម្រួល",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/9bd81d57-05b6-4016-b150-2c80605d0073.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 13098,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 13,098 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0e779068-3919-4760-a1ba-2fb297f91d21.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007894",
    "title": "ការរៀននិងបង្រៀនស្នេមនៅកម្រិតមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e512c9d0-8bf1-4b32-a8f4-30740ea633b3.png",
    "author": "- ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 26306,
    "desc": "និពន្ធ/រៀបចំដោយ៖ - ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 26,306 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8c1ff21c-60f4-4dd1-90da-3255474b4ce5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007893",
    "title": "ឧបករណ៍ពិនិត្យតាមដាន និងវាយតម្លៃការរៀន និងបង្រៀន ស្ទែមនៅមធ្យមសិក្សាទុតិយភូមិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/982f54e3-c884-4f3d-bba9-9a4f79ed9268.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 20232,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 20,232 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ec9314cb-979a-48fa-b687-160376c76407.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007892",
    "title": "IMPLEMENTING SCHOOL-BASED MANAGEMENT.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/441de8fe-572c-4f3b-849e-3f1c28d17ad3.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 11459,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 11,459 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/030f0386-d5dc-4503-9333-e783b83bdc3e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007891",
    "title": "យុទ្ធសាស្ត្រអប់រំឌីជីថល សម្រាប់សាលារៀន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d52a7145-ea2f-4fca-861d-398d511e661a.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 10914,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 10,914 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/46169c0a-164f-43b4-97cc-8aac385be0d6.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007888",
    "title": "ក្របខណ្ឌគរុកោសល្យសតវត្សរ៍ទី២១ សម្រាប់ប្រទេសកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/774e2dda-1a62-4f47-a106-d4bcc5401b2d.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 11681,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 11,681 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/c2c93726-6a62-4768-b126-842dd5274543.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007887",
    "title": "ការលើករបាំងចេញ សៀវភៅណែនាំស្តីពីសម្ភារៈបង្រៀន និងរៀន ដែលគាំទ្រដល់ការធ្វើបរិវត្តកម្មយេនឌ័រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8c5f270c-35a3-4aa4-9049-697bf4e18417.png",
    "author": "UNESCO Phnom Penh",
    "views": 47989,
    "desc": "និពន្ធ/រៀបចំដោយ៖ UNESCO Phnom Penh • អ្នកអាន 47,989 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/07bd0b89-d744-4986-a851-11dc8d91874c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007886",
    "title": "ការលើករបាំងចេញ៖ សៀវភៅណែនាំស្តីពីសម្ភារៈបង្រៀន និងរៀន ដែលគាំទ្រដល់ការធ្វើបរិវត្តកម្មយេនឌ័រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2bf441f0-d074-4d3f-8d87-ab445ef724ea.png",
    "author": "UNESCO Phnom Penh",
    "views": 47806,
    "desc": "និពន្ធ/រៀបចំដោយ៖ UNESCO Phnom Penh • អ្នកអាន 47,806 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a2f1f21b-d26a-4a70-9ff1-f4e5393fb9cc.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007883",
    "title": "NEW EDUCATION DESIGN FRAMEWORK",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f6b9504a-90be-459a-b6b5-a56dc9978745.png",
    "author": "អង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា",
    "views": 10666,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា • អ្នកអាន 10,666 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b21a3b1b-cf0e-4113-a603-bc8f286aab5a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007881",
    "title": "ក្របខណ្ឌរចនាបថការអប់រំថ្មី",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d7daa8e7-2a1b-4390-a793-2ea45dd1f428.png",
    "author": "អង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា",
    "views": 12254,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា • អ្នកអាន 12,254 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3a864b10-0474-47ad-9936-821574e72fd3.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007870",
    "title": "បញ្ញាសិប្បនិមិ្មត និងឧបករណ៍ឌីជីថលសម្រាប់ការអប់រំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/c60fbda7-20cc-450f-b7c7-48b37b18c139.jpg",
    "author": "ជី គឹមអ៊ី",
    "views": 37303,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ជី គឹមអ៊ី • អ្នកអាន 37,303 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/fd96d829-5c75-476b-86e3-f36e57f17283.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007869",
    "title": "អប់រំកាយនិងកីឡា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ced32661-cca3-400a-8697-0bb5e16ff6d3.png",
    "author": "ក្រសួងអប់រំ យុវជននិងកីឡា",
    "views": 20114,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជននិងកីឡា • អ្នកអាន 20,114 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/25f503ed-15eb-4e00-85e8-00386dcc95e6.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007868",
    "title": "សីលធម៌ពលរដ្ឋវិជ្ជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a113a106-4c5a-4631-8e72-8243ce89c110.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 66955,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 66,955 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e6da871b-ef2c-4694-90c2-105bd8e17642.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007867",
    "title": "អក្សរសាស្ត្រខ្មែរ.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b3af0ecb-f54a-4a12-8087-3d111f198cc5.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 34125,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 34,125 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ed9fe9f0-e7b3-4393-8156-f467a2c54ccc.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007866",
    "title": "រូបវិទ្យា បណ្តុំវិទ្យាសាស្ត្រសង្គម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/442a5b7c-c3c3-4e83-a36f-650ebf128bca.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 60003,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 60,003 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8abaea7c-3b08-44df-b71c-64f0b1d1b68d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007865",
    "title": "រូបវិទ្យា បណ្តុំវិទ្យាសាស្ត្រពិត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/787537fb-5ac5-4540-8915-9b5714892fab.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា\tក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 60951,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា\tក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 60,951 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6bde5cc1-f71b-41fe-baef-290144ea2d60.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007864",
    "title": "ភូមវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e13a8ca3-ccb6-4b76-84f9-deeb7d2bb5e6.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 27173,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 27,173 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4d6bc59a-fc6a-43e1-8559-114903326754.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007863",
    "title": "ភាសាអង់គ្លេស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "english",
    "icon": "🇬🇧",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/4d3e4688-8a9e-46e8-b584-9e2b6e80bfe6.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 74211,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 74,211 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/7633cff2-6c65-4c25-907d-c68cfe141c61.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007862",
    "title": "គុណភាពសេវាកម្ម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/856cb7c3-c95b-433b-8a86-d966fcc9daf3.png",
    "author": "ស៊ុន ធារី",
    "views": 15620,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ស៊ុន ធារី • អ្នកអាន 15,620 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/486f4197-2359-4c59-8f2f-9abb0318ab69.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007861",
    "title": "សៀវភៅណែនាំស្តីពីការកសាងផែនការសកម្មភាពថ្នាក់ក្រោមជាតិ សម្រាប់គាំពារ និងអភិវឌ្ឍន៍កុមារតូច",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3be65389-d73e-4322-853e-e5ddbc91714b.PNG",
    "author": "អគ្គលេខាធិកាដ្ឋាននៃគណៈកម្មាធិការជាតិគាំពារនិងអភិវឌ្ឍន៍កុមារតូច",
    "views": 43418,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អគ្គលេខាធិកាដ្ឋាននៃគណៈកម្មាធិការជាតិគាំពារនិងអភិវឌ្ឍន៍កុមារតូច • អ្នកអាន 43,418 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8750cff8-9627-4cc8-aa5b-6f21d8dc13f2.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007860",
    "title": "ការសិក្សាអាស្រ័យលើបញ្ហា (PBL)",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/f6ef6ab1-12af-4bd3-ba69-913a8dd80d16.jpg",
    "author": "អោក ណេត",
    "views": 19516,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អោក ណេត • អ្នកអាន 19,516 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/7f79a8be-7479-4fef-b2bf-5cbe214c16b8.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007859",
    "title": "កម្រងវិញ្ញាសា ICT ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/69f9ef6282f298d99971a7da/images/6ddd9bfc-1d0c-495c-8b59-143bac76167f.jpg",
    "author": "រី សីលា",
    "views": 25589,
    "desc": "និពន្ធ/រៀបចំដោយ៖ រី សីលា • អ្នកអាន 25,589 ដង",
    "url": "https://api.saladigital.org/public/orgs/69f9ef6282f298d99971a7da/pdf/f24ffaa1-b269-4455-aab8-8a0a253af1c5.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007858",
    "title": "វិញ្ញាសាវប្បធម៌ទូទៅ(QCM)ត្រៀមប្រឡងគ្រូ",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/65edca21e04ee9765a527de9/images/cced8c3c-9a30-4948-a853-368f913bb753.jpg",
    "author": "ងួន ប៊ុនធិន",
    "views": 16221,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ងួន ប៊ុនធិន • អ្នកអាន 16,221 ដង",
    "url": "https://api.saladigital.org/public/orgs/65edca21e04ee9765a527de9/pdf/a4756a64-dbd4-480a-85d0-d661195b2d7b.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007857",
    "title": "ការសិក្សាភាសាខ្មែរនៅសម័យបច្ចេកវិទ្យាបញ្ញាសិប្បនិម្មិត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a66dd265-8513-4934-9841-3cf24118ee75.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 20726,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 20,726 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/135ee12f-5d6d-4490-b80e-00ad4255d20e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007841",
    "title": "ភាសាបារាំង ជីវភាសាទី២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0758be88-1713-4832-a696-d37c1d6f4b47.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 39646,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 39,646 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a1af278e-6e6e-4437-afc0-778e6ad5dde9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007840",
    "title": "ភាសាបារាំង",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d22176fb-bb7d-425d-bbc8-5823f56c6efe.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 39709,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 39,709 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/751c1bee-93fc-4913-8836-c9d87e6b74db.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007838",
    "title": "គោលការណ៍សុខាភិបាលសត្វ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/05f4b6d6-920f-4bef-b2de-2cc65aff077c.png",
    "author": "ហាត រ៉ាវី",
    "views": 2927,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហាត រ៉ាវី • អ្នកអាន 2,927 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4272f00d-5ced-49f6-a011-d6847fefec25.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007837",
    "title": "ផែនដីបរិស្ថានវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/66cf9950-5e47-430f-a397-5b8e0dbbee35.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 923,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 923 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/64be1e90-092d-41a5-bfe0-09038a76b422.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007836",
    "title": "គីមីសរីរាង្គ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/af3f8e3a-bda2-41da-abe6-a2d2ab22110f.png",
    "author": "ឃឹម តុងឃាង",
    "views": 977,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ឃឹម តុងឃាង • អ្នកអាន 977 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9e68989e-9630-4f78-88f8-cbc05f28cc2a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007834",
    "title": "គម្រោងការចិញ្ចឹមជ្រូកសាច់",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ed7f3f6a-76ca-4e9e-9222-dec25336baf5.png",
    "author": "លាច សុភាព",
    "views": 2787,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លាច សុភាព • អ្នកអាន 2,787 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/29009cd8-e205-4f9c-8a5f-c9b4980af2f5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007830",
    "title": "សៀវភៅវិធីសាស្ត្រដោះស្រាយលំហាត់គណិតវិទ្យាថ្នាក់ទី១២ ភាគ១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១២",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/65643836d15ccec6249d440f/images/6bd1f07f-cd27-43b6-b974-32b365f65ccd.png",
    "author": "លឿ សុវណ្ណរ៉ា",
    "views": 2055,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លឿ សុវណ្ណរ៉ា • អ្នកអាន 2,055 ដង",
    "url": "https://api.saladigital.org/public/orgs/65643836d15ccec6249d440f/pdf/6e649bdd-ea81-40ab-9479-984a5348ce0e.pdf",
    "badge": "ត្រៀមបាក់ឌុប"
  },
  {
    "id": "sala-00007829",
    "title": "ARTIFICIAL INTELLIGENCE: Empowering Innovation, Ethics, and Inclusion in Cambodia",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3b81c2ab-087e-4f39-953e-bab6d4023fe3.png",
    "author": "United Nations 2025",
    "views": 3334,
    "desc": "និពន្ធ/រៀបចំដោយ៖ United Nations 2025 • អ្នកអាន 3,334 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/2f11943f-1cfe-415f-b037-51023849b7ad.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007828",
    "title": "បញ្ញាសិប្បនិម្មិត៖ លើកកម្ពស់នវានុវត្តន៍ ក្រមសីលធម៌ និងបរិយាបន្ននៅកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f5ed5425-1310-49ba-a486-bb2676ce65f2.png",
    "author": "អង្គការសហប្រជាជាតិឆ្នាំ២០២៥",
    "views": 4616,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អង្គការសហប្រជាជាតិឆ្នាំ២០២៥ • អ្នកអាន 4,616 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d9013290-e403-4c46-bdd0-138a9fa7874c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007827",
    "title": "ការសរសេរកម្មវិធីកុំព្យូទ័រ ភាសC",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c8c1ba77-32c4-4825-87c5-8f47290736a2.png",
    "author": "ខ្លឹម លាស់",
    "views": 1190,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខ្លឹម លាស់ • អ្នកអាន 1,190 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/99926cf7-6a08-41e7-a623-5aa401f5f061.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007826",
    "title": "ការប្រើប្រាស់កម្មវិធី កុំព្យូទ័រសម្រាប់ការងារបោះពុម្ព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0cc7c066-a94f-4dfd-9f1b-032561a86edd.png",
    "author": "លោកស្រី ភន ញឹប",
    "views": 1218,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកស្រី ភន ញឹប • អ្នកអាន 1,218 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/27025f7a-2b84-4719-bf1e-8553487d20d7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007825",
    "title": "ការដាំដំណាំ និងការគ្រប់គ្រង",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/215e0d99-529e-4984-8ae3-f767a7f02045.png",
    "author": "វ៉ាន់ ឆវី",
    "views": 1098,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ាន់ ឆវី • អ្នកអាន 1,098 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/71add00e-d49e-4f81-afa0-823580302846.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007824",
    "title": "ការប្រកួតក្រុមភ្លេងកាយរឹទ្ធិថ្នាក់ជាតិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ecd276ed-040d-41f4-9e31-e19b64142774.PNG",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 15777,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 15,777 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/db23f105-ab3e-4724-acbd-fe1134d42de9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007823",
    "title": "សៀគ្វីឌីជីថល DIGITAL CIRCUITS",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/106d7602-51e0-42e8-a164-0c7a543d50ea.png",
    "author": "គឹម សុជា",
    "views": 1051,
    "desc": "និពន្ធ/រៀបចំដោយ៖ គឹម សុជា • អ្នកអាន 1,051 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e045229f-70bd-499d-be6b-82b1d7318741.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007816",
    "title": "អនុក្រឹត្យស្ដីពីការកំណត់ចំនួនសមាជិកក្រុមប្រឹក្សាឃុំសង្កាត់អាណត្តិទី៦",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0554d2d6-fbcc-440d-bc97-31f986467938.png",
    "author": "ក្រសួងអប់រំ យុវជននឹង កីទ្បា",
    "views": 14407,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជននឹង កីទ្បា • អ្នកអាន 14,407 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3f3c7834-cc51-4550-90a8-eac2fbd6bea7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007815",
    "title": "សៀវភៅវេយ្យាករណ៍ភាសាខ្មែរ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d8fbba16-8763-47e2-8976-d9ca4b9f6e47.png",
    "author": "ទីស្តីការគណៈរដ្ឋមន្ត្រី ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ (ក.ជ.ភ.ខ.) គណ:កម្មការភាសាវិទ្យា",
    "views": 21863,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ទីស្តីការគណៈរដ្ឋមន្ត្រី ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ (ក.ជ.ភ.ខ.) គណ:កម្មការភាសាវិទ្យា • អ្នកអាន 21,863 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/db40702f-dd1d-466e-abdb-17043bd80415.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007814",
    "title": "ច្បាប់ ស្តីពី វិសោធនកម្មច្បាប់ ស្តីពី ការបោះឆ្នោតជ្រើសតាំង សមាជិកព្រឹទ្ធសភា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/1fa827a5-8c62-4263-871d-9fb57c12911a.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 2678,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 2,678 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6d9a1d56-e279-4c16-ae8a-8c33f0e12e12.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007813",
    "title": "សុភាសិតខ្មែរ តាមលំដាប់អក្សរក្រម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/15eaed9b-533c-4a97-a5e3-f6630d773b1f.png",
    "author": "ហៀន វិចិត្រ",
    "views": 12043,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហៀន វិចិត្រ • អ្នកអាន 12,043 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/79c4e99f-06a5-4f04-a537-28c7d5b12dd7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007811",
    "title": "ក្របខ័ណ្ឌហិរញ្ញវត្ថុសាធារណៈរយៈពេលមធ្យម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/766a25d7-8e71-4182-b204-c3f0f810678f.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 2266,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 2,266 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/432dd73a-5448-43bc-95bb-08e7c6d78ad8.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007810",
    "title": "អនុក្រឹត្យស្ដីពីសេវាអត្តសញ្ញាណកម្មដែលមិនតម្រូវឱ្យបង់កម្រៃសេវា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0250fd57-bbfd-4603-b96e-4671c570f269.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 62018,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 62,018 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3735d5dc-fb63-4ef1-81fd-a8af02b0b725.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007809",
    "title": "និមិត្តសញ្ញារាជធានីខេត្ត ទាំង២៥ នៃព្រះរាជាណាចក្រកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f84d6f22-e7ea-49a7-8c6f-3caf5422ee03.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 36410,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 36,410 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/37319f64-0eb8-43ea-a79f-6c64aa3dc037.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007808",
    "title": "វិញ្ញាសាគណិតវិទ្យា ដែលធ្លាប់ចេញប្រឡងពីឆ្នាំ ២០១១ ដល់ ២០២៥",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/images/bfe302f3-a30e-48f5-9085-97dc3b4e5ba6.jpg",
    "author": "ខែម ពុទ្ធី",
    "views": 130290,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខែម ពុទ្ធី • អ្នកអាន 130,290 ដង",
    "url": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/pdf/3934d3aa-73ce-4cac-8670-d2c8b9b830a1.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007807",
    "title": "វិញ្ញាសាគណិតវិទ្យា ដែលធ្លាប់ចេញប្រឡងពីឆ្នាំ ២០០២ ដល់ ២០២៥",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/images/26fb9bc2-505d-48de-b05b-f4df612e6334.jpg",
    "author": "ខែម ពុទ្ធី",
    "views": 114752,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខែម ពុទ្ធី • អ្នកអាន 114,752 ដង",
    "url": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/pdf/48ec494a-fb17-45ea-a719-94da8de25004.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007806",
    "title": "លំហាត់ដែលកែឆ្នៃពីលំហាត់បាក់ឌុបចាប់ពីឆ្នាំ ២០០២ ដល់ ២០២៥",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១២",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/images/f547fee5-986a-446a-bb74-5b84ce8ea0ca.jpg",
    "author": "ខែម ពុទ្ធី",
    "views": 100742,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខែម ពុទ្ធី • អ្នកអាន 100,742 ដង",
    "url": "https://api.saladigital.org/public/orgs/65816f456d2d1796e74c5596/pdf/f0fc175a-1033-4aab-8c68-2121d5a27fef.pdf",
    "badge": "ត្រៀមបាក់ឌុប"
  },
  {
    "id": "sala-00007804",
    "title": "Outcomes Based Education Curriculum Development Experience from CamEd Business School",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/82d94492-104b-4d21-836f-b318c66f7eb5.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 736,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 736 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e44b477d-f967-410e-a43b-0a7ab525f850.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007803",
    "title": "Best practice of academic programme transformation in ASEAN and beyond and lessons for Cambodia",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2f773b4d-035c-4ec1-a8a7-b1c19792365d.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 1952,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 1,952 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/600c35f9-8278-4007-bcde-95dd44d817c7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007801",
    "title": "Playbook on Innovative Padagogy",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/846f9eff-470b-488e-be29-ea330eafa6db.png",
    "author": "Ministry of Education, Youth and Sport",
    "views": 700,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Ministry of Education, Youth and Sport • អ្នកអាន 700 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9f26cc8f-fbf9-4697-ac7c-278b13df575c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007800",
    "title": "Guideline on Holistic Assessment",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f5ca99a1-1deb-411f-a3e1-e836bb8358f2.png",
    "author": "MINISTRY OF EDUCATION, YOUTH AND SPORT",
    "views": 34582,
    "desc": "និពន្ធ/រៀបចំដោយ៖ MINISTRY OF EDUCATION, YOUTH AND SPORT • អ្នកអាន 34,582 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/132f64d3-ad38-4224-8138-861c57289a02.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007799",
    "title": "Guideeline on Innovative Padagogy",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e6f6eca3-146d-4aac-a32d-4a83c39bfb85.png",
    "author": "MINISTRY OF EDUCATION, YOUTH AND SPORT",
    "views": 30586,
    "desc": "និពន្ធ/រៀបចំដោយ៖ MINISTRY OF EDUCATION, YOUTH AND SPORT • អ្នកអាន 30,586 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/61d271ff-f5b6-4adf-bf78-d75cad8c6446.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007798",
    "title": "Guideline on Transformative Curriculum",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/57448599-cf0e-4d1e-8b1d-8f449d1ff8fe.png",
    "author": "MINISTRY OF EDUCATION, YOUTH AND SPORT",
    "views": 29949,
    "desc": "និពន្ធ/រៀបចំដោយ៖ MINISTRY OF EDUCATION, YOUTH AND SPORT • អ្នកអាន 29,949 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d34dd6d4-5f86-480e-906c-7e9a9df212b0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007797",
    "title": "FUTUREFIT EDUCATIONAL FRAMEWORK for OUTCOME-BASED EDUCATION in CAMBODIAN HIGHER EDUCATION ក្របខ័ណ្ឌអប់រំអនាគតផល សម្រាប់ការអប់រំផ្អែកលើលទ្ធផលនៅឧត្តមសិក្សាកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/19409c2c-ca23-4ee1-8340-11bdfbd0faa0.png",
    "author": "Ministry of Education, Youth and Sport",
    "views": 26315,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Ministry of Education, Youth and Sport • អ្នកអាន 26,315 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e92f3b04-1595-417b-a34e-e3881fbb5f9c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007796",
    "title": "ការធ្វើទំនើបកម្មកម្មវិធីសិក្សា សម្រាប់ការអភិវឌ្ឍជាតិ និងទីផ្សារការងារ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/15979fdf-7c95-43c5-89a2-c4df0bc3078a.png",
    "author": "ឯកឧត្តម ម៉ក ងយ",
    "views": 25949,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ឯកឧត្តម ម៉ក ងយ • អ្នកអាន 25,949 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/7662ea67-3ffd-4f60-8169-f55ebb3bc398.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007795",
    "title": "EQUICONVERGENCE THEOREM FOR FUNCTIONALLY DIFFERENTIAL OF THE FIRST ORDER OPERATOR ON THE GRAPH",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/768d253f-e517-4e27-9a72-79b9e33b59e3.png",
    "author": "Meach Mon",
    "views": 87198,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Meach Mon • អ្នកអាន 87,198 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/1ebcdb9e-e9ac-43bc-847d-aaf6ba5ef0d7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007794",
    "title": "Antimicrobial resistance profiles of Escherichia coli from swine farms using different antimicrobials and management systems",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b65d2647-3466-4111-9244-923fb0c4eee1.png",
    "author": "CHEA RORTANA",
    "views": 52599,
    "desc": "និពន្ធ/រៀបចំដោយ៖ CHEA RORTANA • អ្នកអាន 52,599 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a79e8a7a-4b2f-4491-83e2-cb8a88d34543.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007793",
    "title": "Selection and Assessment of Diabetes Risk Factors with Data Analysis and Machine Learning Techniques Using Physiological Data",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/95258783-4111-4a92-9feb-a340e0e528bd.png",
    "author": "TONG SODAVY",
    "views": 29707,
    "desc": "និពន្ធ/រៀបចំដោយ៖ TONG SODAVY • អ្នកអាន 29,707 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6e642437-02eb-4764-a02d-b4f2c9d66cb6.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007792",
    "title": "Leadership Pathways for Local Women: Case Studies of Three Communes in Cambodia",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/fd6eb8b6-c3d5-4c37-bed5-c3e9a232718a.png",
    "author": "Tem Ly",
    "views": 48360,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Tem Ly • អ្នកអាន 48,360 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d8f474f6-0205-4911-b002-adb9d527ab26.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007791",
    "title": "JUVENILE JUSTICE LAW STRATEGIC AND OPERATIONAL PLAN",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d120c554-647e-4f39-8365-367ebc1a6a70.png",
    "author": "Ministry of Justice and Ministry of Social Affairs Veterans and Youth Rehabilitation",
    "views": 42611,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Ministry of Justice and Ministry of Social Affairs Veterans and Youth Rehabilitation • អ្នកអាន 42,611 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/060bcd8b-dd77-4b1b-8042-c3e45b17afa5.PDF",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007789",
    "title": "ការរៀបចំកិច្ចតែងការបង្រៀន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/66b7b134-27e1-45a2-b4d7-248318064e64.jpg",
    "author": "Stanislas Kowalski",
    "views": 38919,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Stanislas Kowalski • អ្នកអាន 38,919 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/8b87539a-144a-4b76-ae76-09056d57aac5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007788",
    "title": "សៀវភៅមត្តេយ្យចិត្តចលភាព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/6a23a6cb205ebaa8f5c9abef/images/7e69ee46-0fb2-4d24-b227-bd667aa687dc.jpg",
    "author": "ក្រសួងអប់រំ យុវជននិងកីឡា",
    "views": 11565,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជននិងកីឡា • អ្នកអាន 11,565 ដង",
    "url": "https://api.saladigital.org/public/orgs/6a23a6cb205ebaa8f5c9abef/pdf/878c2d94-9893-4b9d-91ad-2e57299398f6.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007787",
    "title": "ការប្រើប្រាស់ MoEYS Edtech App សម្រាប់សិស្ស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/657198e4a1e8078f763b1552/images/6c4cc7cf-24bf-4747-8702-811c95cb1ace.png",
    "author": "ហួត ហៀង",
    "views": 21414,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហួត ហៀង • អ្នកអាន 21,414 ដង",
    "url": "https://api.saladigital.org/public/orgs/657198e4a1e8078f763b1552/pdf/553a70ee-95cf-4ae8-9dd4-d94ac35da29d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007786",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត៣ សម្រាប់គ្រូ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/549cd1de-52bb-4a7b-91d6-d2a224ff991f.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 26030,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 26,030 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8c77b85f-721e-4c2f-b9be-8f275f23a676.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007785",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត៣ សម្រាប់សិស្ស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0d5ff4c1-93ba-4bfb-9948-fd2bdd8cda0b.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 23082,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 23,082 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9f768fdd-aa9f-49f6-8d02-a122c0897999.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007784",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត២ សម្រាប់គ្រូ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f8e83371-514b-490f-904e-7c898e1bf1f7.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 20555,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 20,555 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/dedc2bff-0228-4653-9e77-dc07537e07d8.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007783",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត២ សម្រាប់សិស្ស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f7b3b1d9-088f-4b84-98bd-6a5a6f0fd9eb.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 19516,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 19,516 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0d904c2a-4364-41b6-aac8-2a71e113d146.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007782",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត១ សម្រាប់គ្រូ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/cc9c3797-2350-426b-88f6-c075d21bc783.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 16940,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 16,940 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/292acad1-d4bf-4dd5-9959-7949aa042489.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007781",
    "title": "អប់រំការគិត បែបកុំព្យូទ័រ កម្រិត១ សម្រាប់សិស្ស",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/50cfdd21-a08c-4cf0-b3db-ec060bb14645.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust",
    "views": 21694,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និង The Hong Kong Jockey Club Charities Trust • អ្នកអាន 21,694 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e08b5562-13c9-4442-8e7b-8d64308f0ff8.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007777",
    "title": "សហគមន៍សេដ្ឋកិច្ចអាស៊ាននៅឆ្នាំ២០១៥ និង សមាហរណកម្មក្នុងតំបន់",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/95de91d8-118d-4aec-ab07-fbf814c1cff2.png",
    "author": "KHEM PUTHY",
    "views": 30240,
    "desc": "និពន្ធ/រៀបចំដោយ៖ KHEM PUTHY • អ្នកអាន 30,240 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/54134a04-1f8d-4ffb-a895-c69f33491440.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007776",
    "title": "ASEAN Economic Community (AEC) 2015 and Regional Integration",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ebbd8692-072c-4218-b435-63ba29803fa0.png",
    "author": "KHEM PUTHY",
    "views": 25103,
    "desc": "និពន្ធ/រៀបចំដោយ៖ KHEM PUTHY • អ្នកអាន 25,103 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/02d7c9ce-e92d-4fb5-9d13-efce3f5e47ea.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007775",
    "title": "Multidirectional Trust-Based Security Mechanisms for Sinkhole Attack Detection in the RPL Routing Protocol for Internet of Things",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e2f943f6-4646-4a54-900f-31e93c84233a.png",
    "author": "EM SEREYRATH",
    "views": 8280,
    "desc": "និពន្ធ/រៀបចំដោយ៖ EM SEREYRATH • អ្នកអាន 8,280 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ea7aabf9-bdcb-4514-bfd6-21209556a22d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007774",
    "title": "Body composition and mortality in a cohort study of Chinese patients with hypertrophic cardiomyopathy",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/bfa5b80b-2b9f-4a9b-aa59-aca312a4b9e7.png",
    "author": "NGAN CHANSOKHON",
    "views": 43119,
    "desc": "និពន្ធ/រៀបចំដោយ៖ NGAN CHANSOKHON • អ្នកអាន 43,119 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d16e154d-a31a-4fc6-9be0-bac1369ae8f2.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007773",
    "title": "Cambodian university student perceptions of intrinsic and extrinsic motivation on academic performance",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/5cf8f31d-b392-4c8d-ba44-a4c8ee530099.png",
    "author": "PHAL CHENDA",
    "views": 7996,
    "desc": "និពន្ធ/រៀបចំដោយ៖ PHAL CHENDA • អ្នកអាន 7,996 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/df2f2750-2d17-45ee-a7dd-d23c47ff967a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007772",
    "title": "Reading movitation to promote students' reading comprehension",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/558c1127-ba0e-4046-814a-4efdbd8f2db3.png",
    "author": "KHEANG THAVY",
    "views": 7958,
    "desc": "និពន្ធ/រៀបចំដោយ៖ KHEANG THAVY • អ្នកអាន 7,958 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/74c6afc1-5ca6-4871-87b1-1cbd9d27a81c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007771",
    "title": "Students perception of the impact of AI generative tools in learning the English language",
    "grade": "cambridge",
    "gradeLabel": "English",
    "subject": "english",
    "icon": "🇬🇧",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b267d9e0-1887-46a6-a6aa-620f974ffe39.png",
    "author": "ON SREYLET",
    "views": 8634,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ON SREYLET • អ្នកអាន 8,634 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/c35a2c7e-90c7-4799-92f2-67fb72fc3588.pdf",
    "badge": "Cambridge/EN"
  },
  {
    "id": "sala-00007770",
    "title": "CAMBODIAN STUDENTS' MOTIVATION TO LEARN ENGLISH",
    "grade": "cambridge",
    "gradeLabel": "English",
    "subject": "english",
    "icon": "🇬🇧",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e4109fc4-155a-45c9-b376-f3ef11d619f2.png",
    "author": "SRIM SREYROTH",
    "views": 7216,
    "desc": "និពន្ធ/រៀបចំដោយ៖ SRIM SREYROTH • អ្នកអាន 7,216 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/73601754-7533-48b3-8e1b-889852dedfa0.pdf",
    "badge": "Cambridge/EN"
  },
  {
    "id": "sala-00007769",
    "title": "Guildline for marketing strategic planning to increase value of the restaurant",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c27b9673-f913-4a7b-9b76-ad5575a027e0.png",
    "author": "NUCHWARA BANTARAWON",
    "views": 9553,
    "desc": "និពន្ធ/រៀបចំដោយ៖ NUCHWARA BANTARAWON • អ្នកអាន 9,553 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b0be4b24-74af-4390-942d-e3ada45b1b37.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007768",
    "title": "TONLE SAP INFORMATION GUIDE",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c6c51574-14dc-4640-9a12-c045b5e3a8d2.png",
    "author": "KUNG SEAKLY",
    "views": 8685,
    "desc": "និពន្ធ/រៀបចំដោយ៖ KUNG SEAKLY • អ្នកអាន 8,685 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/38b83781-d6b9-4dc7-ac38-aa1f544476e0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007767",
    "title": "European Journal of Educational Management",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/5b7a8d6a-c5fb-428d-8a54-38ba1d76d6bd.png",
    "author": "HORN SOPHAL",
    "views": 6894,
    "desc": "និពន្ធ/រៀបចំដោយ៖ HORN SOPHAL • អ្នកអាន 6,894 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/665be7f2-cd64-4751-b5ee-b843573bb8d0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007766",
    "title": "សំណួរចម្លើយ(ប្រវត្តិវិទ្យា ជីវវិទ្យា រូបវិទ្យា)ថ្នាក់ទី១២",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១២",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/images/5a2004c7-4ccf-44ce-89eb-385cf8f45d83.png",
    "author": "វ៉ើ សុភ័ក",
    "views": 22752,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ើ សុភ័ក • អ្នកអាន 22,752 ដង",
    "url": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/pdf/817bbf34-0cef-4574-862a-2934e053cc8f.pdf",
    "badge": "ត្រៀមបាក់ឌុប"
  },
  {
    "id": "sala-00007765",
    "title": "សៀវភៅ ល្បែងសិក្សា សម្រាប់កុមារ",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/dca24ca5-8b3f-4928-bfbe-22aa50001928.png",
    "author": "សាលារៀនទន្សាយ",
    "views": 7808,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សាលារៀនទន្សាយ • អ្នកអាន 7,808 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/51a2a3de-f884-4830-9d33-76fe32f8a015.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007764",
    "title": "សទ្ទានុក្រម បច្ចេកសព្ទឌីជីថល",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/724b6a62-0154-4bbe-8049-f83de3bd5a30.png",
    "author": "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "views": 10205,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ • អ្នកអាន 10,205 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9e7a01d0-2bc5-4b18-89a0-e750b66804c7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007763",
    "title": "ព្រឹត្ដិបត្រព័ត៌មាន មូលនិធិគាំទ្រការបណ្ដុះបណ្ដាលសុខភាពសិក្សា និងការលើកកម្ពស់អេកូសុខភាព លេខ ២ នាថ្ងៃទី៦ ខែមេសា ឆ្នាំ២០២៦",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f09bc923-2955-4d91-a9c5-288c1b1b84ec.jpg",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 9155,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 9,155 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9834379b-3ae1-4a1e-b6d8-7dcc4eed3e40.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007762",
    "title": "សៀវភៅកម្រងស្នាដៃសិក្ខាកាមឆ្នាំ២០២៣",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/images/cfb1e03e-8f62-4cf9-abda-e23b42f8353c.jpg",
    "author": "លោកគ្រូ អោ ប៉េងសុង",
    "views": 12168,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកគ្រូ អោ ប៉េងសុង • អ្នកអាន 12,168 ដង",
    "url": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/pdf/deaaa799-d22a-4fe9-b430-9d86f888d60b.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007761",
    "title": "សៀវភៅកម្រងស្នាដៃសិក្ខាកាមឆ្នាំ២០២២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/images/fb0d4340-390b-4214-b57f-97804e1ddc69.jpg",
    "author": "លោកគ្រូ អោ ប៉េងសុង",
    "views": 10249,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកគ្រូ អោ ប៉េងសុង • អ្នកអាន 10,249 ដង",
    "url": "https://api.saladigital.org/public/orgs/655c42bf8936848736e51816/pdf/afd1f0f7-cb77-4a44-b1dd-68091bb67ab5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007760",
    "title": "ឯកសារណែនាំស្តីពីការប្រើប្រាស់បញ្ញាសិប្បនិម្មិត សម្រាប់គ្រូបង្រៀន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ddb0da1f-dd88-40ca-b6be-9332fee6c8bd.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា និងអង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា",
    "views": 25115,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា និងអង្គការសកម្មភាពសម្រាប់ការអប់រំនៅកម្ពុជា • អ្នកអាន 25,115 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b18db682-2652-4087-bbbc-9f6557aa82c0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007759",
    "title": "សៀភៅ Programming Arduino IDE",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/24e9ab4d-2d85-4f40-8054-4d60914e67a1.png",
    "author": "តាន ប៊ុនធា",
    "views": 20449,
    "desc": "និពន្ធ/រៀបចំដោយ៖ តាន ប៊ុនធា • អ្នកអាន 20,449 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ceeaf8aa-3f86-4114-bf6d-1580a2cae440.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007758",
    "title": "សៀភៅ ការគ្រប់គ្រងកសិដ្ឋាន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/eaecf3cb-7e7c-4624-8ed2-052bbd038f4d.png",
    "author": "ចាន់ ភារម្យ",
    "views": 17948,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ចាន់ ភារម្យ • អ្នកអាន 17,948 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e452232c-05e9-4352-a3d5-746680428d78.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007757",
    "title": "សៀភៅ ការសរសេរកម្មវិធីកុំព្យូទ័រឆ្នាំទី៣ ភាគ២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8dae5b24-c246-40d0-bb44-4781f0a8a49b.png",
    "author": "ខ្លឹម លាស់",
    "views": 15890,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ខ្លឹម លាស់ • អ្នកអាន 15,890 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5c006734-cf11-45c5-a000-45d99ebc3b97.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007756",
    "title": "សៀវភៅ ត្រួតពិនិត្យសត្វ​ និងសាច់",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c7885d86-5ee1-4c2a-8303-6da2e1b96988.png",
    "author": "លោក ម៉ាន់ វុធ",
    "views": 14635,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោក ម៉ាន់ វុធ • អ្នកអាន 14,635 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d202a948-0be1-4220-8cc3-aa705fd9f7ee.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007755",
    "title": "សៀវភៅ រុក្ខវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/6da628c6-f5ed-4a99-9c17-3d768ace788c.png",
    "author": "លោកស្រី គា រដ្ឋា",
    "views": 11224,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លោកស្រី គា រដ្ឋា • អ្នកអាន 11,224 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4d451d34-8ea8-4117-afd5-4f8fb6acfc72.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007754",
    "title": "សៀភៅ វិទ្យាសាស្រ្តដំណាំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ba3d3b5a-ce74-4491-809d-920f7d26a3e1.png",
    "author": "បណ្ឌិត ឈុន តូរី",
    "views": 9943,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិត ឈុន តូរី • អ្នកអាន 9,943 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d93d8d23-3e8f-41b7-97d3-bf28466c68a9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007753",
    "title": "សៀវភៅ សាកវប្បកម្មក្នុងផ្ទះបៃតង",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/9725ad89-c47d-4cce-80f5-1b6dee7a9bb5.png",
    "author": "បណ្ឌិត ឈុន តូរី",
    "views": 6582,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិត ឈុន តូរី • អ្នកអាន 6,582 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/f91426e1-5db9-47ab-aac2-d9080c1630d1.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007752",
    "title": "ឯកសារជំនួយស្មារតី ការអភិវឌ្ឍសំណួរតេស្តស្ដង់ដារប្រចាំខែ ឆ្លើយតបនឹងរង្វាយតម្លៃថ្នាក់តំបន់ SEA-PLM",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f0fcbcd7-5060-4a5b-9f66-eeb1143c34e3.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 12962,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 12,962 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a64074db-428e-41d0-b8bc-b8a0d9a08bdb.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007751",
    "title": "សៀភៅអាហាររូបត្ថម្ភនិងសុខភាព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/edf992ab-a2f8-449a-9c8b-d105ce2b0258.png",
    "author": "បណ្ឌិត ធន់ វឌ្ឍនា",
    "views": 11932,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិត ធន់ វឌ្ឍនា • អ្នកអាន 11,932 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/10d7547e-60fa-4428-877b-01dee49a6245.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007750",
    "title": "មូលដ្ឋានគ្រិៈទូរគមនាគមន៍អេឡិចត្រូនិចឆ្នាំទី២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b0dca6cd-1b3c-4d6d-afc8-7efbfcb3efc6.png",
    "author": "គីម សុចិត្ត",
    "views": 15536,
    "desc": "និពន្ធ/រៀបចំដោយ៖ គីម សុចិត្ត • អ្នកអាន 15,536 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e474917d-c699-4010-8ddc-39a3fed1bf8d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007749",
    "title": "ជីវវិទ្យា បណ្តុំវិទ្យាសាស្ត្រសង្គម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/fe16a353-553e-4e9e-82c0-78b25c467d79.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 17588,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 17,588 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3b317f2a-7eab-4064-bfb1-b3f4bdbe6632.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007748",
    "title": "ជីវវិទ្យា បណ្តុំវិទ្យាសាស្ត្រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "biology",
    "icon": "🧬",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/52369c59-849e-4c5a-9c4f-c50617af1dcc.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 15633,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 15,633 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3f8a1abe-1758-4ade-ad4d-1a1297bcd287.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007747",
    "title": "គេហសេដ្ឋកិច្ចវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/139e0fb7-4365-4887-908c-33cdc49c6cde.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 17124,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 17,124 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d88c0c03-83b1-48bf-93a2-5d6620e6c796.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007746",
    "title": "គីមីវិទ្យា បណ្តុំវិទ្យាសាស្ត្រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/4ff8ab75-ae76-4293-add9-275c4e788406.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 16109,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 16,109 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a6d37991-02b7-4809-aa50-8680cc7ff82a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007745",
    "title": "គីមីវិទ្យា បណ្តុំវិទ្យាសាស្ត្រសង្គម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2166e6a4-a3e6-438c-9f8f-49f87e96ea6a.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 13143,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 13,143 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6ed904c2-7639-432d-81a7-bbfcfa9eacac.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007744",
    "title": "ពីជគណិតថ្នាក់ទី៩",
    "grade": "grade_7_9",
    "gradeLabel": "ថ្នាក់ទី ៩",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/images/bf985c3a-faee-4e1f-b37a-be0ad5aa7d24.png",
    "author": "វ៉ើ សុភ័ក",
    "views": 11481,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ើ សុភ័ក • អ្នកអាន 11,481 ដង",
    "url": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/pdf/5168a8c2-6554-4432-ad40-db4979134727.pdf",
    "badge": "ត្រៀមឌីប្លូម"
  },
  {
    "id": "sala-00007743",
    "title": "គណិតវិទ្យា បណ្តុំវិទ្យាសាស្រ្តសង្គម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/55b399ab-2099-4a90-afb8-b26fe956ec2b.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 11742,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 11,742 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ace23126-b689-4eca-9082-c1a57f05ee93.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007742",
    "title": "គណិតវិទ្យា បណ្តុំវិទ្យាសាស្រ្ត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/6bc5fbd6-4df7-4bb5-9c11-e9ec29e17e1d.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 11284,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 11,284 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/7ab85f98-d748-4a01-bc59-9f4c319a5dde.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007741",
    "title": "ការបង្កាត់ពូជបម្លែងសែន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b13546a4-cf6c-4b9b-a24d-ee54442a5cd1.png",
    "author": "បណ្ឌិត ឈុន ភូរី",
    "views": 8206,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិត ឈុន ភូរី • អ្នកអាន 8,206 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a5b25391-b06e-4e2f-9213-eef7a48d1c7a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007740",
    "title": "កសិកម្មនិរន្តន៍ភាព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/4a462570-9ca2-4527-bce5-ad14e8b74674.png",
    "author": "បណ្ឌិត ឈុន ភូរី",
    "views": 8012,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បណ្ឌិត ឈុន ភូរី • អ្នកអាន 8,012 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e89d27f2-5b71-49cc-ade3-fd7e50ab5091.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007738",
    "title": "វិញ្ញាសាគណិតវិទ្យា (2015-2024 វិទ្យាសាស្រ្ត)",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/images/807588c7-652d-425d-9b00-88eee7289129.png",
    "author": "វ៉ើ សុភ័ក",
    "views": 10772,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ើ សុភ័ក • អ្នកអាន 10,772 ដង",
    "url": "https://api.saladigital.org/public/orgs/6a0c62edf421f1ef098ad5dd/pdf/fd3eb6a8-7d2f-4d86-80bf-75d8b1f68759.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007737",
    "title": "ទស្សនាវដ្តីស្រាវជ្រាវកម្ពុជាសម្រាប់ការអប់រំ និងស្ទែម ឆ្នាំទី៣ លេខ២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/eb9785be-8a2e-46a4-9264-1e3840e3a8f7.jpg",
    "author": "នាយកដ្ឋានស្រាវជ្រាវនិងនវានុវត្តន៍",
    "views": 14709,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានស្រាវជ្រាវនិងនវានុវត្តន៍ • អ្នកអាន 14,709 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6c3e7dd0-f507-46fc-a224-1fbab85e8810.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007736",
    "title": "បទបង្ហាញការយល់ដឹងពីជំងឺឆ្កែឆ្កួត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/65966e9bc3550c4f1ee5d374/images/78173526-09de-4ed9-a179-7cbaa7ff56e9.png",
    "author": "នៅ សុខគារ",
    "views": 7220,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នៅ សុខគារ • អ្នកអាន 7,220 ដង",
    "url": "https://api.saladigital.org/public/orgs/65966e9bc3550c4f1ee5d374/pdf/a7e4b0c9-a285-4178-adae-02191fead265.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007735",
    "title": "វិធីសាស្រ្តដែលគេ Hack Telegram និង ការការពារ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/26c678ed-dc88-4449-8de8-d5ab4529e1f4.png",
    "author": "Noobie_GMK",
    "views": 20649,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Noobie_GMK • អ្នកអាន 20,649 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8456f3f1-67e2-4f2e-ad25-e9265d2e42dd.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007734",
    "title": "អក្ខរកម្ម បញ្ញាសិប្បនិម្មិត (AI) ១០១",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/1526368b-3b89-4929-a788-e7460501f24f.png",
    "author": "Asean Foundation",
    "views": 20852,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Asean Foundation • អ្នកអាន 20,852 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b97046d3-bbea-4c06-9f24-6921d51f748b.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007732",
    "title": "បទបង្ហាញស្តីពី វឌ្ឍនភាពសាលារៀនគាំទ្រស្តង់ដាសាលាគំរូ នៅវិទ្យាល័យបាក់ទូក រាជធានីភ្នំពេញ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/53f06c50-cb8a-4fb4-9374-cba1db0e557c.png",
    "author": "យិន អ៊ាង",
    "views": 38329,
    "desc": "និពន្ធ/រៀបចំដោយ៖ យិន អ៊ាង • អ្នកអាន 38,329 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/f6155441-8339-4eba-b1f6-ef3260587fae.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007731",
    "title": "ឯកសារឧបសម្ព័ន្ធ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/759edcfd-3438-4145-8343-4cd318d40c9b.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 37578,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 37,578 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3fb8e18e-1966-4907-9783-0331c71ada80.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007730",
    "title": "សេចក្តីណែនាំ ស្តីពី ការរៀបចំថ្នាក់និទស្សន៍តាមមុខវិជ្ជា នៅតាមគ្រឹះស្ថានមធ្យមសិក្សាចំណេះទូទៅសាធារណៈ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/77b80ce5-3138-4efd-a5e2-72815e3ad858.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 37289,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 37,289 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5916f3b8-b33f-464d-83e5-6527ef62e942.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007726",
    "title": "សេចក្តីណែនាំ ស្តីពី ការអនុវត្តប្រកាសលេខ ១៥៥ អយក.ប្រក ចុះថ្ងៃទី២៩ ខែមករា ឆ្នាំ២០១៩ ស្តីពីការរៀបចំ និងការប្រព្រឹត្តទៅនៃការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ សម្រាប់ឆ្នាំសិក្សា ២០២៥-២០២៦",
    "grade": "exam",
    "gradeLabel": "វិញ្ញាសា",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/91516119-9074-4d01-b6ea-37f74a84c502.PNG",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 42953,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 42,953 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/2fa0d048-2ba0-4ab8-9ff0-80e697931502.pdf",
    "badge": "វិញ្ញាសាប្រឡង"
  },
  {
    "id": "sala-00007725",
    "title": "សេចក្តីណែនាំ ស្តីពី ការអនុវត្តប្រកាសលេខ ១៥៤ អយក ប្រក ចុះថ្ងៃទី២៩ ខែមករា ឆ្នាំ២០១៩ ស្តីពីការរៀបចំ និងការប្រព្រឹត្តទៅនៃការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាបឋមភូមិ សម្រាប់ឆ្នាំសិក្សា ២០២៥-២០២៦",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/cda93ad6-d7cb-4089-ac69-c0989c43b28b.PNG",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 41429,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 41,429 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/50262586-a18e-4e96-91e4-33293305ce5f.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007722",
    "title": "ការអភិវឌ្ឍកុមារផ្សារភ្ជាប់នឹងការអប់រំបឋមសិក្សា ថ្នាក់ទី១_៣",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/674fb1754a234b72bca534a0/images/85cc15bc-b123-4881-8ae8-feed9e316501.jpg",
    "author": "នាយកដ្ឋានបឋម",
    "views": 117588,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបឋម • អ្នកអាន 117,588 ដង",
    "url": "https://api.saladigital.org/public/orgs/674fb1754a234b72bca534a0/pdf/23056f03-f692-4511-aa22-db8de321e45c.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007721",
    "title": "ការអភិវឌ្ឍកុមារផ្សារភ្ជាប់នឹងការអប់រំកុមារនៅកម្រិតបឋមសិក្សា សម្រាប់ថ្នាក់ទី៤-៦",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/674fb1754a234b72bca534a0/images/a200279d-872b-4fe1-b341-007d830d7a34.jpg",
    "author": "នាយកដ្ឋានបឋម",
    "views": 113696,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបឋម • អ្នកអាន 113,696 ដង",
    "url": "https://api.saladigital.org/public/orgs/674fb1754a234b72bca534a0/pdf/3421bf37-bf05-49ec-a10d-f2320de569b4.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007720",
    "title": "សៀវភៅអនុគមន៍ថ្នាក់ទី១២ (បកជាភាសាខ្មែរ)",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១២",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/662b73c23604bd5053dd84aa/images/7bff798b-0236-4539-ad72-5e46a54f5142.PNG",
    "author": "ឡុង ឆើត",
    "views": 57637,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ឡុង ឆើត • អ្នកអាន 57,637 ដង",
    "url": "https://api.saladigital.org/public/orgs/662b73c23604bd5053dd84aa/pdf/a1941f13-10c8-4056-b9dd-7f58fa9b0bd2.pdf",
    "badge": "ត្រៀមបាក់ឌុប"
  },
  {
    "id": "sala-00007719",
    "title": "ការសិក្សាបែបសកម្ម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/efbd23d4-e8fd-4ee5-97c2-124d5cbda65b.jpg",
    "author": "អោក ណេត",
    "views": 45293,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អោក ណេត • អ្នកអាន 45,293 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/d101d760-791e-45f0-9a31-bf8399213edc.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007718",
    "title": "ការប្រើប្រាស់ល្បែងសិក្សាក្នុងការអប់រំ.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d13e1c14-d1ec-4c9a-8d99-981a578c8da5.png",
    "author": "នាយកដ្ធានបរិវត្តកម្មឌីជីថល",
    "views": 36002,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ធានបរិវត្តកម្មឌីជីថល • អ្នកអាន 36,002 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0492bf08-feb7-49df-bc66-b9a62f50483d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007717",
    "title": "ការគិតស៊ីជម្រៅ.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0ad049be-403d-4138-9337-b79515949c52.png",
    "author": "នាយកដ្ធានបរិវត្តកម្មឌីជីថល",
    "views": 34086,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ធានបរិវត្តកម្មឌីជីថល • អ្នកអាន 34,086 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/149f4006-02e6-4e32-8411-d540c1723e9d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007716",
    "title": "ការគិតបែបកុំព្យូទ័រ.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/52199a1c-d0c1-46cd-8394-92b6778f7c34.png",
    "author": "នាយកដ្ធានបរិវត្តកម្មឌីជីថល",
    "views": 33241,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ធានបរិវត្តកម្មឌីជីថល • អ្នកអាន 33,241 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/76329958-71fb-48af-917c-7a60060ad483.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007712",
    "title": "ច្បាប់ស្ដីពី ការប្រឆាំងការឆបោកតាមប្រព័ន្ធបច្ចេកវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a277cfb6-0b43-4dd0-9fca-d3bfc66c9200.png",
    "author": "ទសរកម",
    "views": 38028,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ទសរកម • អ្នកអាន 38,028 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/14306c81-e574-4291-a2eb-283e4db05718.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007709",
    "title": "AI Mastery Roadmap — 5 ដំណាក់កាល ⚡ Skill Next ជំនាញអនាគត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/687a34998e26fc80ea7b45a2/images/6d034df8-ff07-455b-9770-0625bda56337.png",
    "author": "អ៊ាត់ សួរ",
    "views": 33941,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អ៊ាត់ សួរ • អ្នកអាន 33,941 ដង",
    "url": "https://api.saladigital.org/public/orgs/687a34998e26fc80ea7b45a2/pdf/55624ce9-bc67-448b-b82b-c203af88df84.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007706",
    "title": "ស្លាយមេរៀន ការីលីនេអ៊ែរ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/660e59d4b02e47aeaff18b00/images/aba81a61-6f46-45c5-afd5-83aec90ca5b1.PNG",
    "author": "Yun Chornny",
    "views": 48465,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Yun Chornny • អ្នកអាន 48,465 ដង",
    "url": "https://api.saladigital.org/public/orgs/660e59d4b02e47aeaff18b00/pdf/7e30594a-d1d5-494e-abb2-d83d086afc94.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007704",
    "title": "បណ្ដុំសំណេរតែងសេចក្តី ភាគ ៣",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0e24a3df-ef8e-4d4f-92bf-b2399476bc17.png",
    "author": "វណ្ណ ធារ៉ា",
    "views": 72852,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វណ្ណ ធារ៉ា • អ្នកអាន 72,852 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/759aef0f-c71e-461d-982e-a89de2d3030f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007703",
    "title": "បណ្ដុំសំណេរតែងសេចក្តី ភាគ ២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/bf572829-838a-401c-b267-eaced3b5fd4f.png",
    "author": "វណ្ណ ធារ៉ា",
    "views": 69135,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វណ្ណ ធារ៉ា • អ្នកអាន 69,135 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/91935812-5fa1-4dac-9000-ac8823d4fd22.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007702",
    "title": "បណ្ដុំសំណេរតែងសេចក្តី ភាគ ១",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8f91fa03-3365-44c8-bfcb-a2035dda1c1b.png",
    "author": "វណ្ណ ធារ៉ា",
    "views": 63616,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វណ្ណ ធារ៉ា • អ្នកអាន 63,616 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3191ed8e-506d-4d7f-925a-6223f47e9050.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007701",
    "title": "ដកស្រង់ពីបទពិសោធន៍ COPAI នៅកម្ពុជា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b0a96aa7-5dc7-4570-9318-ea4deb41c16e.png",
    "author": "ESCAP",
    "views": 18790,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ESCAP • អ្នកអាន 18,790 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/65f16830-3ce9-4814-b956-15e4da5d20f1.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007700",
    "title": "The COPAI Experience in Cambodia",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/205b0492-0a46-45e1-852f-75175dcc2356.png",
    "author": "ESCAP",
    "views": 16374,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ESCAP • អ្នកអាន 16,374 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/0dcb9a73-77ed-4cdc-a44e-edcbcba6e341.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007662",
    "title": "ការគិតបែបស៊ីជម្រៅ (Critical Thinking)",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/images/fd413262-2802-4f00-adc9-b6035a08e625.png",
    "author": "សុខា វិសាលពេជ្រ",
    "views": 30818,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សុខា វិសាលពេជ្រ • អ្នកអាន 30,818 ដង",
    "url": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/pdf/33d0a21d-b0ac-4215-9b2d-504a04548968.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007661",
    "title": "ការប្រើប្រាស់បញ្ញាសិប្បនិម្មិតក្នុងវិស័យអប់រំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/images/daa9544c-26f8-493d-8367-fec884ff2e0f.png",
    "author": "អាត ភិរុណ",
    "views": 24363,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អាត ភិរុណ • អ្នកអាន 24,363 ដង",
    "url": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/pdf/1439d418-975d-4ef3-babe-a9be84847152.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007660",
    "title": "ការគិតបែបកុំព្យូទ័រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/images/bca71e5c-92e4-4554-b13b-83402fb9b315.png",
    "author": "អឺម គឹមហុង",
    "views": 30180,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អឺម គឹមហុង • អ្នកអាន 30,180 ដង",
    "url": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/pdf/4d39c60b-7a17-4fea-8e06-2ca5a9ef2554.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007659",
    "title": "ការប្រើប្រាស់ល្បែងសិក្សាក្នុងការអប់រំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/images/e2ed60db-5d7d-4359-805f-d8215b485ce4.png",
    "author": "នៅ សុគារ",
    "views": 28845,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នៅ សុគារ • អ្នកអាន 28,845 ដង",
    "url": "https://api.saladigital.org/public/orgs/6633190c3604bd5053dda4dd/pdf/6ee14147-dbc6-4dea-8a02-541edb881db5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007649",
    "title": "ការប្រកួតប្រជែងបច្ចេកវិទ្យា និងសហគ្រិនភាព Technovation Girls Cambodia X Future Digital Talents",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/64b8a4fd4c132a9ce60a8b92/images/86727ce1-578c-424e-a729-3d4883ec97ac.png",
    "author": "នាយកដ្ឋានបរិវត្តកម្មឌីជីថល",
    "views": 29170,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានបរិវត្តកម្មឌីជីថល • អ្នកអាន 29,170 ដង",
    "url": "https://api.saladigital.org/public/orgs/64b8a4fd4c132a9ce60a8b92/pdf/7b995468-6e15-4326-b4d1-0dcf30aed33e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007616",
    "title": "ប្រលោមកំណាព្យ \\\"ចិត្តជានារី\\\"",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/64c22d1f4c132a9ce61bd63d/images/41c52f28-8a63-4c0b-bf61-8677dda77e0a.jpg",
    "author": "សាម សុនិត",
    "views": 65163,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សាម សុនិត • អ្នកអាន 65,163 ដង",
    "url": "https://api.saladigital.org/public/orgs/64c22d1f4c132a9ce61bd63d/pdf/6c1bcd58-5a9d-471a-b055-2adbb71b2293.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007613",
    "title": "សង្ខេបទ្រឹស្តីអក្សរសិល្ប៍ខ្មែរ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/6684ff28c293d1d91530e436/images/e92c3a49-8e46-4ab2-bd7a-6d34bc78c3fa.PNG",
    "author": "នី ធារ៉ា",
    "views": 62748,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នី ធារ៉ា • អ្នកអាន 62,748 ដង",
    "url": "https://api.saladigital.org/public/orgs/6684ff28c293d1d91530e436/pdf/1c9869f7-22a3-43f0-93d0-625f226e55ac.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007612",
    "title": "សេចក្តីពន្យល់អំពីក្រមរដ្ឋប្បវេណី (របបតំណាង)",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8cd4c262-574d-469f-933d-3e4a58b3b47f.png",
    "author": "Niimi Ikufumi",
    "views": 81736,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Niimi Ikufumi • អ្នកអាន 81,736 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9967fe55-0334-404c-a07c-a4df281151e9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007611",
    "title": "សៀវភៅណែនាំ ច្បាប់រដ្ឋប្បវេណី ករណីប្រទេសជប៉ុន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/2ef5670d-1ee9-4b7d-98a0-10dc5a495596.png",
    "author": "គង់ ទេលី",
    "views": 74792,
    "desc": "និពន្ធ/រៀបចំដោយ៖ គង់ ទេលី • អ្នកអាន 74,792 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/efd20f95-4c17-48ec-9636-ffd27e2d4a98.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007610",
    "title": "សិទ្ធិឧបាទេសកម្មរបស់ម្ចាស់បំណុល និងសិទ្ធិលុបចោលនូវអំពើដែលនាំឲ្យខូចប្រយោជន៍",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/c625b65d-7431-4907-a83c-f0b6d206991b.png",
    "author": "ការិយាល័យទំនាក់ទំនងអន្តរជាតិនៃក្រសួងយុត្តិធម៌ ប្រទេសជប៉ុន",
    "views": 66928,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ការិយាល័យទំនាក់ទំនងអន្តរជាតិនៃក្រសួងយុត្តិធម៌ ប្រទេសជប៉ុន • អ្នកអាន 66,928 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/18768f3c-2dbb-44f9-875b-ec4a1573f9fb.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007609",
    "title": "សន្តតិកម្ម និងមតកសាសន៍",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/94da5988-8248-4de8-a7ac-9c6ec194ae3a.png",
    "author": "ការិយាល័យទំនាក់ទំនងអន្តរជាតិនៃក្រសួងយុត្តិធម៌ ប្រទេសជប៉ុន សាស្ត្រាចារ្យ TSUJI Yasuhiko",
    "views": 62870,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ការិយាល័យទំនាក់ទំនងអន្តរជាតិនៃក្រសួងយុត្តិធម៌ ប្រទេសជប៉ុន សាស្ត្រាចារ្យ TSUJI Yasuhiko • អ្នកអាន 62,870 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/8823e863-2a67-41bd-a2cd-4aec70f1dc6c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007608",
    "title": "ប្រកាសស្តីពីនីតិវិធីនៃការចុះបញ្ជីកិច្ចសន្យាទ្រព្យសម្បត្តិប្តីប្រពន្ធ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3f360078-d72f-4343-bb08-c5caca21882b.png",
    "author": "ក្រុមការងារក្រសួងយុត្តិធម៌ និង ទីប្រឹក្សាផ្នែកច្បាប់របស់ទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិនៃប្រទេសជប៉ុន (JICA) ប្រចាំក្រសួងយុត្តិធម៌",
    "views": 56437,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមការងារក្រសួងយុត្តិធម៌ និង ទីប្រឹក្សាផ្នែកច្បាប់របស់ទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិនៃប្រទេសជប៉ុន (JICA) ប្រចាំក្រសួងយុត្តិធម៌ • អ្នកអាន 56,437 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/1a2a22b1-6776-4d79-8e29-6d550d7ae347.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007607",
    "title": "លិខិតបទដ្ឋានគតិយុត្តនានា ពាក់ព័ន្ធនឹងការគ្រប់គ្រងបុគ្គលិក រដ្ឋបាលថ្នាក់ក្រោមជាតិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/bbb97802-100b-46a3-839d-70b1d216190f.png",
    "author": "ក្រសួងមុខងារសាធារណៈ",
    "views": 41026,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងមុខងារសាធារណៈ • អ្នកអាន 41,026 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/055d3059-c086-4ac3-8e5c-d38deea8fa24.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007606",
    "title": "សេចក្តីផ្តើមនីតិភូមិបាល",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/42c59e6e-5d34-46f5-a4f0-4c0e6ed9c8d7.png",
    "author": "មេធាវី សិទ្ធិស័ក្តិ",
    "views": 23024,
    "desc": "និពន្ធ/រៀបចំដោយ៖ មេធាវី សិទ្ធិស័ក្តិ • អ្នកអាន 23,024 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5f08657b-21f6-4df9-8f92-de231476152f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007605",
    "title": "សៀវភៅគ្រូអក្ខរកម្មឌីជីថលសម្រាប់មធ្យមសិក្សាកម្រិតខ្ពស់",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "ict",
    "icon": "💻",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/721620ba-ae35-4572-925a-7bed3e87fe93.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 27660,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 27,660 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/42f66d05-35d3-474d-8f65-6c2cfed1c3b6.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007604",
    "title": "ធម្មនុញអង្គការសហប្រជាជាតិ និងលក្ខន្តិកៈនៃ តុលាការយុត្តិធម៌អន្តរជាតិ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8b2ffad7-82f0-4864-9945-4bae27f48549.png",
    "author": "វ៉ាន់ ច័ន្ទតារា",
    "views": 17623,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ាន់ ច័ន្ទតារា • អ្នកអាន 17,623 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/efbf6a66-c013-4d4e-af31-92c2a50d94d5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007603",
    "title": "ច្បាប់ការទូត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/4ab0868a-d51e-4b9c-88c3-fe593790faa3.png",
    "author": "វ៉ាន ច័ន្ទតារា​",
    "views": 17356,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ាន ច័ន្ទតារា​ • អ្នកអាន 17,356 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/fe08f604-88a3-4b71-a23d-3b0b36ef545a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007602",
    "title": "ប្រវត្តិសាស្ត្រប្រទេសកម្ពុជា.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/44c56442-e39e-4ff9-9b4c-e55581d7e943.png",
    "author": "អាដេម៉ា ឡឺក្លែរ",
    "views": 49029,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អាដេម៉ា ឡឺក្លែរ • អ្នកអាន 49,029 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/1d8fe7dd-9229-4c71-98fe-55f71248bfd0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007601",
    "title": "ប្រវត្តិសាស្ត្រខ្មែរ.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/77491bb9-dacd-4ae7-8dc4-c76bc82600b7.png",
    "author": "មីសែល ត្រាណេ",
    "views": 46685,
    "desc": "និពន្ធ/រៀបចំដោយ៖ មីសែល ត្រាណេ • អ្នកអាន 46,685 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d7ca5d87-58cc-4e5d-b72a-373552aabfc8.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007600",
    "title": "ប្រវត្តិសាស្ត្រខ្មែរ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/72511964-5a5a-4887-8c3f-461ec60f9e97.png",
    "author": "ត្រឹង ទា",
    "views": 37903,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ត្រឹង ទា • អ្នកអាន 37,903 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/2ca046b4-ac83-476e-9ad0-a0119c03af08.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007599",
    "title": "ព្រំដែននៃប្រទេសកម្ពុជា.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3bfae823-e641-497a-b756-663e28a39db6.png",
    "author": "សារិន​ ឆាក",
    "views": 34518,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សារិន​ ឆាក • អ្នកអាន 34,518 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/11d065fc-f90f-48e1-9f06-e829dbcda7c7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007598",
    "title": "សន្និបាត បូកសរុបវាយតម្លៃលទ្ធផលការងារអប់រំ យុវជន និងកីឡាឆ្នាំសិក្សា ២០២៤-២០២៥ និងទិសដៅការងារឆ្នាំសិក្សា២០២៥-២០២៦",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/66e7e2423dbbe7c3c8ba6e46/images/fe76bb42-c7c9-47e6-b71f-90b27e96d936.png",
    "author": "មន្ទីរអប់រំ យុវជន និងកីឡាខេត្តតាកែវ",
    "views": 23225,
    "desc": "និពន្ធ/រៀបចំដោយ៖ មន្ទីរអប់រំ យុវជន និងកីឡាខេត្តតាកែវ • អ្នកអាន 23,225 ដង",
    "url": "https://api.saladigital.org/public/orgs/66e7e2423dbbe7c3c8ba6e46/pdf/4b4cbd25-ecf2-4015-b51f-2fbb2dfb8e4c.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007597",
    "title": "ឯកសារស្ដីពីការអប់រំបរិយាបន្នគរុសិស្ស.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/6f2aea2f-cb1b-4a70-9385-11af9039be06.png",
    "author": "ក្រសួងអប់រំ យុវជន និង​កីឡា​",
    "views": 10339,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និង​កីឡា​ • អ្នកអាន 10,339 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3808acb0-a72b-4958-9840-ace4865b21c1.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007596",
    "title": "ស្ដង់ដារវិជ្ជាជីវៈគ្រូបង្រៀន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d41c535a-e54f-4812-9ca4-9eaab17ba581.png",
    "author": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "views": 11608,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និងកីឡា • អ្នកអាន 11,608 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/eed3a7e9-3c1d-4576-ad50-17a2ea0a976d.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007595",
    "title": "សៀវភៅណែនាំសម្រាប់អ្នកបណ្ដុះបណ្ដាលពីការអប់រំបរិយាបន្នពិការភាព",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d7637926-2d3f-4cdb-b358-2f93357d3025.png",
    "author": "Light for the World Cambodia",
    "views": 9869,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Light for the World Cambodia • អ្នកអាន 9,869 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6d2147fb-3ea2-44cc-88c7-94b787709a53.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007594",
    "title": "ឯកសារស្តីពីការអប់រំបរិយាបន្ន",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/684bbff7-6d69-4de0-8069-7d896a18e656.png",
    "author": "ក្រសួងអប់រំ យុវជន និង​កីឡា​",
    "views": 8573,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន និង​កីឡា​ • អ្នកអាន 8,573 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/18719b3c-4187-4330-8d28-342e284c3cff.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007593",
    "title": "ការអប់រំកុមារសតិបញ្ញា",
    "grade": "grade_1_6",
    "gradeLabel": "បឋមសិក្សា",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/58f74b8c-cad5-4766-b93c-bc9a80215f9b.png",
    "author": "ក្រសួងអប់រំ យុវជន​ និង​កីឡា​",
    "views": 8269,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងអប់រំ យុវជន​ និង​កីឡា​ • អ្នកអាន 8,269 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6f438a44-9bb0-4010-8560-e02bf677f422.pdf",
    "badge": "បឋមសិក្សា"
  },
  {
    "id": "sala-00007592",
    "title": "សន្ទានុក្រមពាក្យច្បាប់ និងរដ្ឋបាល",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/f30395f1-1014-4628-b384-b14c5766b89b.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 10601,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 10,601 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/07717c17-7921-4445-92d0-bd54668581e9.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007591",
    "title": "សន្ទានុក្រមវិទ្យាសាស្រ្តនយោបាយ និងកាទូត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/549d79b4-2c45-47a0-a3bc-47c5d02628f0.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 9746,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 9,746 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/daae9c32-3a43-42f3-a8d6-bc491abaf58f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007590",
    "title": "សន្ទានុក្រមភាសាវិទ្យា និងអក្សរសិល្ប៌",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/edea9e1b-29f5-416a-bad3-f7d6ed01cc18.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 8720,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 8,720 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/be9554f1-fb20-4d66-84a9-507219c4f0eb.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007589",
    "title": "សទ្ទានុក្រមពាក្យច្បាប់ ផ្នែករដ្ឋប្បវេណី​ និងនីតិវិធីរដ្ឋប្បវេណី.",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/fa4b7dea-ebe2-4b98-a4c0-4ed360fa8089.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 8200,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 8,200 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/700a1981-c21d-4820-9865-cf757d8e48bb.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007588",
    "title": "សន្ទានុក្រមវេជ្ជសាស្រ្ត_និងកសិកម្ម",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a1959bc4-0196-4266-8b82-d85e0cc3af47.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 7280,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 7,280 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/d2a2018e-573a-4166-9e99-974b7db1910e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007587",
    "title": "សន្ទានុក្រមទស្សនវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/7680c26b-8f21-4218-892d-0b08e2ccaa20.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 7399,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 7,399 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/14d82dde-e5ca-4945-954e-1e013c58a637.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007586",
    "title": "សន្ទានុក្រមវិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/a2025008-2f37-4518-b63a-d358c1a0bf17.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 7326,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 7,326 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/29ce46d4-6962-496c-8ed0-2e82cfa56846.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007585",
    "title": "សន្ទានុក្រមវិទ្យាស្រ្តសេដ្ឋកិច្ច",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/48c0f7fa-c7fd-40b4-bd22-5708bedbc3d4.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 7084,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 7,084 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/80c59b3a-5574-43fa-b477-c89ac52e70f5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007584",
    "title": "សទ្ទានុក្រម វប្បធម៌ និង វិចិត្រសិល្បៈ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/71a3a251-38d5-482e-b4bb-b7da71671d06.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 7086,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 7,086 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3f88c1bd-9c0e-4ebb-9a31-22ba2ffcd2ba.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007583",
    "title": "សន្ទានុក្រមវប្បធម៌_និងវិចិត្រសិល្បៈ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/1dfd4f4b-472c-4c68-8481-ba7d3e3490fe.png",
    "author": "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    "views": 6797,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ • អ្នកអាន 6,797 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/26f7d632-667d-4e4e-b717-255ea6fbbc16.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007582",
    "title": "ច្បាប់កុងស៊ុល Consular Law",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b57caa3d-50d8-4475-b021-e8ffb86c2995.png",
    "author": "សាស្ត្រាចារ្យបណ្ឌិត វ៉ាន់ ច័ន្ទតារា",
    "views": 5540,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សាស្ត្រាចារ្យបណ្ឌិត វ៉ាន់ ច័ន្ទតារា • អ្នកអាន 5,540 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4aee576a-376b-44c0-b484-960d704a884e.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007581",
    "title": "ក្របខ័ណ្ឌកម្មវិធីអប់រំគ្រូបង្រៀន មត្តេយ្យសិក្សាតាមប្រព័ន្ធក្រេឌីត ១២+២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "physics",
    "icon": "⚡",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/df4b77e8-368f-4595-a90e-c051d0bab25e.png",
    "author": "នាយកដ្ឋានកិច្ចការបណ្តុះបណ្តាល",
    "views": 17059,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នាយកដ្ឋានកិច្ចការបណ្តុះបណ្តាល • អ្នកអាន 17,059 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/fe33e295-18ec-4065-b1a7-62a5b745c950.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007580",
    "title": "សៀវភៅវិធីប្រើសញ្ញាវណ្ណយុត្តិ_និងខណ្ឌ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d2ff0743-a9d4-4b51-b115-dc2113da4c05.png",
    "author": "នួន ប៊ុត",
    "views": 6504,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នួន ប៊ុត • អ្នកអាន 6,504 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/bfd1b145-7ca9-4074-a13b-1a74061a6da7.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007579",
    "title": "ស្វីតចំនួនពិតថ្នាក់ទី ១១.",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/cc7c8aa4-a8ce-425d-92ca-efb1efe4b5a0.png",
    "author": "ឃុយ រាត្រី",
    "views": 84020,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ឃុយ រាត្រី • អ្នកអាន 84,020 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5243ecff-c3d4-4fc8-a593-66e4ae04aca6.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007578",
    "title": "គណិតវិទ្យាថ្នាក់ទី_១១",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d33edcd8-50e8-4428-9e05-f3ddb091b085.png",
    "author": "ស្រ៊ុន ពន្លឺ",
    "views": 93931,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ស្រ៊ុន ពន្លឺ • អ្នកអាន 93,931 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/27aa53f9-19c2-4023-b414-36d7440da43a.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007577",
    "title": "គន្លឹះធរណីមាត្រថ្នាក់ទី ១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/fdf212f9-16c0-47ab-9924-9a07bad83f58.png",
    "author": "គន្លឹះធរណីមាត្រថ្នាក់ទី ១១",
    "views": 85693,
    "desc": "និពន្ធ/រៀបចំដោយ៖ គន្លឹះធរណីមាត្រថ្នាក់ទី ១១ • អ្នកអាន 85,693 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4b4ce3d7-78db-4448-9534-ce84dc53a04b.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007576",
    "title": "ស្វ៊ីតចំនួនពិត ថ្នាក់ទិ ១១​",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/95bc4201-cc96-46a8-b616-fe5c978db739.png",
    "author": "ហុីង វុទ្ធី",
    "views": 64077,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហុីង វុទ្ធី • អ្នកអាន 64,077 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b34921e8-58b2-4da5-b9e7-5bfd8a1286f0.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007575",
    "title": "ដេរីវេនៃអនុគមន៍ថ្នាក់ទី ១១ ១២",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/4c377de1-ce34-4c9d-a15b-a6785fa66e04.png",
    "author": "វ៉េង ស្រុឺន",
    "views": 40796,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉េង ស្រុឺន • អ្នកអាន 40,796 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/c9f03a7b-38c9-43b0-b189-424b6ca17d23.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007574",
    "title": "សៀវភៅ ឆ្នាំទី១ នៃដំណើរឆ្ពោះទៅសម្រេចចក្ខុវិស័យកម្ពុជា ឆ្នាំ២០៥០",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/03e6912d-d1ff-43ce-98ff-4c71a7320e76.png",
    "author": "អង្គភាពអ្នកនាំពាក្យរាជរដ្ឋាភិបាល",
    "views": 5168,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អង្គភាពអ្នកនាំពាក្យរាជរដ្ឋាភិបាល • អ្នកអាន 5,168 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/95b76404-15c3-461a-8ae7-1b4068e79c53.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007573",
    "title": "អនុក្រឹត្យ ស្តីពី ស្តីពីការរៀបចំ និង ការប្រព្រឹត្តទៅ របស់ក្រសួងយុត្តធម៌",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/99514d61-6125-4351-81e8-ffe6a79ccb06.png",
    "author": "ក្រសួងយុត្តធម៌",
    "views": 4696,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ក្រសួងយុត្តធម៌ • អ្នកអាន 4,696 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/ecf4710b-54aa-439e-a933-a6a94da85fe5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007572",
    "title": "ស្វីតចំនួនពិតថ្នាក់ទី ១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/08d1d72b-9b1c-48e2-91fa-9f7037999106.png",
    "author": "បាន សម្បត្តិ",
    "views": 27521,
    "desc": "និពន្ធ/រៀបចំដោយ៖ បាន សម្បត្តិ • អ្នកអាន 27,521 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/acbe396c-65c2-442b-b0b4-cfa532cbbde1.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007571",
    "title": "អិចស្ប៉ូណង់ស្យែល ថ្នាក់ទី ១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/6db5f8d9-2b42-44cb-bc51-d4f654893c5c.png",
    "author": "ឃុយ​ រាត្រី​",
    "views": 8651,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ឃុយ​ រាត្រី​ • អ្នកអាន 8,651 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/a69bdf43-d834-4a8b-998c-22c005f2a257.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007570",
    "title": "សមីការត្រីកោណមាត្រ សម្រាប់ថ្នាក់ទី ១១​ និង​ ១២​",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/cebb63df-c6a6-42cb-ab37-73fbdf603a79.png",
    "author": "សុខ ពិសិដ្ឋ",
    "views": 8080,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សុខ ពិសិដ្ឋ • អ្នកអាន 8,080 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/9f3b400b-f3f5-4050-8485-8de9b788587c.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007569",
    "title": "លីមីត និង ដេរីវេ​ ថ្នាក់ទី១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/66bcac0a-8d25-4a82-af18-5325e50a6036.png",
    "author": "សន ពៅ",
    "views": 10394,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សន ពៅ • អ្នកអាន 10,394 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6f0e08f1-1eb1-4027-8fde-01c8e844b806.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007568",
    "title": "សង្ខេបប្រវត្តិវិទ្យាថ្នាក់ទី_១១",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "social",
    "icon": "🌍",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3f07288b-818d-4e99-9cef-b5326b870cff.png",
    "author": "វ៉ើ​ សុភ័ក",
    "views": 31575,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វ៉ើ​ សុភ័ក • អ្នកអាន 31,575 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e50b99b5-17fa-456f-8bf3-dc80134223bc.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007567",
    "title": "អនុគមន៍ត្រីកោណមាត្រ សម្រាប់ថ្នាក់ទី ១១ និង សិស្សពូកែគណិតវិទ្យា",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/e3f22c87-e524-464c-ab52-c07c09b76373.png",
    "author": "លឹម ផល្គុន",
    "views": 10136,
    "desc": "និពន្ធ/រៀបចំដោយ៖ លឹម ផល្គុន • អ្នកអាន 10,136 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/3eca3e1d-7804-4d82-94aa-326026bec272.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007566",
    "title": "គន្លឹះស្វ៊ីតចំនួនពិត",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/0f6baa7c-d68b-4f59-b7a6-d1848648b785.png",
    "author": "ងួន រស្មី",
    "views": 5928,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ងួន រស្មី • អ្នកអាន 5,928 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/994570bf-0665-4307-a99e-3651dc31106b.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007565",
    "title": "សៀវភៅអនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/5c3e0a8e-8b86-40cb-bd83-322607f92e86.png",
    "author": "វិទ្យាស្ថានជាតិអប់រំ គរុនិស្សិត",
    "views": 5986,
    "desc": "និពន្ធ/រៀបចំដោយ៖ វិទ្យាស្ថានជាតិអប់រំ គរុនិស្សិត • អ្នកអាន 5,986 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/1e21f3da-c8d3-4cb8-887d-6f005538643f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007564",
    "title": "ទស្សនាវដ្តីគន្លឹះអប់រំ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/images/9c629c04-38e9-4860-8e72-5d844c20653b.png",
    "author": "Stanislas Kowaski",
    "views": 27630,
    "desc": "និពន្ធ/រៀបចំដោយ៖ Stanislas Kowaski • អ្នកអាន 27,630 ដង",
    "url": "https://api.saladigital.org/public/orgs/678887b48bd9e50b5fd5a02d/pdf/a1a7f7f1-f2f9-4e3e-a11d-d808270deb81.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007562",
    "title": "សៀវភៅកិច្ចការផ្ទះគណិតវិទ្យ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3acfa968-73b0-481e-a58a-c100bbd935e7.png",
    "author": "ហ៊ីង វុទ្ធី",
    "views": 6014,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ហ៊ីង វុទ្ធី • អ្នកអាន 6,014 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b5cae25a-0452-4d81-b0c1-3618099116ec.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007561",
    "title": "លំហាត់ស្រាវជ្រាវគណិតវិទ្យា​ ថ្នាក់ទី ១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "math",
    "icon": "📐",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/ac186501-8c76-41bb-b33c-b03d632c0de5.png",
    "author": "ម៉ៅសៀវ ហ៊្វុង",
    "views": 9442,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ម៉ៅសៀវ ហ៊្វុង • អ្នកអាន 9,442 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/b3d2d969-2c80-474a-ad92-07a3d9dd74ae.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007560",
    "title": "មេរៀនសង្ខេបទស្សនៈវិជ្ជា ថ្នាក់ទី ១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/8d1c6849-bdc6-48d6-8125-e40591094fd7.png",
    "author": "នង ប៊ុនហេង",
    "views": 15134,
    "desc": "និពន្ធ/រៀបចំដោយ៖ នង ប៊ុនហេង • អ្នកអាន 15,134 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/5e73eeb8-9276-45bf-bb72-0f50b2a1ce46.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007559",
    "title": "សៀវភៅលំហាត់ គីមីវិទ្យា ថ្នាក់ទី១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "chemistry",
    "icon": "🧪",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/1c40fe6c-ae06-4abc-a7ed-b5bc2eb97e77.png",
    "author": "អ៊ុង ជីលី",
    "views": 11467,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អ៊ុង ជីលី • អ្នកអាន 11,467 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/f0da7de0-9095-4632-a2e6-e5cb9432ff8c.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007558",
    "title": "សៀវភៅកិច្ចការផ្ទះ ភាសាខ្មែរ ថ្នាក់ទី១១",
    "grade": "grade_10_12",
    "gradeLabel": "ថ្នាក់ទី ១១",
    "subject": "khmer",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/1a4ade65-35e9-4150-8d50-7d50dfd0ae1c.png",
    "author": "អ្នកគ្រូ វណ្ណ ធារា",
    "views": 61945,
    "desc": "និពន្ធ/រៀបចំដោយ៖ អ្នកគ្រូ វណ្ណ ធារា • អ្នកអាន 61,945 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/e06f655e-669d-4fb3-bee2-54c2e098950b.pdf",
    "badge": "វិទ្យាល័យ"
  },
  {
    "id": "sala-00007557",
    "title": "ទែម៉ូឌីណាមិច & រលក ភាគទី២",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/52e5205e-6ca1-44da-ae01-d538bb584ec7.png",
    "author": "សឿង សុធា",
    "views": 4868,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សឿង សុធា • អ្នកអាន 4,868 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/6af5a083-461b-4783-9955-c44d3e54df08.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007556",
    "title": "អគ្គិសនី ភាគទី៣",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/d79f64eb-bc1e-4426-8365-7b7355c6ef4b.png",
    "author": "សឿង សុធា",
    "views": 4822,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សឿង សុធា • អ្នកអាន 4,822 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/4eb2dfaf-8641-46ac-9f9f-4f64c5249219.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007555",
    "title": "មេកានិច ភាគ ១",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/25fb4728-09b1-4a8d-8ee9-de1c9917abae.png",
    "author": "សឿង​ សធា",
    "views": 4832,
    "desc": "និពន្ធ/រៀបចំដោយ៖ សឿង​ សធា • អ្នកអាន 4,832 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/badfabda-2870-4cd0-9e39-01423891390f.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007554",
    "title": "នីតិអន្តរជាតិសាធារណៈ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/60b3f4d6-72ca-419c-9df7-0b340cc0e5fd.png",
    "author": "ផល_ពិសាល",
    "views": 3713,
    "desc": "និពន្ធ/រៀបចំដោយ៖ ផល_ពិសាល • អ្នកអាន 3,713 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/7f42c14a-35fe-47c5-8af9-9b36e6dac2e5.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007553",
    "title": "អត្ថបទស្រាវជ្រាវ ខ្លឹមសារស្តីពី នីតិសមុទ្រ",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/915a00f7-fde0-4841-86e6-77cf8288582a.png",
    "author": "មហាវិទ្យាល័យនីតិសាស្ត្រ និងវិទ្យាសាស្ត្រសង្គម",
    "views": 16203,
    "desc": "និពន្ធ/រៀបចំដោយ៖ មហាវិទ្យាល័យនីតិសាស្ត្រ និងវិទ្យាសាស្ត្រសង្គម • អ្នកអាន 16,203 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/bc9be826-cc3d-479d-9737-aebad7016581.pdf",
    "badge": "MoEYS"
  },
  {
    "id": "sala-00007525",
    "title": "Guidance on AI and Children",
    "grade": "grade_10_12",
    "gradeLabel": "វិទ្យាល័យ",
    "subject": "other",
    "icon": "📘",
    "thumbnail": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/b0e4ac33-f2cf-4b56-99f4-5f06ba205f9a.png",
    "author": "UNICEF",
    "views": 17173,
    "desc": "និពន្ធ/រៀបចំដោយ៖ UNICEF • អ្នកអាន 17,173 ដង",
    "url": "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/pdf/1a4eb944-4276-4839-a8d3-48b3a92ccc05.pdf",
    "badge": "MoEYS"
  }
];;

// ៥. សំណួរគំរូ AI សម្រាប់បង្រៀន និងរៀន (1-Click Ready AI Prompts)
const aiPromptTemplates = [
  {
    id: "prompt-1",
    title: "📋 បង្កើតកិច្ចតែងការបង្រៀន (Lesson Plan Generator)",
    category: "👨‍🏫 សម្រាប់គ្រូ",
    icon: "📝",
    desc: "ជួយលោកគ្រូ-អ្នកគ្រូរៀបចំកិច្ចតែងការ ៤៥-៩០ នាទី តាមស្តង់ដារអប់រំសតវត្សរ៍ទី២១",
    prompt: "សូមជួយតែងកិច្ចតែងការបង្រៀនមួយ សម្រាប់មុខវិជ្ជា [ឈ្មោះមុខវិជ្ជា ឧ. គណិតវិទ្យា] ថ្នាក់ទី [ថ្នាក់ ឧ. ថ្នាក់ទី៨] មេរៀន [ឈ្មោះមេរៀន] រយៈពេល [ឧ. ៤៥ នាទី]។ សូមរៀបចំតាមទម្រង់៖\n១. វត្ថុបំណងមេរៀន (ចំណេះដឹង បំណិន ឥរិយាបថ)\n២. សម្ភារឧបទេស និងឧបករណ៍ E-Lab/AI\n៣. ដំណើរការបង្រៀន (ជំហានទី១ ដល់ទី៥ រួមមានសកម្មភាពគ្រូ និងសកម្មភាពសិស្ស)\n៤. ការពង្រឹងចំណេះដឹង និងកិច្ចការផ្ទះ។"
  },
  {
    id: "prompt-2",
    title: "🎯 បង្កើតកម្រងសំណួរពហុជ្រើសរើស (10-Question MCQ Quiz)",
    category: "👨‍🏫 សម្រាប់គ្រូ & Quiz",
    icon: "🎯",
    desc: "បង្កើតសំណួរជ្រើសរើសចម្លើយ ៤ ជម្រើស (A, B, C, D) ជាមួយចម្លើយត្រឹមត្រូវ និងការពន្យល់",
    prompt: "សូមបង្កើតសំណួរពហុជ្រើសរើស (Multiple Choice Questions) ចំនួន ១០ សំណួរ សម្រាប់មុខវិជ្ជា [ឈ្មោះមុខវិជ្ជា] ថ្នាក់ទី [ថ្នាក់] លើប្រធានបទ [ប្រធានបទមេរៀន]។\n- សំណួរនីមួយៗត្រូវមាន ៤ ជម្រើស (A, B, C, D)\n- បង្ហាញចម្លើយត្រឹមត្រូវ (Correct Answer) នៅខាងក្រោមសំណួរនីមួយៗ\n- បន្ថែមការពន្យល់ខ្លីៗពីមូលហេតុដែលចម្លើយនោះត្រឹមត្រូវ។"
  },
  {
    id: "prompt-3",
    title: "🔬 បង្កើតគម្រោងពិសោធន៍ STEM (STEM Project Creator)",
    category: "🔬 STEM & Science",
    icon: "🧪",
    desc: "រៀបចំសកម្មភាពពិសោធន៍វិទ្យាសាស្ត្រងាយៗដោយប្រើសម្ភារជុំវិញខ្លួន ឬ PhET Virtual Lab",
    prompt: "សូមរៀបចំគម្រោងពិសោធន៍ STEM ឬ Science Project មួយសម្រាប់សិស្សថ្នាក់ទី [ថ្នាក់] ទាក់ទងនឹងប្រធានបទ [ឧ. ចរន្តអគ្គិសនី / សម្ពាធខ្យល់ / រស្មីសំយោគ]។\nសូមបញ្ជាក់៖\n១. សម្មតិកម្ម និងគោលបំណង\n២. សម្ភារពិសោធន៍ងាយរក ឬដំណរភ្ជាប់ PhET Simulation ដែលត្រូវប្រើ\n៣. ជំហានអនុវត្តជាក់ស្តែងមួយៗ\n៤. សំណួរពិភាក្សាក្នុងក្រុម និងការសន្និដ្ឋាន។"
  },
  {
    id: "prompt-4",
    title: "💡 ពន្យល់ទ្រឹស្តីពិបាកៗអោយងាយយល់ (Feynman Technique)",
    category: "👨‍🎓 សម្រាប់សិស្ស",
    icon: "💡",
    desc: "បកស្រាយរូបមន្ត ឬទ្រឹស្តីស្មុគស្មាញដោយប្រើភាសាសាមញ្ញ និងឧទាហរណ៍ក្នុងជីវភាពរស់នៅ",
    prompt: "សូមពន្យល់ខ្ញុំអំពីទ្រឹស្តី/គំនិត [ឧ. ច្បាប់ទី១ញូតុន / ចំនួនកុំផ្លិច / DNA / Inflation] ឱ្យមានលក្ខណៈងាយយល់បំផុត ដូចជាកំពុងពន្យល់សិស្សអាយុ ១២ ឆ្នាំ។\n- ប្រើប្រៀបធៀប (Analogy) ក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃ\n- ចៀសវាងពាក្យបច្ចេកទេសពិបាកៗដោយគ្មានការពន្យល់\n- លើកឧទាហរណ៍ជាក់ស្តែង ២ ករណី។"
  },
  {
    id: "prompt-5",
    title: "🇬🇧 កែកំហុសវេយ្យាករណ៍ និងពង្រឹងតែងសេចក្តីអង់គ្លេស (English Essay Polish)",
    category: "🇬🇧 Cambridge & English",
    icon: "✍️",
    desc: "កែសម្រួល Grammar, Vocabulary និង Sentence Structure សម្រាប់អត្ថបទភាសាអង់គ្លេស",
    prompt: "Please review and improve my English essay/paragraph below. \n1. Identify grammar, spelling, and punctuation errors and explain the corrections.\n2. Provide an upgraded, professional version with rich vocabulary and clear transitions suitable for Cambridge/IELTS level.\n3. Give 3 tips to improve my writing skills.\n\nMy text:\n\"[Paste your English text here]\""
  },
  {
    id: "prompt-6",
    title: "📊 ជួយដោះស្រាយលំហាត់គណិតវិទ្យាជាជំហានៗ (Step-by-Step Math Solver)",
    category: "📐 គណិតវិទ្យា (Math)",
    icon: "📐",
    desc: "ដោះស្រាយលំហាត់គណិតវិទ្យា រូបវិទ្យា ឬគីមីវិទ្យា មួយជំហានម្តងៗជាមួយរូបមន្តច្បាស់លាស់",
    prompt: "សូមជួយដោះស្រាយលំហាត់ [គណិតវិទ្យា/រូបវិទ្យា/គីមីវិទ្យា] ខាងក្រោមនេះ មួយជំហានម្តងៗ (Step-by-Step)៖\n- បង្ហាញរូបមន្តដែលត្រូវប្រើ (Formulas)\n- បង្ហាញការជំនួសលេខ និងការគណនាលម្អិត\n- គូសបន្ទាត់ចម្លើយចុងក្រោយ និងបញ្ជាក់ខ្នាតឱ្យបានត្រឹមត្រូវ។\n\nប្រធានលំហាត់៖\n\"[ដាក់ប្រធានលំហាត់នៅទីនេះ]\""
  },
  {
    id: "prompt-7",
    title: "💻 ពន្យល់ និងសរសេរកូដ (Coding & Web Debugger)",
    category: "💻 ICT & Coding",
    icon: "💻",
    desc: "ជំនួយក្នុងការសរសេរ HTML/CSS/JS/Python និងដោះស្រាយ Error ក្នុងកូដ",
    prompt: "ខ្ញុំកំពុងរៀនសរសេរកូដ [HTML/CSS/JavaScript/Python]។ សូមជួយ៖\n១. ពិនិត្យមើលកូដខាងក្រោម តើមាន Error ឬចំណុចខ្វះខាតត្រង់ណា?\n២. ពន្យល់ពីមូលហេតុនៃបញ្ហានោះ\n៣. កែសម្រួលកូដឱ្យត្រឹមត្រូវ និងបន្ថែម Comment ខ្លីៗដើម្បីងាយយល់។\n\nកូដរបស់ខ្ញុំ៖\n```\n[ដាក់កូដនៅទីនេះ]\n```"
  },
  {
    id: "prompt-8",
    title: "🎯 រៀបចំតារាងកាលវិភាគស្វ័យសិក្សាត្រៀមប្រឡង (Study Timetable Planner)",
    category: "👨‍🎓 សម្រាប់សិស្ស",
    icon: "📅",
    desc: "រៀបចំកាលវិភាគរំលឹកមេរៀនប្រចាំសប្តាហ៍ផ្អែកលើបច្ចេកទេស Pomodoro និង Active Recall",
    prompt: "សូមជួយរៀបចំកាលវិភាគស្វ័យសិក្សាប្រចាំសប្តាហ៍សម្រាប់ខ្ញុំ ដែលជាសិស្សថ្នាក់ទី [ថ្នាក់] ត្រៀមប្រឡង [ឌីប្លូម / បាក់ឌុប / ប្រចាំខែ]។\n- មុខវិជ្ជាខ្សោយដែលត្រូវផ្តោតខ្លាំង៖ [ឧ. គណិត, គីមី, អង់គ្លេស]\n- ពេលវេលាទំនេរក្នុងមួយថ្ងៃ៖ [ឧ. ៣ ម៉ោង ពីម៉ោង ៦:០០ ល្ងាច ដល់ ៩:០០ យប់]\n- សូមបញ្ចូលបច្ចេកទេស Pomodoro (រៀន ២៥ នាទី សម្រាក ៥ នាទី) និងការអនុវត្តលំហាត់ជាក់ស្តែង។"
  }
];

// Helper Escape HTML
function escapeElabHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ៦. ការគ្រប់គ្រងស្ថានភាព E-Lab & AI Hub (State & Filters)
let currentElabTab = 'teacher';
let currentElabSubject = 'all';
let currentElabSearch = '';

// Helper ចាត់ចែង Favorite Bookmarks ក្នុង LocalStorage
function getFavoriteTools() {
  try {
    const raw = localStorage.getItem('sps_favorite_tools');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleFavoriteTool(toolName, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let favs = getFavoriteTools();
  if (favs.includes(toolName)) {
    favs = favs.filter(name => name !== toolName);
  } else {
    favs.push(toolName);
  }
  try {
    localStorage.setItem('sps_favorite_tools', JSON.stringify(favs));
  } catch (e) {
    console.warn("Could not save favorite to localStorage:", e);
  }

  // Re-render grids
  renderAllElabGrids();
}

// Helper ត្រួតពិនិត្យការផ្គូផ្គង Filter
function matchesToolFilter(tool, searchKey, subjectKey, favList) {
  if (subjectKey === 'favorites') {
    if (!favList.includes(tool.name)) return false;
  } else if (subjectKey !== 'all') {
    const toolSub = (tool.subject || '').toLowerCase();
    const toolType = (tool.type || '').toLowerCase();
    const toolName = (tool.name || '').toLowerCase();
    const toolDesc = (tool.desc || '').toLowerCase();
    
    let matched = false;
    if (toolSub.includes(subjectKey)) matched = true;
    else if (subjectKey === 'math' && (toolSub === 'math' || toolType.includes('math') || toolName.includes('geogebra') || toolName.includes('desmos') || toolName.includes('photomath') || toolName.includes('wolfram') || toolDesc.includes('math'))) matched = true;
    else if (subjectKey === 'physics_chem' && (toolSub === 'physics_chem' || toolType.includes('chem') || toolType.includes('physics') || toolName.includes('phet') || toolName.includes('chemcollective') || toolName.includes('labster'))) matched = true;
    else if (subjectKey === 'bio_stem' && (toolSub === 'bio_stem' || toolType.includes('stem') || toolType.includes('bio') || toolName.includes('tesdopi') || toolName.includes('pubmed') || toolName.includes('scratch') || toolName.includes('code.org'))) matched = true;
    else if (subjectKey === 'english' && (toolSub === 'english' || toolType.includes('english') || toolType.includes('writing') || toolName.includes('duolingo') || toolName.includes('grammarly') || toolName.includes('quillbot') || toolName.includes('edemy') || toolName.includes('hemingway'))) matched = true;
    else if (subjectKey === 'ict' && (toolSub === 'ict' || toolType.includes('coding') || toolType.includes('programming') || toolName.includes('scratch') || toolName.includes('code') || toolName.includes('copilot') || toolName.includes('cursor') || toolName.includes('phind') || toolName.includes('replicate') || toolName.includes('hugging'))) matched = true;
    else if (subjectKey === 'quiz' && (toolSub === 'quiz' || toolType.includes('quiz') || toolType.includes('game') || toolName.includes('kahoot') || toolName.includes('quizizz') || toolName.includes('blooket') || toolName.includes('quizlet') || toolName.includes('socrative') || toolName.includes('mentimeter') || toolName.includes('pear deck'))) matched = true;
    else if (subjectKey === 'ai' && (toolSub === 'ai' || toolType.includes('ai') || toolName.includes('chatgpt') || toolName.includes('claude') || toolName.includes('gemini') || toolName.includes('copilot') || toolName.includes('sora') || toolName.includes('midjourney') || toolName.includes('suno') || toolName.includes('elevenlabs'))) matched = true;
    else if (subjectKey === 'video_lab' && (toolSub === 'video_lab' || toolType.includes('video') || toolType.includes('lab') || toolName.includes('ted') || toolName.includes('crashcourse') || toolName.includes('edpuzzle') || toolName.includes('flipgrid') || toolName.includes('phet') || toolName.includes('labster') || toolName.includes('chemcollective'))) matched = true;

    if (!matched) return false;
  }

  if (searchKey) {
    const hay = `${tool.name} ${tool.desc} ${tool.type || ''} ${tool.badge || ''} ${tool.subject || ''}`.toLowerCase();
    if (!hay.includes(searchKey)) return false;
  }

  return true;
}

// ៧. មុខងារស្វែងរក និង Filter តាមមុខវិជ្ជា (Live Search & Subject Filtering)
function handleElabSearch(keyword) {
  currentElabSearch = (keyword || '').trim().toLowerCase();
  const clearBtn = document.getElementById('elab-search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = currentElabSearch ? 'block' : 'none';
  }
  renderAllElabGrids();
}

function clearElabSearch() {
  const inputEl = document.getElementById('elab-search-input');
  if (inputEl) {
    inputEl.value = '';
  }
  const clearBtn = document.getElementById('elab-search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = 'none';
  }
  currentElabSearch = '';
  renderAllElabGrids();
}

function filterElabBySubject(subjectKey, btnElement) {
  currentElabSubject = subjectKey;
  document.querySelectorAll('#elab-subject-filters .elab-filter-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  if (btnElement) {
    btnElement.classList.add('active');
  }
  renderAllElabGrids();
}

// ៨. មុខងារចម្លង AI Prompt ទៅ Clipboard (1-Click Ready AI Prompt)
function copyAiPrompt(promptId, btnElement) {
  const promptObj = aiPromptTemplates.find(p => p.id === promptId);
  if (!promptObj) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(promptObj.prompt).then(() => {
      showCopySuccess(btnElement);
    }).catch(() => {
      fallbackCopyText(promptObj.prompt, btnElement);
    });
  } else {
    fallbackCopyText(promptObj.prompt, btnElement);
  }
}

function showCopySuccess(btnElement) {
  if (btnElement) {
    const origHtml = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fa-solid fa-check"></i> <span>បានចម្លងរួចរាល់!</span>`;
    btnElement.style.background = '#059669';
    setTimeout(() => {
      btnElement.innerHTML = origHtml;
      btnElement.style.background = '';
    }, 2200);
  }
  if (typeof showPublishSuccessToast === 'function') {
    showPublishSuccessToast("📋 បានចម្លង Prompt ទៅកាន់ Clipboard រួចរាល់! អ្នកអាច Paste ចូល ChatGPT/Claude/Gemini បានភ្លាមៗ។");
  }
}

function fallbackCopyText(text, btnElement) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showCopySuccess(btnElement);
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

// ៩. មុខងារផ្លាស់ប្តូរ Sub-tab ក្នុង E-Lab & AI (Teacher, Student, AI, Library, Prompts)
function switchElabTab(tabId, element) {
  currentElabTab = tabId;
  document.querySelectorAll('#elab-menu .elab-tab-pill, #elab-menu .side-link').forEach(link => {
    link.classList.remove('active');
  });
  if (element) {
    element.classList.add('active');
  }

  const tabs = ['teacher', 'student', 'ai', 'library', 'prompts'];
  tabs.forEach(tab => {
    const el = document.getElementById('elab-' + tab);
    if (el) {
      el.style.display = (tab === tabId) ? 'block' : 'none';
    }
  });

  renderAllElabGrids();
}

// ១០. មុខងារ Render Grid Cards សម្រាប់ Teacher, Student, AI Tools
function renderToolGrid(containerId, tools) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const favList = getFavoriteTools();
  const filtered = tools.filter(tool => matchesToolFilter(tool, currentElabSearch, currentElabSubject, favList));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 14px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
        <h4 style="margin: 0 0 6px; color: #475569; font-size: 1rem; font-weight: 700;">រកមិនឃើញឧបករណ៍ដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.82rem;">សូមសាកល្បងស្វែងរកពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទ «🌟 ទាំងអស់»</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(tool => {
    const isFav = favList.includes(tool.name);
    const badgeText = tool.badge || (tool.subject === 'math' ? '📐 Math' : tool.subject === 'physics_chem' ? '🧪 Science' : tool.subject === 'bio_stem' ? '🔬 STEM' : tool.subject === 'english' ? '🇬🇧 English' : tool.subject === 'ict' ? '💻 Coding' : tool.subject === 'quiz' ? '🎯 Quiz' : tool.subject === 'ai' ? '🤖 AI' : tool.subject === 'video_lab' ? '🎥 Video' : '⚡ EdTech');
    return `
      <div class="tool-card" onclick="window.open('${tool.url}', '_blank')">
        <div>
          <div class="tool-card-icon-wrap">
            <span class="tool-card-icon">${tool.icon}</span>
            <button type="button" class="tool-card-star ${isFav ? 'active' : ''}" title="បញ្ចូលក្នុងបញ្ជីចូលចិត្ត" onclick="toggleFavoriteTool('${tool.name.replace(/'/g, "\\'")}', event)">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
          </div>
          <span class="tool-card-badge">${badgeText}</span>
          <h4 class="tool-card-title" style="margin-top: 6px;">${tool.name}</h4>
          <p class="tool-card-desc">${tool.desc}</p>
        </div>
        <div class="tool-card-footer">
          <span>បើកប្រើប្រាស់ <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.68rem;"></i></span>
          <span style="font-size: 0.65rem; color: #94a3b8; font-weight: 500;">Free / Web</span>
        </div>
      </div>
    `;
  }).join('');
}

// ១១. មុខងារ Render បណ្ណាល័យឌីជីថល (E-Library & Past Papers)
function renderLibraryGrid() {
  const container = document.getElementById('library-resources-grid');
  if (!container) return;

  let filtered = libraryResources;
  if (currentElabSubject !== 'all' && currentElabSubject !== 'favorites') {
    filtered = filtered.filter(item => item.subject.includes(currentElabSubject) || item.subject === 'all');
  }
  if (currentElabSearch) {
    filtered = filtered.filter(item => `${item.title} ${item.desc} ${item.grade} ${item.badge}`.toLowerCase().includes(currentElabSearch));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 14px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">📚</div>
        <h4 style="margin: 0 0 6px; color: #475569; font-size: 1rem; font-weight: 700;">រកមិនឃើញឯកសារបណ្ណាល័យដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.82rem;">សូមសាកល្បងស្វែងរកពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទ «🌟 ទាំងអស់»</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="library-resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <span style="font-size: 2.2rem; line-height: 1;">${item.icon}</span>
          <span class="tool-card-badge" style="background: #e0f2fe; color: #0071ba; font-size: 0.72rem; padding: 3px 10px;">${item.badge}</span>
        </div>
        <h4 style="margin: 0 0 8px; font-size: 1rem; font-weight: 800; color: #0f172a; line-height: 1.4;">${item.title}</h4>
        <div style="display: flex; gap: 8px; margin-bottom: 10px; font-size: 0.75rem; color: #64748b;">
          <span style="background: #f1f5f9; padding: 2px 8px; border-radius: 6px; font-weight: 600;"><i class="fa-solid fa-graduation-cap"></i> ${item.grade}</span>
          <span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 6px; font-weight: 600;"><i class="fa-solid fa-shield-halved"></i> ផ្លូវការ</span>
        </div>
        <p style="margin: 0 0 14px; font-size: 0.82rem; color: #475569; line-height: 1.5;">${item.desc}</p>
      </div>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #0071ba; color: white; padding: 9px 16px; border-radius: 10px; text-decoration: none; font-size: 0.84rem; font-weight: 700; transition: background 0.2s ease;">
        <span>${item.btnText}</span> <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.78rem;"></i>
      </a>
    </div>
  `).join('');
}

// ១២. មុខងារ Render AI Prompt Templates
function renderPromptsGrid() {
  const container = document.getElementById('ai-prompts-grid');
  if (!container) return;

  let filtered = aiPromptTemplates;
  if (currentElabSubject !== 'all' && currentElabSubject !== 'favorites') {
    const subMap = {
      math: 'គណិតវិទ្យា',
      physics_chem: 'Science',
      bio_stem: 'STEM',
      english: 'English',
      ict: 'Coding',
      quiz: 'Quiz',
      ai: 'AI'
    };
    const filterWord = subMap[currentElabSubject] || '';
    if (filterWord) {
      filtered = filtered.filter(p => p.category.includes(filterWord) || p.title.includes(filterWord) || p.desc.includes(filterWord));
    }
  }
  if (currentElabSearch) {
    filtered = filtered.filter(p => `${p.title} ${p.desc} ${p.prompt} ${p.category}`.toLowerCase().includes(currentElabSearch));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 14px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">💡</div>
        <h4 style="margin: 0 0 6px; color: #475569; font-size: 1rem; font-weight: 700;">រកមិនឃើញសំណួរគំរូ AI ដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.82rem;">សូមសាកល្បងស្វែងរកពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទ «🌟 ទាំងអស់»</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="ai-prompt-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <span style="font-size: 1.8rem; line-height: 1;">${p.icon}</span>
          <span style="font-size: 0.72rem; font-weight: 700; background: #ecfdf5; color: #059669; padding: 3px 10px; border-radius: 12px;">${p.category}</span>
        </div>
        <h4 style="margin: 0 0 6px; font-size: 0.96rem; font-weight: 800; color: #0f172a; line-height: 1.35;">${p.title}</h4>
        <p style="margin: 0 0 10px; font-size: 0.78rem; color: #64748b; line-height: 1.4;">${p.desc}</p>
        <div class="ai-prompt-box" id="prompt-text-${p.id}">${escapeElabHtml(p.prompt)}</div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 4px;">
        <button type="button" class="btn-copy-prompt" onclick="copyAiPrompt('${p.id}', this)">
          <i class="fa-regular fa-copy"></i> <span>📋 Copy Prompt</span>
        </button>
        <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" style="font-size: 0.76rem; color: #0071ba; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
          <span>បើក ChatGPT</span> <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem;"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// ១៣. Master Render សម្រាប់គ្រប់ Grid ក្នុង E-Lab
function renderAllElabGrids() {
  renderToolGrid('teacher-tools-grid', teacherTools);
  renderToolGrid('student-tools-grid', studentTools);
  renderToolGrid('ai-tools-grid', aiTools);
  renderMoEYSBooksGrid();
  renderLibraryGrid();
  renderPromptsGrid();
}

// ១៤. មុខងារផ្លាស់ប្តូរទំព័រចម្បង (Single Page Navigation)
function navigateTo(pageId) {
  // លាក់ទំព័រទាំងអស់
  const views = document.querySelectorAll('.tab-view');
  views.forEach(v => v.classList.remove('active-view'));

  // បង្ហាញទំព័រដែលបានជ្រើសរើស
  const targetView = document.getElementById('view-' + pageId);
  if (targetView) {
    targetView.classList.add('active-view');
  }

  // កែប្រែ Active link នៅ Navbar
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });

  // បិទ Mobile menu បើបើក
  const navMenu = document.getElementById('nav-links-menu');
  if (navMenu) {
    navMenu.classList.remove('mobile-open');
  }

  // បើ Navigate មក E-Lab ធ្វើការ Refresh Grids ឡើងវិញ
  if (pageId === 'ELab') {
    renderAllElabGrids();
  }

  // Scroll ឡើងលើវិញ
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ១៤.១ មុខងារបញ្ជា Instant MoEYS Textbook Catalog (0-Second Load)
let currentLibraryMode = 'instant';
let currentMoEYSGrade = 'all';
let currentMoEYSBookSearch = '';
let currentMoEYSPage = 1;
const MOEYS_BOOKS_PER_PAGE = 12;

function switchLibraryDisplayMode(mode) {
  currentLibraryMode = mode;
  const btnInstant = document.getElementById('btn-lib-mode-instant');
  const btnLive = document.getElementById('btn-lib-mode-live');
  const instantView = document.getElementById('sala-instant-view');
  const liveView = document.getElementById('sala-live-view');

  if (mode === 'live') {
    btnInstant?.classList.remove('active');
    btnLive?.classList.add('active');
    if (instantView) instantView.style.display = 'none';
    if (liveView) liveView.style.display = 'block';
  } else {
    btnInstant?.classList.add('active');
    btnLive?.classList.remove('active');
    if (instantView) instantView.style.display = 'block';
    if (liveView) liveView.style.display = 'none';
    renderMoEYSBooksGrid();
  }
}

function handleMoEYSBookSearch(keyword) {
  currentMoEYSBookSearch = (keyword || '').trim().toLowerCase();
  currentMoEYSPage = 1;
  const clearBtn = document.getElementById('moeys-book-search-clear');
  if (clearBtn) {
    clearBtn.style.display = currentMoEYSBookSearch ? 'block' : 'none';
  }
  renderMoEYSBooksGrid();
}

function clearMoEYSBookSearch() {
  const input = document.getElementById('moeys-book-search-input');
  if (input) input.value = '';
  const clearBtn = document.getElementById('moeys-book-search-clear');
  if (clearBtn) {
    clearBtn.style.display = 'none';
  }
  currentMoEYSBookSearch = '';
  currentMoEYSPage = 1;
  renderMoEYSBooksGrid();
}

function filterMoEYSBooks(gradeKey, btnElement) {
  currentMoEYSGrade = gradeKey;
  currentMoEYSPage = 1;
  document.querySelectorAll('#moeys-grade-filters .elab-filter-pill').forEach(p => p.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }
  renderMoEYSBooksGrid();
}

function goToMoEYSPage(page) {
  currentMoEYSPage = page;
  renderMoEYSBooksGrid();
  const el = document.getElementById('sala-instant-view');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderMoEYSBooksGrid() {
  const container = document.getElementById('moeys-books-grid');
  const paginationContainer = document.getElementById('moeys-pagination-container');
  if (!container) return;

  let filtered = moeysBookCatalog;
  if (currentMoEYSGrade !== 'all') {
    filtered = filtered.filter(b => b.grade === currentMoEYSGrade);
  }
  if (currentMoEYSBookSearch) {
    filtered = filtered.filter(b => `${b.title} ${b.desc} ${b.gradeLabel} ${b.badge} ${b.subject} ${b.author}`.toLowerCase().includes(currentMoEYSBookSearch));
  }

  const totalBooks = filtered.length;
  const totalPages = Math.ceil(totalBooks / MOEYS_BOOKS_PER_PAGE) || 1;
  if (currentMoEYSPage > totalPages) currentMoEYSPage = totalPages;
  if (currentMoEYSPage < 1) currentMoEYSPage = 1;

  const startIdx = (currentMoEYSPage - 1) * MOEYS_BOOKS_PER_PAGE;
  const pageBooks = filtered.slice(startIdx, startIdx + MOEYS_BOOKS_PER_PAGE);

  if (totalBooks === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 14px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2.2rem; margin-bottom: 6px;">📖</div>
        <h4 style="margin: 0 0 4px; color: #475569; font-size: 0.95rem; font-weight: 700;">រកមិនឃើញសៀវភៅដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.8rem;">សូមសាកល្បងស្វែងរកឈ្មោះមុខវិជ្ជា ឬជ្រើសរើស «🌟 ទាំងអស់»</p>
      </div>
    `;
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }

  container.innerHTML = pageBooks.map(b => {
    const hasThumb = b.thumbnail && b.thumbnail.startsWith('http');
    return `
      <div class="moeys-book-card">
        <div class="book-cover-wrapper">
          ${hasThumb ? `
            <img src="${b.thumbnail}" alt="${b.title}" class="book-cover-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="book-cover-fallback" style="display:none;">${b.icon}</div>
          ` : `
            <div class="book-cover-fallback">${b.icon}</div>
          `}
          <span class="book-card-grade-badge">${b.gradeLabel}</span>
        </div>
        <div class="book-card-content">
          <div class="book-card-meta-top">
            <span class="book-card-badge-pill">${b.badge}</span>
            <span class="book-card-views"><i class="fa-solid fa-eye"></i> ${Number(b.views || 0).toLocaleString()}</span>
          </div>
          <h4 class="book-card-title" title="${b.title}">${b.title}</h4>
          <p class="book-card-author"><i class="fa-solid fa-user-pen"></i> ${b.author || 'MoEYS'}</p>
        </div>
        <div class="book-card-actions">
          <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="btn-read-book" title="អានសៀវភៅ PDF ពេញ">
            <i class="fa-solid fa-book-open"></i> <span>📖 អានសៀវភៅ</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Render pagination controls (< 1 2 3 ... > with zero MoEYS footer)
  if (paginationContainer) {
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let pagesHtml = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentMoEYSPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pagesHtml += `<button class="btn-moeys-page" onclick="goToMoEYSPage(1)">1</button>`;
      if (startPage > 2) {
        pagesHtml += `<span class="moeys-page-ellipsis">...</span>`;
      }
    }

    for (let p = startPage; p <= endPage; p++) {
      pagesHtml += `<button class="btn-moeys-page ${p === currentMoEYSPage ? 'active' : ''}" onclick="goToMoEYSPage(${p})">${p}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pagesHtml += `<span class="moeys-page-ellipsis">...</span>`;
      }
      pagesHtml += `<button class="btn-moeys-page" onclick="goToMoEYSPage(${totalPages})">${totalPages}</button>`;
    }

    const endItem = Math.min(startIdx + MOEYS_BOOKS_PER_PAGE, totalBooks);
    paginationContainer.innerHTML = `
      <div class="moeys-pagination-wrapper">
        <div class="moeys-page-summary">
          <i class="fa-solid fa-book"></i> បង្ហាញសៀវភៅ <strong>${startIdx + 1}-${endItem}</strong> នៃសរុប <strong>${totalBooks}</strong> ក្បាល (ទំព័រ ${currentMoEYSPage}/${totalPages})
        </div>
        <div class="moeys-pagination-bar">
          <button class="btn-moeys-page nav-btn" ${currentMoEYSPage === 1 ? 'disabled' : ''} onclick="goToMoEYSPage(${currentMoEYSPage - 1})" title="ទំព័រមុន">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          ${pagesHtml}
          <button class="btn-moeys-page nav-btn" ${currentMoEYSPage === totalPages ? 'disabled' : ''} onclick="goToMoEYSPage(${currentMoEYSPage + 1})" title="ទំព័របន្ទាប់">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  }
}

// ១៥. មុខងារបញ្ជា Live Sala MoEYS Digital Library Frame
function onSalaFrameLoaded() {
  const loader = document.getElementById('sala-frame-loading');
  if (loader) {
    loader.classList.add('hidden');
  }
}

function reloadSalaLibraryFrame() {
  const iframe = document.getElementById('sala-moeys-iframe');
  const loader = document.getElementById('sala-frame-loading');
  if (loader) {
    loader.classList.remove('hidden');
  }
  if (iframe) {
    iframe.src = iframe.src;
  }
}

function switchSalaLibraryLang(lang) {
  const iframe = document.getElementById('sala-moeys-iframe');
  const loader = document.getElementById('sala-frame-loading');
  const btnKh = document.getElementById('btn-sala-kh');
  const btnEn = document.getElementById('btn-sala-en');
  const extLink = document.getElementById('sala-external-link');

  if (loader) {
    loader.classList.remove('hidden');
  }

  if (lang === 'en') {
    if (btnKh) btnKh.classList.remove('active');
    if (btnEn) btnEn.classList.add('active');
    if (iframe) iframe.src = 'https://sala.moeys.gov.kh/en/library';
    if (extLink) extLink.href = 'https://sala.moeys.gov.kh/en/library';
  } else {
    if (btnKh) btnKh.classList.add('active');
    if (btnEn) btnEn.classList.remove('active');
    if (iframe) iframe.src = 'https://sala.moeys.gov.kh/kh/library';
    if (extLink) extLink.href = 'https://sala.moeys.gov.kh/kh/library';
  }
}

function setSalaZoom(scale) {
  const iframe = document.getElementById('sala-moeys-iframe');
  const btn75 = document.getElementById('btn-zoom-75');
  const btn80 = document.getElementById('btn-zoom-80');
  const btn90 = document.getElementById('btn-zoom-90');

  [btn75, btn80, btn90].forEach(b => b?.classList.remove('active'));

  if (scale === 0.75) {
    btn75?.classList.add('active');
  } else if (scale === 0.9) {
    btn90?.classList.add('active');
  } else {
    scale = 0.8;
    btn80?.classList.add('active');
  }

  if (iframe) {
    const widthPercent = (100 / scale).toFixed(2);
    iframe.style.transform = `scale(${scale})`;
    iframe.style.width = `${widthPercent}%`;
    iframe.style.height = `calc((100% + 64px) / ${scale})`;
    iframe.style.transformOrigin = '0 0';
  }
}

// Bind navigation & E-Lab functions to window object
window.navigateTo = navigateTo;
window.switchElabTab = switchElabTab;
window.filterElabBySubject = filterElabBySubject;
window.handleElabSearch = handleElabSearch;
window.clearElabSearch = clearElabSearch;
window.toggleFavoriteTool = toggleFavoriteTool;
window.copyAiPrompt = copyAiPrompt;
window.renderAllElabGrids = renderAllElabGrids;
window.switchLibraryDisplayMode = switchLibraryDisplayMode;
window.filterMoEYSBooks = filterMoEYSBooks;
window.handleMoEYSBookSearch = handleMoEYSBookSearch;
window.clearMoEYSBookSearch = clearMoEYSBookSearch;
window.goToMoEYSPage = goToMoEYSPage;
window.renderMoEYSBooksGrid = renderMoEYSBooksGrid;
window.onSalaFrameLoaded = onSalaFrameLoaded;
window.reloadSalaLibraryFrame = reloadSalaLibraryFrame;
window.switchSalaLibraryLang = switchSalaLibraryLang;
window.setSalaZoom = setSalaZoom;

// ៦. បង្ហាញកាលបរិច្ឆេទថ្ងៃនេះ (ស្រង់ពី JavaScript.html)
function initCurrentDate() {
  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = new Date().toLocaleDateString('en-US', options);
  }
}

// Google Sheets Data Sources for Live Dashboard Stats
const STAFF_SHEET_GVIZ_URL = "https://docs.google.com/spreadsheets/d/1eSv6AKKmQwd0MbjyPOHCBWMyd1I5SnHtiiOmz0Fxx90/gviz/tq?tqx=out:json";
const DOCS_SHEET_GVIZ_URL = "https://docs.google.com/spreadsheets/d/1_NmRGbV5A1r-CGeYfIOzHESV49RzIlaed-QCmuCFinM/gviz/tq?tqx=out:json";
const QAC_SHEET_GVIZ_URL = "https://docs.google.com/spreadsheets/d/1vH6Vv7nDAsXmfgtVBamndhuAEb9ehitxXMYp5fDLywA/gviz/tq?tqx=out:json";

// ៧. បង្ហាញ Dashboard Stats (ភ្ជាប់ទិន្នន័យជាក់ស្តែង Real-time)
let isDashboardSubscribed = false;
function initDashboardRealtimeSync() {
  if (isDashboardSubscribed) return;
  isDashboardSubscribed = true;

  if (window.StaffService && typeof window.StaffService.subscribe === 'function') {
    window.StaffService.subscribe((staffList) => {
      if (Array.isArray(staffList) && staffList.length > 0) {
        const staffEl = document.getElementById('staff-count');
        if (staffEl) staffEl.innerText = staffList.length;
        localStorage.setItem('sps_cached_staff_count', String(staffList.length));
      }
    });
  }

  if (window.DocumentService && typeof window.DocumentService.subscribe === 'function') {
    window.DocumentService.subscribe((docsList) => {
      if (Array.isArray(docsList)) {
        const docEl = document.getElementById('doc-count');
        if (docEl) docEl.innerText = docsList.length;
        localStorage.setItem('sps_cached_doc_count', String(docsList.length));
      }
    });
  }

  if (window.QACService && typeof window.QACService.subscribe === 'function') {
    window.QACService.subscribe((qacList) => {
      if (Array.isArray(qacList) && qacList.length > 0) {
        const compEl = document.getElementById('comp-count');
        const done = qacList.filter(q => q.isCompleted).length;
        const pct = Math.round((done / qacList.length) * 100) + "%";
        if (compEl) compEl.innerText = pct;
        localStorage.setItem('sps_cached_comp_pct', pct);
      }
    });
  }
}

function renderDashboardStats() {
  const staffEl = document.getElementById('staff-count');
  const docEl = document.getElementById('doc-count');
  const compEl = document.getElementById('comp-count');
  const eventEl = document.getElementById('event-count');

  // 1. Instant Cache Render (0ms startup latency)
  const cachedStaff = localStorage.getItem('sps_cached_staff_count') || '135';
  const cachedDocs = localStorage.getItem('sps_cached_doc_count') || '1';
  const cachedComp = localStorage.getItem('sps_cached_comp_pct') || '0%';
  const storedNewsCount = (typeof getAllUnifiedNewsArticles === 'function') ? getAllUnifiedNewsArticles().length : 4;
  const cachedEvents = localStorage.getItem('sps_cached_events_count') || String(storedNewsCount || 4);

  if (staffEl) staffEl.innerText = cachedStaff;
  if (docEl) docEl.innerText = cachedDocs;
  if (compEl) compEl.innerText = cachedComp;
  if (eventEl) eventEl.innerText = cachedEvents;

  // 2. Continuous Real-time Subscription Across All Devices
  initDashboardRealtimeSync();

  // 3. Non-blocking Immediate Background Refresh from Cloudflare D1 (Sub-50ms)
  setTimeout(async () => {
    try {
      if (window.StaffService && typeof window.StaffService.fetchAll === 'function') {
        window.StaffService.fetchAll().then(staffList => {
          if (Array.isArray(staffList) && staffList.length > 0) {
            const count = staffList.length;
            if (staffEl) staffEl.innerText = count;
            localStorage.setItem('sps_cached_staff_count', String(count));
          }
        }).catch(() => {});
      }

      if (window.DocumentService && typeof window.DocumentService.fetchAll === 'function') {
        window.DocumentService.fetchAll().then(docsList => {
          if (Array.isArray(docsList)) {
            const count = docsList.length;
            if (docEl) docEl.innerText = count;
            localStorage.setItem('sps_cached_doc_count', String(count));
          }
        }).catch(() => {});
      }

      if (window.QACService && typeof window.QACService.fetchAll === 'function') {
        window.QACService.fetchAll().then(qacList => {
          if (Array.isArray(qacList) && qacList.length > 0) {
            const done = qacList.filter(q => q.isCompleted).length;
            const pct = Math.round((done / qacList.length) * 100) + "%";
            if (compEl) compEl.innerText = pct;
            localStorage.setItem('sps_cached_comp_pct', pct);
          }
        }).catch(() => {});
      }

      const totalEvents = (typeof getAllUnifiedNewsArticles === 'function') ? getAllUnifiedNewsArticles().length : 4;
      if (eventEl && totalEvents > 0) {
        eventEl.innerText = totalEvents;
        localStorage.setItem('sps_cached_events_count', String(totalEvents));
      }
    } catch (err) {
      console.warn('Dashboard stats background refresh notice:', err);
    }
  }, 50);
}

// =============================================================================
// ៧.១ ស្ថិតិអ្នកចូលទស្សនាពិតជាក់ស្តែង (100% Real-time Visitor Analytics & 25 Cambodia Provinces)
// =============================================================================

const CAMBODIA_PROVINCES = [
  { id: "takeo", nameKh: "ខេត្តតាកែវ", nameEn: "Takeo", icon: "📍", region: "south_central", isCampus: true },
  { id: "phnom_penh", nameKh: "រាជធានីភ្នំពេញ", nameEn: "Phnom Penh", icon: "🏛️", region: "south_central" },
  { id: "kandal", nameKh: "ខេត្តកណ្តាល", nameEn: "Kandal", icon: "🌿", region: "south_central" },
  { id: "kampot", nameKh: "ខេត្តកំពត", nameEn: "Kampot", icon: "🌊", region: "south_central" },
  { id: "kampong_speu", nameKh: "ខេត្តកំពង់ស្ពឺ", nameEn: "Kampong Speu", icon: "🌴", region: "south_central" },
  { id: "siem_reap", nameKh: "ខេត្តសៀមរាប", nameEn: "Siem Reap", icon: "🛕", region: "north_east" },
  { id: "battambang", nameKh: "ខេត្តបាត់ដំបង", nameEn: "Battambang", icon: "🌾", region: "west" },
  { id: "preah_sihanouk", nameKh: "ខេត្តព្រះសីហនុ", nameEn: "Preah Sihanouk", icon: "🚢", region: "south_central" },
  { id: "kampong_cham", nameKh: "ខេត្តកំពង់ចាម", nameEn: "Kampong Cham", icon: "🌉", region: "south_central" },
  { id: "prey_veng", nameKh: "ខេត្តព្រៃវែង", nameEn: "Prey Veng", icon: "🏞️", region: "south_central" },
  { id: "svay_rieng", nameKh: "ខេត្តស្វាយរៀង", nameEn: "Svay Rieng", icon: "🏡", region: "north_east" },
  { id: "banteay_meanchey", nameKh: "ខេត្តបន្ទាយមានជ័យ", nameEn: "Banteay Meanchey", icon: "🏰", region: "west" },
  { id: "kampong_thom", nameKh: "ខេត្តកំពង់ធំ", nameEn: "Kampong Thom", icon: "🌳", region: "south_central" },
  { id: "kampong_chhnang", nameKh: "ខេត្តកំពង់ឆ្នាំង", nameEn: "Kampong Chhnang", icon: "🏺", region: "south_central" },
  { id: "pursat", nameKh: "ខេត្តពោធិ៍សាត់", nameEn: "Pursat", icon: "🛶", region: "west" },
  { id: "kep", nameKh: "ខេត្តកែប", nameEn: "Kep", icon: "🦀", region: "south_central" },
  { id: "koh_kong", nameKh: "ខេត្តកោះកុង", nameEn: "Koh Kong", icon: "🏝️", region: "south_central" },
  { id: "kratie", nameKh: "ខេត្តក្រចេះ", nameEn: "Kratie", icon: "🐬", region: "north_east" },
  { id: "stung_treng", nameKh: "ខេត្តស្ទឹងត្រែង", nameEn: "Stung Treng", icon: "🌊", region: "north_east" },
  { id: "ratanakiri", nameKh: "ខេត្តរតនគិរី", nameEn: "Ratanakiri", icon: "🌋", region: "north_east" },
  { id: "mondulkiri", nameKh: "ខេត្តមណ្ឌលគិរី", nameEn: "Mondulkiri", icon: "🐘", region: "north_east" },
  { id: "preah_vihear", nameKh: "ខេត្តព្រះវិហារ", nameEn: "Preah Vihear", icon: "⛰️", region: "north_east" },
  { id: "oddar_meanchey", nameKh: "ខេត្តឧត្តរមានជ័យ", nameEn: "Oddar Meanchey", icon: "🌲", region: "north_east" },
  { id: "pailin", nameKh: "ខេត្តប៉ៃលិន", nameEn: "Pailin", icon: "💎", region: "west" },
  { id: "tboung_khmum", nameKh: "ខេត្តត្បូងឃ្មុំ", nameEn: "Tboung Khmum", icon: "🌻", region: "north_east" }
];

let selectedProvinceRegion = 'all';
let provinceSearchQuery = '';
let isAllProvincesExpanded = false;
let sessionTabId = 'tab_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

// Function to match detected city/region string to 25 Cambodian provinces
function matchCambodiaProvince(locationStr) {
  if (!locationStr || typeof locationStr !== 'string') return null;
  const clean = locationStr.toLowerCase().trim();

  const mapping = [
    { key: 'takeo', match: ['takeo', 'daunkeo', 'doun kaev', 'samraong', 'bati', 'tram kak', 'angkor borei', 'kiri vong', 'treang', 'koh andaet', 'prey kabbas'] },
    { key: 'phnom_penh', match: ['phnom penh', 'phnompenh', 'chamkar mon', 'daun penh', 'prampeer meakkakra', 'tuol kouk', 'dangkao', 'mean chey', 'russey keo', 'sen sok', 'pur senchey', 'chbar ampov', 'boeng keng kang', 'kamboul'] },
    { key: 'kandal', match: ['kandal', 'ta khmau', 'takhmao', 'ang snuol', 'kandal stueng', 'kiensvay', 'khsach kandal', 'koh thom', 'leuk daek', 'mukh kampul', 'ponhea lueu', 's`ang', 'saang', 'anlong romiet'] },
    { key: 'siem_reap', match: ['siem reap', 'siemreap', 'angkor', 'svay leu', 'banteay srei', 'prasat bakong', 'puok', 'soutr nikom', 'chi kreng', 'raluos', 'kralanh'] },
    { key: 'battambang', match: ['battambang', 'banan', 'thma koul', 'moung roussei', 'bavel', 'aek phnom', 'samlout', 'kamrieng', 'koas krala', 'rouk kiri'] },
    { key: 'kampot', match: ['kampot', 'teuk chhou', 'chhouk', 'angkor chey', 'banteay meas', 'chong kal', 'dang tong', 'kampong trach'] },
    { key: 'kampong_speu', match: ['kampong speu', 'kampong speu', 'chbar mon', 'borseth', 'kong pisei', 'odongk', 'oral', 'phnom sruoch', 'samraong tong', 'thpong'] },
    { key: 'preah_sihanouk', match: ['sihanouk', 'preah sihanouk', 'sihanoukville', 'kompong som', 'kampong som', 'stung hav', 'prey nob', 'koh rong'] },
    { key: 'kampong_cham', match: ['kampong cham', 'kampongcham', 'batheay', 'chamkar leu', 'cheung prey', 'kampong siem', 'kang meas', 'koh soutin', 'prey chhor', 'srei santhor', 'stoung trang'] },
    { key: 'prey_veng', match: ['prey veng', 'preyveng', 'ba phnum', 'kamchay mear', 'kampong trabaek', 'kanchriech', 'me sang', 'peam chor', 'peam ro', 'pea reang', 'preah sdach', 'svay antor'] },
    { key: 'svay_rieng', match: ['svay rieng', 'svayrieng', 'bavet', 'chanthrea', 'kampong rou', 'romeas hek', 'rumduol', 'svay chrum', 'svay teap'] },
    { key: 'banteay_meanchey', match: ['banteay meanchey', 'poipet', 'serei saophoan', 'mongkol borei', 'thma puok', 'svay chek', 'malai', 'ou chrov', 'phnom srok'] },
    { key: 'kampong_thom', match: ['kampong thom', 'kampongthom', 'stueng saen', 'baray', 'kampong svay', 'prasat balangk', 'prasat sambour', 'sandan', 'santuk', 'stoung', 'taing kouk'] },
    { key: 'kampong_chhnang', match: ['kampong chhnang', 'kampongchhnang', 'baribour', 'chol kiri', 'kampong leaeng', 'kampong tralach', 'rolea b`ier', 'samaki meanchey', 'tuek phos'] },
    { key: 'pursat', match: ['pursat', 'bovelor', 'bakan', 'kandieng', 'krakor', 'phnom kravanh', 'veal veng', 'ta lou sen chey'] },
    { key: 'kep', match: ['kep', 'damnak chang`aeur'] },
    { key: 'koh_kong', match: ['koh kong', 'khemara phoumin', 'botum sakor', 'kiri sakor', 'koh kong district', 'mondol seima', 'srae ambel', 'thma bang'] },
    { key: 'kratie', match: ['kratie', 'chhloung', 'prek prasab', 'sambour', 'snuol', 'chet borei'] },
    { key: 'stung_treng', match: ['stung treng', 'sesan', 'siem bouk', 'siem pang', 'thala barivat', 'borei o`svay sen chey'] },
    { key: 'ratanakiri', match: ['ratanakiri', 'banlung', 'andoung meas', 'bar kaev', 'koun mom', 'lumphat', 'ou chum', 'ou ya dav', 'ta veang', 'veun sai'] },
    { key: 'mondulkiri', match: ['mondulkiri', 'senmonorom', 'kaoh nheaek', 'ou reang', 'pechr chenda', 'kaev seima'] },
    { key: 'preah_vihear', match: ['preah vihear', 'tbeng meanchey', 'chey saen', 'chhaeb', 'choam khsant', 'kulaen', 'rovieng', 'sangkom thmei'] },
    { key: 'oddar_meanchey', match: ['oddar meanchey', 'samraong', 'anlong veng', 'banteay ampiil', 'chong kal', 'trapeang prasat'] },
    { key: 'pailin', match: ['pailin', 'sala krau'] },
    { key: 'tboung_khmum', match: ['tboung khmum', 'suong', 'dambae', 'krouch chhma', 'memot', 'ou reang ov', 'ponhea kraek', 'tbuong khmum'] }
  ];

  for (const item of mapping) {
    if (item.match.some(m => clean.includes(m))) {
      return item.key;
    }
  }
  return null;
}

// 1. Helper to get real stored data from localStorage
function getRealStoredAnalytics() {
  const totalViews = parseInt(localStorage.getItem('sps_real_total_views'), 10) || 0;
  const uniqueVisitors = parseInt(localStorage.getItem('sps_real_unique_visitors'), 10) || 0;
  
  let provinceCounts = {};
  try {
    const raw = localStorage.getItem('sps_real_province_counts');
    if (raw) provinceCounts = JSON.parse(raw);
  } catch (e) {}

  let logs = [];
  try {
    const rawLogs = localStorage.getItem('sps_real_visitor_logs');
    if (rawLogs) logs = JSON.parse(rawLogs);
  } catch (e) {}

  return { totalViews, uniqueVisitors, provinceCounts, logs };
}

function saveRealStoredAnalytics(totalViews, uniqueVisitors, provinceCounts, logs) {
  try {
    if (totalViews !== undefined && totalViews !== null) {
      localStorage.setItem('sps_real_total_views', String(totalViews));
    }
    if (uniqueVisitors !== undefined && uniqueVisitors !== null) {
      localStorage.setItem('sps_real_unique_visitors', String(uniqueVisitors));
    }
    if (provinceCounts) {
      localStorage.setItem('sps_real_province_counts', JSON.stringify(provinceCounts));
    }
    if (logs && Array.isArray(logs)) {
      const trimmed = logs.slice(-500);
      localStorage.setItem('sps_real_visitor_logs', JSON.stringify(trimmed));
    }
  } catch (e) {}
}

// 2. Real Heartbeat for Active Online Viewers (Multi-tab & Cross-window synchronization)
function updateActiveHeartbeat() {
  const now = Date.now();
  try {
    localStorage.setItem('sps_active_hb_' + sessionTabId, String(now));
  } catch (e) {}
}

function countActiveOnlineUsers() {
  const now = Date.now();
  let activeCount = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('sps_active_hb_')) {
        const timestamp = parseInt(localStorage.getItem(key), 10);
        if (now - timestamp < 20000) { // Active within 20 seconds
          activeCount++;
        } else if (now - timestamp > 60000) { // Clean up stale heartbeats
          localStorage.removeItem(key);
        }
      }
    }
  } catch (e) {}
  return Math.max(1, activeCount);
}

// Global Real-time Visitor Sync Initializer
function initVisitorRealtimeSync() {
  const visitorId = localStorage.getItem('sps_visitor_uid') || ('uid_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9));
  if (!localStorage.getItem('sps_visitor_uid')) {
    localStorage.setItem('sps_visitor_uid', visitorId);
  }

  // 1. Subscribe to Supabase real-time cloud stats
  if (window.AnalyticsService && typeof window.AnalyticsService.subscribeStats === 'function' && window.isSupabaseReady && window.isSupabaseReady()) {
    window.AnalyticsService.subscribeStats((stats) => {
      if (stats && (stats.totalViews !== undefined || stats.uniqueVisitors !== undefined || stats.provinceCounts)) {
        const currentTotal = parseInt(localStorage.getItem('sps_real_total_views'), 10) || 0;
        const cloudTotal = stats.totalViews || 0;
        const totalToSave = Math.max(currentTotal, cloudTotal);

        const currentUnique = parseInt(localStorage.getItem('sps_real_unique_visitors'), 10) || 0;
        const cloudUnique = stats.uniqueVisitors || 0;
        const uniqueToSave = Math.max(currentUnique, cloudUnique);

        const currentProv = getRealStoredAnalytics().provinceCounts || {};
        const cloudProv = stats.provinceCounts || {};
        const mergedProv = { ...currentProv };
        for (const [k, v] of Object.entries(cloudProv)) {
          mergedProv[k] = Math.max(mergedProv[k] || 0, v || 0);
        }

        saveRealStoredAnalytics(totalToSave, uniqueToSave, mergedProv);
        renderVisitorAnalytics();
      }
    });

    // 2. Track real live online presence across all devices worldwide
    if (typeof window.AnalyticsService.trackPresence === 'function') {
      window.AnalyticsService.trackPresence(visitorId, (liveCount) => {
        const onlineEl = document.getElementById('vstat-online-now');
        if (onlineEl) {
          onlineEl.innerText = Math.max(1, liveCount, countActiveOnlineUsers());
        }
      });
    }
  }
}
window.initVisitorRealtimeSync = initVisitorRealtimeSync;

// 3. Main Real-time Tracking & Logging
async function initVisitorTracking() {
  let { totalViews, uniqueVisitors, provinceCounts, logs } = getRealStoredAnalytics();

  // Setup unique device ID
  let isNewVisitor = false;
  let visitorId = localStorage.getItem('sps_visitor_uid');
  if (!visitorId) {
    visitorId = 'uid_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem('sps_visitor_uid', visitorId);
    uniqueVisitors += 1;
    isNewVisitor = true;
  }

  // Count page view for this session
  const sessionLogKey = 'sps_logged_pageview_' + sessionTabId;
  const isNewPageView = !sessionStorage.getItem(sessionLogKey);

  if (isNewPageView) {
    totalViews += 1;
    sessionStorage.setItem(sessionLogKey, '1');

    // Asynchronously detect Real Geolocation & Sync to Supabase Cloud
    detectAndLogRealVisit(visitorId, isNewVisitor, totalViews, uniqueVisitors, provinceCounts, logs);
  } else {
    renderVisitorAnalytics();
  }

  // Connect Real-time sync if Supabase is already ready
  initVisitorRealtimeSync();

  // Start Real Active Online heartbeat
  updateActiveHeartbeat();
  setInterval(updateActiveHeartbeat, 6000);
  setInterval(() => {
    const onlineEl = document.getElementById('vstat-online-now');
    if (onlineEl) {
      onlineEl.innerText = countActiveOnlineUsers();
    }
  }, 4000);
}

async function detectAndLogRealVisit(visitorId, isNewVisitor, totalViews, uniqueVisitors, provinceCounts, logs) {
  let detectedIp = 'Unknown';
  let detectedCountry = 'Cambodia';
  let detectedCountryCode = 'KH';
  let detectedCity = 'Takeo';
  let detectedRegion = 'Takeo';
  let matchedProvinceId = 'takeo'; // Default to Takeo if undetermined
  let matchedProvinceName = 'ខេត្តតាកែវ';

  try {
    let geo = null;
    // Attempt free fast API 1
    try {
      const res1 = await fetch('https://freeipapi.com/api/json/', { cache: 'no-store', signal: AbortSignal.timeout(1500) });
      if (res1.ok) geo = await res1.json();
    } catch (e) {}

    // Fallback API 2
    if (!geo || !geo.countryCode) {
      try {
        const res2 = await fetch('https://ipwhois.app/json/', { cache: 'no-store', signal: AbortSignal.timeout(1500) });
        if (res2.ok) {
          const data2 = await res2.json();
          geo = {
            ipAddress: data2.ip,
            countryCode: data2.country_code,
            countryName: data2.country,
            regionName: data2.region,
            cityName: data2.city
          };
        }
      } catch (e) {}
    }

    if (geo) {
      detectedIp = geo.ipAddress || detectedIp;
      detectedCountry = geo.countryName || detectedCountry;
      detectedCountryCode = geo.countryCode || detectedCountryCode;
      detectedCity = geo.cityName || detectedCity;
      detectedRegion = geo.regionName || detectedRegion;

      // Match province from detected location
      const matchedKey = matchCambodiaProvince(detectedRegion + ' ' + detectedCity);
      if (matchedKey) {
        matchedProvinceId = matchedKey;
      } else if (detectedCountryCode === 'KH') {
        matchedProvinceId = 'takeo';
      }
    }
  } catch (err) {
    console.warn('Geolocation detection note:', err);
  }

  const provObj = CAMBODIA_PROVINCES.find(p => p.id === matchedProvinceId) || CAMBODIA_PROVINCES[0];
  matchedProvinceName = provObj.nameKh;

  // Increment local count for this province
  provinceCounts[matchedProvinceId] = (provinceCounts[matchedProvinceId] || 0) + 1;

  // Create real log payload
  const logPayload = {
    id: 'vlog_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    visitor_id: visitorId,
    ip: detectedIp,
    country: detectedCountry,
    country_code: detectedCountryCode,
    province_id: matchedProvinceId,
    province_name: matchedProvinceName,
    city: detectedCity,
    device_type: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    user_agent: navigator.userAgent,
    created_at: new Date().toISOString()
  };

  logs.push(logPayload);
  saveRealStoredAnalytics(totalViews, uniqueVisitors, provinceCounts, logs);
  renderVisitorAnalytics();

  // Sync to Supabase Cloud with 6-Hour Debounce/Throttle (Saves 98%+ Disk IOPS)
  const lastCloudVisitSync = parseInt(localStorage.getItem('sps_last_cloud_visit_sync') || '0', 10);
  const nowTs = Date.now();
  if (nowTs - lastCloudVisitSync > 6 * 60 * 60 * 1000) { // 6 hours cooldown
    localStorage.setItem('sps_last_cloud_visit_sync', String(nowTs));
    if (window.AnalyticsService && typeof window.AnalyticsService.recordVisit === 'function') {
      window.AnalyticsService.recordVisit(visitorId, isNewVisitor, matchedProvinceId, logPayload)
        .then(cloudStats => {
          if (cloudStats) {
            saveRealStoredAnalytics(cloudStats.total_views, cloudStats.unique_visitors, cloudStats.province_counts);
            renderVisitorAnalytics();
          }
        })
        .catch(() => {});
    }
  }
}

function renderVisitorAnalytics() {
  const { totalViews, uniqueVisitors, provinceCounts } = getRealStoredAnalytics();

  const totalEl = document.getElementById('vstat-total-views');
  const uniqueEl = document.getElementById('vstat-unique-users');
  const onlineEl = document.getElementById('vstat-online-now');
  const topProvinceEl = document.getElementById('vstat-top-province');
  const gridEl = document.getElementById('cambodia-provinces-list');

  if (totalEl) totalEl.innerText = Number(totalViews).toLocaleString('en-US');
  if (uniqueEl) uniqueEl.innerText = Number(uniqueVisitors).toLocaleString('en-US');
  if (onlineEl) onlineEl.innerText = countActiveOnlineUsers();

  // Compute real views per province (NO fake numbers, strictly real counts)
  let totalComputedViews = 0;
  const computedList = CAMBODIA_PROVINCES.map(p => {
    const realViews = provinceCounts[p.id] || 0;
    totalComputedViews += realViews;
    return { ...p, views: realViews };
  });

  // Calculate dynamic percentages and sort descending
  const sortedProvinces = computedList.map(p => {
    const percent = (totalComputedViews > 0) 
      ? ((p.views / totalComputedViews) * 100).toFixed(1) 
      : "0.0";
    return { ...p, percent: parseFloat(percent) };
  }).sort((a, b) => b.views - a.views);

  if (topProvinceEl) {
    const top = sortedProvinces[0];
    const isEn = (currentAppLanguage === 'en');
    if (top && top.views > 0) {
      topProvinceEl.innerText = isEn ? `${top.nameEn} (${top.percent}%)` : `${top.nameKh} (${top.percent}%)`;
    } else {
      topProvinceEl.innerText = isEn ? `Takeo Campus (0%)` : `ខេត្តតាកែវ (0%)`;
    }
  }

  if (!gridEl) return;

  // Filter by Region and Search Query
  let filtered = sortedProvinces;
  if (selectedProvinceRegion === 'top6') {
    filtered = sortedProvinces.slice(0, 6);
  } else if (selectedProvinceRegion !== 'all') {
    filtered = sortedProvinces.filter(p => p.region === selectedProvinceRegion);
  }

  if (provinceSearchQuery) {
    filtered = filtered.filter(p => 
      p.nameKh.toLowerCase().includes(provinceSearchQuery) || 
      p.nameEn.toLowerCase().includes(provinceSearchQuery)
    );
  }

  // Handle Collapsed vs Expanded
  const isFilteringOrSearching = !!provinceSearchQuery || (selectedProvinceRegion !== 'all' && selectedProvinceRegion !== 'top6');
  let displayList = filtered;
  if (!isAllProvincesExpanded && !isFilteringOrSearching && selectedProvinceRegion === 'all') {
    displayList = filtered.slice(0, 6);
  }

  if (displayList.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 12px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2rem; margin-bottom: 6px;">📍</div>
        <h4 style="margin: 0 0 4px; color: #475569; font-size: 0.95rem; font-weight: 700;">រកមិនឃើញខេត្ត-ក្រុងដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.8rem;">សូមសាកល្បងស្វែងរកឈ្មោះផ្សេង ឬជ្រើសរើស «🌟 ទាំងអស់»</p>
      </div>
    `;
    return;
  }

  const isEn = (currentAppLanguage === 'en');
  const unitText = isEn ? 'views' : 'នាក់';

  gridEl.innerHTML = displayList.map((p) => {
    const overallRank = sortedProvinces.findIndex(sp => sp.id === p.id) + 1;
    let rankBadgeClass = 'rank-other';
    if (p.views > 0) {
      if (overallRank === 1) rankBadgeClass = 'rank-gold';
      else if (overallRank === 2) rankBadgeClass = 'rank-silver';
      else if (overallRank === 3) rankBadgeClass = 'rank-bronze';
    }

    const campusPill = p.isCampus ? `<span class="province-campus-pill">🌟 SPS 25 Takeo</span>` : '';
    const takeoClass = p.isCampus ? 'is-takeo-campus' : '';

    return `
      <div class="province-item-card ${takeoClass}">
        <div class="province-card-top">
          <div class="province-identity">
            <span class="province-rank-badge ${rankBadgeClass}">#${overallRank}</span>
            <span class="province-icon">${p.icon}</span>
            <div class="province-names">
              <h5 class="province-name-kh">${p.nameKh} ${campusPill}</h5>
              <p class="province-name-en">${p.nameEn} Province</p>
            </div>
          </div>
          <div class="province-metrics">
            <div class="province-views-num">${Number(p.views).toLocaleString('en-US')} ${unitText}</div>
            <div class="province-percent-num">${p.percent}%</div>
          </div>
        </div>
        <div class="province-progress-track">
          <div class="province-progress-fill" style="width: ${p.percent}%;"></div>
        </div>
      </div>
    `;
  }).join('');

  // Update Toggle button visibility & text
  const toggleWrapper = document.querySelector('.provinces-toggle-wrapper');
  const toggleBtnText = document.getElementById('btn-toggle-provinces-text');
  const toggleBtnIcon = document.getElementById('btn-toggle-provinces-icon');

  if (toggleWrapper) {
    if (isFilteringOrSearching || selectedProvinceRegion === 'top6') {
      toggleWrapper.style.display = 'none';
    } else {
      toggleWrapper.style.display = 'block';
      if (toggleBtnText) {
        toggleBtnText.innerText = isAllProvincesExpanded
          ? (isEn ? 'Collapse (Show Top 6 Only)' : '🔼 បង្រួមមកវិញ (បង្ហាញកំពូលទាំង ៦)')
          : (isEn ? 'Show All 25 Provinces & Cities' : '🔽 បង្ហាញគ្រប់ ២៥ រាជធានី-ខេត្ត (Show All 25)');
      }
      if (toggleBtnIcon) {
        toggleBtnIcon.innerHTML = isAllProvincesExpanded 
          ? '<i class="fa-solid fa-chevron-up"></i>' 
          : '<i class="fa-solid fa-chevron-down"></i>';
      }
    }
  }
}

function filterProvincesByRegion(region, btnElement) {
  selectedProvinceRegion = region;
  document.querySelectorAll('#province-region-filters .region-filter-pill').forEach(p => p.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderVisitorAnalytics();
}

function handleProvinceSearch(val) {
  provinceSearchQuery = (val || '').trim().toLowerCase();
  const clearBtn = document.getElementById('province-search-clear');
  if (clearBtn) {
    clearBtn.style.display = provinceSearchQuery ? 'block' : 'none';
  }
  renderVisitorAnalytics();
}

function clearProvinceSearch() {
  const input = document.getElementById('province-search-input');
  if (input) input.value = '';
  const clearBtn = document.getElementById('province-search-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  provinceSearchQuery = '';
  renderVisitorAnalytics();
}

function toggleAllProvincesView() {
  isAllProvincesExpanded = !isAllProvincesExpanded;
  renderVisitorAnalytics();
}

function refreshVisitorAnalytics(manual = false) {
  if (manual) {
    const btn = document.querySelector('.btn-refresh-stats i');
    if (btn) {
      btn.classList.add('fa-spin');
      setTimeout(() => btn.classList.remove('fa-spin'), 600);
    }
  }
  initVisitorTracking();
}

// Window Bindings
window.filterProvincesByRegion = filterProvincesByRegion;
window.handleProvinceSearch = handleProvinceSearch;
window.clearProvinceSearch = clearProvinceSearch;
window.toggleAllProvincesView = toggleAllProvincesView;
window.refreshVisitorAnalytics = refreshVisitorAnalytics;
window.initVisitorTracking = initVisitorTracking;
window.renderVisitorAnalytics = renderVisitorAnalytics;
window.matchCambodiaProvince = matchCambodiaProvince;

// ៨. Toggle Mobile Menu
function toggleMobileNav() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) {
    menu.classList.toggle('mobile-open');
  }
}
window.toggleMobileNav = toggleMobileNav;

// ៩. មុខងារបញ្ជា Slide Show រូបភាព (Hero Banner Slideshow)
let currentSlideIndex = 0;
let slideInterval = null;

function initSlider() {
  const slides = document.querySelectorAll('#slider-track .slide');
  const dots = document.querySelectorAll('#slider-dots .dot');
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlideIndex = index;
  }

  window.nextSlide = function() {
    let next = (currentSlideIndex + 1) % slides.length;
    showSlide(next);
  };

  window.prevSlide = function() {
    let prev = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  };

  window.goToSlide = function(index) {
    showSlide(index);
    resetAutoSlide();
  };

  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(window.nextSlide, 4500);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  const sliderEl = document.getElementById('hero-slider');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderEl.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

// ដំណើរការនៅពេលទំព័រ Load ចប់
document.addEventListener('DOMContentLoaded', () => {
  initCurrentDate();
  renderDashboardStats();
  initVisitorTracking();
  initSlider();

  // Render E-Lab Grids (All 5 Categories + Search + Filters)
  renderAllElabGrids();

  // Render News & Activities
  initNewsSystem();
});

// ==================== ១០. ប្រព័ន្ធគ្រប់គ្រង និងផ្សព្វផ្សាយព័ត៌មាន (NEWS & ACTIVITIES SYSTEM) ====================

const initialNewsArticles = [
  {
    id: "news-1",
    title: "🌱 🤖 សិស្សឆ្លាតវៃ បង្កើតអនាគតដ៏ឆ្លាតវៃ! ជ័យលាភី StemCo 2025 Singapore",
    category: "student",
    categoryLabel: "🎓 សកម្មភាពសិស្ស",
    badgeClass: "badge-student",
    date: "២៨ សីហា ២០២៦",
    image: "20251013140823315.jpeg",
    summary: "សូមអបអរសាទរប្អូនប្រុស Pho Phanarith សិស្សថ្នាក់ទី ៨ នៃកម្មវិធី IEP ដែលបានតំណាងកម្ពុជាចូលរួមការប្រកួតប្រជែង StemCo 2025 នៅសិង្ហបុរី។",
    content: "«សិស្សឆ្លាតវៃ បង្កើតអនាគតដ៏ឆ្លាតវៃ» គឺជាចក្ខុវិស័យស្នូលរបស់សាលារៀនសុវណ្ណភូមិក្នុងការបណ្តុះបណ្តាលសិស្សានុសិស្សឱ្យមានភាពច្នៃប្រឌិត និងការអនុវត្តជាក់ស្តែងក្នុងបន្ទប់ពិសោធន៍ទំនើប។\n\nសូមចូលរួមអបអរសាទរដល់ប្អូនប្រុស Pho Phanarith (ផូ ផានរិទ្ធ) សិស្សថ្នាក់ទី ៨ នៃកម្មវិធី Integrated English Program (IEP) នៃសាលារៀនសុវណ្ណភូមិ ដែលត្រូវបានជ្រើសរើសជាតំណាងឱ្យប្រទេសកម្ពុជា ទៅចូលរួមការប្រកួតប្រជែងលំដាប់អន្តរជាតិ StemCo 2025 International Competition នៅប្រទេសសិង្ហបុរី (Singapore)។\n\nសាលារៀនសុវណ្ណភូមិ តែងតែលើកទឹកចិត្ត និងគាំទ្រដល់ការស្រាវជ្រាវ ការពិសោធន៍វិទ្យាសាស្ត្រ និងការច្នៃប្រឌិតមនុស្សយន្ត ដើម្បីជំរុញឱ្យសិស្សានុសិស្សក្លាយជាធនធានមនុស្សដ៏មានសក្តានុពលសម្រាប់សង្គមជាតិ។",
    isCustom: false
  },
  {
    id: "news-2",
    title: "💡 សិក្ខាសាលាស្តីពីការអនុវត្តបច្ចេកវិទ្យា AI ក្នុងការបង្រៀន និងរៀនសតវត្សរ៍ទី២១",
    category: "workshop",
    categoryLabel: "💡 សិក្ខាសាលា",
    badgeClass: "badge-workshop",
    date: "២២ សីហា ២០២៦",
    image: "2026011310215279.jpg",
    summary: "សិក្ខាសាលាចែករំលែកបទពិសោធន៍អំពីការប្រើប្រាស់បញ្ញាសិប្បនិម្មិត (AI) ដើម្បីបង្កើនប្រសិទ្ធភាពក្នុងការបង្រៀន និងស្រាវជ្រាវរបស់លោកគ្រូ-អ្នកគ្រូ។",
    content: "សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ បានរៀបចំសិក្ខាសាលាផ្ទៃក្នុងស្តីពី «ការអនុវត្តបច្ចេកវិទ្យា AI ក្នុងការបង្រៀន និងរៀនសតវត្សរ៍ទី២១» ជូនដល់គណៈគ្រប់គ្រង និងលោកគ្រូ-អ្នកគ្រូទាំងអស់。\n\nសិក្ខាសាលានេះផ្តោតសំខាន់លើការប្រើប្រាស់ឧបករណ៍ AI ដូចជា ChatGPT, Claude, Canva Education និង Edpuzzle ក្នុងការរៀបចំកិច្ចតែងការបង្រៀន ការបង្កើតកម្រងសំណួរអន្តរកម្ម និងការវាយតម្លៃសមត្ថភាពសិស្សប្រកបដោយភាពច្នៃប្រឌិតខ្ពស់។",
    isCustom: false
  },
  {
    id: "news-3",
    title: "👨‍🏫 វគ្គបណ្តុះបណ្តាលគរុកោសល្យ និងការច្នៃប្រឌិតវិធីសាស្ត្របង្រៀនរបស់លោកគ្រូ-អ្នកគ្រូ",
    category: "teacher",
    categoryLabel: "👨‍🏫 សកម្មភាពគ្រូ",
    badgeClass: "badge-teacher",
    date: "១៨ សីហា ២០២៦",
    image: "20260113102328681.jpeg",
    summary: "ការពង្រឹងសមត្ថភាពគរុកោសល្យ និងការផ្លាស់ប្តូរបទពិសោធន៍បង្រៀនជាក់ស្តែង ដើម្បីធានាគុណភាពអប់រំតាមស្តង់ដារគុណភាពខ្ពស់។",
    content: "ដើម្បីបន្តពង្រឹងគុណភាពអប់រំ សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ បានរៀបចំវគ្គបណ្តុះបណ្តាលបន្តគរុកោសល្យជូនដល់លោកគ្រូ-អ្នកគ្រូគ្រប់កម្រិតថ្នាក់。\n\nវគ្គបណ្តុះបណ្តាលនេះផ្តោតលើវិធីសាស្ត្របង្រៀនបែបសកម្ម (Active Learning), ការលើកទឹកចិត្តសិស្សឱ្យចូលរួមពិភាក្សា និងការគ្រប់គ្រងថ្នាក់រៀនបែបវិជ្ជមាន (Positive Classroom Management) ដើម្បីធានាថាសិស្សគ្រប់រូបទទួលបានចំណេះដឹងយ៉ាងពិតប្រាកដ។",
    isCustom: false
  },
  {
    id: "news-4",
    title: "🎉 អបអរសាទរពិធីបើកបវេសនកាលថ្មី កម្មវិធីចំណេះទូទៅខ្មែរ (K-12) និងអង់គ្លេសទូទៅ (GEP)",
    category: "program",
    categoryLabel: "📅 កម្មវិធីសាលា",
    badgeClass: "badge-program",
    date: "១២ សីហា ២០២៦",
    image: "20250819094329432.jpeg",
    summary: "ស្វាគមន៍បវេសនកាលឆ្នាំសិក្សាថ្មី ជាមួយនឹងការផ្តល់ជូនអាហារូបករណ៍ពិសេស និងបរិយាកាសសិក្សាទំនើប ប្រកបដោយផាសុកភាព។",
    content: "សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ សូមស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះសិស្សានុសិស្សចាស់-ថ្មីទាំងអស់ក្នុងឱកាសបើកបវេសនកាលថ្មី。\n\nសាលាផ្តល់ជូននូវកម្មវិធីសិក្សាគ្រប់ជ្រុងជ្រោយ រួមមាន៖\n- កម្មវិធីចំណេះទូទៅខ្មែរ (ពីថ្នាក់មត្តេយ្យ ដល់ថ្នាក់ទី១២)\n- កម្មវិធីភាសាអង់គ្លេសទូទៅ (General English Program - GEP)\n- កម្មវិធីភាសាអង់គ្លេសកម្រិតខ្ពស់ (Integrated English Program - IEP)\n- វគ្គត្រៀមប្រឡងតេស្តអន្តរជាតិ Cambridge & IELTS។",
    isCustom: false
  },
  {
    id: "news-5",
    title: "👥 កិច្ចប្រជុំបូកសរុបការងារប្រចាំខែ និងពង្រឹងគុណភាពសេវាកម្មអប់រំ QAC",
    category: "staff",
    categoryLabel: "👥 បុគ្គលិកផ្សេងៗ",
    badgeClass: "badge-staff",
    date: "០៥ សីហា ២០២៦",
    image: "20260113103535815.jpg",
    summary: "កិច្ចប្រជុំក្រុមការងាររដ្ឋបាល បុគ្គលិក និងក្រុមការងារធានាគុណភាពអប់រំ (QAC) ដើម្បីវាយតម្លៃវឌ្ឍនភាពការងារប្រចាំខែ។",
    content: "គណៈគ្រប់គ្រងសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ បានរៀបចំកិច្ចប្រជុំបូកសរុបលទ្ធផលការងារប្រចាំខែជាមួយបុគ្គលិកគ្រប់ផ្នែក。\n\nកិច្ចប្រជុំបានពិភាក្សាលើការកែលម្អសេវាកម្មទទួលស្វាគមន៍ ការគ្រប់គ្រងឯកសារចេញ-ចូល (Document In & Out) និងការអនុវត្តស្តង់ដារត្រួតពិនិត្យគុណភាព QAC ដើម្បីធានាបាននូវការបម្រើសេវាកម្មប្រកបដោយវិជ្ជាជីវៈខ្ពស់ជូនដល់មាតាបិតា និងអាណាព្យាបាលសិស្ស។",
    isCustom: false
  }
];

let currentNewsCategory = 'all';
let currentNewsSearch = '';

// Google Sheets Web App Endpoint (Live Database for News & Activities)
const GOOGLE_NEWS_API_URL = "https://script.google.com/macros/s/AKfycbxaIhauIa-3qobeBGELhgIhA0uSE1rnWvPa-C7nnsZfBrYq8_6qviG2nqKQqaAFNGWFww/exec";

// Roles, Permissions & Passwords
const DEPT_CREDENTIALS = {
  kge_sec: {
    name: "KGE Secondary Admin",
    icon: "🏫",
    passwords: ["kgesec2026", "kge@sec2026"],
    hashes: [
      "50bfe57c0684bb2e99aaaf9438d6a45c2003fd343e3adb080c2cb60fce2f90be"
    ]
  },
  kge_kp: {
    name: "KGE Kind & Prim Admin",
    icon: "🎒",
    passwords: ["kgekp2026", "kge@kp2026"],
    hashes: [
      "ad358325b9dcfd73f06b7faa396de71e5dd9858f8bf122cbb52b772a113120f5"
    ]
  },
  gep: {
    name: "GEP English Admin",
    icon: "🌐",
    passwords: ["gep2026", "gep@2026"],
    hashes: [
      "64b99746aecdd5c14c62410591a4c57ee0af52e478af79bf8c6cd64f457a41e0"
    ]
  },
  superadmin: {
    name: "Super Admin (All)",
    icon: "👑",
    passwords: ["sps2026", "sps@2026", "admin123"],
    hashes: [
      "c601a991d13857d42e3272c2658e5970044b6473c1f29e527f548decc3a2fbd4",
      "2441ae0621f33a31634467390b761902da452ada33783a56a89ba947f384644f",
      "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"
    ]
  }
};

function getActiveUserRole() {
  const role = sessionStorage.getItem('sps_active_role');
  if (role) return role;
  if (sessionStorage.getItem('sps_admin_logged_in') === 'true') return 'superadmin';
  return null;
}

function isAdminLoggedIn() {
  return getActiveUserRole() !== null;
}

function isSuperAdmin() {
  return getActiveUserRole() === 'superadmin';
}

function canManageDepartment(deptKey) {
  const role = getActiveUserRole();
  if (!role) return false;
  if (role === 'superadmin') return true;
  return role === deptKey;
}

function updateAdminUI() {
  const role = getActiveUserRole();
  const isAdm = !!role;
  const isSuper = role === 'superadmin';

  // 1. News actions bar (Super Admin only)
  const trigger = document.getElementById('btn-admin-login-trigger');
  const actions = document.getElementById('admin-actions-bar');
  if (trigger) trigger.style.display = isSuper ? 'none' : 'inline-flex';
  if (actions) actions.style.display = isSuper ? 'flex' : 'none';

  // 2. Navbar Admin Button
  const navBtn = document.getElementById('navbar-admin-btn');
  if (navBtn) {
    if (isSuper) {
      navBtn.className = 'nav-admin-pill-btn is-super';
      navBtn.innerHTML = '<i class="fa-solid fa-crown"></i> <span>Super Admin</span>';
      navBtn.setAttribute('title', 'Super Admin (Active) - ចុចដើម្បីបើក Cloud & Migrate');
    } else if (role && DEPT_CREDENTIALS[role]) {
      navBtn.className = 'nav-admin-pill-btn is-dept';
      navBtn.innerHTML = `${DEPT_CREDENTIALS[role].icon} <span>${DEPT_CREDENTIALS[role].name.split(' ')[0]}</span>`;
      navBtn.setAttribute('title', `ចូលជា៖ ${DEPT_CREDENTIALS[role].name} - ចុចដើម្បីចាកចេញ ឬប្តូរ`);
    } else {
      navBtn.className = 'nav-admin-pill-btn';
      navBtn.innerHTML = '<i class="fa-solid fa-shield-halved"></i> <span>Admin</span>';
      navBtn.setAttribute('title', 'គ្រប់គ្រង Admin');
    }
  }

  // 3. Department Top Banner Auth Badge
  const deptBadge = document.getElementById('dept-auth-badge');
  const deptRoleText = document.getElementById('dept-auth-role-text');
  const deptLoginTrigger = document.getElementById('btn-dept-login-trigger');

  if (deptBadge && deptLoginTrigger) {
    if (isAdm) {
      deptBadge.style.display = 'inline-flex';
      deptLoginTrigger.style.display = 'none';
      if (deptRoleText) {
        const info = DEPT_CREDENTIALS[role] || { icon: '🟢', name: role };
        deptRoleText.innerHTML = `${info.icon} ${info.name}`;
      }
    } else {
      deptBadge.style.display = 'none';
      deptLoginTrigger.style.display = 'inline-block';
    }
  }

  if (typeof renderDeptContent === 'function') {
    renderDeptContent();
  }
}

let inMemoryNewsArticles = null;

function getStoredNews() {
  if (inMemoryNewsArticles && Array.isArray(inMemoryNewsArticles) && inMemoryNewsArticles.length > 0) {
    return inMemoryNewsArticles;
  }
  try {
    const data = localStorage.getItem('sps_news_articles');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryNewsArticles = parsed;
        return inMemoryNewsArticles;
      }
    }
  } catch (e) {
    console.error('Error loading news from localStorage:', e);
  }
  inMemoryNewsArticles = [...initialNewsArticles];
  try {
    localStorage.setItem('sps_news_articles', JSON.stringify(inMemoryNewsArticles));
  } catch (e) {}
  return inMemoryNewsArticles;
}

function saveStoredNews(articles) {
  const safe = Array.isArray(articles) ? articles : [];
  inMemoryNewsArticles = safe;
  try {
    localStorage.setItem('sps_news_articles', JSON.stringify(safe));
  } catch (e) {
    console.warn('Error saving news to localStorage:', e);
  }
}

/// Authoritative merger for News/Activities
function mergeAndSaveNews(cloudList) {
  if (!Array.isArray(cloudList)) {
    return getStoredNews();
  }

  const currentList = getStoredNews() || [];
  const map = new Map();

  if (cloudList.length > 0) {
    // 1. Authoritative Cloud Items (Reflects additions, updates, and deletions from any device)
    cloudList.forEach(item => {
      if (item && item.id) {
        map.set(String(item.id), {
          ...item,
          id: String(item.id),
          syncedToCloud: true
        });
      }
    });

    // 2. Retain any local draft articles that were created offline and not yet synced
    currentList.forEach(item => {
      if (item && item.id && !item.syncedToCloud && !map.has(String(item.id))) {
        map.set(String(item.id), item);
      }
    });
  } else {
    // Fallback if cloudList is empty (e.g., initial startup or offline)
    (initialNewsArticles || []).forEach(item => {
      if (item && item.id) map.set(String(item.id), item);
    });
    currentList.forEach(item => {
      if (item && item.id) map.set(String(item.id), item);
    });
  }

  const merged = Array.from(map.values());
  merged.sort((a, b) => {
    const da = new Date(a.date || a.createdAt || a.created_at || 0).getTime() || 0;
    const db = new Date(b.date || b.createdAt || b.created_at || 0).getTime() || 0;
    return db - da;
  });

  saveStoredNews(merged);
  return merged;
}

async function syncNewsFromGoogleSheet() {
  try {
    const res = await fetch(GOOGLE_NEWS_API_URL);
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      mergeAndSaveNews(json.data);
      renderNewsGrid();
    }
  } catch (e) {
    console.warn('Google Sheet news sync note:', e);
  }
}

/// Real-time Cloud Synchronization for School News & Activities
let isNewsRealtimeInitialized = false;

function initNewsRealtimeSync() {
  if (window.ActivityService && typeof window.ActivityService.subscribe === 'function') {
    window.ActivityService.subscribe((cloudList) => {
      if (cloudList && Array.isArray(cloudList)) {
        mergeAndSaveNews(cloudList);
        renderNewsGrid();
      }
    });
  }

  if (!isNewsRealtimeInitialized) {
    isNewsRealtimeInitialized = true;
    let lastFocusFetch = 0;

    const throttledFetch = () => {
      const now = Date.now();
      if (now - lastFocusFetch > 2000) { // 2s cooldown for instant mobile wakeup
        lastFocusFetch = now;
        if (window.ActivityService && typeof window.ActivityService.fetchAll === 'function') {
          window.ActivityService.fetchAll().then(acts => {
            if (Array.isArray(acts)) {
              mergeAndSaveNews(acts);
              renderNewsGrid();
            }
          }).catch(() => {});
        }
      }
    };

    window.addEventListener('focus', throttledFetch);
    window.addEventListener('online', throttledFetch);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') throttledFetch();
    });
  }
}
window.initNewsRealtimeSync = initNewsRealtimeSync;

function initNewsSystem() {
  updateAdminUI();
  renderNewsGrid();
  initNewsRealtimeSync();
}

// Unified Aggregator: Automatically merges general news and department posts into the main feed
function getAllUnifiedNewsArticles() {
  const isEn = currentAppLanguage === 'en';
  const generalNews = (getStoredNews() || []).map(item => ({
    ...item,
    id: String(item.id),
    isDepartmentPost: false,
    department: 'school_general',
    module: item.category || 'general',
    categoryLabel: item.categoryLabel || (isEn ? 'School News' : 'ព័ត៌មានទូទៅ'),
    badgeClass: item.badgeClass || 'badge-student',
    createdAt: item.createdAt || item.date || ''
  }));

  const rawDeptPosts = getStoredDeptPosts() || [];
  const deptPosts = rawDeptPosts
    .filter(p => p && p.title && p.publishToActivities !== false && p.publish_to_activities !== false)
    .map(p => {
      const deptKey = p.department || 'kge_sec';
      const modKey = p.module || 'meeting';
      const deptInfo = DEPT_INFO[deptKey] || { name: 'KGE Secondary', name_en: 'KGE Secondary', icon: '🏫' };
      const modInfo = DEPT_MODULE_INFO[modKey] || { title: 'សកម្មភាព', title_en: 'Activity', icon: 'fa-solid fa-folder' };

      let badgeClass = 'badge-kge-sec';
      if (deptKey === 'kge_kp') badgeClass = 'badge-kge-kp';
      else if (deptKey === 'gep') badgeClass = 'badge-gep';

      const catLabel = isEn
        ? `${deptInfo.name_en || deptInfo.name} • ${modInfo.title_en || modInfo.title}`
        : `${deptInfo.name.split(' ')[0]} • ${modInfo.title}`;

      return {
        id: String(p.id),
        title: p.title,
        summary: p.description ? (p.description.length > 150 ? p.description.substring(0, 150) + '...' : p.description) : '',
        content: p.description || '',
        category: deptKey,
        moduleCategory: modKey,
        categoryLabel: catLabel,
        deptName: isEn ? (deptInfo.name_en || deptInfo.name) : deptInfo.name,
        deptIcon: deptInfo.icon || '🏫',
        modTitle: isEn ? (modInfo.title_en || modInfo.title) : modInfo.title,
        modIcon: modInfo.icon || 'fa-solid fa-folder',
        badgeClass: badgeClass,
        date: p.date || '',
        author: p.author || 'Takeo Campus',
        image: p.image || '',
        gallery: Array.isArray(p.gallery) ? p.gallery : [],
        attachment: (p.attachmentUrl || p.attachmentName) ? {
          name: p.attachmentName || 'Attachment',
          dataUrl: p.attachmentUrl || '',
          size: 'Document'
        } : null,
        attachmentUrl: p.attachmentUrl || '',
        attachmentName: p.attachmentName || '',
        isDepartmentPost: true,
        department: deptKey,
        module: modKey,
        createdAt: p.createdAt || p.created_at || p.date || ''
      };
    });

  const combined = [...deptPosts, ...generalNews];
  return combined.sort((a, b) => {
    const da = new Date(a.createdAt || a.date || 0).getTime() || 0;
    const db = new Date(b.createdAt || b.date || 0).getTime() || 0;
    return db - da;
  });
}

function renderNewsGrid(category = currentNewsCategory, search = currentNewsSearch) {
  currentNewsCategory = category;
  currentNewsSearch = search.toLowerCase().trim();

  const grid = document.getElementById('news-grid');
  if (!grid) return;

  const isAdm = isAdminLoggedIn();
  const isEn = currentAppLanguage === 'en';
  const articles = getAllUnifiedNewsArticles();

  const filtered = articles.filter(item => {
    let matchCat = true;
    if (currentNewsCategory && currentNewsCategory !== 'all') {
      if (['kge_sec', 'kge_kp', 'gep'].includes(currentNewsCategory)) {
        matchCat = (item.department === currentNewsCategory) || (item.category === currentNewsCategory);
      } else if (['meeting', 'support_doc', 'inspection', 'tech', 'council', 'stem', 'health', 'club'].includes(currentNewsCategory)) {
        matchCat = (item.module === currentNewsCategory) || (item.moduleCategory === currentNewsCategory);
      } else if (currentNewsCategory === 'school_general') {
        matchCat = !item.isDepartmentPost || item.department === 'school_general';
      } else {
        matchCat = (item.category === currentNewsCategory) || (item.moduleCategory === currentNewsCategory) || (item.department === currentNewsCategory);
      }
    }

    const matchSearch = !currentNewsSearch || 
      (item.title && item.title.toLowerCase().includes(currentNewsSearch)) || 
      (item.summary && item.summary.toLowerCase().includes(currentNewsSearch)) ||
      (item.content && item.content.toLowerCase().includes(currentNewsSearch)) ||
      (item.author && item.author.toLowerCase().includes(currentNewsSearch)) ||
      (item.categoryLabel && item.categoryLabel.toLowerCase().includes(currentNewsSearch));

    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: white; border-radius: 18px; border: 2px dashed #cbd5e1;">
        <i class="fa-regular fa-folder-open" style="font-size: 3rem; color: #94a3b8; margin-bottom: 1rem;"></i>
        <h3 style="color: #475569; margin: 0 0 0.5rem 0;">${isEn ? 'No activities or news in this category yet' : 'មិនមានព័ត៌មាន ឬសកម្មភាពក្នុងផ្នែកនេះនៅឡើយទេ'}</h3>
        <p style="color: #94a3b8; margin: 0;">${isAdm ? (isEn ? 'Use the publish button to create a new activity!' : 'សូមចុចលើប៊ូតុងបង្កើតព័ត៌មាន ដើម្បីផ្សព្វផ្សាយសកម្មភាពថ្មី!') : (isEn ? 'Please check back soon for exciting school updates.' : 'សូមរង់ចាំការផ្សព្វផ្សាយព័ត៌មានថ្មីៗឆាប់ៗនេះ។')}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const canManageItem = isAdm || (item.isDepartmentPost && canManageDepartment(item.department));

    return `
      <article class="news-card ${item.isDepartmentPost ? 'dept-unified-news-card' : ''}">
        <div class="news-card-media" onclick="openArticleModal('${item.id}')" style="cursor: pointer;" title="${isEn ? 'Click to read full post' : 'ចុចដើម្បីអានលម្អិត'}">
          <img src="${item.image || '20250819094329432.jpeg'}" alt="${item.title}" onerror="this.src='20250819094329432.jpeg'" loading="lazy">
          <span class="news-card-badge ${item.badgeClass || 'badge-student'}">
            ${item.isDepartmentPost ? `${item.deptIcon} ${item.categoryLabel}` : item.categoryLabel}
          </span>
          ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `
            <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(15,23,42,0.82); color: white; padding: 3px 9px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; backdrop-filter: blur(4px); box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
              <i class="fa-solid fa-images"></i> +${item.gallery.length}
            </span>
          ` : ''}
        </div>
        <div class="news-card-body">
          <div class="news-card-date" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span><i class="fa-regular fa-calendar"></i> ${item.date || 'N/A'}</span>
              ${item.isCustom ? (item.syncedToCloud !== false ? `
                <span class="badge-cloud-status badge-cloud-synced" style="font-size: 0.68rem; padding: 1px 7px;" title="បាន Sync ចូល Cloud Supabase រួចរាល់">
                  <i class="fa-solid fa-cloud-check"></i> Cloud
                </span>
              ` : `
                <span class="badge-cloud-status badge-cloud-unsynced" style="font-size: 0.68rem; padding: 1px 7px;" onclick="manualSyncSinglePost('${item.id}', event)" title="មិនទាន់ចូល Cloud ទេ (ចុចដើម្បី Sync)">
                  <i class="fa-solid fa-cloud-arrow-up fa-bounce"></i> Sync
                </span>
              `) : ''}
            </div>
            ${item.author ? `<span style="font-size: 0.78rem; color: #64748b; font-weight: 600;"><i class="fa-solid fa-user-pen"></i> ${item.author}</span>` : ''}
          </div>
          <h2 class="news-card-title" onclick="openArticleModal('${item.id}')" style="cursor: pointer;">${item.title}</h2>
          <p class="news-card-desc">${item.summary || item.content || ''}</p>
          <div class="news-card-footer">
            <button class="btn-read-more" onclick="openArticleModal('${item.id}')">
              ${isEn ? 'Read More' : 'អានលម្អិត'} <i class="fa-solid fa-arrow-right"></i>
            </button>
            ${item.attachment ? `
              <a href="${item.attachment.dataUrl || item.attachmentUrl}" target="_blank" download style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.78rem; color: #059669; font-weight: 700; text-decoration: none; padding: 4px 8px; background: #ecfdf5; border-radius: 6px;" title="Download Document">
                <i class="fa-solid fa-paperclip"></i> ${item.attachment.name || 'PDF'}
              </a>
            ` : ''}
            ${canManageItem ? `
              <div style="display: flex; gap: 4px; align-items: center;">
                ${item.isDepartmentPost ? `
                  <button class="btn-edit-post" title="កែសម្រួល" onclick="openDeptPublishModal('${item.id}')">
                    <i class="fa-solid fa-pen-to-square"></i> ${isEn ? 'Edit' : 'កែប្រែ'}
                  </button>
                  <button class="btn-delete-post" title="លុបព័ត៌មាននេះ" onclick="deleteDeptPost('${item.id}')">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                ` : `
                  <button class="btn-edit-post" title="កែសម្រួល" onclick="openEditPostModal('${item.id}', event)">
                    <i class="fa-solid fa-pen-to-square"></i> ${isEn ? 'Edit' : 'កែប្រែ'}
                  </button>
                  <button class="btn-delete-post" title="លុបព័ត៌មាននេះ" onclick="deleteNewsPost('${item.id}', event)">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                `}
              </div>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.filterNews = function(category, btnElement) {
  document.querySelectorAll('.cat-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderNewsGrid(category, currentNewsSearch);
};

window.handleNewsSearch = function(keyword) {
  renderNewsGrid(currentNewsCategory, keyword);
};

/// គ្រប់គ្រងរូបភាព និងឯកសារភ្ជាប់ (Gallery & Attachment State)
let currentGalleryFiles = [];
let currentAttachment = null;

function compressImageFile(file, maxWidth = 720, maxHeight = 720, quality = 0.58) {
  if (!file) return Promise.resolve(null);

  return new Promise((resolve) => {
    // If it's a non-data URL string (e.g. https://... or local file path)
    if (typeof file === 'string' && !file.startsWith('data:image/')) {
      return resolve(file);
    }

    const processSrc = (srcUrl) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;
        if (!width || !height) {
          return resolve(srcUrl);
        }

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.max(1, Math.round(width * ratio));
          height = Math.max(1, Math.round(height * ratio));
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);
        }

        // Try WebP first for optimal compression
        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData && webpData.startsWith('data:image/webp') && webpData.length > 50) {
            if (typeof file === 'string' && file.startsWith('data:') && file.length < webpData.length) {
              resolve(file);
            } else {
              resolve(webpData);
            }
            return;
          }
        } catch (errWebp) {}

        // Fallback to JPEG
        try {
          const jpegData = canvas.toDataURL('image/jpeg', quality);
          if (typeof file === 'string' && file.startsWith('data:') && file.length < jpegData.length) {
            resolve(file);
          } else {
            resolve(jpegData);
          }
        } catch (errJpeg) {
          resolve(srcUrl);
        }
      };

      img.onerror = () => {
        resolve(typeof file === 'string' ? file : null);
      };

      img.src = srcUrl;
    };

    if (typeof file === 'string') {
      processSrc(file);
    } else if (file instanceof Blob || (file && typeof file === 'object' && file.type)) {
      if (!file.type || !file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        processSrc(e.target.result);
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    } else {
      resolve(null);
    }
  });
}
window.compressImageFile = compressImageFile;

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

window.handleThumbnailFileSelect = async function(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file, 800, 800, 0.62);
    document.getElementById('post-image-url').value = dataUrl;
    const previewWrap = document.getElementById('thumbnail-preview-wrap');
    const previewImg = document.getElementById('thumbnail-preview-img');
    if (previewImg) previewImg.src = dataUrl;
    if (previewWrap) previewWrap.classList.add('active');
  } catch (err) {
    console.error('Thumbnail compression error:', err);
    alert('មានបញ្ហាក្នុងការផ្ទុករូបភាព Thumbnail!');
  }
};

window.clearThumbnailPreview = function() {
  const fileInput = document.getElementById('post-thumbnail-file');
  if (fileInput) fileInput.value = '';
  const urlInput = document.getElementById('post-image-url');
  if (urlInput) urlInput.value = '';
  const previewImg = document.getElementById('thumbnail-preview-img');
  if (previewImg) previewImg.src = '';
  const previewWrap = document.getElementById('thumbnail-preview-wrap');
  if (previewWrap) previewWrap.classList.remove('active');
};

window.handleGalleryFilesSelect = async function(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;

  const maxLimit = 30;
  const remainingSlots = maxLimit - currentGalleryFiles.length;
  if (remainingSlots <= 0) {
    alert(`⚠️ អ្នកបានជ្រើសរើសរូបភាពគ្រប់ចំនួនអតិបរមា ${maxLimit} រូបហើយ!`);
    return;
  }

  const filesToProcess = files.slice(0, remainingSlots);
  if (files.length > remainingSlots) {
    alert(`⚠️ អនុញ្ញាតឱ្យផ្ទុកត្រឹមតែ ${maxLimit} រូបភាពប៉ុណ្ណោះ! ប្រព័ន្ធនឹងផ្ទុក ${remainingSlots} រូបដំបូង។`);
  }

  for (const file of filesToProcess) {
    try {
      const dataUrl = await compressImageFile(file, 720, 720, 0.58);
      if (dataUrl) currentGalleryFiles.push(dataUrl);
    } catch (err) {
      console.error('Gallery image error:', err);
    }
  }

  renderGalleryPreviews();
  event.target.value = '';
};

window.removeGalleryItem = function(index) {
  if (index >= 0 && index < currentGalleryFiles.length) {
    currentGalleryFiles.splice(index, 1);
    renderGalleryPreviews();
  }
};

function renderGalleryPreviews() {
  const badge = document.getElementById('gallery-count-badge');
  if (badge) badge.innerText = `${currentGalleryFiles.length} រូប`;

  const container = document.getElementById('gallery-previews-container');
  if (!container) return;

  container.innerHTML = currentGalleryFiles.map((imgUrl, index) => `
    <div class="gallery-preview-item" style="position: relative;">
      <img src="${imgUrl}" alt="Gallery photo ${index + 1}">
      <span style="position: absolute; bottom: 2px; left: 2px; background: rgba(0,0,0,0.7); color: white; font-size: 0.65rem; padding: 1px 4px; border-radius: 4px; font-weight: 700; pointer-events: none;">#${index + 1}</span>
      <button type="button" class="btn-remove-item" onclick="removeGalleryItem(${index})" title="លុបរូបនេះ">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

window.handleAttachmentFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    currentAttachment = {
      name: file.name,
      size: formatBytes(file.size),
      dataUrl: e.target.result
    };
    renderAttachmentPreview();
  };
  reader.readAsDataURL(file);
};

window.clearAttachment = function() {
  currentAttachment = null;
  const fileInput = document.getElementById('post-attachment-file');
  if (fileInput) fileInput.value = '';
  renderAttachmentPreview();
};

function renderAttachmentPreview() {
  const container = document.getElementById('attachment-preview-container');
  if (!container) return;

  if (!currentAttachment) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="attachment-file-badge">
      <i class="fa-solid fa-file-lines" style="color: var(--sps-blue); font-size: 1.1rem;"></i>
      <span><strong>${currentAttachment.name}</strong> (${currentAttachment.size})</span>
      <button type="button" class="btn-remove-attachment" onclick="clearAttachment()" title="លុបឯកសារភ្ជាប់">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
}

window.openNewsLightbox = function(articleId, startIndex = 0) {
  const articles = getStoredNews();
  const article = articles.find(a => String(a.id) === String(articleId));
  if (!article) return;
  const images = [];
  if (article.image) images.push(article.image);
  if (Array.isArray(article.gallery)) {
    article.gallery.forEach(g => { if (g) images.push(g); });
  }
  if (images.length > 0 && typeof openMediaLightbox === 'function') {
    openMediaLightbox(images[startIndex] || images[0], images, startIndex);
  }
};

window.openArticleModal = function(id) {
  if (!id) return;
  const allDeptPosts = getStoredDeptPosts();
  const deptItem = allDeptPosts.find(x => String(x.id) === String(id));
  if (deptItem && typeof openDeptArticleModal === 'function') {
    openDeptArticleModal(id);
    return;
  }

  const articles = getStoredNews();
  const article = articles.find(a => String(a.id) === String(id));
  if (!article) return;

  const modalBody = document.getElementById('article-modal-body');
  const formattedContent = article.content.split('\n\n').map(p => `<p style="margin-bottom: 1.2rem;">${p.replace(/\n/g, '<br>')}</p>`).join('');

  // 1. Gallery Section in Reader
  let galleryHtml = '';
  if (Array.isArray(article.gallery) && article.gallery.length > 0) {
    galleryHtml = `
      <div style="margin-top: 2.2rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
        <h3 style="color: #0f172a; font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
          <span>📸</span> <span data-i18n="dept_gallery_title">${currentAppLanguage === 'en' ? 'Related Gallery Photos' : 'កម្រងរូបភាពពាក់ព័ន្ធ'}</span> (${article.gallery.length} <span data-i18n="photos_count_suffix">${currentAppLanguage === 'en' ? 'photos' : 'រូប'}</span>)
        </h3>
        <div class="article-gallery-grid">
          ${article.gallery.map((img, gIdx) => `
            <div class="gallery-photo-card" onclick="openNewsLightbox('${article.id}', ${article.image ? gIdx + 1 : gIdx})" title="ចុចដើម្បីមើលរូបធំ">
              <img src="${img}" alt="Related gallery photo">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 2. Attachment Section in Reader
  let attachmentHtml = '';
  if (article.attachment && article.attachment.dataUrl) {
    attachmentHtml = `
      <div class="attachment-download-box">
        <div style="display: flex; align-items: center; gap: 12px;">
          <i class="fa-solid fa-file-pdf" style="font-size: 2.2rem; color: var(--sps-red);"></i>
          <div>
            <div style="font-weight: 700; color: #0f172a; font-size: 1rem;">${article.attachment.name}</div>
            <div style="font-size: 0.82rem; color: #64748b;">ទំហំឯកសារ៖ ${article.attachment.size || 'ឯកសារភ្ជាប់'}</div>
          </div>
        </div>
        <a href="${article.attachment.dataUrl}" download="${article.attachment.name}" class="btn-download-file">
          <i class="fa-solid fa-download"></i> ទាញយកឯកសារ (Download)
        </a>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="news-card-badge ${article.badgeClass || 'badge-student'}" style="position: static; display: inline-block; margin-bottom: 0.8rem;">${article.categoryLabel}</span>
      <h1 style="font-size: 1.8rem; font-weight: 800; color: #0f172a; line-height: 1.4; margin: 0 0 0.8rem 0;">${article.title}</h1>
      <div style="display: flex; align-items: center; gap: 1rem; color: #64748b; font-size: 0.9rem; flex-wrap: wrap;">
        <span><i class="fa-regular fa-calendar" style="color: var(--sps-blue); margin-right: 5px;"></i>${article.date}</span>
        <span><i class="fa-solid fa-school" style="color: var(--sps-red); margin-right: 5px;"></i>សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ</span>
      </div>
    </div>

    <div style="border-radius: 16px; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-bottom: 4px solid var(--sps-gold); cursor: pointer;" onclick="openNewsLightbox('${article.id}', 0)" title="ចុចដើម្បីមើលរូបធំ">
      <img src="${article.image}" alt="${article.title}" style="width: 100%; display: block; max-height: 420px; object-fit: cover;" onerror="this.src='20250819094329432.jpeg'">
    </div>

    <div style="line-height: 1.9; color: #334155; font-size: 1.05rem;">
      ${formattedContent}
    </div>

    ${galleryHtml}
    ${attachmentHtml}

    <div class="article-share-bar">
      <div class="share-bar-label">
        <i class="fa-solid fa-share-nodes" style="color: #0071ba;"></i>
        <span>${currentAppLanguage === 'en' ? 'Share this post:' : 'ចែករំលែកព័ត៌មាននេះ៖'}</span>
      </div>
      <div class="share-buttons-list">
        <button type="button" class="btn-share-social btn-tg" onclick="shareArticleToTelegram('${encodeURIComponent(article.title + ' | សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ')}', '${encodeURIComponent(window.location.origin + window.location.pathname + '#news_' + article.id)}')">
          <i class="fa-brands fa-telegram"></i> <span>Telegram</span>
        </button>
        <button type="button" class="btn-share-social btn-fb" onclick="shareArticleToFacebook('${encodeURIComponent(window.location.origin + window.location.pathname + '#news_' + article.id)}')">
          <i class="fa-brands fa-facebook-f"></i> <span>Facebook</span>
        </button>
        <button type="button" class="btn-share-social btn-native" onclick="shareArticleNative('${encodeURIComponent(article.title + ' | សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ')}', '${encodeURIComponent(window.location.origin + window.location.pathname + '#news_' + article.id)}')">
          <i class="fa-solid fa-share-from-square"></i> <span>${currentAppLanguage === 'en' ? 'Share' : 'ផ្ញើបន្ត'}</span>
        </button>
        <button type="button" class="btn-share-social btn-copy" onclick="copyArticleLink('${window.location.origin + window.location.pathname + '#news_' + article.id}')">
          <i class="fa-solid fa-link"></i> <span>${currentAppLanguage === 'en' ? 'Copy Link' : 'ចម្លង Link'}</span>
        </button>
      </div>
    </div>
  `;

  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.add('active');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.remove('active');
};

window.openPublishModal = function() {
  if (typeof window.checkSupabaseConnection === 'function') {
    window.checkSupabaseConnection().catch(() => {});
  }
  document.getElementById('publish-form').reset();
  document.getElementById('post-id-edit').value = '';
  clearThumbnailPreview();
  currentGalleryFiles = [];
  renderGalleryPreviews();
  clearAttachment();

  const titleHeader = document.querySelector('#publish-modal .modal-header h2');
  if (titleHeader) titleHeader.innerHTML = '<i class="fa-solid fa-newspaper"></i> បង្កើត និងផ្សព្វផ្សាយព័ត៌មានថ្មី';

  const submitBtn = document.getElementById('btn-submit-post-text');
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> ផ្សព្វផ្សាយភ្លាមៗ (Publish Now)';

  const now = new Date();
  const monthsKhmer = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  const formattedDate = `${now.getDate()} ${monthsKhmer[now.getMonth()]} ${now.getFullYear()}`;
  const dateInput = document.getElementById('post-date');
  if (dateInput) dateInput.value = formattedDate;

  const modal = document.getElementById('publish-modal');
  if (modal) modal.classList.add('active');
};

window.openEditPostModal = function(id, event) {
  if (event) event.stopPropagation();
  if (typeof window.checkSupabaseConnection === 'function') {
    window.checkSupabaseConnection().catch(() => {});
  }
  const articles = getStoredNews();
  const article = articles.find(a => a.id === id);
  if (!article) return;

  document.getElementById('post-id-edit').value = article.id;
  document.getElementById('post-title').value = article.title;
  document.getElementById('post-category').value = article.category;
  document.getElementById('post-date').value = article.date;
  document.getElementById('post-image-url').value = article.image;
  document.getElementById('post-summary').value = article.summary;
  document.getElementById('post-content').value = article.content;

  // Show thumbnail preview
  if (article.image) {
    const previewWrap = document.getElementById('thumbnail-preview-wrap');
    const previewImg = document.getElementById('thumbnail-preview-img');
    if (previewImg) previewImg.src = article.image;
    if (previewWrap) previewWrap.classList.add('active');
  } else {
    clearThumbnailPreview();
  }

  // Load Gallery photos
  currentGalleryFiles = Array.isArray(article.gallery) ? [...article.gallery] : [];
  renderGalleryPreviews();

  // Load Attachment
  currentAttachment = article.attachment ? { ...article.attachment } : null;
  renderAttachmentPreview();

  const titleHeader = document.querySelector('#publish-modal .modal-header h2');
  if (titleHeader) titleHeader.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> កែសម្រួលព័ត៌មាន';

  const submitBtn = document.getElementById('btn-submit-post-text');
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> រក្សាទុកការកែប្រែ (Save Changes)';

  const modal = document.getElementById('publish-modal');
  if (modal) modal.classList.add('active');
};

window.closePublishModal = function() {
  const modal = document.getElementById('publish-modal');
  if (modal) modal.classList.remove('active');
};

window.handleImagePresetChange = function(val) {
  const input = document.getElementById('post-image-url');
  if (input) {
    if (val !== 'custom') {
      input.value = val;
      const previewWrap = document.getElementById('thumbnail-preview-wrap');
      const previewImg = document.getElementById('thumbnail-preview-img');
      if (previewImg) previewImg.src = val;
      if (previewWrap) previewWrap.classList.add('active');
    } else {
      input.value = '';
      clearThumbnailPreview();
      input.focus();
    }
  }
};

window.handlePublishSubmit = async function(event) {
  event.preventDefault();

  const editId = document.getElementById('post-id-edit').value.trim();
  const title = document.getElementById('post-title').value.trim();
  const category = document.getElementById('post-category').value;
  const date = document.getElementById('post-date').value.trim();
  const image = document.getElementById('post-image-url').value.trim();
  const summary = document.getElementById('post-summary').value.trim();
  const content = document.getElementById('post-content').value.trim();
  const submitBtn = document.getElementById('btn-submit-post-text');
  const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';

  // REQUIRE THUMBNAIL VALIDATION
  if (!image) {
    alert('⚠️ សូមជ្រើសរើស ឬ Upload រូបភាពតំណាង (Cover Image / Thumbnail) ជាមុនសិន មុននឹងបង្ហោះ!\n\n(Required: Please upload or select a thumbnail image.)');
    const selectEl = document.getElementById('post-image-select');
    if (selectEl) selectEl.focus();
    return;
  }

  const catMap = {
    student: { label: "🎓 សកម្មភាពសិស្ស", badge: "badge-student" },
    teacher: { label: "👨‍🏫 សកម្មភាពគ្រូ", badge: "badge-teacher" },
    workshop: { label: "💡 សិក្ខាសាលា", badge: "badge-workshop" },
    program: { label: "📅 កម្មវិធីសាលា", badge: "badge-program" },
    staff: { label: "👥 បុគ្គលិកផ្សេងៗ", badge: "badge-staff" }
  };

  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> កំពុងរក្សាទុកទៅ Cloud...';

  let cloudSaved = false;
  let articles = getStoredNews();

  try {
    if (editId) {
      // Mode: Update Existing
      const index = articles.findIndex(a => a.id === editId);
      if (index !== -1) {
        const updatedArticle = {
          ...articles[index],
          title,
          category,
          categoryLabel: catMap[category]?.label || "ព័ត៌មានទូទៅ",
          badgeClass: catMap[category]?.badge || "badge-student",
          date,
          image,
          summary,
          content,
          gallery: [...currentGalleryFiles],
          attachment: currentAttachment ? { ...currentAttachment } : null,
          syncedToCloud: false
        };

        if (window.ActivityService && typeof window.ActivityService.update === 'function') {
          try {
            await window.ActivityService.update(editId, updatedArticle, null, currentGalleryFiles);
            cloudSaved = true;
            updatedArticle.syncedToCloud = true;
          } catch (cErr) {
            console.warn('Direct news update cloud warning:', cErr);
          }
        }

        articles[index] = updatedArticle;
        saveStoredNews(articles);
        renderNewsGrid();
        closePublishModal();

        // Secondary backup
        fetch(GOOGLE_NEWS_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'update', article: updatedArticle })
        }).catch(() => {});

        if (cloudSaved) {
          alert('🎉 ព័ត៌មានត្រូវបានកែសម្រួល និង Sync ទៅកាន់ Cloud Supabase ដោយជោគជ័យ ១០០%!\n\n(គ្រប់ឧបករណ៍អាចមើលឃើញភ្លាមៗ)');
        } else {
          alert('💾 បានរក្សាទុកក្នុងកុំព្យូទ័រនេះ និងកំពុងព្យាយាម Sync ទៅកាន់ Cloud Supabase ដោយស្វ័យប្រវត្តិ!');
        }
        return;
      }
    }

    // Mode: Create New
    const newArticle = {
      id: "post-" + Date.now(),
      title: title,
      category: category,
      categoryLabel: catMap[category]?.label || "ព័ត៌មានទូទៅ",
      badgeClass: catMap[category]?.badge || "badge-student",
      date: date,
      image: image,
      summary: summary,
      content: content,
      gallery: [...currentGalleryFiles],
      attachment: currentAttachment ? { ...currentAttachment } : null,
      isCustom: true,
      syncedToCloud: false
    };

    if (window.ActivityService && typeof window.ActivityService.create === 'function') {
      try {
        await window.ActivityService.create(newArticle, null, currentGalleryFiles);
        cloudSaved = true;
        newArticle.syncedToCloud = true;
      } catch (cErr) {
        console.warn('Direct news create cloud warning:', cErr);
      }
    }

    articles.unshift(newArticle);
    saveStoredNews(articles);
    renderNewsGrid();
    closePublishModal();
    document.getElementById('publish-form').reset();

    // Secondary backup
    fetch(GOOGLE_NEWS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'create', article: newArticle })
    }).catch(() => {});

    if (cloudSaved) {
      alert('🎉 ព័ត៌មានរបស់អ្នកត្រូវបាន Publish ចូល Cloud Supabase និងផ្សព្វផ្សាយ Real-time ដោយជោគជ័យ ១០០%!\n\n(គ្រប់ឧបករណ៍ PC & Mobile មើលឃើញភ្លាមៗ)');
    } else {
      alert('💾 បានរក្សាទុកក្នុងកុំព្យូទ័រនេះ និងកំពុងព្យាយាម Sync ទៅកាន់ Cloud Supabase ដោយស្វ័យប្រវត្តិ!');
    }
  } catch (err) {
    alert('❌ បរាជ័យក្នុងការផ្សព្វផ្សាយ៖ ' + err.message);
  } finally {
    if (submitBtn) submitBtn.innerHTML = origBtnHtml || '<i class="fa-solid fa-paper-plane"></i> ផ្សព្វផ្សាយភ្លាមៗ (Publish Now)';
  }
};

window.deleteNewsPost = function(id, event) {
  if (event) event.stopPropagation();
  if (confirm('តើអ្នកពិតជាចង់លុបព័ត៌មាននេះមែនទេ?')) {
    let articles = getStoredNews();
    articles = articles.filter(a => a.id !== id);
    saveStoredNews(articles);
    renderNewsGrid();

    // Real-time Cloud Deletion on Supabase
    if (window.ActivityService && typeof window.ActivityService.delete === 'function') {
      window.ActivityService.delete(id).catch(err => {
        console.warn('Supabase news delete notice:', err);
      });
    }

    // Sync to Google Sheet in background
    fetch(GOOGLE_NEWS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'delete', id: id })
    }).catch(err => console.error('Sheet delete error:', err));
  }
};

// Admin Authentication Modal Handlers
window.openAdminLoginModal = function(defaultRole = null) {
  if (defaultRole && typeof defaultRole !== 'string') {
    defaultRole = null;
  }
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    const inp = document.getElementById('admin-password-input');
    if (inp) inp.value = '';
    const err = document.getElementById('admin-login-error');
    if (err) err.style.display = 'none';

    const roleSel = document.getElementById('admin-role-select');
    if (roleSel) {
      if (defaultRole && roleSel.querySelector(`option[value="${defaultRole}"]`)) {
        roleSel.value = defaultRole;
      } else if (typeof currentDepartment !== 'undefined' && currentDepartment && roleSel.querySelector(`option[value="${currentDepartment}"]`)) {
        roleSel.value = currentDepartment;
      } else {
        roleSel.value = 'auto';
      }
    }

    modal.classList.add('active');
    setTimeout(() => { if (inp) inp.focus(); }, 150);
  }
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) modal.classList.remove('active');
};

// ==================== CRYPTOGRAPHIC SHA-256 PASSWORD HASHING ====================
async function hashPassword(str) {
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

window.togglePasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
};

window.handleNavbarAdminClick = function() {
  const role = getActiveUserRole();
  if (role === 'superadmin') {
    openFirebaseModal();
  } else {
    openAdminLoginModal();
  }
};

window.handleAdminLoginSubmit = async function(event) {
  if (event && event.preventDefault) event.preventDefault();
  const pass = (document.getElementById('admin-password-input')?.value || '').trim();
  const selectedRole = document.getElementById('admin-role-select')?.value || 'auto';
  const errEl = document.getElementById('admin-login-error');
  if (errEl) errEl.style.display = 'none';

  if (!pass) return;

  const inputHash = await hashPassword(pass);
  let matchedRole = null;

  if (selectedRole === 'auto') {
    // Auto-detect role based on hash or plaintext password
    for (const [rKey, rData] of Object.entries(DEPT_CREDENTIALS)) {
      if (rData.hashes.includes(inputHash) || rData.passwords.includes(pass)) {
        matchedRole = rKey;
        break;
      }
    }
  } else {
    // Specific role selected
    const rData = DEPT_CREDENTIALS[selectedRole];
    if (rData && (rData.hashes.includes(inputHash) || rData.passwords.includes(pass))) {
      matchedRole = selectedRole;
    }
  }

  if (matchedRole) {
    sessionStorage.setItem('sps_active_role', matchedRole);
    sessionStorage.setItem('sps_admin_logged_in', 'true');
    closeAdminLoginModal();
    updateAdminUI();
    renderNewsGrid();

    const roleInfo = DEPT_CREDENTIALS[matchedRole];
    alert(`🎉 ស្វាគមន៍! លោកគ្រូ-អ្នកគ្រូបានចូលគ្រប់គ្រង ${roleInfo.icon} «${roleInfo.name}» ដោយជោគជ័យ!`);

    // If logged in as a specific department, auto-navigate to its tab
    if (matchedRole !== 'superadmin' && DEPT_INFO[matchedRole]) {
      navigateToDepartment(matchedRole);
    } else if (matchedRole === 'superadmin') {
      openFirebaseModal();
    }
  } else {
    if (errEl) {
      errEl.style.display = 'block';
      errEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> លេខសម្ងាត់មិនត្រឹមត្រូវសម្រាប់ផ្នែកដែលបានជ្រើសរើសទេ!';
    }
  }
};

window.handleAdminLogout = function() {
  const role = getActiveUserRole();
  const roleName = role && DEPT_CREDENTIALS[role] ? DEPT_CREDENTIALS[role].name : 'Admin';
  if (confirm(`តើលោកគ្រូ-អ្នកគ្រូចង់ចាកចេញពីសិទ្ធិ ${roleName} មែនទេ?`)) {
    sessionStorage.removeItem('sps_active_role');
    sessionStorage.removeItem('sps_admin_logged_in');
    updateAdminUI();
    renderNewsGrid();
    alert('🚪 បានចាកចេញពីសិទ្ធិគ្រប់គ្រងដោយជោគជ័យ!');
  }
};

window.handleModalBackdropClick = function(event, modalId) {
  if (event.target.id === modalId) {
    if (modalId === 'article-modal') closeArticleModal();
    if (modalId === 'publish-modal') closePublishModal();
    if (modalId === 'admin-login-modal') closeAdminLoginModal();
    if (modalId === 'admission-modal') closeAdmissionModal();
    if (modalId === 'firebase-modal') closeFirebaseModal();
    if (modalId === 'dept-publish-modal') closeDeptPublishModal();
    if (modalId === 'dept-article-modal') closeDeptArticleModal();
  }
};

// ==================== BILINGUAL LANGUAGE SWITCHER (EN / KH) ====================
const I18N_DICT = {
  kh: {
    // Brand & Navigation
    brand_school_name: "សាលារៀនសុវណ្ណភូមិទី25",
    brand_campus_name: "ទីតាំងខេត្តតាកែវ",
    nav_home: "ទំព័រដើម",
    nav_staff: "ព័ត៌មានបុគ្គលិក",
    nav_dept: "នាយកដ្ឋាន",
    nav_docs: "ឯកសារចេញ-ចូល",
    nav_qac: "ត្រួតពិនិត្យគុណភាព QAC",
    nav_elab: "E-Lab & AI",
    nav_activities: "សកម្មភាព & ព័ត៌មាន",
    nav_elibrary: "បណ្ណាល័យអេឡិចត្រូនិក",
    nav_elibrary_title: "បណ្ណាល័យអេឡិចត្រូនិក",
    desc_elibrary_hub: "ចូលទៅកាន់ប្រព័ន្ធបណ្ណាល័យអេឡិចត្រូនិក NTC Group E-Library ផ្ទាល់",
    elib_badge: "📚 បណ្ណាល័យឌីជីថល • Google Drive E-Library",
    elib_title: "បណ្ណាល័យអេឡិចត្រូនិក",
    elib_desc: "ឃ្លាំងផ្ទុកឯកសារមេរៀន សៀវភៅពុម្ពក្រសួងអប់រំ កម្រងវិញ្ញាសាប្រឡងបាក់ឌុប-ឌីប្លូម កម្មវិធីភាសាអង់គ្លេស GEP និងឯកសារជំនួយស្មារតីគ្រប់កម្រិតថ្នាក់នៃសាលារៀនសុវណ្ណភូមិទី២៥ ទីតាំងខេត្តតាកែវ។",
    btn_open_drive_main: "បើកមើលក្នុង Google Drive",
    btn_copy_drive_link: "ចម្លងតំណភ្ជាប់ (Copy Link)",
    elib_folders_heading: "ថតឯកសារ និងសៀវភៅតាមប្រភេទ (Library Folders)",
    elib_folders_sub: "ជ្រើសរើសផ្នែកឯកសារដែលលោកអ្នកចង់អាន ឬទាញយក",
    btn_open_folder: "បើកថតឯកសារ",
    elib_tag_moeys: "MoEYS ថ្នាក់ទី១-១២",
    elib_card_1_title: "សៀវភៅពុម្ពក្រសួងអប់រំ",
    elib_card_1_desc: "សៀវភៅពុម្ពផ្លូវការថ្នាក់ទី១ ដល់ទី១២ គ្រប់មុខវិជ្ជាវិទ្យាសាស្ត្រ និងសង្គម",
    elib_tag_exams: "បាក់ឌុប & ឌីប្លូម",
    elib_card_2_title: "កម្រងវិញ្ញាសាប្រឡងជាតិ",
    elib_card_2_desc: "វិញ្ញាសាប្រឡងបាក់ឌុបថ្នាក់ទី១២ ឌីប្លូមថ្នាក់ទី៩ និងអត្រាកំណែផ្លូវការ",
    elib_tag_gep: "ភាសាអង់គ្លេស GEP",
    elib_card_3_title: "កម្មវិធីភាសាអង់គ្លេស GEP",
    elib_card_3_desc: "សៀវភៅសិក្សាភាសាអង់គ្លេស Cambridge, Oxford និងសៀវភៅលំហាត់អនុវត្ត",
    elib_tag_stem: "STEM & AI",
    elib_card_4_title: "ឯកសារពិសោធន៍ STEM & AI",
    elib_card_4_desc: "មេរៀនពិសោធន៍វិទ្យាសាស្ត្រ Robotics កូដកម្ម និងគម្រោង AI ជាក់ស្តែង",
    elib_tag_general: "ចំណេះដឹងទូទៅ",
    elib_card_5_title: "សៀវភៅអាន & ចំណេះដឹងទូទៅ",
    elib_card_5_desc: "ប្រលោមលោកអប់រំ ចំណេះដឹងទូទៅ ប្រវត្តិសាស្ត្រ និងការអភិវឌ្ឍខ្លួន",
    elib_tag_all: "Google Drive Storage",
    elib_card_6_title: "ថតឯកសារសរុប (All Folders)",
    elib_card_6_desc: "ចូលទៅកាន់ថតឯកសារ Google Drive ទាំងអស់របស់សាលារៀនសុវណ្ណភូមិទី២៥",
    elib_viewer_title: "Google Drive E-Library Hub",
    elib_hub_ready_title: "បណ្ណាល័យឌីជីថល Google Drive ត្រូវបានភ្ជាប់រួចរាល់",
    elib_hub_ready_desc: "លោកអ្នកអាចចុចប៊ូតុងខាងក្រោម ដើម្បីចូលទៅកាន់ឃ្លាំងឯកសារ សៀវភៅ និងទាញយក PDFs ទាំងអស់ដោយផ្ទាល់",
    
    // Stats & Home
    stat_staff: "បុគ្គលិកសរុប",
    stat_docs: "ឯកសារ",
    stat_comp: "ស្តង់ដារ QAC",
    stat_events: "ព្រឹត្តិការណ៍ថ្ងៃនេះ",
    admission_tag: "ទទួលចុះឈ្មោះសិស្សជារៀងរាល់ថ្ងៃ",
    admission_title: "ចុះឈ្មោះចូលរៀន ឬសាកសួរព័ត៌មានអាហារូបករណ៍",
    admission_desc: "សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ ផ្តល់ជូននូវកម្មវិធីចំណេះទូទៅខ្មែរ (K-12) ភាសាអង់គ្លេស (GEP/IEP) ជាមួយនឹងបរិយាកាសសិក្សាទំនើប និងគ្រូបង្រៀនមានវិជ្ជាជីវៈខ្ពស់។",
    btn_inquire: "សាកសួរព័ត៌មានចុះឈ្មោះ (Inquire Now)",
    visitor_live_badge: "🟢 កំពុងផ្សាយផ្ទាល់ Real-Time Analytics",
    visitor_section_title: "ស្ថិតិអ្នកចូលទស្សនាគេហទំព័រ (Visitor Traffic)",
    visitor_section_desc: "ចំនួនអ្នកចូលមើលសរុប និងការបែងចែកទស្សនាតាម ២៥ រាជធានី-ខេត្ត នៃព្រះរាជាណាចក្រកម្ពុជា",
    btn_refresh_analytics: "Refresh",
    vstat_total_views: "ចំនួនចូលមើលសរុប (Total Views)",
    vstat_unique_users: "អ្នកចូលប្លែកៗ (Unique Visitors)",
    vstat_online_now: "កំពុង Online ផ្ទាល់ (Active Now)",
    vstat_top_province: "ខេត្តសកម្មជាងគេ (Top Area)",
    traffic_provinces_title: "ការបែងចែកអ្នកចូលមើលតាម ២៥ រាជធានី-ខេត្ត (Cambodia Provinces)",
    traffic_provinces_sub: "ចំណាត់ថ្នាក់តាមភាគរយនៃការចូលទស្សនាទូទាំងប្រទេស",
    ph_search_provinces: "ស្វែងរកខេត្ត-ក្រុង (ឧ. តាកែវ, ភ្នំពេញ, សៀមរាប, កំពត)...",
    btn_show_all_provinces: "បង្ហាញគ្រប់ ២៥ រាជធានី-ខេត្ត (Show All 25 Provinces)",
    btn_hide_provinces: "បង្រួមមកវិញ (Show Top 6 Only)",
    quick_nav: "ផ្លូវកាត់រហ័ស",
    shortcuts_badge: "⚡ ផ្លូវកាត់រហ័ស • Quick Shortcuts",
    shortcuts_title: "ផ្លូវកាត់រហ័សទៅកាន់ផ្នែកសំខាន់ៗ (Quick Portals)",
    shortcuts_desc: "ចូលទៅកាន់ប្រព័ន្ធគ្រប់គ្រងសាលា នាយកដ្ឋានអប់រំ និងឧបករណ៍បច្ចេកវិទ្យាទាំង ៦ បានលឿនរហ័ស",
    btn_open_portal: "ចូលទៅកាន់",
    tag_staff: "Staff Profile",
    tag_dept: "Departments",
    tag_docs: "Doc Tracking",
    tag_qac: "Quality QAC",
    tag_elab: "E-Lab & AI",
    tag_activities: "Activities",
    nav_mgt_staff: "គ្រប់គ្រងបុគ្គលិក",
    desc_mgt_staff: "គ្រប់គ្រងប្រវត្តិរូប បញ្ជីរាយនាម និងព័ត៌មានលម្អិតរបស់បុគ្គលិក-លោកគ្រូអ្នកគ្រូ",
    nav_dept_hub: "នាយកដ្ឋានអប់រំ",
    desc_dept_hub: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយដេប៉ាតឺម៉ង់ KGE Sec, Kind & Prim និង GEP",
    nav_track_docs: "តាមដានឯកសារ",
    desc_track_docs: "កត់ត្រា គ្រប់គ្រង និងតាមដានលំហូរឯកសាររដ្ឋបាល ចេញ-ចូល ប្រកបដោយសុវត្ថិភាព",
    nav_qac_cl: "តារាងត្រួតពិនិត្យ QAC",
    desc_qac_cl: "តាមដាន និងវាយតម្លៃស្តង់ដារគុណភាពអប់រំ ផែនការ និងការបំពេញការងារសាលា",
    nav_elab_tools: "ឧបករណ៍ E-Lab & AI",
    desc_elab_tools: "ឃ្លាំងឧបករណ៍បញ្ញាសិប្បនិម្មិត កម្មវិធីពិសោធន៍វិទ្យាសាស្ត្រ និងបណ្ណាល័យសៀវភៅ MoEYS",
    nav_activities_card: "ព័ត៌មាន & សកម្មភាព",
    desc_activities_card: "ព្រឹត្តិការណ៍ សកម្មភាពសិស្ស-គ្រូ សិក្ខាសាលា និងការផ្សព្វផ្សាយលេចធ្លោនានា",
    recent_notices: "សេចក្តីជូនដំណឹងថ្មីៗ",
    notice_title_1: "ថ្ងៃផុតកំណត់ត្រួតពិនិត្យឆមាស",
    notice_desc_1: "សូមប្រាកដថាឯកសារ QAC ទាំងអស់ត្រូវបានបញ្ចូលមុនថ្ងៃសុក្រ។",
    notice_title_2: "ការអាប់ដេតប្រព័ន្ធបានជោគជ័យ",
    notice_desc_2: "ប្រព័ន្ធគ្រប់គ្រងឯកសារត្រូវបានអាប់ដេតឱ្យដំណើរការកាន់តែប្រសើរ។",
    
    // Department Workspace
    dept_banner_title: "KGE Secondary (ចំណេះទូទៅមធ្យម)",
    dept_banner_desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយដេប៉ាតឺម៉ង់",
    dept_tab_kge_sec: "KGE Secondary",
    dept_tab_kge_kp: "KGE Kind & Prim",
    dept_tab_gep: "GEP",
    btn_dept_login: "ចូលគណនីដេប៉ាតឺម៉ង់",
    btn_dept_upload: "បង្ហោះព័ត៌មាន/ឯកសារ",
    dept_sidebar_modules: "ផ្នែករង (Modules)",
    dept_mod_1: "១. សកម្មភាពប្រជុំ",
    dept_mod_2: "២. ឯកសារជំនួយ",
    dept_mod_3: "៣. អធិការកិច្ចថ្នាក់រៀន",
    dept_mod_4: "៤. ការប្រើប្រាស់បច្ចេកវិទ្យា",
    dept_mod_5: "៥. ក្រុមប្រឹក្សាកុមារ",
    dept_mod_6: "៦. ស្ទែម (STEM)",
    dept_mod_7: "៧. អប់រំសុខភាព",
    dept_mod_8: "៨. ក្លឹបសិក្សា",
    ph_dept_search: "ស្វែងរកក្នុងផ្នែកនេះ...",

    // E-Lab & AI Hub
    elab_hub_title: "E-Lab & AI Tools Hub",
    elab_hub_desc: "កម្រងឧបករណ៍បច្ចេកវិទ្យាអប់រំ និង AI ទំនើបចំនួន ១២៦ Tools សម្រាប់គ្រូ និងសិស្ស",
    elab_tab_teacher: "Teacher Tools (42)",
    elab_tab_student: "Student Tools (42)",
    elab_tab_ai: "AI Resources (42)",
    elab_tab_library: "E-Library & វិញ្ញាសា",
    elab_tab_prompts: "សំណួរគំរូ AI បង្រៀន",
    elab_teacher_title: "👨‍🏫 Teacher Resources & Tools",
    elab_teacher_desc: "កម្រងឧបករណ៍បច្ចេកវិទ្យា ៤២ សម្រាប់គ្រូបង្រៀន បង្កើតមេរៀន បន្ទប់ពិសោធន៍និម្មិត និងកម្រងសំណួរអន្តរកម្ម",
    elab_student_title: "👨‍🎓 Student Resources & Tools",
    elab_student_desc: "កម្រងឧបករណ៍ ៤២ សម្រាប់ស្រាវជ្រាវ កម្មវិធីស្វ័យសិក្សា បន្ទប់ពិសោធន៍ STEM និងវិញ្ញាសាត្រៀមប្រឡង",
    elab_ai_title: "🤖 AI Resources & Generators",
    elab_ai_desc: "បណ្តុំបញ្ញាសិប្បនិម្មិត ៤២ ដ៏មានឥទ្ធិពល សម្រាប់តែងអត្ថបទ រចនារូបភាព បង្កើតវីដេអូ និងជំនួយការសរសេរកូដ",

    // Activities & News
    act_page_title: "ព័ត៌មាន និងសកម្មភាពសាលា",
    act_page_desc: "ផ្សព្វផ្សាយកម្មវិធីសិក្សា សិក្ខាសាលា សកម្មភាពសិស្ស សកម្មភាពគ្រូ និងបុគ្គលិក សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ",
    btn_admin_login: "គ្រប់គ្រង (Admin)",
    btn_create_news: "បង្កើតព័ត៌មានថ្មី",
    btn_logout: "ចាកចេញ",
    cat_all: "ទាំងអស់ (All)",
    cat_student: "🎓 សកម្មភាពសិស្ស",
    cat_teacher: "👨‍🏫 សកម្មភាពគ្រូ",
    cat_workshop: "💡 សិក្ខាសាលា",
    cat_program: "📅 កម្មវិធីសាលា",
    cat_staff: "👥 បុគ្គលិកផ្សេងៗ",
    ph_news_search: "ស្វែងរកព័ត៌មាន...",

    // Modals - Login
    login_modal_title: "ផ្ទៀងផ្ទាត់សិទ្ធិ & ចូលគ្រប់គ្រង",
    login_modal_sub: "ជ្រើសរើសផ្នែក ឬបញ្ចូលលេខសម្ងាត់ដេប៉ាតឺម៉ង់របស់អ្នក",
    lbl_admin_role: "ផ្នែក ឬតួនាទី (Department / Role)",
    lbl_admin_pass: "លេខសម្ងាត់ (Password) *",
    ph_admin_pass: "បញ្ចូលលេខសម្ងាត់...",
    msg_login_error: "លេខសម្ងាត់មិនត្រឹមត្រូវសម្រាប់ផ្នែកនេះទេ!",
    btn_login_submit: "ចូលគ្រប់គ្រង (Login)",

    // Modals - Admission Inquiry
    adm_badge: "ការិយាល័យប្រឹក្សាយោបល់ចុះឈ្មោះ",
    adm_modal_title: "សាកសួរព័ត៌មានចុះឈ្មោះចូលរៀន",
    adm_modal_sub: "សូមបំពេញព័ត៌មានខាងក្រោម ក្រុមការងារប្រឹក្សាយោបល់នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ នឹងទាក់ទងទៅលោកអ្នកភ្លាមៗ។",
    lbl_parent_name: "ឈ្មោះមាតាបិតា / អាណាព្យាបាល *",
    lbl_phone: "លេខទូរស័ព្ទ / Telegram *",
    lbl_student_name: "ឈ្មោះកូន / សិស្ស *",
    lbl_program: "កម្មវិធីសិក្សាដែលចាប់អារម្មណ៍ *",
    lbl_grade: "កម្រិតថ្នាក់ដែលចង់ចូលរៀន",
    lbl_notes: "សំណួរ ឬសារបន្ថែម (ករណីបើមាន)",
    btn_cancel: "បោះបង់",
    btn_send_inquiry: "ផ្ញើសំណើរសាកសួរ (Submit)",

    // Modals - Dept Publish
    dept_pub_title: "បង្ហោះព័ត៌មាន ឬឯកសារដេប៉ាតឺម៉ង់",
    dept_pub_sub: "ជ្រើសរើសដេប៉ាតឺម៉ង់ និងផ្នែករង រួចបំពេញព័ត៌មានខាងក្រោម",
    lbl_dept_target: "ដេប៉ាតឺម៉ង់ (Department) *",
    lbl_dept_module: "ផ្នែករង (Module) *",
    lbl_dept_title: "ចំណងជើងសកម្មភាព ឬឯកសារ (Title) *",
    ph_dept_form_title: "ឧទាហរណ៍៖ កិច្ចប្រជុំបូកសរុបលទ្ធផលប្រចាំខែសីហា...",
    lbl_dept_date: "កាលបរិច្ឆេទ (Date) *",
    lbl_dept_author: "អ្នកកត់ត្រា / អ្នកបង្កើត (Author)",
    ph_dept_form_author: "ឧទាហរណ៍៖ SC GEP, SSC KGE, ប្រធានផ្នែក...",
    lbl_dept_cover: "🖼️ រូបភាពក្របមុខ (Cover Thumbnail)",
    btn_browse_img: "ជ្រើសរើសរូបភាពពីម៉ាស៊ីន",
    lbl_dept_gallery: "📸 រូបភាពសកម្មភាពបន្ថែម (Gallery)",
    btn_browse_multi: "ជ្រើសរើសរូបភាពច្រើនសន្លឹក",
    lbl_dept_desc: "ខ្លឹមសារសកម្មភាព ឬកំណត់ហេតុប្រជុំ (Description)",
    ph_dept_form_desc: "រៀបរាប់ពីដំណើរការសកម្មភាព របៀបវារៈ ឬចំណុចសំខាន់ៗ...",
    lbl_dept_doc: "📎 ភ្ជាប់ឯកសារជំនួយ (PDF / Word / Excel / PowerPoint)",
    btn_attach_file: "ជ្រើសរើសឯកសារភ្ជាប់",
    btn_publish_now: "បោះពុម្ពផ្សាយ (Publish)",
    btn_download_img: "ទាញយករូបភាព",
    dept_gallery_title: "រូបភាពសកម្មភាពបន្ថែម",
    photos_count_suffix: "សន្លឹក",
    qac_year_title: "ឆ្នាំសិក្សា៖",
    qac_btn_refresh: "Refresh Frame",

    // AI Assistant
    ai_badge_text: "សួរ AI ឆ្លើយភ្លាម ២៤/៧",
    ai_status_online: "Online 24/7 • ខ្មែរ & English",
    ai_quick_suggestions: "សំណួរពេញនិយម៖",
    ai_chip_tuition: "ថ្លៃសិក្សា & ចុះឈ្មោះ",
    ai_chip_curriculum: "កម្មវិធី GEP & ចំណេះទូទៅ",
    ai_chip_bus: "សេវាឡានដឹកសិស្ស",
    ai_chip_hours: "ម៉ោងរៀន & ថ្ងៃចូលរៀន",
    ai_chip_contact: "ទីតាំង & ទំនាក់ទំនង",

    // PWA & Footer
    pwa_title: "ដំឡើង SPS 25 Takeo App",
    pwa_sub: "ចុចដើម្បី Install លើទូរស័ព្ទដៃ",
    pwa_btn_install: "ដំឡើង App",
    footer_copyright: "© 2026 សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    hall_badge: "🏆 តារាងកិត្តិយស & សក្ខីកម្ម • Hall of Fame",
    hall_title: "តារាងកិត្តិយសសិស្សឆ្នើម & ចំណាប់អារម្មណ៍អាណាព្យាបាល",
    hall_desc: "មោទនភាពសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ - សិស្សនិទ្ទេស A បាក់ឌុប ជ័យលាភីអាហារូបករណ៍ និងការចែករំលែកពីអាណាព្យាបាល"
  },
  en: {
    // Brand & Navigation
    brand_school_name: "Sovannaphumi School 25",
    brand_campus_name: "Takeo Campus",
    nav_home: "Home",
    nav_staff: "Staff Profile",
    nav_dept: "Department",
    nav_docs: "Doc In & Out",
    nav_qac: "QAC Checklist",
    nav_elab: "E-Lab & AI",
    nav_activities: "Activities & News",
    nav_elibrary: "E-Library",
    nav_elibrary_title: "Digital E-Library",
    desc_elibrary_hub: "Access the NTC Group E-Library digital portal directly",
    elib_badge: "📚 Digital Library • Google Drive E-Library",
    elib_title: "Digital E-Library",
    elib_desc: "The digital repository for curriculum textbooks, national examination past papers, GEP English resources, and academic study guides of Sovannaphumi School 25, Takeo Campus.",
    btn_open_drive_main: "Open in Google Drive",
    btn_copy_drive_link: "Copy Link",
    elib_folders_heading: "Library Folders & Categories",
    elib_folders_sub: "Select the document category you wish to read or download",
    btn_open_folder: "Open Folder",
    elib_tag_moeys: "MoEYS Grades 1-12",
    elib_card_1_title: "MoEYS Official Textbooks",
    elib_card_1_desc: "Official textbooks from Grade 1 to 12 covering all Science and Social Studies tracks",
    elib_tag_exams: "BacII & Diploma",
    elib_card_2_title: "National Exam Past Papers",
    elib_card_2_desc: "Past national exam papers for Grade 12 BacII and Grade 9 Diploma with answer keys",
    elib_tag_gep: "GEP English",
    elib_card_3_title: "GEP English Resources",
    elib_card_3_desc: "Cambridge and Oxford English textbooks, student workbooks, and practice tests",
    elib_tag_stem: "STEM & AI",
    elib_card_4_title: "STEM & AI Lab Guides",
    elib_card_4_desc: "Science experiment protocols, Robotics guides, coding tutorials, and AI projects",
    elib_tag_general: "General Reading",
    elib_card_5_title: "General Reading & Literature",
    elib_card_5_desc: "Educational literature, history, personal development, and general knowledge books",
    elib_tag_all: "Google Drive Storage",
    elib_card_6_title: "All Drive Folders",
    elib_card_6_desc: "Access the complete Google Drive repository of SPS 25 Takeo Campus",
    elib_viewer_title: "Google Drive E-Library Hub",
    elib_hub_ready_title: "Google Drive E-Library Connected",
    elib_hub_ready_desc: "You can click the button below to access all documents, textbooks, and download PDFs directly",
    
    // Stats & Home
    stat_staff: "Total Staff",
    stat_docs: "Documents",
    stat_comp: "Compliance",
    stat_events: "Events Today",
    admission_tag: "Open For Admissions Daily",
    admission_title: "Student Admissions & Scholarship Inquiries",
    admission_desc: "Sovannaphumi School 25, Takeo Campus offers Khmer General Education (K-12), General English Program (GEP/IEP) with modern learning environments and professional educators.",
    btn_inquire: "Inquire About Admissions",
    visitor_live_badge: "🟢 Live Real-Time Analytics",
    visitor_section_title: "Website Visitor Traffic & Distribution",
    visitor_section_desc: "Total site pageviews and geographical traffic breakdown across all 25 provinces in Cambodia",
    btn_refresh_analytics: "Refresh",
    vstat_total_views: "Total Pageviews",
    vstat_unique_users: "Unique Visitors",
    vstat_online_now: "Live Online Now",
    vstat_top_province: "Top Active Area",
    traffic_provinces_title: "Visitor Traffic Across 25 Cambodian Provinces",
    traffic_provinces_sub: "Real-time provincial distribution and percentage rankings",
    ph_search_provinces: "Search province or city (e.g. Takeo, Phnom Penh)...",
    btn_show_all_provinces: "Show All 25 Provinces & Cities",
    btn_hide_provinces: "Collapse (Show Top 6 Only)",
    quick_nav: "Quick Navigation",
    shortcuts_badge: "⚡ Quick Shortcuts • 6 Portals",
    shortcuts_title: "Quick Shortcuts to Core Portals",
    shortcuts_desc: "Instant access to all 6 school management systems, departments, and academic tools",
    btn_open_portal: "Open Portal",
    tag_staff: "Staff Profile",
    tag_dept: "Departments",
    tag_docs: "Doc Tracking",
    tag_qac: "Quality QAC",
    tag_elab: "E-Lab & AI",
    tag_activities: "Activities",
    nav_mgt_staff: "Manage Staff",
    desc_mgt_staff: "Manage staff directory, teaching profiles, and personnel records",
    nav_dept_hub: "Department Workspaces",
    desc_dept_hub: "Academic hub for KGE Secondary, Kindergarten/Primary, and GEP departments",
    nav_track_docs: "Document Tracking",
    desc_track_docs: "Register, organize, and monitor official incoming and outgoing documents safely",
    nav_qac_cl: "QAC Checklist",
    desc_qac_cl: "Quality Assurance Checklist for monitoring educational standards & compliance",
    nav_elab_tools: "E-Lab & AI Tools",
    desc_elab_tools: "Access AI tools, virtual STEM science laboratories, and MoEYS digital library",
    nav_activities_card: "Activities & News",
    desc_activities_card: "Latest school news, student activities, workshops, and announcements",
    recent_notices: "Recent Notices",
    notice_title_1: "Term Review Deadline",
    notice_desc_1: "Please ensure all QAC documents are uploaded by Friday.",
    notice_title_2: "System Update Complete",
    notice_desc_2: "Document management has been upgraded for better performance.",

    // Department Workspace
    dept_banner_title: "KGE Secondary (Secondary Education)",
    dept_banner_desc: "Department hub for announcements, meeting minutes, and support documents",
    dept_tab_kge_sec: "KGE Secondary",
    dept_tab_kge_kp: "KGE Kind & Prim",
    dept_tab_gep: "GEP",
    btn_dept_login: "Department Login",
    btn_dept_upload: "Publish Post / Document",
    dept_sidebar_modules: "Sub-modules",
    dept_mod_1: "1. Meeting Activities",
    dept_mod_2: "2. Support Docs",
    dept_mod_3: "3. Class Inspection",
    dept_mod_4: "4. Tech Usage",
    dept_mod_5: "5. Student Council",
    dept_mod_6: "6. STEM Education",
    dept_mod_7: "7. Health Education",
    dept_mod_8: "8. Study Clubs",
    ph_dept_search: "Search in this department...",

    // E-Lab & AI Hub
    elab_hub_title: "E-Lab & AI Tools Hub",
    elab_hub_desc: "A curated collection of 126 modern educational tech & AI tools for teachers and students",
    elab_tab_teacher: "Teacher Tools (42)",
    elab_tab_student: "Student Tools (42)",
    elab_tab_ai: "AI Resources (42)",
    elab_tab_library: "E-Library & Past Papers",
    elab_tab_prompts: "Teaching AI Prompts",
    elab_teacher_title: "👨‍🏫 Teacher Resources & Tools",
    elab_teacher_desc: "A curated collection of 42 classroom tools, virtual labs, and Khmer educational websites to enhance your teaching.",
    elab_student_title: "👨‍🎓 Student Resources & Tools",
    elab_student_desc: "A curated collection of 42 research portals, study apps, virtual labs, and Khmer educational platforms to support your learning journey.",
    elab_ai_title: "🤖 AI Resources & Generators",
    elab_ai_desc: "A curated collection of 42 powerful Artificial Intelligence tools for text, image generation, coding, and productivity.",

    // Activities & News
    act_page_title: "School News & Activities",
    act_page_desc: "Publishing curriculum programs, workshops, student achievements, and faculty activities at Sovannaphumi School 25, Takeo Campus",
    btn_admin_login: "Admin Portal",
    btn_create_news: "Create New Post",
    btn_logout: "Logout",
    cat_all: "All Categories",
    cat_student: "🎓 Student Activities",
    cat_teacher: "👨‍🏫 Teacher Activities",
    cat_workshop: "💡 Workshops & Seminars",
    cat_program: "📅 School Programs",
    cat_staff: "👥 Other Staff",
    ph_news_search: "Search news...",

    // Modals - Login
    login_modal_title: "Department Authentication & Login",
    login_modal_sub: "Select department and enter your access password",
    lbl_admin_role: "Department / Role",
    lbl_admin_pass: "Password *",
    ph_admin_pass: "Enter password...",
    msg_login_error: "Incorrect password for this department!",
    btn_login_submit: "Login",

    // Modals - Admission Inquiry
    adm_badge: "Admissions Consulting Office",
    adm_modal_title: "Online Admission & Information Inquiry",
    adm_modal_sub: "Please fill in the form below. Our admissions consulting team at Sovannaphumi School 25, Takeo Campus will contact you promptly.",
    lbl_parent_name: "Parent / Guardian Name *",
    lbl_phone: "Phone / Telegram Number *",
    lbl_student_name: "Student Name *",
    lbl_program: "Interested Program *",
    lbl_grade: "Grade / Level",
    lbl_notes: "Additional Notes or Questions",
    btn_cancel: "Cancel",
    btn_send_inquiry: "Send Inquiry",

    // Modals - Dept Publish
    dept_pub_title: "Publish Department Post / Document",
    dept_pub_sub: "Select department and module, then enter details below",
    lbl_dept_target: "Department *",
    lbl_dept_module: "Module *",
    lbl_dept_title: "Title / Activity Name *",
    ph_dept_form_title: "E.g. Monthly Term Progress Meeting...",
    lbl_dept_date: "Date *",
    lbl_dept_author: "Author / Recorded By",
    ph_dept_form_author: "E.g. SC GEP, SSC KGE, Head Teacher...",
    lbl_dept_cover: "🖼️ Cover Image / Thumbnail",
    btn_browse_img: "Browse Local File",
    lbl_dept_gallery: "📸 Additional Gallery Photos",
    btn_browse_multi: "Upload Multiple Photos",
    lbl_dept_desc: "Description / Meeting Minutes Details",
    ph_dept_form_desc: "Describe activities, agendas, or key highlights...",
    lbl_dept_doc: "📎 Attached File (PDF / Word / Excel / PowerPoint)",
    btn_attach_file: "Attach File",
    btn_publish_now: "Publish",
    btn_download_img: "Download Image",
    dept_gallery_title: "Additional Gallery Photos",
    photos_count_suffix: "photos",
    qac_year_title: "Academic Year:",
    qac_btn_refresh: "Refresh Frame",

    // AI Assistant
    ai_badge_text: "Ask AI 24/7",
    ai_status_online: "Online 24/7 • Khmer & English",
    ai_quick_suggestions: "Quick Questions:",
    ai_chip_tuition: "Tuition & Admission",
    ai_chip_curriculum: "GEP & KGE Programs",
    ai_chip_bus: "School Bus Service",
    ai_chip_hours: "Hours & Term Dates",
    ai_chip_contact: "Location & Contact",

    // PWA & Footer
    pwa_title: "Install SPS 25 Takeo App",
    pwa_sub: "Click to install on your mobile device",
    pwa_btn_install: "Install",
    footer_copyright: "© 2026 Sovannaphumi School 25, Takeo Campus. All rights reserved.",
    hall_badge: "🏆 Honor Roll & Testimonials • Hall of Fame",
    hall_title: "Student Hall of Fame & Parent Testimonials",
    hall_desc: "The pride of Sovannaphumi School 25, Takeo Campus - BacII Grade A honor students, scholarship achievers, STEM winners, and parent voices"
  }
};

let currentAppLanguage = localStorage.getItem('sps_site_lang') || 'kh';

window.switchLanguage = function(lang) {
  currentAppLanguage = (lang === 'en') ? 'en' : 'kh';
  localStorage.setItem('sps_site_lang', currentAppLanguage);

  const btnEn = document.getElementById('lang-btn-en');
  const btnKh = document.getElementById('lang-btn-kh');
  if (btnEn) btnEn.classList.toggle('active', currentAppLanguage === 'en');
  if (btnKh) btnKh.classList.toggle('active', currentAppLanguage === 'kh');

  const dict = I18N_DICT[currentAppLanguage] || I18N_DICT.kh;
  
  // Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });

  // Update data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.documentElement.lang = (currentAppLanguage === 'en') ? 'en' : 'km';

  // If department page is loaded, refresh module title and subtitle
  if (typeof currentDeptModule !== 'undefined' && typeof DEPT_MODULE_INFO !== 'undefined') {
    const modInfo = DEPT_MODULE_INFO[currentDeptModule] || DEPT_MODULE_INFO.meeting;
    const modTitleEl = document.getElementById('dept-module-title');
    const modSubEl = document.getElementById('dept-module-subtitle');
    if (modTitleEl) {
      modTitleEl.innerHTML = `<i class="${modInfo.icon}"></i> <span>${(currentAppLanguage === 'en' && modInfo.title_en) ? modInfo.title_en : modInfo.title}</span>`;
    }
  }

  // Refresh department content
  if (typeof renderDeptContent === 'function') {
    renderDeptContent();
  }

  // Refresh visitor analytics for bilingual labels
  if (typeof renderVisitorAnalytics === 'function') {
    renderVisitorAnalytics();
  if (typeof renderHallOfFame === 'function') {
    renderHallOfFame();
  }}
};

// ==================== HYBRID DYNAMIC CONTENT TRANSLATOR ====================
window.translateTextAsync = async function(text, targetLang = 'en') {
  if (!text || typeof text !== 'string' || !text.trim()) return text;
  try {
    const sourceLang = targetLang === 'en' ? 'km' : 'en';
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    if (data && Array.isArray(data[0])) {
      return data[0].map(item => item[0]).join('');
    }
  } catch (err) {
    console.warn('Auto translation warning:', err);
  }
  return text;
};

window.togglePostTranslation = async function(btnElement) {
  if (!btnElement) return;
  const card = btnElement.closest('.dept-post-card, .news-card, .article-modal-box, .custom-modal-content');
  if (!card) return;

  const isTranslated = btnElement.getAttribute('data-translated') === 'true';
  const titleEl = card.querySelector('.post-trans-title, h3, h2');
  const descEl = card.querySelector('.post-trans-desc, .post-trans-content, p, .article-content');

  if (isTranslated) {
    // Restore original text
    if (titleEl && titleEl.dataset.origText) titleEl.innerText = titleEl.dataset.origText;
    if (descEl && descEl.dataset.origText) descEl.innerText = descEl.dataset.origText;
    btnElement.setAttribute('data-translated', 'false');
    btnElement.innerHTML = '<i class="fa-solid fa-language"></i> <span>Translate to English</span>';
  } else {
    // Translate to English
    if (titleEl && !titleEl.dataset.origText) titleEl.dataset.origText = titleEl.innerText;
    if (descEl && !descEl.dataset.origText) descEl.dataset.origText = descEl.innerText;

    btnElement.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Translating...</span>';
    
    if (titleEl) {
      const transTitle = await window.translateTextAsync(titleEl.dataset.origText, 'en');
      titleEl.innerText = transTitle;
    }
    if (descEl) {
      const transDesc = await window.translateTextAsync(descEl.dataset.origText, 'en');
      descEl.innerText = transDesc;
    }

    btnElement.setAttribute('data-translated', 'true');
    btnElement.innerHTML = '<i class="fa-solid fa-rotate-left"></i> <span>Show Original (ខ្មែរ)</span>';
  }
};

// ==================== ADMISSION INQUIRY MODAL HANDLERS ====================
window.openAdmissionModal = function() {
  const modal = document.getElementById('admission-modal');
  if (modal) {
    document.getElementById('admission-inquiry-form').reset();
    modal.classList.add('active');
  }
};

window.closeAdmissionModal = function() {
  const modal = document.getElementById('admission-modal');
  if (modal) modal.classList.remove('active');
};

window.handleAdmissionSubmit = function(event) {
  event.preventDefault();

  // Anti-Spam Bot Protection Check
  const honeypot = document.getElementById('adm-honeypot')?.value;
  if (honeypot) {
    console.warn('Bot detected and rejected.');
    return;
  }

  const parentName = document.getElementById('adm-parent-name').value.trim();
  const phone = document.getElementById('adm-phone').value.trim();
  const studentName = document.getElementById('adm-student-name').value.trim();
  const program = document.getElementById('adm-program').value;
  const grade = document.getElementById('adm-grade').value.trim();
  const notes = document.getElementById('adm-notes').value.trim();

  const inquiry = {
    id: "inq-" + Date.now(),
    parentName,
    phone,
    studentName,
    program,
    grade,
    notes,
    submittedAt: new Date().toISOString()
  };

  // Sync to Google Sheet in background
  fetch(GOOGLE_NEWS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'inquiry', inquiry })
  }).catch(err => console.warn('Inquiry sheet sync:', err));

  // Save to local backup
  try {
    let list = JSON.parse(localStorage.getItem('sps_admissions') || '[]');
    list.unshift(inquiry);
    localStorage.setItem('sps_admissions', JSON.stringify(list));
  } catch (e) {}

  closeAdmissionModal();

  if (currentAppLanguage === 'en') {
    alert('🎉 Thank you! Your inquiry has been submitted. Our admissions team at Sovannaphumi School 25, Takeo Campus will contact you shortly.');
  } else {
    alert('🎉 អរគុណលោកអ្នក! សំណើរសាកសួរព័ត៌មានរបស់លោកអ្នកត្រូវបានបញ្ជូនទៅកាន់ការិយាល័យប្រឹក្សាយោបល់នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ។ ក្រុមការងារនឹងទាក់ទងមកលោកអ្នកក្នុងពេលឆាប់ៗនេះ។');
  }
};

// ==================== THEME TOGGLE (DARK / LIGHT MODE) ====================
window.toggleTheme = function() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('sps_theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('title', isDark ? 'ប្តូរទៅ Light Mode' : 'ប្តូរទៅ Dark Mode');
  }
};

// ==================== PWA INSTALL LOGIC & SERVICE WORKER ====================
let deferredPWAInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPWAInstallPrompt = e;
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'flex';
});

window.triggerPWAInstall = async function() {
  if (!deferredPWAInstallPrompt) return;
  deferredPWAInstallPrompt.prompt();
  const { outcome } = await deferredPWAInstallPrompt.userChoice;
  if (outcome === 'accepted') {
    dismissPWABanner();
  }
  deferredPWAInstallPrompt = null;
};

window.dismissPWABanner = function() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
};

// Register Real-time Master Service Worker with Auto-Update Invalidation
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Check for SW updates
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('⚡ New master cache version activated. Real-time updates active.');
            }
          };
        }
      };
    }).catch(err => {
      console.warn('PWA ServiceWorker registration:', err);
    });
  });

  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SW_UPDATED') {
      console.log('⚡ Service Worker updated to:', event.data.cacheName);
    }
  });
}

// ==================== FIREBASE CLOUD & MIGRATION HANDLERS ====================
window.openFirebaseModal = function() {
  const modal = document.getElementById('firebase-modal');
  if (!modal) return;
  modal.classList.add('active');
  updateFirebaseStatusUI();
  populateAIConfigInputs();
};

function populateAIConfigInputs() {
  const geminiInput = document.getElementById('cfg-gemini-key');
  const tgTokenInput = document.getElementById('cfg-telegram-token');
  const tgChatInput = document.getElementById('cfg-telegram-chatid');
  if (geminiInput) geminiInput.value = localStorage.getItem('sps_gemini_api_key') || '';
  if (tgTokenInput) tgTokenInput.value = localStorage.getItem('sps_telegram_bot_token') || '';
  if (tgChatInput) tgChatInput.value = localStorage.getItem('sps_telegram_chat_id') || '';
}

window.saveAIConfigFromModal = function() {
  const geminiKey = (document.getElementById('cfg-gemini-key')?.value || '').trim();
  const tgToken = (document.getElementById('cfg-telegram-token')?.value || '').trim();
  const tgChatId = (document.getElementById('cfg-telegram-chatid')?.value || '').trim();

  saveAIConfig(geminiKey, tgToken, tgChatId);
  alert('🎉 បានរក្សាទុក Google Gemini API Key & Telegram Bot Config ដោយជោគជ័យ!');
};

window.closeFirebaseModal = function() {
  const modal = document.getElementById('firebase-modal');
  if (modal) modal.classList.remove('active');
};

function updateFirebaseStatusUI() {
  const statusText = document.getElementById('firebase-status-text');
  if (!statusText) return;
  if (window.isSupabaseReady && window.isSupabaseReady()) {
    const config = (window.getSupabaseConfig ? window.getSupabaseConfig() : {});
    const projectRef = config.url ? config.url.replace('https://', '').split('.')[0] : 'hrhvoqgbnsslmldlteyz';
    statusText.innerHTML = `<span style="color:#059669;"><i class="fa-solid fa-circle-check"></i> បានតភ្ជាប់ Supabase Cloud (Project: ${projectRef})</span>`;
  } else {
    statusText.innerHTML = `<span style="color:#f59e0b;"><i class="fa-solid fa-triangle-exclamation"></i> មិនទាន់តភ្ជាប់ (រង់ចាំ Config)</span>`;
  }
}

window.toggleFirebaseConfigInputs = function() {
  const section = document.getElementById('firebase-config-section');
  if (!section) return;
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
  if (section.style.display === 'block') {
    const config = (window.getSupabaseConfig ? window.getSupabaseConfig() : {});
    const urlInp = document.getElementById('sb-config-url');
    const keyInp = document.getElementById('sb-config-key');
    if (urlInp) urlInp.value = config.url || '';
    if (keyInp) keyInp.value = config.anonKey || '';
  }
};

window.saveFirebaseConfigFromModal = function() {
  const url = (document.getElementById('sb-config-url')?.value || '').trim();
  const anonKey = (document.getElementById('sb-config-key')?.value || '').trim();
  if (!url || !anonKey) {
    alert('សូមបញ្ចូល Supabase Project URL និង anon public Key!');
    return;
  }
  const configObj = { url, anonKey, bucket: 'sps-storage' };
  localStorage.setItem('sps_supabase_config', JSON.stringify(configObj));
  alert('🎉 បានរក្សាទុក Supabase Config រួចរាល់! ប្រព័ន្ធនឹង Reload ដើម្បីតភ្ជាប់...');
  window.location.reload();
};

window.runDataMigration = async function() {
  if (!window.isSupabaseReady || !window.isSupabaseReady()) {
    alert('⚠️ សូមរង់ចាំ Supabase ភ្ជាប់រួចរាល់ ឬពិនិត្យ API Key!');
    return;
  }

  if (!confirm('តើអ្នកពិតជាចង់ចាប់ផ្តើម Sync ផ្ទេរទិន្នន័យ (បុគ្គលិក, ឯកសារ, ដេប៉ាតឺម៉ង់) ចូល Supabase មែនទេ?')) return;

  const btn = document.getElementById('btn-start-migration');
  const logBox = document.getElementById('migration-log-box');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> កំពុងដំណើរការ Sync ទៅកាន់ Supabase...';
  }
  if (logBox) {
    logBox.style.display = 'block';
    logBox.innerHTML = '<div>🚀 កំពុងចាប់ផ្តើម Sync ទិន្នន័យចូល Supabase...</div>';
  }

  try {
    const results = await window.startMigrationToSupabase((msg) => {
      if (logBox) {
        logBox.innerHTML += `<div>${msg}</div>`;
        logBox.scrollTop = logBox.scrollHeight;
      }
    });

    if (logBox) {
      logBox.innerHTML += `<div style="color:#4ade80; font-weight:bold; margin-top:8px;">🎉 ជោគជ័យពេញលេញ! ទិន្នន័យទាំងអស់ត្រូវបាន Sync ចូល Supabase រួចរាល់។</div>`;
    }
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sync បានជោគជ័យ ១០០%';
      btn.style.background = '#059669';
    }
    alert('🎉 ជោគជ័យ! ទិន្នន័យទាំងអស់ត្រូវបាន Sync ចូល Supabase Cloud Database រួចរាល់ ១០០% ហើយ!');
  } catch (err) {
    if (logBox) logBox.innerHTML += `<div style="color:#f87171;">❌ កំហុស៖ ${err.message}</div>`;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-bolt"></i> ព្យាយាមម្តងទៀត';
    }
  }
};

// Initialize theme, language, and Firebase on startup
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentAppLanguage);

  // Initialize Firebase Cloud Service
  if (window.initFirebase) window.initFirebase();

  // Start Department real-time synchronization
  if (typeof initDepartmentRealtimeSync === 'function') {
    initDepartmentRealtimeSync();
  }

  // Restore saved dark/light theme
  const savedTheme = localStorage.getItem('sps_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  // Render department content immediately on startup
  if (typeof renderDeptContent === 'function') {
    renderDeptContent();
  }

  // Initialize QAC Year Selector (2025 - 2035)
  if (typeof initQACYearSelector === 'function') {
    initQACYearSelector();
  }

  // Initialize Smart AI School Assistant (Gemini Powered)
  if (typeof initSPSAssistant === 'function') {
    initSPSAssistant();
  }
});
// =============================================================================

// 8. DEPARTMENT WORKSPACE CONTROLLER (KGE Secondary, KGE Kind & Prim, GEP)
// =============================================================================

const DEPT_INFO = {
  kge_sec: {
    name: "KGE Secondary (ចំណេះទូទៅមធ្យម)",
    name_en: "KGE Secondary (G7-G12)",
    icon: "🏫",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - អនុវិទ្យាល័យ និងវិទ្យាល័យ",
    desc_en: "Information, activities, and resource center - Secondary & High School"
  },
  kge_kp: {
    name: "KGE Kind & Prim (ចំណេះទូទៅមត្តេយ្យ & បឋម)",
    name_en: "KGE Kind & Prim (K-G6)",
    icon: "🎒",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - មត្តេយ្យសិក្សា និងបឋមសិក្សា",
    desc_en: "Information, activities, and resource center - Kindergarten & Primary School"
  },
  gep: {
    name: "GEP (កម្មវិធីភាសាអង់គ្លេសទូទៅ)",
    name_en: "GEP (General English Program)",
    icon: "🌐",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - General English Program",
    desc_en: "Information, activities, and resource center - General English Program"
  }
};

const DEPT_MODULE_INFO = {
  all: {
    title: "សកម្មភាព & ឯកសារទាំងអស់",
    title_en: "All Activities & Documents",
    icon: "fa-solid fa-layer-group",
    subtitle: "បង្ហាញរាល់សកម្មភាព កិច្ចប្រជុំ ឯកសារ និងគម្រោងទាំងអស់ក្នុងដេប៉ាតឺម៉ង់នេះ",
    subtitle_en: "Showing all activities, meetings, documents, and projects in this department"
  },
  meeting: {
    title: "សកម្មភាពប្រជុំ",
    title_en: "1. Meeting Activities",
    icon: "fa-solid fa-handshake",
    subtitle: "កត់ត្រាកិច្ចប្រជុំ កាលបរិច្ឆេទ រូបភាពសកម្មភាព និងឯកសារកំណត់ហេតុ",
    subtitle_en: "Records of meetings, dates, activity photos, and minutes of meeting"
  },
  support_doc: {
    title: "ឯកសារជំនួយ",
    title_en: "2. Supporting Documents",
    icon: "fa-solid fa-folder-open",
    subtitle: "មេរៀនជំនួយ សៀវភៅណែនាំ កាលវិភាគ និងទម្រង់បែបបទផ្សេងៗ",
    subtitle_en: "Supplementary lessons, guides, schedules, and standard school forms"
  },
  inspection: {
    title: "អធិការកិច្ចថ្នាក់រៀន",
    title_en: "3. Classroom Inspections",
    icon: "fa-solid fa-magnifying-glass-chart",
    subtitle: "កាលវិភាគអធិការកិច្ច លទ្ធផលវាយតម្លៃ និងកំណត់ត្រាចុះពិនិត្យការបង្រៀន",
    subtitle_en: "Inspection schedule, evaluation results, and classroom observation logs"
  },
  tech: {
    title: "ការប្រើប្រាស់បច្ចេកវិទ្យា",
    title_en: "4. Technology Usage",
    icon: "fa-solid fa-laptop-code",
    subtitle: "សកម្មភាពអនុវត្ត Smart TV, Tablet, Computer Lab និង AI ក្នុងការបង្រៀន",
    subtitle_en: "Smart TV, Tablet, Computer Lab, and AI integration in classroom teaching"
  },
  council: {
    title: "ក្រុមប្រឹក្សាកុមារ",
    title_en: "5. Student Council",
    icon: "fa-solid fa-users-viewfinder",
    subtitle: "រចនាសម្ព័ន្ធក្រុមប្រឹក្សាកុមារ សកម្មភាពដឹកនាំ និងកិច្ចការស្ម័គ្រចិត្តសាលារៀន",
    subtitle_en: "Student council structure, leadership activities, and school volunteering"
  },
  stem: {
    title: "ស្ទែម (STEM)",
    title_en: "6. STEM Education",
    icon: "fa-solid fa-flask-vial",
    subtitle: "គម្រោង STEM ការពិសោធន៍វិទ្យាសាស្ត្រ និងការតាំងពិព័រណ៍ស្នាដៃសិស្ស",
    subtitle_en: "STEM projects, scientific experiments, and student exhibitions"
  },
  health: {
    title: "អប់រំសុខភាព",
    title_en: "7. Health Education",
    icon: "fa-solid fa-heart-pulse",
    subtitle: "កម្មវិធីសុខភាពសាលារៀន ការពិនិត្យសុខភាព អនាម័យ និងសុវត្ថិភាពចំណីអាហារ",
    subtitle_en: "School healthcare programs, checkups, hygiene, and food safety"
  },
  club: {
    title: "ក្លឹបសិក្សា",
    title_en: "8. Study Clubs",
    icon: "fa-solid fa-trophy",
    subtitle: "ក្លឹបភាសាអង់គ្លេស ក្លឹបគណិតវិទ្យា ក្លឹបព័ត៌មានវិទ្យា និងការប្រកួតប្រជែងសមត្ថភាព",
    subtitle_en: "English club, Math club, IT club, and academic competitions"
  }
};

let currentDepartment = 'kge_sec';
let currentDeptModule = 'all';
let inMemoryDeptPosts = null;
let deptSearchKeyword = '';

let currentDeptCoverFile = null;
let currentDeptGalleryList = [];
let currentDeptGalleryFiles = []; // backward compatibility
let currentDeptDocFile = null;

const DEFAULT_DEPT_ITEMS = {};

// ==================== INDEXEDDB PERSISTENT STORE (sps_takeo_db) ====================
const SPS_DB_NAME = 'sps_takeo_db';
const SPS_DB_VERSION = 1;

function getSpsIndexedDB() {
  return new Promise((resolve) => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }
    try {
      const request = indexedDB.open(SPS_DB_NAME, SPS_DB_VERSION);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('dept_posts')) {
          db.createObjectStore('dept_posts', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('news_posts')) {
          db.createObjectStore('news_posts', { keyPath: 'id' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => {
        console.warn('IndexedDB open error:', request.error);
        resolve(null);
      };
    } catch (err) {
      console.warn('IndexedDB init error:', err);
      resolve(null);
    }
  });
}

async function saveDeptPostsToIndexedDB(list) {
  try {
    const db = await getSpsIndexedDB();
    if (!db) return;
    const tx = db.transaction('dept_posts', 'readwrite');
    const store = tx.objectStore('dept_posts');
    store.clear();
    (list || []).forEach(item => {
      if (item && item.id) store.put(item);
    });
  } catch (e) {
    console.warn('IndexedDB save dept_posts note:', e);
  }
}

async function loadDeptPostsFromIndexedDB() {
  try {
    const db = await getSpsIndexedDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction('dept_posts', 'readonly');
      const store = tx.objectStore('dept_posts');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    console.warn('IndexedDB load dept_posts note:', e);
    return null;
  }
}

// Local storage & in-memory manager
function getStoredDeptPosts() {
  if (inMemoryDeptPosts && Array.isArray(inMemoryDeptPosts)) {
    return inMemoryDeptPosts;
  }
  try {
    const raw = localStorage.getItem('sps_dept_custom_posts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        inMemoryDeptPosts = parsed.filter(item => item && !String(item.id).startsWith('def_'));
        return inMemoryDeptPosts;
      }
    }
  } catch (e) {
    console.error('Error loading department posts from localStorage:', e);
  }
  inMemoryDeptPosts = [];
  return inMemoryDeptPosts;
}

function saveStoredDeptPosts(list) {
  const safeList = Array.isArray(list) ? list : [];
  inMemoryDeptPosts = safeList;

  // 1. Asynchronously save complete payload (including all gallery photos) to IndexedDB
  saveDeptPostsToIndexedDB(safeList);

  // 2. Full JSON save to localStorage
  try {
    localStorage.setItem('sps_dept_custom_posts', JSON.stringify(safeList));
    return;
  } catch (e) {
    console.warn('LocalStorage quota notice, storing compressed copy in localStorage (IndexedDB retains full data):', e);
  }

  // 3. Fallback: lightweight representation in localStorage WITHOUT altering inMemoryDeptPosts or IndexedDB
  try {
    const fallbackList = safeList.map(item => {
      if (!item) return item;
      const copy = { ...item };
      if (typeof copy.attachmentUrl === 'string' && copy.attachmentUrl.startsWith('data:') && copy.attachmentUrl.length > 30000) {
        copy.attachmentUrl = ''; // Retain attachmentName so UI shows attachment exists
      }
      return copy;
    });
    localStorage.setItem('sps_dept_custom_posts', JSON.stringify(fallbackList));
  } catch (e2) {
    console.warn('LocalStorage fallback note:', e2);
  }
}

/// Global Image Compressor is defined and standardized at window.compressImageFile (720p WebP/JPEG, quality 0.58)

// Helper: convert file to Base64 data URL
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

//// Authoritative merger for Supabase cloud data & local data (Cloud is single source of truth for synced posts)
function mergeAndSaveDeptPosts(cloudList) {
  if (!Array.isArray(cloudList)) {
    return getStoredDeptPosts();
  }

  const currentStored = getStoredDeptPosts() || [];
  const map = new Map();

  if (cloudList.length > 0) {
    // 1. Authoritative Cloud Items
    cloudList.forEach(item => {
      if (item && item.id && !String(item.id).startsWith('def_')) {
        const postId = String(item.id);
        map.set(postId, {
          ...item,
          id: postId,
          department: (item.department || 'kge_sec').trim().toLowerCase(),
          module: (item.module || 'meeting').trim().toLowerCase(),
          isCustom: true,
          syncedToCloud: true
        });
      }
    });

    // 2. Retain any local posts that were created offline and have NOT been synced to cloud yet
    currentStored.forEach(item => {
      if (item && item.id && !String(item.id).startsWith('def_')) {
        const postId = String(item.id);
        if (!item.syncedToCloud && !map.has(postId)) {
          map.set(postId, item);
        }
      }
    });
  } else {
    // Fallback: If cloudList is empty (network lag or offline), retain local stored items
    currentStored.forEach(item => {
      if (item && item.id && !String(item.id).startsWith('def_')) {
        map.set(String(item.id), item);
      }
    });
  }

  const merged = Array.from(map.values());
  merged.sort((a, b) => {
    const da = new Date(a.date || a.createdAt || a.created_at || 0).getTime() || 0;
    const db = new Date(b.date || b.createdAt || b.created_at || 0).getTime() || 0;
    return db - da;
  });

  saveStoredDeptPosts(merged);
  return merged;
}

//// Background sync for locally saved unsynced posts to Supabase
async function syncLocalDeptPostsToCloud() {
  let changed = false;
  let unsyncedDeptCount = 0;
  let unsyncedNewsCount = 0;

  // 1. Sync Department Posts
  if (window.DepartmentService && typeof window.DepartmentService.create === 'function') {
    const localList = getStoredDeptPosts();
    for (const post of localList) {
      if (post && post.isCustom && !post.syncedToCloud) {
        try {
          const res = await window.DepartmentService.create(post, null, null, post.gallery || []);
          if (res && res.id) {
            post.id = res.id;
            post.syncedToCloud = true;
            changed = true;
            console.log('✅ Auto-synced unsynced department post to Supabase Cloud:', post.title);
          }
        } catch (e) {
          unsyncedDeptCount++;
          console.warn('Background sync note for dept post:', post.title, e);
        }
      }
    }
    if (changed) {
      saveStoredDeptPosts(localList);
    }
  }

  // 2. Sync News & Activities
  if (window.ActivityService && typeof window.ActivityService.create === 'function') {
    const newsList = getStoredNews();
    let newsChanged = false;
    for (const news of newsList) {
      if (news && news.isCustom && !news.syncedToCloud) {
        try {
          const res = await window.ActivityService.create(news, null, news.gallery || []);
          if (res && res.id) {
            news.syncedToCloud = true;
            newsChanged = true;
            console.log('✅ Auto-synced unsynced news post to Supabase Cloud:', news.title);
          }
        } catch (e) {
          unsyncedNewsCount++;
          console.warn('Background sync note for news:', news.title, e);
        }
      }
    }
    if (newsChanged) {
      saveStoredNews(newsList);
    }
  }

  // 3. Update Visual Unsynced Badges on Header Buttons
  const deptBadge = document.getElementById('dept-unsynced-count');
  if (deptBadge) {
    if (unsyncedDeptCount > 0) {
      deptBadge.innerText = unsyncedDeptCount;
      deptBadge.style.display = 'inline-block';
    } else {
      deptBadge.style.display = 'none';
    }
  }

  const newsBadge = document.getElementById('news-unsynced-count');
  if (newsBadge) {
    if (unsyncedNewsCount > 0) {
      newsBadge.innerText = unsyncedNewsCount;
      newsBadge.style.display = 'inline-block';
    } else {
      newsBadge.style.display = 'none';
    }
  }
}

// Manual Sync Triggered by User (Button in Header)
window.manualSyncAllFromCloud = async function(showFeedback = false) {
  const deptIcon = document.getElementById('dept-sync-icon');
  const newsIcon = document.getElementById('news-sync-icon');
  if (deptIcon) deptIcon.classList.add('fa-spin');
  if (newsIcon) newsIcon.classList.add('fa-spin');

  let pushedDeptCount = 0;
  let pushedNewsCount = 0;
  let fetchedDeptCount = 0;
  let fetchedNewsCount = 0;
  let errorMsg = null;

  try {
    // 1. Push any local unsynced department posts
    if (window.DepartmentService && typeof window.DepartmentService.create === 'function') {
      const localList = getStoredDeptPosts();
      let changed = false;
      for (const post of localList) {
        if (post && post.isCustom && !post.syncedToCloud) {
          try {
            const res = await window.DepartmentService.create(post, null, null, post.gallery || []);
            if (res && res.id) {
              post.id = res.id;
              post.syncedToCloud = true;
              changed = true;
              pushedDeptCount++;
            }
          } catch (pe) {
            console.warn('Manual sync push dept error:', pe);
          }
        }
      }
      if (changed) saveStoredDeptPosts(localList);
    }

    // 2. Push any local unsynced news
    if (window.ActivityService && typeof window.ActivityService.create === 'function') {
      const newsList = getStoredNews();
      let newsChanged = false;
      for (const news of newsList) {
        if (news && news.isCustom && !news.syncedToCloud) {
          try {
            const res = await window.ActivityService.create(news, null, news.gallery || []);
            if (res && res.id) {
              news.syncedToCloud = true;
              newsChanged = true;
              pushedNewsCount++;
            }
          } catch (ne) {
            console.warn('Manual sync push news error:', ne);
          }
        }
      }
      if (newsChanged) saveStoredNews(newsList);
    }

    // 3. Fetch latest authoritative posts from Supabase Cloud
    if (window.DepartmentService && typeof window.DepartmentService.fetchAll === 'function') {
      const cloudDeptPosts = await window.DepartmentService.fetchAll();
      if (Array.isArray(cloudDeptPosts)) {
        fetchedDeptCount = cloudDeptPosts.length;
        mergeAndSaveDeptPosts(cloudDeptPosts);
      }
    }

    // 4. Fetch latest authoritative news from Supabase Cloud
    if (window.ActivityService && typeof window.ActivityService.fetchAll === 'function') {
      const cloudNews = await window.ActivityService.fetchAll();
      if (Array.isArray(cloudNews) && cloudNews.length > 0) {
        fetchedNewsCount = cloudNews.length;
        saveStoredNews(cloudNews);
      }
    }

    // 5. Re-render UI
    if (typeof renderDeptContent === 'function') renderDeptContent();
    if (typeof renderNewsGrid === 'function') renderNewsGrid();

    // 6. Provide clear feedback if requested
    if (showFeedback) {
      alert(`✅ ការធ្វើបច្ចុប្បន្នភាព (Sync) បានជោគជ័យ ១០០%!\n\n` +
        `☁️ Cloud Supabase Status: 🟢 Connected (ដំណើរការល្អ)\n` +
        `📥 ទាញយកទិន្នន័យពី Cloud:\n` +
        `   • អត្ថបទដេប៉ាតឺម៉ង់៖ ${fetchedDeptCount} អត្ថបទ\n` +
        `   • ព័ត៌មាន & សកម្មភាពសាលា៖ ${fetchedNewsCount} អត្ថបទ\n` +
        (pushedDeptCount > 0 || pushedNewsCount > 0 ? `📤 បាន Upload ចូល Cloud ជោគជ័យ៖ ${pushedDeptCount + pushedNewsCount} អត្ថបទថ្មី\n` : ``) +
        `\n🌐 គ្រប់កុំព្យូទ័រ និងទូរស័ព្ទ (PC, Mobile, Tablet) អាចមើលឃើញព័ត៌មានដូចគ្នាទាំងអស់ភ្លាមៗ!`);
    }

  } catch (err) {
    errorMsg = err.message || 'បញ្ហាបណ្តាញ';
    if (showFeedback) {
      alert(`⚠️ ការ Sync ជួបបញ្ហា៖ ${errorMsg}\n\nសូមពិនិត្យការតភ្ជាប់អ៊ីនធឺណិត ហើយព្យាយាមម្តងទៀត។`);
    }
  } finally {
    if (deptIcon) deptIcon.classList.remove('fa-spin');
    if (newsIcon) newsIcon.classList.remove('fa-spin');
  }
};

// Sync a single post explicitly
window.manualSyncSinglePost = async function(postId, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  if (!postId) return;

  const allPosts = getStoredDeptPosts();
  const post = allPosts.find(p => String(p.id) === String(postId));
  if (!post) {
    // Check in news
    const allNews = getStoredNews();
    const newsItem = allNews.find(n => String(n.id) === String(postId));
    if (newsItem && window.ActivityService) {
      try {
        await window.ActivityService.create(newsItem, null, newsItem.gallery || []);
        newsItem.syncedToCloud = true;
        saveStoredNews(allNews);
        renderNewsGrid();
        alert(`🎉 បាន Sync ព័ត៌មាន «${newsItem.title}» ចូល Cloud Supabase ដោយជោគជ័យ!`);
      } catch (e) {
        alert(`❌ មិនអាច Sync ព័ត៌មាននេះទៅ Cloud បានទេ៖ ` + e.message);
      }
    }
    return;
  }

  if (window.DepartmentService && typeof window.DepartmentService.create === 'function') {
    try {
      const res = await window.DepartmentService.create(post, null, null, post.gallery || []);
      if (res && res.id) {
        post.id = res.id;
        post.syncedToCloud = true;
        saveStoredDeptPosts(allPosts);
        renderDeptContent();
        if (typeof renderNewsGrid === 'function') renderNewsGrid();
        alert(`🎉 បាន Sync អត្ថបទ «${post.title}» ចូល Cloud Supabase ដោយជោគជ័យ ១០០%!\n\n(គ្រប់កុំព្យូទ័រ និងទូរស័ព្ទអាចមើលឃើញភ្លាមៗ)`);
      }
    } catch (e) {
      alert(`❌ មិនអាច Sync អត្ថបទនេះទៅ Cloud បានទេ៖ ` + e.message);
    }
  }
};

// Update real-time count badges on Department tabs & sidebar modules
function updateDeptBadgesAndCounts(allPosts, currentDeptKey) {
  const posts = Array.isArray(allPosts) ? allPosts : [];
  
  // 1. Department Tabs Counts
  const deptCounts = { kge_sec: 0, kge_kp: 0, gep: 0 };
  posts.forEach(p => {
    if (p && p.department) {
      const d = String(p.department).trim().toLowerCase();
      if (deptCounts[d] !== undefined) deptCounts[d]++;
    }
  });

  ['kge_sec', 'kge_kp', 'gep'].forEach(d => {
    const el = document.getElementById('dept-tab-count-' + d);
    if (el) el.innerText = deptCounts[d] || 0;
  });

  // 2. Module Sidebar Counts for current department
  const modCounts = {
    all: 0,
    meeting: 0,
    support_doc: 0,
    inspection: 0,
    tech: 0,
    council: 0,
    stem: 0,
    health: 0,
    club: 0
  };

  posts.forEach(p => {
    if (p && p.department) {
      const d = String(p.department).trim().toLowerCase();
      if (d === currentDeptKey) {
        modCounts.all++;
        const m = String(p.module || 'meeting').trim().toLowerCase();
        if (modCounts[m] !== undefined) modCounts[m]++;
      }
    }
  });

  Object.keys(modCounts).forEach(m => {
    const el = document.getElementById('dept-mod-count-' + m);
    if (el) {
      el.innerText = modCounts[m];
      el.style.display = modCounts[m] > 0 ? 'inline-flex' : 'none';
    }
  });
}

window.navigateToDepartment = function(deptKey, moduleKey = 'all') {
  navigateTo('Department');
  switchDepartmentTab(deptKey || currentDepartment || 'kge_sec');
  const modToSwitch = moduleKey || 'all';
  const modBtn = document.getElementById('dept-mod-' + modToSwitch);
  switchDeptModule(modToSwitch, modBtn);
};

window.switchDepartmentTab = function(deptKey) {
  currentDepartment = deptKey || 'kge_sec';
  
  const info = DEPT_INFO[deptKey] || DEPT_INFO.kge_sec;
  const titleEl = document.getElementById('dept-title-text');
  const iconEl = document.getElementById('dept-title-icon');
  const descEl = document.getElementById('dept-current-header-desc');
  
  const isEn = currentAppLanguage === 'en';
  if (titleEl) titleEl.innerText = (isEn && info.name_en) ? info.name_en : info.name;
  if (iconEl) iconEl.innerText = info.icon;
  if (descEl) descEl.innerText = (isEn && info.desc_en) ? info.desc_en : info.desc;

  ['kge_sec', 'kge_kp', 'gep'].forEach(k => {
    const btn = document.getElementById('dept-btn-' + k);
    if (btn) {
      if (k === deptKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  renderDeptContent();
};

window.switchDeptModule = function(moduleKey, element) {
  currentDeptModule = moduleKey || 'all';

  document.querySelectorAll('.dept-side-link').forEach(btn => btn.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  } else {
    const target = document.getElementById('dept-mod-' + moduleKey);
    if (target) target.classList.add('active');
  }

  const modInfo = DEPT_MODULE_INFO[moduleKey] || DEPT_MODULE_INFO.all;
  const modTitleEl = document.getElementById('dept-module-title');
  const modSubEl = document.getElementById('dept-module-subtitle');

  const isEn = currentAppLanguage === 'en';
  const titleText = (isEn && modInfo.title_en) ? modInfo.title_en : modInfo.title;
  const subText = (isEn && modInfo.subtitle_en) ? modInfo.subtitle_en : modInfo.subtitle;

  if (modTitleEl) {
    modTitleEl.innerHTML = `<i class="${modInfo.icon}"></i> <span>${titleText}</span>`;
  }
  if (modSubEl) {
    modSubEl.innerText = subText;
  }

  renderDeptContent();
};

window.handleDeptSearch = function(keyword) {
  deptSearchKeyword = (keyword || '').toLowerCase().trim();
  renderDeptContent();
};

function renderDeptContent() {
  const container = document.getElementById('dept-content-list');
  if (!container) return;

  const currentDeptKey = String(currentDepartment || 'kge_sec').trim().toLowerCase();
  const currentModKey = String(currentDeptModule || 'all').trim().toLowerCase();

  const storedList = getStoredDeptPosts() || [];

  // Update counts on tabs & sidebar
  updateDeptBadgesAndCounts(storedList, currentDeptKey);

  // Custom posts (from Supabase & localStorage & in-memory)
  const customList = storedList.filter(p => {
    if (!p) return false;
    const pDept = String(p.department || currentDeptKey).trim().toLowerCase();
    const pMod = String(p.module || 'meeting').trim().toLowerCase();
    if (pDept !== currentDeptKey) return false;
    if (currentModKey !== 'all' && pMod !== currentModKey) return false;
    return true;
  });

  const defaultKey = `${currentDeptKey}_${currentModKey}`;
  const defaultList = (currentModKey === 'all') ? [] : (DEFAULT_DEPT_ITEMS[defaultKey] || []);

  let combined = [...customList, ...defaultList];

  // Sort newest first
  combined.sort((a, b) => {
    const da = new Date(a.date || a.createdAt || a.created_at || 0).getTime() || 0;
    const db = new Date(b.date || b.createdAt || b.created_at || 0).getTime() || 0;
    return db - da;
  });

  if (deptSearchKeyword) {
    combined = combined.filter(item => {
      const t = (item.title || '').toLowerCase();
      const d = (item.description || '').toLowerCase();
      const a = (item.author || '').toLowerCase();
      return t.includes(deptSearchKeyword) || d.includes(deptSearchKeyword) || a.includes(deptSearchKeyword);
    });
  }

  const isEn = currentAppLanguage === 'en';

  if (combined.length === 0) {
    const modTitle = isEn && DEPT_MODULE_INFO[currentDeptModule]?.title_en ? DEPT_MODULE_INFO[currentDeptModule].title_en : (DEPT_MODULE_INFO[currentDeptModule]?.title || '');
    const emptyTitle = isEn ? `No posts or documents in "${modTitle}" for this department yet` : `មិនទាន់មានទិន្នន័យ ឬឯកសារក្នុងផ្នែក «${modTitle}» នៃដេប៉ាតឺម៉ង់នេះទេ`;
    const emptySub = isEn ? 'Teachers and staff can click below to create and publish new activities' : 'លោកគ្រូ-អ្នកគ្រូអាចចុចប៊ូតុងខាងក្រោមដើម្បីបង្កើត និងបង្ហោះសកម្មភាពថ្មី';
    const btnText = isEn ? 'Create New Activity in this Module' : 'បង្កើតសកម្មភាពថ្មីក្នុងផ្នែកនេះ';

    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: #94a3b8;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.8rem; margin-bottom: 14px; color: #cbd5e1; display: block;"></i>
        <h4 style="margin: 0 0 8px; color: #64748b; font-size: 1.1rem;">${emptyTitle}</h4>
        <p style="margin: 0 0 16px; font-size: 0.88rem;">${emptySub}</p>
        <button type="button" class="btn-publish-post" onclick="openDeptPublishModal()" style="margin: 0 auto; display: inline-flex;">
          <i class="fa-solid fa-plus"></i> ${btnText}
        </button>
      </div>
    `;
    return;
  }

  const activeRole = getActiveUserRole();

  container.innerHTML = combined.map(item => {
    const isCustom = !!item.isCustom;
    const rawDept = item.department || currentDepartment || 'kge_sec';
    const rawMod = item.module || (currentDeptModule !== 'all' ? currentDeptModule : 'meeting');
    const deptInfo = DEPT_INFO[rawDept] || DEPT_INFO.kge_sec;
    const modInfo = DEPT_MODULE_INFO[rawMod] || DEPT_MODULE_INFO.meeting;
    const canManageThis = isCustom && canManageDepartment(rawDept);

    const deptName = (isEn && deptInfo.name_en) ? deptInfo.name_en.split(' ')[0] : deptInfo.name.split(' ')[0];
    const modTitle = (isEn && modInfo.title_en) ? modInfo.title_en : modInfo.title;
    const authorLabel = isEn ? 'Author:' : 'អ្នកកត់ត្រា៖';
    const photosLabel = isEn ? 'photos' : 'រូបភាព';
    const downloadLabel = isEn ? 'Download Document' : 'ទាញយកឯកសារ';
    const viewLabel = isEn ? 'View Details' : 'មើលលម្អិត';
    const editLabel = isEn ? 'Edit' : 'កែប្រែ';

    return `
      <div class="dept-item-card">
        <div class="dept-card-header">
          <div>
            <div style="display: flex; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; align-items: center;">
              <span style="font-size: 0.75rem; background: #e0f2fe; color: #0071ba; padding: 2px 9px; border-radius: 10px; font-weight: 700;">
                ${deptInfo.icon} ${deptName}
              </span>
              <span style="font-size: 0.75rem; background: #f1f5f9; color: #475569; padding: 2px 9px; border-radius: 10px; font-weight: 600;">
                <i class="${modInfo.icon}" style="font-size: 0.7rem;"></i> ${modTitle}
              </span>
              ${isCustom ? (item.syncedToCloud !== false ? `
                <span class="badge-cloud-status badge-cloud-synced" title="បាន Sync ចូល Cloud Supabase រួចរាល់ (គ្រប់កុំព្យូទ័រ និងទូរស័ព្ទអាចមើលឃើញ)">
                  <i class="fa-solid fa-cloud-check"></i> Cloud Synced
                </span>
              ` : `
                <span class="badge-cloud-status badge-cloud-unsynced" onclick="manualSyncSinglePost('${item.id}', event)" title="មិនទាន់ចូល Cloud ទេ (រក្សាទុកតែលើកុំព្យូទ័រនេះ) - ចុចទីនេះដើម្បី Sync">
                  <i class="fa-solid fa-cloud-arrow-up fa-bounce"></i> មិនទាន់ចូល Cloud (ចុច Sync)
                </span>
              `) : ''}
            </div>
            <h4 class="dept-card-title">${item.title}</h4>
          </div>
          <span style="font-size: 0.8rem; background: #f8fafc; color: #64748b; padding: 4px 12px; border-radius: 12px; font-weight: 700; white-space: nowrap; border: 1px solid #e2e8f0;">
            <i class="fa-solid fa-calendar-day" style="color: #0071ba;"></i> ${item.date || 'N/A'}
          </span>
        </div>

        <div class="dept-card-meta">
          <span><i class="fa-solid fa-user-pen"></i> ${authorLabel} <strong>${item.author || 'Takeo Campus'}</strong></span>
          ${item.attachmentName ? `<span style="color:#059669; font-weight:600;"><i class="fa-solid fa-paperclip"></i> ${item.attachmentName}</span>` : ''}
          ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `<span style="color:#8b5cf6;"><i class="fa-solid fa-images"></i> ${item.gallery.length} ${photosLabel}</span>` : ''}
        </div>

        ${item.image ? `
          <div class="dept-card-media" onclick="openDeptArticleModal('${item.id}')" title="ចុចដើម្បីមើលលម្អិត & ពង្រីករូបភាព">
            <img src="${item.image}" alt="${item.title}" class="dept-card-thumbnail" loading="lazy">
            <div class="dept-card-media-overlay">
              <span><i class="fa-solid fa-expand"></i> ${isEn ? 'View Full Image' : 'ចុចមើលលម្អិត'}</span>
              ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `<span class="dept-gallery-tag"><i class="fa-solid fa-images"></i> +${item.gallery.length}</span>` : ''}
            </div>
          </div>
        ` : ''}

        <p class="dept-card-desc">${item.description || ''}</p>

        <div class="dept-card-actions">
          <div>
            ${item.attachmentUrl ? `
              <a href="${item.attachmentUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; background: #0071ba; color: white; padding: 6px 14px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                <i class="fa-solid fa-download"></i> ${downloadLabel} (${item.attachmentName || 'PDF'})
              </a>
            ` : (item.attachmentName ? `
              <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; background: #f1f5f9; color: #475569; padding: 5px 12px; border-radius: 6px;">
                <i class="fa-solid fa-file-lines" style="color: #0071ba;"></i> ${item.attachmentName}
              </span>
            ` : '')}
          </div>

          <div style="display: flex; gap: 8px;">
            <button type="button" onclick="openDeptArticleModal('${item.id}')" style="padding: 6px 14px; font-size: 0.82rem; background: #f0f9ff; color: #0284c7; border: 1px solid #bae6fd; border-radius: 8px; font-weight: 600; cursor: pointer;">
              <i class="fa-solid fa-eye"></i> ${viewLabel}
            </button>
            ${canManageThis ? `
              <button type="button" onclick="openDeptPublishModal('${item.id}')" style="padding: 6px 12px; font-size: 0.82rem; background: #fefce8; color: #ca8a04; border: 1px solid #fef08a; border-radius: 8px; font-weight: 600; cursor: pointer;">
                <i class="fa-solid fa-pen-to-square"></i> ${editLabel}
              </button>
              <button type="button" onclick="deleteDeptPost('${item.id}')" style="padding: 6px 10px; font-size: 0.82rem; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: 8px; cursor: pointer;" title="Delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Media handlers for Department publish form
window.handleDeptImagePresetChange = function(val) {
  const preview = document.getElementById('dept-cover-preview');
  const img = document.getElementById('dept-cover-preview-img');
  const hiddenUrl = document.getElementById('dept-cover-custom-url');
  
  if (val && val !== 'custom') {
    currentDeptCoverFile = null;
    if (hiddenUrl) hiddenUrl.value = val;
    if (img) img.src = val;
    if (preview) preview.style.display = 'block';
  } else if (val === 'custom') {
    if (hiddenUrl) hiddenUrl.value = '';
    if (preview) preview.style.display = 'none';
  }
};

window.handleDeptCoverSelect = async function(e) {
  const file = e.target.files[0];
  if (!file) return;
  currentDeptCoverFile = file;
  
  const preview = document.getElementById('dept-cover-preview');
  const img = document.getElementById('dept-cover-preview-img');
  const hiddenUrl = document.getElementById('dept-cover-custom-url');
  const selectPreset = document.getElementById('dept-image-preset-select');
  
  if (selectPreset) selectPreset.value = 'custom';
  
  try {
    const compressedDataUrl = await compressImageFile(file, 800, 800, 0.62);
    if (hiddenUrl) hiddenUrl.value = compressedDataUrl || '';
    if (img) img.src = compressedDataUrl || '';
    if (preview) preview.style.display = 'block';
  } catch (err) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      if (img) img.src = evt.target.result;
      if (preview) preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
};

window.renderDeptGalleryPreviews = function() {
  const container = document.getElementById('dept-gallery-preview-container');
  const badge = document.getElementById('dept-gallery-count-badge');
  if (badge) {
    badge.innerText = currentDeptGalleryList.length > 0 ? `(${currentDeptGalleryList.length} រូប)` : '';
  }
  if (!container) return;

  if (!currentDeptGalleryList || currentDeptGalleryList.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = currentDeptGalleryList.map((imgUrl, i) => `
    <div style="position: relative; width: 68px; height: 68px; border-radius: 8px; overflow: hidden; border: 1.5px solid #cbd5e1; box-shadow: 0 1px 4px rgba(0,0,0,0.1); background: #f8fafc; flex-shrink: 0;">
      <img src="${imgUrl}" alt="Gallery Preview ${i+1}" style="width: 100%; height: 100%; object-fit: cover;">
      <span style="position: absolute; bottom: 2px; left: 2px; background: rgba(0,0,0,0.7); color: white; font-size: 0.65rem; padding: 1px 4px; border-radius: 4px; font-weight: 700; pointer-events: none;">#${i+1}</span>
      <button type="button" onclick="removeDeptGalleryItem(${i})" title="លុបរូបនេះ (Remove photo)" style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; border-radius: 50%; background: rgba(220,38,38,0.9); color: white; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; transition: transform 0.2s; z-index: 2;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
};

window.removeDeptGalleryItem = function(index) {
  if (index >= 0 && index < currentDeptGalleryList.length) {
    currentDeptGalleryList.splice(index, 1);
    renderDeptGalleryPreviews();
  }
};

window.handleDeptGallerySelect = async function(e) {
  const files = Array.from(e.target.files || []);
  if (!files || files.length === 0) return;

  const btnText = document.getElementById('dept-btn-browse-gallery-text');
  const oldText = btnText ? btnText.innerText : 'ជ្រើសរើសរូបភាពច្រើន (Upload Multiple)';
  if (btnText) btnText.innerText = `កំពុងរៀបចំ (${files.length} រូប)...`;

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    try {
      const compressedDataUrl = await compressImageFile(f, 720, 720, 0.58);
      if (compressedDataUrl) {
        currentDeptGalleryList.push(compressedDataUrl);
      }
    } catch (err) {
      console.warn('Gallery compress notice:', err);
    }
  }

  if (btnText) btnText.innerText = oldText;
  renderDeptGalleryPreviews();
  e.target.value = ''; // Reset so user can choose more or repeat
};

window.handleDeptDocSelect = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  currentDeptDocFile = file;
  
  const badge = document.getElementById('dept-doc-preview-badge');
  if (badge) {
    badge.style.display = 'inline-flex';
    badge.innerHTML = `<i class="fa-solid fa-file-lines"></i> <span>${file.name} (${(file.size / 1024).toFixed(1)} KB)</span> <i class="fa-solid fa-xmark" style="cursor: pointer; margin-left: 6px;" onclick="clearDeptDocSelect()"></i>`;
  }
};

window.clearDeptDocSelect = function() {
  currentDeptDocFile = null;
  const input = document.getElementById('dept-form-doc');
  if (input) input.value = '';
  const badge = document.getElementById('dept-doc-preview-badge');
  if (badge) {
    badge.style.display = 'none';
    badge.innerHTML = '';
  }
};

window.openDeptPublishModal = function(editId = null) {
  if (editId && typeof editId !== 'string') {
    editId = null;
  }

  // Silent Supabase database connection warmup
  if (typeof window.checkSupabaseConnection === 'function') {
    window.checkSupabaseConnection().catch(() => {});
  }

  // 1. Authentication Check
  const activeRole = getActiveUserRole();
  if (!activeRole) {
    alert('🔒 សូមចូលគណនីដេប៉ាតឺម៉ង់របស់អ្នកជាមុនសិន ដើម្បីបង្កើត ឬកែសម្រួលព័ត៌មាន!');
    openAdminLoginModal();
    return;
  }

  if (activeRole !== 'superadmin' && activeRole !== currentDepartment && !editId) {
    switchDepartmentTab(activeRole);
  }

  currentDeptCoverFile = null;
  currentDeptGalleryList = [];
  currentDeptGalleryFiles = [];
  currentDeptDocFile = null;

  const modal = document.getElementById('dept-publish-modal');
  const form = document.getElementById('dept-publish-form');
  const titleText = document.getElementById('dept-modal-title-text');
  const submitText = document.getElementById('dept-btn-submit-text');
  const idEdit = document.getElementById('dept-post-id-edit');
  const preview = document.getElementById('dept-cover-preview');
  const docBadge = document.getElementById('dept-doc-preview-badge');

  if (form) form.reset();
  if (preview) preview.style.display = 'none';
  if (docBadge) {
    docBadge.style.display = 'none';
    docBadge.innerHTML = '';
  }

  const deptSelect = document.getElementById('dept-form-department');
  const modSelect = document.getElementById('dept-form-module');
  const dateInput = document.getElementById('dept-form-date');
  const customUrlInput = document.getElementById('dept-cover-custom-url');
  const docNameInput = document.getElementById('dept-existing-doc-name');
  const docUrlInput = document.getElementById('dept-existing-doc-url');

  if (customUrlInput) customUrlInput.value = '';
  if (docNameInput) docNameInput.value = '';
  if (docUrlInput) docUrlInput.value = '';

  if (editId) {
    const allPosts = getStoredDeptPosts();
    const item = allPosts.find(p => String(p.id) === String(editId));
    if (item) {
      if (!canManageDepartment(item.department || currentDepartment)) {
        alert(`❌ អ្នកមិនមានសិទ្ធិកែប្រែព័ត៌មាននៃដេប៉ាតឺម៉ង់ «${DEPT_INFO[item.department]?.name || item.department}» ទេ! (សិទ្ធិបច្ចុប្បន្ន៖ ${DEPT_CREDENTIALS[activeRole]?.name || activeRole})`);
        return;
      }

      if (idEdit) idEdit.value = item.id;
      if (titleText) titleText.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> កែប្រែព័ត៌មាន/ឯកសារដេប៉ាតឺម៉ង់';
      if (submitText) submitText.innerText = 'រក្សាទុកការកែប្រែ (Save Changes)';

      if (deptSelect) {
        deptSelect.value = item.department || currentDepartment;
        deptSelect.disabled = (activeRole !== 'superadmin');
      }
      if (modSelect) modSelect.value = item.module || currentDeptModule;
      const titleInput = document.getElementById('dept-form-title');
      if (titleInput) titleInput.value = item.title || '';
      if (dateInput) dateInput.value = item.date || new Date().toISOString().split('T')[0];
      const authorInput = document.getElementById('dept-form-author');
      if (authorInput) authorInput.value = item.author || '';
      const descInput = document.getElementById('dept-form-desc');
      if (descInput) descInput.value = item.description || '';

      const publishCheck = document.getElementById('dept-form-publish-activities');
      if (publishCheck) {
        publishCheck.checked = (item.publishToActivities !== false && item.publish_to_activities !== false);
      }

      if (item.image) {
        if (customUrlInput) customUrlInput.value = item.image;
        const img = document.getElementById('dept-cover-preview-img');
        if (img) img.src = item.image;
        if (preview) preview.style.display = 'block';
      }

      if (item.attachmentName) {
        if (docNameInput) docNameInput.value = item.attachmentName;
        if (docUrlInput) docUrlInput.value = item.attachmentUrl || '';
        if (docBadge) {
          docBadge.style.display = 'inline-flex';
          docBadge.innerHTML = `<i class="fa-solid fa-file-lines"></i> <span>${item.attachmentName}</span>`;
        }
      }

      if (Array.isArray(item.gallery) && item.gallery.length > 0) {
        currentDeptGalleryList = [...item.gallery];
      } else {
        currentDeptGalleryList = [];
      }
      renderDeptGalleryPreviews();
    }
  } else {
    if (idEdit) idEdit.value = '';
    if (titleText) titleText.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i> បង្ហោះព័ត៌មាន ឬឯកសារដេប៉ាតឺម៉ង់';
    if (submitText) submitText.innerText = 'បង្ហោះ (Publish)';

    const publishCheck = document.getElementById('dept-form-publish-activities');
    if (publishCheck) {
      publishCheck.checked = true;
    }

    if (deptSelect) {
      if (activeRole !== 'superadmin') {
        deptSelect.value = activeRole;
        deptSelect.disabled = true; // lock to department
      } else {
        deptSelect.value = currentDepartment;
        deptSelect.disabled = false;
      }
    }
    if (modSelect) modSelect.value = currentDeptModule;
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    currentDeptGalleryList = [];
    renderDeptGalleryPreviews();
  }

  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
  }
};

window.closeDeptPublishModal = function() {
  const modal = document.getElementById('dept-publish-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
    const form = document.getElementById('dept-publish-form');
    if (form) form.reset();
  }
};

window.handleDeptPublishSubmit = async function(event) {
  if (event && event.preventDefault) event.preventDefault();

  const activeRole = getActiveUserRole();
  if (!activeRole) {
    alert('🔒 សូមចូលគណនីដេប៉ាតឺម៉ង់ជាមុនសិន!');
    openAdminLoginModal();
    return;
  }

  const deptSelect = document.getElementById('dept-form-department');
  const modSelect = document.getElementById('dept-form-module');
  const dept = (deptSelect ? deptSelect.value : '').trim() || currentDepartment || 'kge_sec';
  const mod = (modSelect ? modSelect.value : '').trim() || currentDeptModule || 'meeting';

  if (!canManageDepartment(dept)) {
    alert(`❌ អ្នកមិនមានសិទ្ធិបង្ហោះចូលដេប៉ាតឺម៉ង់ «${DEPT_INFO[dept]?.name || dept}» ទេ! (សិទ្ធិបច្ចុប្បន្ន៖ ${DEPT_CREDENTIALS[activeRole]?.name || activeRole})`);
    return;
  }

  const btn = document.getElementById('dept-btn-submit');
  const submitTextSpan = document.getElementById('dept-btn-submit-text');
  const originalText = submitTextSpan ? submitTextSpan.innerText : 'បង្ហោះ (Publish)';
  
  if (btn) {
    btn.disabled = true;
    if (submitTextSpan) submitTextSpan.innerText = 'កំពុងរក្សាទុក...';
  }

  try {
    const editId = (document.getElementById('dept-post-id-edit')?.value || '').trim();
    const title = (document.getElementById('dept-form-title')?.value || '').trim();
    const date = document.getElementById('dept-form-date')?.value || new Date().toISOString().split('T')[0];
    const author = (document.getElementById('dept-form-author')?.value || '').trim() || 'Takeo Campus';
    const desc = (document.getElementById('dept-form-desc')?.value || '').trim();
    const presetUrl = document.getElementById('dept-cover-custom-url')?.value || '';
    const existingDocName = document.getElementById('dept-existing-doc-name')?.value || '';
    const existingDocUrl = document.getElementById('dept-existing-doc-url')?.value || '';

    // 1. Process & Compress Cover Image
    let coverImage = presetUrl;
    if (currentDeptCoverFile) {
      if (submitTextSpan) submitTextSpan.innerText = 'កំពុងរៀបចំរូបភាព Cover...';
      try {
        coverImage = await compressImageFile(currentDeptCoverFile, 800, 800, 0.62);
      } catch (e) {
        coverImage = await fileToBase64(currentDeptCoverFile);
      }
    }

    // REQUIRE THUMBNAIL VALIDATION
    if (!coverImage || coverImage.trim() === '' || coverImage === 'custom') {
      alert('⚠️ សូមជ្រើសរើស ឬ Upload រូបភាពតំណាង (Cover Image / Thumbnail) ជាមុនសិន មុននឹងបង្ហោះ!\n\n(Required: Please upload or select a thumbnail image before publishing.)');
      if (btn) {
        btn.disabled = false;
        if (submitTextSpan) submitTextSpan.innerText = originalText;
      }
      const selectEl = document.getElementById('dept-image-preset-select');
      if (selectEl) selectEl.focus();
      return;
    }

    // 2. Process Attachment
    let attachmentName = existingDocName;
    let attachmentUrl = existingDocUrl;
    if (currentDeptDocFile) {
      attachmentName = currentDeptDocFile.name;
      try {
        attachmentUrl = await fileToBase64(currentDeptDocFile);
      } catch (e) {
        attachmentUrl = URL.createObjectURL(currentDeptDocFile);
      }
    }

    // 3. Process & Merge All Gallery Images
    const galleryList = Array.isArray(currentDeptGalleryList) ? [...currentDeptGalleryList].filter(Boolean) : [];

    const postId = editId || ('dept_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7));

    const publishToActivities = document.getElementById('dept-form-publish-activities')
      ? document.getElementById('dept-form-publish-activities').checked
      : true;

    const payload = {
      id: postId,
      department: dept,
      module: mod,
      title: title,
      date: date,
      author: author,
      description: desc,
      image: coverImage,
      attachmentName: attachmentName,
      attachmentUrl: attachmentUrl,
      gallery: galleryList,
      publishToActivities: publishToActivities,
      publish_to_activities: publishToActivities,
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    if (submitTextSpan) submitTextSpan.innerText = 'កំពុងរក្សាទុកទៅ Cloud Supabase...';

    // 1. Save directly to Supabase Cloud Database
    let savedItem = null;
    let cloudErrMessage = '';
    if (window.DepartmentService && (typeof window.DepartmentService.create === 'function' || typeof window.DepartmentService.update === 'function')) {
      try {
        if (editId) {
          savedItem = await window.DepartmentService.update(editId, payload, currentDeptCoverFile, currentDeptDocFile, galleryList);
        } else {
          savedItem = await window.DepartmentService.create(payload, currentDeptCoverFile, currentDeptDocFile, galleryList);
        }
      } catch (cloudErr) {
        cloudErrMessage = cloudErr.message || String(cloudErr);
        console.warn('Direct Supabase cloud save warning (will retry in background):', cloudErr);
      }
    }

    const finalItem = savedItem || payload;
    finalItem.syncedToCloud = !!savedItem;

    // 2. Save to Local Cache & State
    const currentList = getStoredDeptPosts();
    if (editId) {
      const idx = currentList.findIndex(p => String(p.id) === String(editId));
      if (idx !== -1) {
        currentList[idx] = { ...currentList[idx], ...finalItem };
      } else {
        currentList.unshift(finalItem);
      }
    } else {
      currentList.unshift(finalItem);
    }
    saveStoredDeptPosts(currentList);

    // 3. Switch Tab & Module to match published post and render IMMEDIATELY
    currentDepartment = dept;
    currentDeptModule = mod;
    switchDepartmentTab(dept);
    const modBtn = document.getElementById('dept-mod-' + mod);
    if (modBtn) switchDeptModule(mod, modBtn);
    renderDeptContent();

    // 4. Automatically sync and update main School Activities & News feed
    if (typeof renderNewsGrid === 'function') {
      renderNewsGrid();
    }

    // Trigger immediate background sync if direct cloud save had lag
    if (!savedItem) {
      setTimeout(() => syncLocalDeptPostsToCloud(), 1000);
    }

    closeDeptPublishModal();

    if (savedItem) {
      if (editId) {
        alert('🎉 បានកែប្រែព័ត៌មានដេប៉ាតឺម៉ង់ និង Sync ទៅកាន់ Cloud Supabase ដោយជោគជ័យ ១០០%!\n\n(គ្រប់កុំព្យូទ័រ និងទូរស័ព្ទអាចមើលឃើញភ្លាមៗ)');
      } else {
        alert(`🎉 បានបង្ហោះចូលផ្នែក «${DEPT_MODULE_INFO[mod]?.title || mod}» នៃដេប៉ាតឺម៉ង់ «${DEPT_INFO[dept]?.name || dept}» និង Sync ទៅកាន់ Cloud Supabase ដោយជោគជ័យ ១០០%!\n\n(គ្រប់កុំព្យូទ័រ និងទូរស័ព្ទអាចមើលឃើញភ្លាមៗ)`);
      }
    } else {
      alert(`⚠️ បានរក្សាទុកក្នុងកុំព្យូទ័រនេះជាបណ្ដោះអាសន្ន!\n\n(មូលហេតុ៖ មិនទាន់អាចបញ្ជូនទៅកាន់ Cloud Supabase បានទេ: ${cloudErrMessage || 'បណ្តាញយឺត'})\n\n💡 ប្រព័ន្ធបានរក្សាទុកទិន្នន័យលើម៉ាស៊ីននេះ ហើយនឹងព្យាយាម Sync ទៅកាន់ Cloud Supabase ដោយស្វ័យប្រវត្តិ ឬលោកគ្រូ-អ្នកគ្រូអាចចុចប៊ូតុង "Sync Cloud ឥឡូវនេះ" នៅលើ Header ខាងលើ។`);
    }

    // Scroll smoothly to the content
    const area = document.querySelector('.dept-content-area');
    if (area) area.scrollIntoView({ behavior: 'smooth' });

  } catch (err) {
    alert('❌ បរាជ័យក្នុងការបង្ហោះ៖ ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      if (submitTextSpan) submitTextSpan.innerText = originalText;
    }
  }
};

window.openDeptLightbox = function(postId, startIndex = 0) {
  const allPosts = getStoredDeptPosts();
  const item = allPosts.find(x => String(x.id) === String(postId));
  if (!item) return;
  const images = [];
  if (item.image) images.push(item.image);
  if (Array.isArray(item.gallery)) {
    item.gallery.forEach(g => { if (g) images.push(g); });
  }
  if (images.length > 0 && typeof openMediaLightbox === 'function') {
    openMediaLightbox(images[startIndex] || images[0], images, startIndex);
  }
};

window.openDeptArticleModal = function(id) {
  if (!id) return;
  const allPosts = getStoredDeptPosts();
  const item = allPosts.find(x => String(x.id) === String(id));

  if (!item) {
    console.warn('Post not found for id:', id);
    return;
  }

  const bodyEl = document.getElementById('dept-article-modal-body');
  if (!bodyEl) return;

  const deptInfo = DEPT_INFO[item.department || currentDepartment] || DEPT_INFO.kge_sec;
  const modInfo = DEPT_MODULE_INFO[item.module || currentDeptModule] || DEPT_MODULE_INFO.meeting;
  const isEn = currentAppLanguage === 'en';

  bodyEl.innerHTML = `
    <div style="padding: 1.8rem 2.2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 0.8rem; background: #0071ba; color: white; padding: 4px 14px; border-radius: 12px; font-weight: 700;">
            ${deptInfo.icon} ${deptInfo.name}
          </span>
          <span style="font-size: 0.8rem; background: #e0f2fe; color: #0071ba; padding: 4px 14px; border-radius: 12px; font-weight: 700;">
            <i class="${modInfo.icon}"></i> ${(isEn && modInfo.title_en) ? modInfo.title_en : modInfo.title}
          </span>
        </div>
        <button type="button" class="btn-cancel" onclick="togglePostTranslation(this)" style="padding: 4px 12px; font-size: 0.82rem; background: #e0f2fe; color: #0071ba; border: 1px solid #bae6fd; border-radius: 12px;">
          <i class="fa-solid fa-language"></i> <span>${isEn ? 'Translate to English' : 'បកប្រែជាភាសាអង់គ្លេស'}</span>
        </button>
      </div>

      <h1 class="post-trans-title" style="margin: 0 0 10px 0; font-size: 1.5rem; font-weight: 800; color: #0f172a; line-height: 1.4;">${item.title}</h1>
      
      <div style="font-size: 0.88rem; color: #64748b; margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        <span><i class="fa-solid fa-calendar-day" style="color: #0071ba;"></i> ${item.date || ''}</span>
        <span><i class="fa-solid fa-user-pen" style="color: #bd1e2d;"></i> ${isEn ? 'Author:' : 'អ្នកកត់ត្រា៖'} <strong>${item.author || 'Takeo Campus'}</strong></span>
      </div>

      ${item.image ? `
        <div style="margin-bottom: 20px; border-radius: 14px; overflow: hidden; max-height: 520px; background: #0f172a0a; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border-bottom: 3px solid #0071ba; cursor: pointer; position: relative; display: flex; align-items: center; justify-content: center;" onclick="openDeptLightbox('${item.id}', 0)" title="ចុចដើម្បីមើលរូបធំ (Click to view full image)">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; max-height: 520px; object-fit: contain; background: #f8fafc; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.01)'" onmouseout="this.style.transform='scale(1)'">
          <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(15,23,42,0.75); color: white; border-radius: 6px; padding: 4px 10px; font-size: 0.8rem; pointer-events: none; display: inline-flex; align-items: center; gap: 6px; backdrop-filter: blur(4px);">
            <i class="fa-solid fa-expand"></i> <span>${isEn ? 'View Full Image' : 'ពង្រីកមើលរូបធំ'}</span>
          </div>
        </div>
      ` : ''}

      <div class="post-trans-desc" style="font-size: 0.95rem; color: #334155; line-height: 1.8; white-space: pre-line; margin-bottom: 24px;">
        ${item.description || ''}
      </div>

      ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px; font-size: 0.95rem; color: #0f172a; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-images" style="color: #0071ba;"></i> <span>${isEn ? 'Additional Gallery Photos' : 'កម្រងរូបភាពបន្ថែម'}</span> (${item.gallery.length} <span>${isEn ? 'photos' : 'រូប'}</span>)
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px;">
            ${item.gallery.map((imgSrc, gIdx) => `
              <div style="height: 140px; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; cursor: pointer; position: relative; box-shadow: 0 2px 6px rgba(0,0,0,0.05);" onclick="openDeptLightbox('${item.id}', ${item.image ? gIdx + 1 : gIdx})" title="ចុចដើម្បីពង្រីកមើលរូបភាព">
                <img src="${imgSrc}" alt="Gallery Image" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
                <div style="position: absolute; bottom: 4px; right: 4px; background: rgba(0,0,0,0.65); color: white; border-radius: 4px; padding: 2px 6px; font-size: 0.7rem; pointer-events: none;">
                  <i class="fa-solid fa-expand"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${item.attachmentUrl ? `
        <div style="padding: 16px 20px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fa-solid fa-file-pdf" style="font-size: 2rem; color: #bd1e2d;"></i>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a;">${item.attachmentName || (isEn ? 'Attachment' : 'ឯកសារភ្ជាប់')}</div>
              <div style="font-size: 0.8rem; color: #64748b;">${isEn ? 'Click download to view full document' : 'ចុចទាញយកដើម្បីអានឯកសារពេញលេញ'}</div>
            </div>
          </div>
          <a href="${item.attachmentUrl}" target="_blank" download="${item.attachmentName || 'document.pdf'}" style="background: #0071ba; color: white; padding: 8px 18px; border-radius: 8px; text-decoration: none; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-download"></i> ${isEn ? 'Download Document' : 'ទាញយកឯកសារ'}
          </a>
        </div>
      ` : ''}
    
      <div class="article-share-bar" style="margin-top: 20px;">
        <div class="share-bar-label">
          <i class="fa-solid fa-share-nodes" style="color: #0071ba;"></i>
          <span>${isEn ? 'Share this document:' : 'ចែករំលែកឯកសារនេះ៖'}</span>
        </div>
        <div class="share-buttons-list">
          <button type="button" class="btn-share-social btn-tg" onclick="shareArticleToTelegram('${encodeURIComponent(item.title + ' | សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ')}', '${encodeURIComponent(window.location.origin + window.location.pathname + '#post_' + item.id)}')">
            <i class="fa-brands fa-telegram"></i> <span>Telegram</span>
          </button>
          <button type="button" class="btn-share-social btn-fb" onclick="shareArticleToFacebook('${encodeURIComponent(window.location.origin + window.location.pathname + '#post_' + item.id)}')">
            <i class="fa-brands fa-facebook-f"></i> <span>Facebook</span>
          </button>
          <button type="button" class="btn-share-social btn-native" onclick="shareArticleNative('${encodeURIComponent(item.title + ' | សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ')}', '${encodeURIComponent(window.location.origin + window.location.pathname + '#post_' + item.id)}')">
            <i class="fa-solid fa-share-from-square"></i> <span>${isEn ? 'Share' : 'ផ្ញើបន្ត'}</span>
          </button>
          <button type="button" class="btn-share-social btn-copy" onclick="copyArticleLink('${window.location.origin + window.location.pathname + '#post_' + item.id}')">
            <i class="fa-solid fa-link"></i> <span>${isEn ? 'Copy Link' : 'ចម្លង Link'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('dept-article-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
  }
};

window.closeDeptArticleModal = function() {
  const modal = document.getElementById('dept-article-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
  }
};

window.deleteDeptPost = async function(postId) {
  const activeRole = getActiveUserRole();
  if (!activeRole) {
    alert('🔒 សូមចូលគណនីដេប៉ាតឺម៉ង់ជាមុនសិន!');
    openAdminLoginModal();
    return;
  }

  const allPosts = getStoredDeptPosts();
  const item = allPosts.find(p => String(p.id) === String(postId));
  if (item && !canManageDepartment(item.department || currentDepartment)) {
    alert(`❌ អ្នកមិនមានសិទ្ធិលុបព័ត៌មាននៃដេប៉ាតឺម៉ង់ «${DEPT_INFO[item.department]?.name || item.department}» ទេ!`);
    return;
  }

  if (!confirm('តើលោកគ្រូ-អ្នកគ្រូពិតជាចង់លុបព័ត៌មាន/ឯកសារនេះមែនទេ?')) return;
  try {
    if (window.DepartmentService && window.DepartmentService.delete) {
      await window.DepartmentService.delete(postId);
    }
    
    const stored = getStoredDeptPosts().filter(p => String(p.id) !== String(postId));
    saveStoredDeptPosts(stored);
    
    renderDeptContent();
    if (typeof renderNewsGrid === 'function') {
      renderNewsGrid();
    }
    alert('🗑️ បានលុបដោយជោគជ័យ!');
  } catch (err) {
    alert('❌ បរាជ័យក្នុងការលុប៖ ' + err.message);
  }
};

// ==================== FULLSCREEN MEDIA LIGHTBOX CONTROLLER ====================
let currentLightboxImages = [];
let currentLightboxIndex = 0;

window.openMediaLightbox = function(src, galleryArray = [], startIndex = 0) {
  const modal = document.getElementById('media-lightbox-modal');
  const mainImg = document.getElementById('lightbox-main-img');
  if (!modal || !mainImg) return;

  if (Array.isArray(galleryArray) && galleryArray.length > 0) {
    currentLightboxImages = galleryArray.filter(Boolean);
    if (typeof startIndex === 'number' && startIndex >= 0 && startIndex < currentLightboxImages.length) {
      currentLightboxIndex = startIndex;
    } else if (src) {
      const foundIdx = currentLightboxImages.indexOf(src);
      currentLightboxIndex = foundIdx !== -1 ? foundIdx : 0;
    } else {
      currentLightboxIndex = 0;
    }
  } else if (src) {
    currentLightboxImages = [src];
    currentLightboxIndex = 0;
  } else {
    return;
  }

  updateLightboxView();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
};

window.closeMediaLightbox = function() {
  const modal = document.getElementById('media-lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 220);
};

window.lightboxNavigate = function(direction) {
  if (!currentLightboxImages || currentLightboxImages.length <= 1) return;
  const total = currentLightboxImages.length;
  currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
  updateLightboxView();
};

function updateLightboxView() {
  const mainImg = document.getElementById('lightbox-main-img');
  const counter = document.getElementById('lightbox-counter-badge');
  const prevBtn = document.getElementById('lightbox-btn-prev');
  const nextBtn = document.getElementById('lightbox-btn-next');
  if (!mainImg || !currentLightboxImages.length) return;

  const total = currentLightboxImages.length;
  const currentSrc = currentLightboxImages[currentLightboxIndex];
  
  mainImg.style.opacity = '0.3';
  mainImg.src = currentSrc;
  mainImg.onload = () => { mainImg.style.opacity = '1'; };

  if (counter) {
    const isEn = (typeof currentAppLanguage !== 'undefined' && currentAppLanguage === 'en');
    counter.innerText = isEn 
      ? `Photo ${currentLightboxIndex + 1} / ${total}`
      : `រូបភាពទី ${currentLightboxIndex + 1} / ${total}`;
  }

  if (prevBtn && nextBtn) {
    if (total <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    }
  }
}

window.downloadLightboxImage = function() {
  if (!currentLightboxImages || currentLightboxImages.length === 0) return;
  const currentSrc = currentLightboxImages[currentLightboxIndex];
  if (!currentSrc) return;
  
  const link = document.createElement('a');
  link.href = currentSrc;
  link.download = `sps_takeo_image_${currentLightboxIndex + 1}_${Date.now()}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.handleLightboxBackdropClick = function(e) {
  if (e.target && e.target.id === 'media-lightbox-modal') {
    closeMediaLightbox();
  }
};

// Global Keyboard Handler for Lightbox
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('media-lightbox-modal');
  if (modal && (modal.classList.contains('active') || modal.style.display === 'flex')) {
    if (e.key === 'Escape') {
      closeMediaLightbox();
    } else if (e.key === 'ArrowLeft') {
      lightboxNavigate(-1);
    } else if (e.key === 'ArrowRight') {
      lightboxNavigate(1);
    }
  }
});

let isDeptRealtimeInitialized = false;

// Initialize Department Service Real-time Subscription Helper
function initDepartmentRealtimeSync() {
  // 1. Synchronously load from localStorage first if inMemoryDeptPosts is empty
  if (!inMemoryDeptPosts || inMemoryDeptPosts.length === 0) {
    getStoredDeptPosts();
  }

  // 2. Hydrate from IndexedDB only if inMemory is still empty
  loadDeptPostsFromIndexedDB().then(idbList => {
    if (idbList && Array.isArray(idbList) && idbList.length > 0 && (!inMemoryDeptPosts || inMemoryDeptPosts.length === 0)) {
      inMemoryDeptPosts = idbList;
      if (typeof renderDeptContent === 'function') {
        renderDeptContent();
      }
    }
  });

  // 3. Connect to Supabase Realtime Service
  if (window.DepartmentService && typeof window.DepartmentService.subscribe === 'function') {
    window.DepartmentService.subscribe((list) => {
      if (Array.isArray(list)) {
        mergeAndSaveDeptPosts(list);
        if (typeof renderDeptContent === 'function') {
          renderDeptContent();
        }
        if (typeof renderNewsGrid === 'function') {
          renderNewsGrid();
        }
      }
    });
  }

  // 4. Setup listeners & polling interval for cross-tab and cross-device sync
  if (!isDeptRealtimeInitialized) {
    isDeptRealtimeInitialized = true;

    // Sync on Window Focus (when user switches back to tab or turns on screen)
    window.addEventListener('focus', () => {
      if (window.DepartmentService && typeof window.DepartmentService.fetchAll === 'function') {
        window.DepartmentService.fetchAll().then(posts => {
          if (Array.isArray(posts) && posts.length > 0) {
            mergeAndSaveDeptPosts(posts);
            if (typeof renderDeptContent === 'function') renderDeptContent();
            if (typeof renderNewsGrid === 'function') renderNewsGrid();
          }
        }).catch(() => {});
      }
    });

    // Sync on Tab Visibility Change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (window.DepartmentService && typeof window.DepartmentService.fetchAll === 'function') {
          window.DepartmentService.fetchAll().then(posts => {
            if (Array.isArray(posts) && posts.length > 0) {
              mergeAndSaveDeptPosts(posts);
              if (typeof renderDeptContent === 'function') renderDeptContent();
              if (typeof renderNewsGrid === 'function') renderNewsGrid();
            }
          }).catch(() => {});
        }
      }
    });

    // Run initial sync check
    syncLocalDeptPostsToCloud();

    // Background Heartbeat Polling every 6s to guarantee 100% sync across all devices
    setInterval(() => {
      if (window.DepartmentService && typeof window.DepartmentService.fetchAll === 'function') {
        window.DepartmentService.fetchAll().then(posts => {
          if (Array.isArray(posts) && posts.length > 0) {
            mergeAndSaveDeptPosts(posts);
            if (typeof renderDeptContent === 'function') renderDeptContent();
            if (typeof renderNewsGrid === 'function') renderNewsGrid();
          }
        }).catch(() => {});
      }
      syncLocalDeptPostsToCloud();
    }, 6000);
  }
}
window.initDepartmentRealtimeSync = initDepartmentRealtimeSync;

// ==================== QAC CHECKLIST CONTROLLER ====================
const QAC_BASE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzttbg5JQ_00SPsXP1sNNp1aNwoJ6W6sPDB7iUrveZu_sPza6lMeoWq3RsVZS2tTxc7xw/exec";

window.refreshQACFrame = function() {
  const iframe = document.getElementById('qac-iframe-element');
  if (iframe) {
    iframe.src = `${QAC_BASE_SCRIPT_URL}?t=${Date.now()}`;
  }
};

function initQACYearSelector() {
  // Managed directly inside the Google Apps Script Web App
}
window.initQACYearSelector = initQACYearSelector;

// =============================================================================
// 10. SMART AI SCHOOL ASSISTANT CONTROLLER (GEMINI 1.5 FLASH & TELEGRAM ALERTS)
// =============================================================================

// ==================== TAKEO PROVINCE 10 DISTRICTS SCHOOL BUS DATA ====================
const TAKEO_DISTRICT_BUS_DATA = {
  doun_kaev: {
    key: 'doun_kaev',
    nameKh: 'ក្រុងដូនកែវ',
    nameEn: 'Doun Kaev Municipality',
    hasBus: true,
    buses: [
      { busNo: '04', driver: 'លោក សាយ សិត', phone: '081 251 617', rawPhone: '081251617' },
      { busNo: '08', driver: 'លោក សូ សុភី', phone: '097 283 3628', rawPhone: '0972833628' },
      { busNo: '09', driver: 'លោក តុប សាវិន', phone: '010 789 697 / 078 889 926', rawPhone: '010789697' },
      { busNo: '11', driver: 'លោក សូ សុផាត', phone: '096 433 6277', rawPhone: '0964336277' }
    ]
  },
  tram_kak: {
    key: 'tram_kak',
    nameKh: 'ស្រុកត្រាំកក់',
    nameEn: 'Tram Kak District',
    hasBus: true,
    buses: [
      { busNo: '07', driver: 'លោក សូ សុភី', phone: '097 283 3628', rawPhone: '0972833628' },
      { busNo: '10', driver: 'លោក ច្រុង រ៉ៃ', phone: '066 273 873', rawPhone: '066273873' },
      { busNo: '12', driver: 'លោក អ៊ូច រ៉េនបញ្ញារិទ្ធ', phone: '067 443 692', rawPhone: '067443692' }
    ]
  },
  samraong: {
    key: 'samraong',
    nameKh: 'ស្រុកសំរោង',
    nameEn: 'Samraong District',
    hasBus: true,
    buses: [
      { busNo: '07', driver: 'លោក សូ សុភី', phone: '097 283 3628', rawPhone: '0972833628' },
      { busNo: '09', driver: 'លោក តុប សាវិន', phone: '010 789 697 / 078 889 926', rawPhone: '010789697' },
      { busNo: '10', driver: 'លោក ច្រុង រ៉ៃ', phone: '066 273 873', rawPhone: '066273873' }
    ]
  },
  treang: {
    key: 'treang',
    nameKh: 'ស្រុកទ្រាំង',
    nameEn: 'Treang District',
    hasBus: true,
    buses: [
      { busNo: '01', driver: 'លោក ឡេង សុខហេង', phone: '081 891 743', rawPhone: '081891743' },
      { busNo: '02', driver: 'លោក តុប សាវិន', phone: '010 789 697 / 078 889 926', rawPhone: '010789697' },
      { busNo: '03', driver: 'លោក ហ៊ួត សារិន', phone: '070 537 616', rawPhone: '070537616' },
      { busNo: '04', driver: 'លោក សាយ សិត', phone: '081 251 617', rawPhone: '081251617' },
      { busNo: '11', driver: 'លោក សូ សុផាត', phone: '096 433 6277', rawPhone: '0964336277' }
    ]
  },
  kaoh_andaet: {
    key: 'kaoh_andaet',
    nameKh: 'ស្រុកកោះអណ្តែត',
    nameEn: 'Kaoh Andaet District',
    hasBus: true,
    buses: [
      { busNo: '05', driver: 'លោក សរ ស៊ីម', phone: '098 328 240', rawPhone: '098328240' },
      { busNo: '06', driver: 'លោក ពេទ នុន', phone: '089 825 3198', rawPhone: '0898253198' }
    ]
  },
  borei_cholsar: {
    key: 'borei_cholsar',
    nameKh: 'ស្រុកបូរីជលសារ',
    nameEn: 'Borei Cholsar District',
    hasBus: true,
    buses: [
      { busNo: '02', driver: 'លោក តុប សាវិន', phone: '010 789 697 / 078 889 926', rawPhone: '010789697' },
      { busNo: '03', driver: 'លោក ហ៊ួត សារិន', phone: '070 537 616', rawPhone: '070537616' }
    ]
  },
  prey_kabbas: {
    key: 'prey_kabbas',
    nameKh: 'ស្រុកព្រៃកប្បាស',
    nameEn: 'Prey Kabbas District',
    hasBus: false,
    buses: []
  },
  kiri_vong: {
    key: 'kiri_vong',
    nameKh: 'ស្រុកគិរីវង់',
    nameEn: 'Kiri Vong District',
    hasBus: false,
    buses: []
  },
  angkor_borei: {
    key: 'angkor_borei',
    nameKh: 'ស្រុកអង្គរបុរី',
    nameEn: 'Angkor Borei District',
    hasBus: false,
    buses: []
  },
  bati: {
    key: 'bati',
    nameKh: 'ស្រុកបាទី',
    nameEn: 'Bati District',
    hasBus: false,
    buses: []
  }
};

const SPS_AI_CONFIG = {
  DEFAULT_GEMINI_KEY: '', // Can be set via Admin modal or localStorage
  GEMINI_MODEL: 'gemini-1.5-flash',
  DEFAULT_TELEGRAM_TOKEN: '', // Set via Admin or localStorage
  DEFAULT_TELEGRAM_CHAT_ID: '', // Set via Admin or localStorage
  DEFAULT_TELEGRAM_HANDLE: 'https://t.me/+Ehnt07tATa0zMDI1',
  SCHOOL_PHONE: '015 838 049 / 015 838 076 / 015 838 047 / 015 838 128 / 015 838 928',
  SCHOOL_EMAIL: 'run.borang@sovannaphumi.edu.kh',
  SCHOOL_FACEBOOK: 'https://www.facebook.com/SPS.Takeo.Campus',
  SCHOOL_MAP: 'https://maps.app.goo.gl/vm9jjVd65UNTYqtK9',
  
  // Official Department Direct Contacts & Telegram Routing Directory
  DEPARTMENTS: [
    {
      id: 'gep',
      nameKh: 'ផ្នែកភាសាអង់គ្លេសទូទៅ (GEP)',
      nameEn: 'General English Program (GEP)',
      phone: '015 838 076',
      rawPhone: '015838076',
      telegramUrl: 'https://t.me/+85515838076'
    },
    {
      id: 'kge_kind_prim',
      nameKh: 'ផ្នែកចំណេះទូទៅខ្មែរ មត្តេយ្យ និងបឋមសិក្សា (KGE Kind & Prim)',
      nameEn: 'Khmer General Education - Kindergarten & Primary (KGE Kind & Prim)',
      phone: '015 838 047',
      rawPhone: '015838047',
      telegramUrl: 'https://t.me/+85515838047'
    },
    {
      id: 'kge_secondary',
      nameKh: 'ផ្នែកចំណេះទូទៅខ្មែរ អនុវិទ្យាល័យ និងវិទ្យាល័យ (KGE Secondary)',
      nameEn: 'Khmer General Education - Secondary & High School (KGE Secondary)',
      phone: '015 838 128',
      rawPhone: '015838128',
      telegramUrl: 'https://t.me/+85515838128'
    },
    {
      id: 'services',
      nameKh: 'ផ្នែកសេវាកម្មសាលាទាំងអស់ & ឡានដឹកសិស្ស (School Bus & Services)',
      nameEn: 'All School Services & Transportation (School Bus & Services)',
      phone: '015 838 928',
      rawPhone: '015838928',
      telegramUrl: 'https://t.me/+85515838928'
    },
    {
      id: 'general',
      nameKh: 'ការិយាល័យរដ្ឋបាលកណ្តាល & ព័ត៌មានទូទៅ (Head Administration)',
      nameEn: 'Head Administration & General Inquiries',
      phone: '015 838 049',
      rawPhone: '015838049',
      telegramUrl: 'https://t.me/+85515838049'
    }
  ],

  SYSTEM_INSTRUCTION: `
You are the official Smart AI Assistant of Sovannaphumi School 25, Takeo Campus (សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ), located in Doun Kaev Town, Takeo Province, Cambodia.
Your mission is to provide warm, polite, highly informative, and accurate answers to parents, students, and educators 24/7 in both Khmer and English.

Key School Knowledge & Details:
1. Campus Identity & Contacts:
- Name: Sovannaphumi School 25, Takeo Campus / សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ
- Location / Google Maps: Doun Kaev Town, Takeo Province (ក្រុងដូនកែវ ខេត្តតាកែវ) -> https://maps.app.goo.gl/vm9jjVd65UNTYqtK9
- Official Phone Directory & Telegram Routing by Department:
  • 🇬🇧 ផ្នែក GEP (General English Program / ភាសាអង់គ្លេសទូទៅ): 015 838 076 (Telegram: https://t.me/+85515838076)
  • 🎨 ផ្នែក KGE មត្តេយ្យ & បឋមសិក្សា (Kindergarten & Primary): 015 838 047 (Telegram: https://t.me/+85515838047)
  • 📚 ផ្នែក KGE អនុវិទ្យាល័យ & វិទ្យាល័យ (Secondary & High School): 015 838 128 (Telegram: https://t.me/+85515838128)
  • 🚌 ផ្នែកសេវាកម្មសាលាទាំងអស់ (School Bus & All Services): 015 838 928 (Telegram: https://t.me/+85515838928)
  • 🏢 រដ្ឋបាលកណ្តាល & ព័ត៌មានទូទៅ (General Inquiries / Administration): 015 838 049 (Telegram: https://t.me/+85515838049)
- School Telegram Channel: https://t.me/+Ehnt07tATa0zMDI1
- Email: run.borang@sovannaphumi.edu.kh
- Official Website: https://sps-takeo.com/
- Facebook Page: https://www.facebook.com/SPS.Takeo.Campus (Sovannaphumi School Takeo Campus)
- Working & Operating Hours:
  • Monday to Friday (ច័ន្ទ ដល់ សុក្រ): 7:00 AM - 6:30 PM (7:00 ព្រឹក – 6:30 ល្ងាច)
  • Saturday (សៅរ៍): 7:00 AM - 11:00 AM (7:00 ព្រឹក – 11:00 ព្រឹក)
  • Sunday (អាទិត្យ): CLOSED (សម្រាក / បិទទ្វារ)
- Study Shifts: Morning (7:00 AM - 11:00 AM) and Afternoon (1:00 PM - 5:00 PM)

2. Academic Programs:
- KGE (Khmer General Education / ចំណេះទូទៅខ្មែរ): Kindergarten to Grade 12 (មត្តេយ្យ ដល់ ថ្នាក់ទី១២) recognized by MoEYS.
- GEP (General English Program / ភាសាអង់គ្លេសទូទៅ): Level 1 to Level 12 (aligned with Cambridge Assessment English).
- Kindergarten / Pre-School (មត្តេយ្យសិក្សា): Play-based learning, cognitive development, physical and moral activities.
- STEM & E-Lab (មន្ទីរពិសោធន៍បច្ចេកវិទ្យា & STEM): 120+ interactive tools, computer lab, modern robotics/coding exposure.

3. Admissions & Tuition:
- Tuition fees are affordable and tailored per grade level and program.
- Scholarship & Early-Bird Discounts: 10% to 30% discounts for early enrollment, sibling enrollments, and academic excellence.
- Required Enrollment Documents: Student birth certificate copy, 3 photos (4x6), family/residence book.

4. Comprehensive School Bus Transportation Across 10 Districts in Takeo (ព័ត៌មានឡានដឹកសិស្សតាមស្រុក):
- Central School Bus Hotline & Telegram: 015 838 928
- 1. ក្រុងដូនកែវ (Doun Kaev):
  • ឡានលេខ 04: លោក សាយ សិត (Tel: 081 251 617)
  • ឡានលេខ 08: លោក សូ សុភី (Tel: 097 283 3628)
  • ឡានលេខ 09: លោក តុប សាវិន (Tel: 010 789 697 / 078 889 926)
  • ឡានលេខ 11: លោក សូ សុផាត (Tel: 096 433 6277)
- 2. ស្រុកត្រាំកក់ (Tram Kak):
  • ឡានលេខ 07: លោក សូ សុភី (Tel: 097 283 3628)
  • ឡានលេខ 10: លោក ច្រុង រ៉ៃ (Tel: 066 273 873)
  • ឡានលេខ 12: លោក អ៊ូច រ៉េនបញ្ញារិទ្ធ (Tel: 067 443 692)
- 3. ស្រុកសំរោង (Samraong):
  • ឡានលេខ 07: លោក សូ សុភី (Tel: 097 283 3628)
  • ឡានលេខ 09: លោក តុប សាវិន (Tel: 010 789 697 / 078 889 926)
  • ឡានលេខ 10: លោក ច្រុង រ៉ៃ (Tel: 066 273 873)
- 4. ស្រុកទ្រាំង (Treang):
  • ឡានលេខ 01: លោក ឡេង សុខហេង (Tel: 081 891 743)
  • ឡានលេខ 02: លោក តុប សាវិន (Tel: 010 789 697 / 078 889 926)
  • ឡានលេខ 03: លោក ហ៊ួត សារិន (Tel: 070 537 616)
  • ឡានលេខ 04: លោក សាយ សិត (Tel: 081 251 617)
  • ឡានលេខ 11: លោក សូ សុផាត (Tel: 096 433 6277)
- 5. ស្រុកកោះអណ្តែត (Kaoh Andaet):
  • ឡានលេខ 05: លោក សរ ស៊ីម (Tel: 098 328 240)
  • ឡានលេខ 06: លោក ពេទ នុន (Tel: 089 825 3198)
- 6. ស្រុកបូរីជលសារ (Borei Cholsar):
  • ឡានលេខ 02: លោក តុប សាវិន (Tel: 010 789 697 / 078 889 926)
  • ឡានលេខ 03: លោក ហ៊ួត សារិន (Tel: 070 537 616)
- 7. ស្រុកព្រៃកប្បាស, 8. ស្រុកគិរីវង់, 9. ស្រុកអង្គរបុរី, 10. ស្រុកបាទី:
  • មិនទាន់មានសេវាឡានដឹកសិស្សផ្ទាល់នៅឡើយទេ (សូមទាក់ទងមកលេខ 015 838 928 ដើម្បីពិនិត្យលទ្ធភាពសម្របសម្រួល)

Response Guidelines:
- Respond in the same language as the user's question (fluent Khmer for Khmer queries, clear English for English queries).
- Be polite, encouraging, concise, and well-structured using markdown formatting, bullet points, and appropriate emojis (🎓, 💰, 🚌, ⏰, 📍, 📞).
- When answering questions about GEP, KGE, Kindergarten, Secondary, School Bus, or Admissions, always mention and provide the specific direct department phone and Telegram contact!
- If the user wants to enroll or request a callback, invite them to submit their name and phone number using the in-chat callback form.
`
};

// Department Contact Routing Matrix Helper
function getDepartmentRouting(programKeyOrName) {
  const str = (programKeyOrName || '').toLowerCase();
  
  // 1. GEP (General English Program) -> 015 838 076
  if (str.includes('gep') || str.includes('english') || str.includes('អង់គ្លេស')) {
    return {
      departmentKh: 'ផ្នែកភាសាអង់គ្លេសទូទៅ (GEP)',
      departmentEn: 'General English Program (GEP)',
      phone: '015 838 076',
      rawPhone: '015838076',
      telegramUrl: 'https://t.me/+85515838076',
      hotlineNameKh: 'ការិយាល័យ GEP',
      hotlineNameEn: 'GEP Office'
    };
  }
  
  // 2. KGE Kindergarten & Primary (មត្តេយ្យ & បឋមសិក្សា) -> 015 838 047
  if (str.includes('មត្តេយ្យ') || str.includes('kindergarten') || str.includes('kind') || str.includes('បឋម') || str.includes('primary') || str.includes('prim')) {
    return {
      departmentKh: 'ផ្នែកចំណេះទូទៅខ្មែរ មត្តេយ្យ និងបឋមសិក្សា (KGE Kind & Prim)',
      departmentEn: 'Khmer General Education - Kindergarten & Primary (KGE Kind & Prim)',
      phone: '015 838 047',
      rawPhone: '015838047',
      telegramUrl: 'https://t.me/+85515838047',
      hotlineNameKh: 'ការិយាល័យ KGE មត្តេយ្យ & បឋម',
      hotlineNameEn: 'KGE Kind & Primary Office'
    };
  }

  // 3. All School Services (School Bus, Canteen, Student Services) -> 015 838 928
  if (str.includes('សេវាកម្ម') || str.includes('ឡាន') || str.includes('bus') || str.includes('service') || str.includes('canteen') || str.includes('សេវា')) {
    return {
      departmentKh: 'ផ្នែកសេវាកម្មសាលាទាំងអស់ & ឡានដឹកសិស្ស (School Bus & Services)',
      departmentEn: 'All School Services (School Bus & Student Services)',
      phone: '015 838 928',
      rawPhone: '015838928',
      telegramUrl: 'https://t.me/+85515838928',
      hotlineNameKh: 'ផ្នែកសេវាកម្មសាលា & ឡានដឹក',
      hotlineNameEn: 'School Services & Bus Office'
    };
  }

  // 4. KGE Secondary & High School (អនុវិទ្យាល័យ & វិទ្យាល័យ / មធ្យមសិក្សា) -> 015 838 128
  if (str.includes('អនុវិទ្យាល័យ') || str.includes('វិទ្យាល័យ') || str.includes('secondary') || str.includes('high') || str.includes('មធ្យម') || str.includes('ថ្នាក់ទី៧') || str.includes('grade 7') || str.includes('kge')) {
    return {
      departmentKh: 'ផ្នែកចំណេះទូទៅខ្មែរ អនុវិទ្យាល័យ និងវិទ្យាល័យ (KGE Secondary)',
      departmentEn: 'Khmer General Education - Secondary & High School (KGE Secondary)',
      phone: '015 838 128',
      rawPhone: '015838128',
      telegramUrl: 'https://t.me/+85515838128',
      hotlineNameKh: 'ការិយាល័យ KGE អនុវិទ្យាល័យ & វិទ្យាល័យ',
      hotlineNameEn: 'KGE Secondary & High School Office'
    };
  }

  // 5. Default / Other / General Administration -> 015 838 049
  return {
    departmentKh: 'ការិយាល័យរដ្ឋបាលកណ្តាល & ព័ត៌មានទូទៅ',
    departmentEn: 'Head Administration & General Consultation',
    phone: '015 838 049',
    rawPhone: '015838049',
    telegramUrl: 'https://t.me/+85515838049',
    hotlineNameKh: 'រដ្ឋបាលកណ្តាល',
    hotlineNameEn: 'Head Administration'
  };
}

let isSPSAssistantOpen = false;
let spsAIChatHistory = [];

function getStoredGeminiKey() {
  return (localStorage.getItem('sps_gemini_api_key') || SPS_AI_CONFIG.DEFAULT_GEMINI_KEY || '').trim();
}

function getStoredTelegramConfig() {
  return {
    token: (localStorage.getItem('sps_telegram_bot_token') || SPS_AI_CONFIG.DEFAULT_TELEGRAM_TOKEN || '').trim(),
    chatId: (localStorage.getItem('sps_telegram_chat_id') || SPS_AI_CONFIG.DEFAULT_TELEGRAM_CHAT_ID || '').trim()
  };
}

window.saveAIConfig = function(geminiKey, telegramToken, telegramChatId) {
  if (geminiKey !== undefined) localStorage.setItem('sps_gemini_api_key', geminiKey.trim());
  if (telegramToken !== undefined) localStorage.setItem('sps_telegram_bot_token', telegramToken.trim());
  if (telegramChatId !== undefined) localStorage.setItem('sps_telegram_chat_id', telegramChatId.trim());
  updateAIBadgeStatus();
  if (typeof showToast === 'function') {
    showToast('បានរក្សាទុក AI & Telegram Config រួចរាល់!', 'success');
  } else {
    alert('បានរក្សាទុក AI & Telegram Config រួចរាល់!');
  }
};

function updateAIBadgeStatus() {
  const statusEl = document.getElementById('sps-ai-status-label');
  const hasGemini = !!getStoredGeminiKey();
  if (statusEl) {
    if (hasGemini) {
      statusEl.innerHTML = '<i class="fa-solid fa-sparkles" style="color: #ffcb02;"></i> Gemini 1.5 AI • Online 24/7';
    } else {
      statusEl.innerHTML = 'Online 24/7 • Khmer &amp; English';
    }
  }
}

window.toggleSPSAssistant = function() {
  const chatbox = document.getElementById('sps-ai-chatbox');
  if (!chatbox) return;

  isSPSAssistantOpen = !isSPSAssistantOpen;
  if (isSPSAssistantOpen) {
    chatbox.style.display = 'flex';
    updateAIBadgeStatus();
    const input = document.getElementById('sps-ai-input');
    if (input) setTimeout(() => input.focus(), 300);
    scrollSPSMessagesToBottom();
  } else {
    chatbox.style.display = 'none';
  }
};

window.clearSPSAssistantChat = function() {
  spsAIChatHistory = [];
  const container = document.getElementById('sps-ai-messages');
  if (container) container.innerHTML = '';
  sendSPSAssistantWelcome();
};

window.handleSPSAssistantChip = function(promptText) {
  const input = document.getElementById('sps-ai-input');
  if (input) {
    input.value = promptText;
  }
  const form = document.getElementById('sps-ai-form');
  if (form) {
    handleSPSAssistantSubmit(new Event('submit'));
  }
};

window.openTelegramDirect = function() {
  const tgHandle = localStorage.getItem('sps_telegram_handle') || SPS_AI_CONFIG.DEFAULT_TELEGRAM_HANDLE;
  if (tgHandle.startsWith('http')) {
    window.open(tgHandle, '_blank');
  } else {
    window.location.href = `tel:015838049`;
  }
};

// ==================== IN-CHAT LEAD / CALLBACK CAPTURE ====================
window.showInChatLeadForm = function(prefillTopic = '') {
  const isKhmer = (currentAppLanguage !== 'en');
  const formHtml = `
    <div class="sps-ai-lead-card">
      <div class="sps-ai-lead-card-header">
        <i class="fa-solid fa-headset"></i>
        <span>${isKhmer ? 'ស្នើសុំការប្រឹក្សា & ទាក់ទងត្រឡប់តាមផ្នែក' : 'Request Department Consultation'}</span>
      </div>
      <p class="sps-ai-lead-card-desc">
        ${isKhmer ? 'សូមបំពេញព័ត៌មានខាងក្រោម។ ប្រព័ន្ធនឹងបញ្ជូនសំណើទៅកាន់បុគ្គលិកផ្នែកទទួលបន្ទុកផ្ទាល់ នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ ដើម្បីទាក់ទងមកលោកអ្នកភ្លាមៗ!' : 'Please submit your details below. Our system will route your request directly to the assigned department team at Sovannaphumi School 25, Takeo Campus.'}
      </p>
      <form id="sps-ai-inchat-lead-form" onsubmit="handleInChatLeadSubmit(event)">
        <div class="sps-ai-lead-field">
          <label>${isKhmer ? 'ឈ្មោះអាណាព្យាបាល / សិស្ស *' : 'Name *'}</label>
          <input type="text" id="sps-lead-name" placeholder="${isKhmer ? 'ឧ. សុខ ពិសី' : 'e.g. John Doe'}" required>
        </div>
        <div class="sps-ai-lead-field">
          <label>${isKhmer ? 'លេខទូរស័ព្ទទំនាក់ទំនង *' : 'Phone Number *'}</label>
          <input type="tel" id="sps-lead-phone" placeholder="015 838 049" required>
        </div>
        <div class="sps-ai-lead-field">
          <label>${isKhmer ? 'ជ្រើសរើសកម្មវិធី / ផ្នែកទទួលបន្ទុក *' : 'Assigned Program / Department *'}</label>
          <select id="sps-lead-program">
            <option value="GEP (ភាសាអង់គ្លេសទូទៅ)">🇬🇧 កម្មវិធី GEP (ភាសាអង់គ្លេស) ➡️ Telegram: 015 838 076</option>
            <option value="KGE Kind & Prim (មត្តេយ្យ & បឋមសិក្សា)">🎨 KGE មត្តេយ្យ &amp; បឋមសិក្សា ➡️ Telegram: 015 838 047</option>
            <option value="KGE Secondary (អនុវិទ្យាល័យ & វិទ្យាល័យ)">📚 KGE អនុវិទ្យាល័យ &amp; វិទ្យាល័យ ➡️ Telegram: 015 838 128</option>
            <option value="School Services (សេវាកម្មសាលា & ឡានដឹក)">🚌 សេវាកម្មសាលា &amp; ឡានដឹកសិស្ស ➡️ Telegram: 015 838 928</option>
            <option value="Other / ព័ត៌មានទូទៅ">🏢 ព័ត៌មានទូទៅ &amp; រដ្ឋបាលកណ្តាល ➡️ Telegram: 015 838 049</option>
          </select>
        </div>
        <div class="sps-ai-lead-field">
          <label>${isKhmer ? 'សំណួរ ឬចំណាំបន្ថែម' : 'Inquiry / Notes'}</label>
          <input type="text" id="sps-lead-note" value="${prefillTopic}" placeholder="${isKhmer ? 'ចង់ដឹងតម្លៃសិក្សា, ម៉ោងរៀន, ខ្សែរត់ឡាន...' : 'Questions on tuition, schedule, bus...'}">
        </div>
        <div class="sps-ai-lead-actions">
          <button type="submit" class="sps-ai-lead-submit-btn" id="sps-lead-submit-btn">
            <i class="fa-solid fa-paper-plane"></i> ${isKhmer ? 'ផ្ញើសំណើទៅផ្នែកជំនាញ' : 'Submit to Department'}
          </button>
        </div>
      </form>
    </div>
  `;

  appendSPSMessage('bot', formHtml, true);
};

window.handleInChatLeadSubmit = async function(event) {
  if (event) event.preventDefault();
  const nameInput = document.getElementById('sps-lead-name');
  const phoneInput = document.getElementById('sps-lead-phone');
  const progSelect = document.getElementById('sps-lead-program');
  const noteInput = document.getElementById('sps-lead-note');
  const submitBtn = document.getElementById('sps-lead-submit-btn');

  if (!nameInput || !phoneInput) return;
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const program = progSelect ? progSelect.value : 'Other / ព័ត៌មានទូទៅ';
  const note = noteInput ? noteInput.value.trim() : '';

  if (!name || !phone) return;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> កំពុងបញ្ជូន...';
  }

  const dept = getDepartmentRouting(program);

  // 1. Dispatch Telegram Alert with Department Matrix
  const leadData = {
    name,
    phone,
    program,
    department: dept.departmentKh,
    departmentContact: dept.phone,
    departmentTelegram: dept.telegramUrl,
    note,
    timestamp: new Date().toLocaleString('km-KH', { timeZone: 'Asia/Phnom_Penh' }),
    source: 'SPS Takeo Web AI Assistant'
  };

  await sendTelegramLeadAlert(leadData);

  // 2. Save locally for Admin history
  saveLeadLocally(leadData);

  // 3. Response in Chat with Instant Clickable Telegram & Phone Buttons
  const isKhmer = (currentAppLanguage !== 'en');
  const successText = isKhmer
    ? `✅ **សូមអរគុណលោក ${name}!**\n\nសំណើប្រឹក្សាអំពី **${program}** ត្រូវបានបញ្ជូនទៅកាន់ **${dept.departmentKh}** នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ រួចរាល់ហើយ。\n\n📞 បុគ្គលិកផ្នែកទទួលបន្ទុកនឹងទាក់ទងមកកាន់លេខ **${phone}** ក្នុងពេលឆាប់ៗនេះ។\n\nលោកអ្នកក៏អាចទាក់ទងទៅកាន់ផ្នែកនេះផ្ទាល់បានភ្លាមៗតាម៖\n• 💬 **Telegram ផ្ទាល់:** [ចុចទីនេះដើម្បី Chat Telegram (${dept.phone})](${dept.telegramUrl})\n• ☎️ **លេខទូរស័ព្ទផ្ទាល់:** **${dept.phone}**\n• 🏢 **រដ្ឋបាលកណ្តាល:** **015 838 049**`
    : `✅ **Thank you, ${name}!**\n\nYour consultation request for **${program}** has been routed to **${dept.departmentEn}** at Sovannaphumi School 25, Takeo Campus.\n\n📞 Our department coordinator will reach out to **${phone}** shortly.\n\nYou can also contact this department directly right now via:\n• 💬 **Direct Telegram:** [Click here to Chat on Telegram (${dept.phone})](${dept.telegramUrl})\n• ☎️ **Direct Hotline:** **${dept.phone}**\n• 🏢 **Head Administration:** **+855 15 838 049**`;

  appendSPSMessage('bot', successText);
};

// ==================== TELEGRAM BOT DISPATCHER ====================
async function sendTelegramLeadAlert(lead) {
  const tg = getStoredTelegramConfig();
  if (!tg.token || !tg.chatId) {
    console.log('[Telegram] Bot token or Chat ID not configured in admin settings. Lead saved locally.');
    return;
  }

  const dept = getDepartmentRouting(lead.program);

  const text = 
`🎓 *Sovannaphumi School 25, Takeo Campus*
📢 *New Consultation & Department Lead Alert*

🏢 *ផ្នែកទទួលបន្ទុក (Assigned Dept):* ${dept.departmentKh}
👤 *ឈ្មោះ (Name):* ${lead.name}
📞 *ទូរស័ព្ទ (Phone):* \`${lead.phone}\`
🎯 *កម្មវិធី (Program):* ${lead.program}
📱 *Telegram ផ្នែកផ្ទាល់:* [${dept.phone}](${dept.telegramUrl})
📝 *សំណួរ/ចំណាំ (Note):* ${lead.note || 'None'}
⏰ *កាលបរិច្ឆេទ (Time):* ${lead.timestamp}
🌐 *Source:* Web AI Assistant (sps-takeo.com)`;

  try {
    const url = `https://api.telegram.org/bot${encodeURIComponent(tg.token)}/sendMessage`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: tg.chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });
    const data = await resp.json();
    console.log('[Telegram Alert Response]', data);
  } catch (err) {
    console.warn('[Telegram Alert Failed]', err);
  }
}

function saveLeadLocally(lead) {
  try {
    const leads = JSON.parse(localStorage.getItem('sps_ai_leads') || '[]');
    leads.unshift(lead);
    if (leads.length > 100) leads.pop();
    localStorage.setItem('sps_ai_leads', JSON.stringify(leads));
  } catch (e) {
    console.error('Error saving lead locally', e);
  }
}

// ==================== GEMINI 1.5 FLASH GENERATIVE AI ====================
async function fetchGeminiAIResponse(userQuery, history) {
  const apiKey = getStoredGeminiKey();
  if (!apiKey) {
    throw new Error('NO_GEMINI_KEY');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${SPS_AI_CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;

  // Format multi-turn conversation history for Gemini API
  const contents = [];
  
  // Include up to last 6 chat history turns for context
  const recentHistory = history.slice(-6);
  for (const item of recentHistory) {
    contents.push({
      role: item.role === 'user' ? 'user' : 'model',
      parts: [{ text: item.content }]
    });
  }

  // Add the current user query if not already in recentHistory
  contents.push({
    role: 'user',
    parts: [{ text: userQuery }]
  });

  const payload = {
    system_instruction: {
      parts: [{ text: SPS_AI_CONFIG.SYSTEM_INSTRUCTION }]
    },
    contents: contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error ${response.status}: ${errText}`);
  }

  const data = await response.json();
  if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
    return data.candidates[0].content.parts.map(p => p.text).join('\n').trim();
  } else {
    throw new Error('Invalid Gemini API response structure');
  }
}

// ==================== INTERACTIVE TAKEO 10-DISTRICT BUS RENDERERS ====================
function renderSPSAssistantBusDistrictSelector() {
  const isKhmer = (currentAppLanguage !== 'en');
  const districtKeys = Object.keys(TAKEO_DISTRICT_BUS_DATA);

  let chipsHtml = '';
  for (const key of districtKeys) {
    const d = TAKEO_DISTRICT_BUS_DATA[key];
    const busCount = d.hasBus ? d.buses.length : 0;
    const countTag = isKhmer 
      ? (busCount > 0 ? `${busCount} ឡាន` : 'មិនទាន់មាន')
      : (busCount > 0 ? `${busCount} Buses` : 'No Bus');
    
    chipsHtml += `
      <button type="button" class="sps-ai-district-btn" onclick="showSPSAssistantBusByDistrict('${d.key}')">
        <span>📍 ${isKhmer ? d.nameKh : d.nameEn}</span>
        <span class="district-count-tag">${countTag}</span>
      </button>
    `;
  }

  return `
    <div class="sps-ai-bus-card">
      <div class="sps-ai-bus-header">
        <div class="sps-ai-bus-title">
          <i class="fa-solid fa-bus-simple"></i>
          <span>${isKhmer ? 'សេវាឡានដឹកសិស្សតាមស្រុក (ខេត្តតាកែវ)' : 'Takeo Province School Bus by District'}</span>
        </div>
        <span class="sps-ai-bus-status-badge">
          <i class="fa-solid fa-circle-check"></i> 10 ស្រុក/ក្រុង
        </span>
      </div>
      <p class="sps-ai-bus-intro">
        ${isKhmer 
          ? 'សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ ផ្តល់ជូនសេវាឡានដឹកសិស្សប្រកបដោយផាសុកភាព និងសុវត្ថិភាពខ្ពស់។ <strong>សូមជ្រើសរើសស្រុក/ក្រុង ខាងក្រោមដើម្បីពិនិត្យលេខឡាន ឈ្មោះ និងលេខទូរស័ព្ទអ្នកបើកបរផ្ទាល់៖</strong>' 
          : 'Sovannaphumi School 25, Takeo Campus provides safe and reliable school bus transportation. <strong>Please select a district below to view available bus routes, bus numbers, and driver contact details:</strong>'}
      </p>
      
      <div class="sps-ai-bus-prompt-label">
        <i class="fa-solid fa-map-location-dot"></i>
        <span>${isKhmer ? 'ជ្រើសរើសស្រុកដែលលោកអ្នករស់នៅ៖' : 'Select your district:'}</span>
      </div>

      <div class="sps-ai-bus-district-chips">
        ${chipsHtml}
        <button type="button" class="sps-ai-district-btn btn-all" onclick="showSPSAssistantBusByDistrict('all')">
          <span>🚌 ${isKhmer ? 'បង្ហាញព័ត៌មានឡានគ្រប់ស្រុកទាំងអស់ (View All)' : 'Show All Takeo Districts Buses'}</span>
        </button>
      </div>

      <div class="sps-ai-bus-footer-bar">
        <span>☎️ ${isKhmer ? 'ផ្នែកសេវាកម្មសាលា & ឡានដឹក៖' : 'Central School Bus Office:'}</span>
        <a href="tel:015838928" class="sps-ai-bus-hotline-btn">
          <i class="fa-solid fa-phone"></i> 015 838 928
        </a>
      </div>
    </div>
  `;
}

function renderSingleDistrictBusBlock(dData, isKhmer) {
  if (!dData) return '';

  let busListHtml = '';
  if (dData.hasBus && dData.buses && dData.buses.length > 0) {
    busListHtml = `
      <div class="sps-ai-bus-list">
        ${dData.buses.map(b => {
          const rawNum = b.rawPhone || b.phone.replace(/[^0-9]/g, '');
          const tgNum = rawNum.startsWith('0') ? '855' + rawNum.substring(1) : ('855' + rawNum);
          return `
            <div class="sps-ai-bus-item">
              <div class="sps-ai-bus-item-top">
                <span class="sps-ai-bus-badge">
                  <i class="fa-solid fa-van-shuttle"></i> ឡានលេខ ${b.busNo}
                </span>
                <span class="sps-ai-bus-driver-name">
                  <i class="fa-solid fa-id-card"></i> ${b.driver}
                </span>
              </div>
              <div class="sps-ai-bus-actions">
                <a href="tel:${rawNum}" class="sps-ai-bus-call-btn" title="Call Driver">
                  <i class="fa-solid fa-phone"></i> <span>${b.phone}</span>
                </a>
                <a href="https://t.me/+${tgNum}" target="_blank" rel="noopener noreferrer" class="sps-ai-bus-tg-btn" title="Telegram">
                  <i class="fa-brands fa-telegram"></i> <span>Telegram</span>
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    busListHtml = `
      <div class="sps-ai-bus-no-bus">
        <div style="font-size: 1.3rem; margin-bottom: 4px;">ℹ️</div>
        <div><strong>${isKhmer ? `បច្ចុប្បន្ន ${dData.nameKh} មិនទាន់មានសេវាឡានដឹកសិស្សផ្ទាល់នៅឡើយទេ` : `Direct school bus is not yet available in ${dData.nameEn}.`}</strong></div>
        <div style="font-size: 0.78rem; margin-top: 6px; opacity: 0.9;">
          ${isKhmer 
            ? 'សូមទាក់ទងមកកាន់ការិយាល័យសេវាកម្មសាលា ដើម្បីពិនិត្យលទ្ធភាពសម្របសម្រួលខ្សែរត់បន្ថែម ឬព័ត៌មានឡានជិតខាង។' 
            : 'Please contact our central school transportation hotline for coordination or neighboring routes.'}
        </div>
      </div>
    `;
  }

  return `
    <div style="margin-bottom: 12px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 10px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <h4 style="margin: 0; font-size: 0.95rem; color: #0071ba; font-weight: 700; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-location-dot" style="color: #bd1e2d;"></i>
          <span>${isKhmer ? dData.nameKh : dData.nameEn}</span>
        </h4>
        <span style="font-size: 0.76rem; font-weight: 700; color: #64748b;">
          ${dData.hasBus ? `${dData.buses.length} ឡាន` : '0 ឡាន'}
        </span>
      </div>
      ${busListHtml}
    </div>
  `;
}

function renderSPSAssistantBusByDistrictHtml(districtKey) {
  const isKhmer = (currentAppLanguage !== 'en');

  if (districtKey === 'all') {
    const blocks = Object.keys(TAKEO_DISTRICT_BUS_DATA)
      .map(k => renderSingleDistrictBusBlock(TAKEO_DISTRICT_BUS_DATA[k], isKhmer))
      .join('');

    return `
      <div class="sps-ai-bus-card">
        <div class="sps-ai-bus-header">
          <div class="sps-ai-bus-title">
            <i class="fa-solid fa-bus"></i>
            <span>${isKhmer ? 'បញ្ជីឡានដឹកសិស្សគ្រប់ស្រុកក្នុងខេត្តតាកែវ' : 'All Districts Bus Routes (Takeo)'}</span>
          </div>
          <button type="button" class="sps-ai-bus-call-btn" style="background:#f1f5f9; color:#0f172a; border-color:#cbd5e1;" onclick="showSPSAssistantBusDistricts()">
            <i class="fa-solid fa-list-check"></i> ${isKhmer ? 'ប្តូរស្រុក' : 'Districts'}
          </button>
        </div>
        <div style="max-height: 380px; overflow-y: auto; padding-right: 4px; margin-top: 8px;">
          ${blocks}
        </div>
        <div class="sps-ai-bus-footer-bar">
          <button type="button" class="sps-ai-bus-call-btn" onclick="showSPSAssistantBusDistricts()" style="background:#0071ba; color:#fff; border:none;">
            <i class="fa-solid fa-arrow-left"></i> ${isKhmer ? 'ត្រឡប់ទៅជ្រើសរើសស្រុកវិញ' : 'Back to District Selector'}
          </button>
          <a href="tel:015838928" class="sps-ai-bus-hotline-btn">
            <i class="fa-solid fa-phone"></i> 015 838 928
          </a>
        </div>
      </div>
    `;
  }

  const dData = TAKEO_DISTRICT_BUS_DATA[districtKey];
  if (!dData) return renderSPSAssistantBusDistrictSelector();

  const districtContent = renderSingleDistrictBusBlock(dData, isKhmer);

  return `
    <div class="sps-ai-bus-card">
      <div class="sps-ai-bus-header">
        <div class="sps-ai-bus-title">
          <i class="fa-solid fa-bus"></i>
          <span>${isKhmer ? `សេវាឡានដឹកសិស្ស៖ ${dData.nameKh}` : `School Bus: ${dData.nameEn}`}</span>
        </div>
        <span class="sps-ai-bus-status-badge">
          ${dData.hasBus ? `✅ ${dData.buses.length} ឡាន` : '⚠️ មិនទាន់មានឡាន'}
        </span>
      </div>

      <div style="margin-top: 8px;">
        ${districtContent}
      </div>

      <div class="sps-ai-bus-footer-bar">
        <button type="button" class="sps-ai-bus-call-btn" onclick="showSPSAssistantBusDistricts()" style="background:#f1f5f9; color:#0f172a; border-color:#cbd5e1;">
          <i class="fa-solid fa-arrow-left"></i> ${isKhmer ? 'ជ្រើសរើសស្រុកផ្សេងទៀត' : 'Select Another District'}
        </button>
        <a href="tel:015838928" class="sps-ai-bus-hotline-btn">
          <i class="fa-solid fa-phone"></i> 015 838 928
        </a>
      </div>
    </div>
  `;
}

window.showSPSAssistantBusDistricts = function() {
  const html = renderSPSAssistantBusDistrictSelector();
  appendSPSMessage('bot', html, true);
};

window.showSPSAssistantBusByDistrict = function(districtKey) {
  const html = renderSPSAssistantBusByDistrictHtml(districtKey);
  appendSPSMessage('bot', html, true);
};

// ==================== ASSISTANT SUBMIT & CHAT HANDLER ====================
window.handleSPSAssistantSubmit = async function(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('sps-ai-input');
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  input.value = '';
  appendSPSMessage('user', query);
  spsAIChatHistory.push({ role: 'user', content: query });

  const qLower = query.toLowerCase();

  // Check if query is School Bus or Takeo District related
  const isBusRelated = qLower.includes('ឡាន') || qLower.includes('bus') || qLower.includes('ដឹក') || qLower.includes('van') || qLower.includes('សេវាដឹក') || qLower.includes('សេវាកម្មឡាន') || qLower.includes('school bus');

  let matchedDistrictKey = null;
  if (qLower.includes('ដូនកែវ') || qLower.includes('doun kaev')) matchedDistrictKey = 'doun_kaev';
  else if (qLower.includes('ត្រាំកក់') || qLower.includes('tram kak')) matchedDistrictKey = 'tram_kak';
  else if (qLower.includes('សំរោង') || qLower.includes('samraong')) matchedDistrictKey = 'samraong';
  else if (qLower.includes('ទ្រាំង') || qLower.includes('treang')) matchedDistrictKey = 'treang';
  else if (qLower.includes('កោះអណ្តែត') || qLower.includes('kaoh andaet') || qLower.includes('koh andaet')) matchedDistrictKey = 'kaoh_andaet';
  else if (qLower.includes('បូរីជលសារ') || qLower.includes('borei cholsar')) matchedDistrictKey = 'borei_cholsar';
  else if (qLower.includes('ព្រៃកប្បាស') || qLower.includes('prey kabbas')) matchedDistrictKey = 'prey_kabbas';
  else if (qLower.includes('គិរីវង់') || qLower.includes('kiri vong')) matchedDistrictKey = 'kiri_vong';
  else if (qLower.includes('អង្គរបុរី') || qLower.includes('angkor borei')) matchedDistrictKey = 'angkor_borei';
  else if (qLower.includes('បាទី') || qLower.includes('bati')) matchedDistrictKey = 'bati';

  if (isBusRelated || (matchedDistrictKey && (qLower.includes('ស្រុក') || qLower.includes('ក្រុង') || qLower.includes('district') || isBusRelated))) {
    if (matchedDistrictKey) {
      const cardHtml = renderSPSAssistantBusByDistrictHtml(matchedDistrictKey);
      appendSPSMessage('bot', cardHtml, true);
      spsAIChatHistory.push({ role: 'bot', content: `[Displayed Takeo Bus Routes for District: ${matchedDistrictKey}]` });
    } else {
      const cardHtml = renderSPSAssistantBusDistrictSelector();
      appendSPSMessage('bot', cardHtml, true);
      spsAIChatHistory.push({ role: 'bot', content: '[Displayed Takeo 10-District School Bus Route Selector]' });
    }
    return;
  }

  // Show Typing indicator
  showSPSTyping();

  // Try Gemini 1.5 Flash first; if key missing or request fails, gracefully fallback to local knowledge engine
  try {
    const geminiKey = getStoredGeminiKey();
    if (geminiKey) {
      const generativeResponse = await fetchGeminiAIResponse(query, spsAIChatHistory);
      hideSPSTyping();
      appendSPSMessage('bot', generativeResponse);
      spsAIChatHistory.push({ role: 'model', content: generativeResponse });
      return;
    }
  } catch (err) {
    console.warn('[SPS AI] Generative API offline or unconfigured. Falling back to local knowledge engine:', err.message || err);
  }

  // Graceful Local Fallback
  setTimeout(() => {
    const responseText = generateSPSAIResponseLocal(query);
    hideSPSTyping();
    appendSPSMessage('bot', responseText);
    spsAIChatHistory.push({ role: 'bot', content: responseText });
  }, 300 + Math.random() * 150);
};

function sendSPSAssistantWelcome() {
  const isKhmer = (currentAppLanguage !== 'en');
  const welcomeText = isKhmer
    ? "👋 **សួស្តី! ខ្ញុំជាជំនួយការឆ្លាតវៃ (AI Assistant) នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ**。\n\nខ្ញុំត្រៀមឆ្លើយរាល់ចម្ងល់របស់អ្នក ២៤/៧ អំពី៖\n• 🎓 **កម្មវិធីសិក្សា (GEP & KGE)**\n• 💰 **តម្លៃសិក្សា & ការចុះឈ្មោះ**\n• 🚌 **សេវាឡានដឹកសិស្សតាមស្រុកទាំង ១០ (School Bus)**\n• ⏰ **ម៉ោងសិក្សា & ទីតាំង**\n\nសូមជ្រើសរើស **សំណួររហ័ស** ខាងក្រោម ឬវាយសំណួររបស់អ្នកបានភ្លាមៗ!"
    : "👋 **Hello! I am the Smart AI Assistant of Sovannaphumi School 25, Takeo Campus**.\n\nI am here 24/7 to answer your questions about:\n• 🎓 **Curriculum (GEP & KGE)**\n• 💰 **Tuition & Admissions**\n• 🚌 **School Bus across 10 Districts**\n• ⏰ **Class Schedule & Campus Location**\n\nFeel free to tap a quick suggestion chip below or type your question!";

  appendSPSMessage('bot', welcomeText);
}

function appendSPSMessage(role, text, isRawHtml = false) {
  const container = document.getElementById('sps-ai-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `sps-ai-msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'sps-ai-msg-avatar';
  avatar.innerHTML = role === 'user' 
    ? '<i class="fa-solid fa-user"></i>' 
    : '<img src="https://lh3.googleusercontent.com/d/1PoR7-o5Ea4QstFQ2QLcw0WHuV6dKA480" alt="SPS" class="sps-ai-avatar-img">';

  const bubble = document.createElement('div');
  bubble.className = 'sps-ai-bubble';
  if (isRawHtml || (typeof text === 'string' && text.trim().startsWith('<div'))) {
    bubble.innerHTML = text;
  } else {
    bubble.innerHTML = formatSPSText(text);
  }

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  container.appendChild(msgDiv);

  scrollSPSMessagesToBottom();
}

function showSPSTyping() {
  const container = document.getElementById('sps-ai-messages');
  if (!container) return;
  if (document.getElementById('sps-ai-typing-indicator')) return;

  const typingDiv = document.createElement('div');
  typingDiv.id = 'sps-ai-typing-indicator';
  typingDiv.className = 'sps-ai-msg bot';
  typingDiv.innerHTML = `
    <div class="sps-ai-msg-avatar"><img src="https://lh3.googleusercontent.com/d/1PoR7-o5Ea4QstFQ2QLcw0WHuV6dKA480" alt="SPS" class="sps-ai-avatar-img"></div>
    <div class="sps-ai-bubble sps-ai-typing">
      <span class="sps-ai-typing-dot"></span>
      <span class="sps-ai-typing-dot"></span>
      <span class="sps-ai-typing-dot"></span>
    </div>
  `;
  container.appendChild(typingDiv);
  scrollSPSMessagesToBottom();
}

function hideSPSTyping() {
  const el = document.getElementById('sps-ai-typing-indicator');
  if (el) el.remove();
}

function scrollSPSMessagesToBottom() {
  const container = document.getElementById('sps-ai-messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function formatSPSText(text) {
  if (!text) return '';
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/• (.*?)(<br>|<\/p>|$)/g, '<li>$1</li>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #0071ba; text-decoration: underline;">$1</a>');

  if (html.includes('<li>')) {
    html = html.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
  }
  return `<p>${html}</p>`;
}

// Local Fallback Knowledge Engine with Department Routing
function generateSPSAIResponseLocal(rawQuery) {
  const q = rawQuery.toLowerCase().trim();
  const isKh = /[\u1780-\u17FF]/.test(rawQuery) || currentAppLanguage !== 'en';

  // 1. Tuition, Fee, Price, Cost, Discount, Promotion
  if (q.includes('តម្លៃ') || q.includes('បង់ថ្លៃ') || q.includes('លុយ') || q.includes('ចុះឈ្មោះ') || q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('tuition') || q.includes('discount') || q.includes('promotion') || q.includes('scholarship')) {
    if (isKh) {
      return "💰 **ព័ត៌មានតម្លៃសិក្សា & ការចុះឈ្មោះ (Admissions & Tuition)**\n\n• **តម្លៃសិក្សា:** សមរម្យបំផុត ស្របតាមកម្រិតសិក្សា (មត្តេយ្យ KGE, បឋម-មធ្យមសិក្សា, ភាសាអង់គ្លេស GEP)\n• **អាហារូបករណ៍ & ការបញ្ចុះតម្លៃ:** មានការបញ្ចុះតម្លៃពិសេស **១០% ដល់ ៣០%** សម្រាប់សិស្សចុះឈ្មោះមុនកាលកំណត់ ឬបងប្អូនបង្កើតរៀនជាមួយគ្នា\n• **ឯកសារចុះឈ្មោះ:**\n  - សំបុត្រកំណើតសិស្ស (ថតចម្លង)\n  - រូបថត 4x6 (ចំនួន ៣ សន្លឹក)\n  - សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ\n\n📞 **ទំនាក់ទំនងចុះឈ្មោះតាមផ្នែកផ្ទាល់ (Direct Department Contacts):**\n• 🇬🇧 **ផ្នែក GEP (ភាសាអង់គ្លេស):** [015 838 076](https://t.me/+85515838076) (Tel: **015 838 076**)\n• 🎨 **ផ្នែក KGE (មត្តេយ្យ & បឋម):** [015 838 047](https://t.me/+85515838047) (Tel: **015 838 047**)\n• 📚 **ផ្នែក KGE (អនុវិទ្យាល័យ & វិទ្យាល័យ):** [015 838 128](https://t.me/+85515838128) (Tel: **015 838 128**)\n• 🏢 **រដ្ឋបាលកណ្តាល:** [015 838 049](https://t.me/+85515838049) (Tel: **015 838 049**)";
    } else {
      return "💰 **Tuition Fees & Admission Details (Sovannaphumi School 25, Takeo Campus)**\n\n• **Affordable Tuition:** Structured per program (Kindergarten, Khmer K-12, General English GEP).\n• **Discounts & Promotions:** **10% to 30% discount** available for early registration and sibling enrollment.\n• **Required Documents:**\n  - Copy of Student's Birth Certificate\n  - 3 Photos (4x6 cm)\n  - Family Book / Residence Book\n\n📞 **Department Direct Admissions Contacts:**\n• 🇬🇧 **GEP English Program:** [015 838 076](https://t.me/+85515838076) (Hotline: **+855 15 838 076**)\n• 🎨 **KGE Kindergarten & Primary:** [015 838 047](https://t.me/+85515838047) (Hotline: **+855 15 838 047**)\n• 📚 **KGE Secondary & High School:** [015 838 128](https://t.me/+85515838128) (Hotline: **+855 15 838 128**)\n• 🏢 **Head Administration:** [015 838 049](https://t.me/+85515838049) (Hotline: **+855 15 838 049**)";
    }
  }

  // 2. Curriculum, GEP, KGE, Kindergarten, English, STEM
  if (q.includes('កម្មវិធី') || q.includes('gep') || q.includes('kge') || q.includes('មត្តេយ្យ') || q.includes('អង់គ្លេស') || q.includes('ថ្នាក់') || q.includes('curriculum') || q.includes('program') || q.includes('kindergarten') || q.includes('english') || q.includes('stem') || q.includes('level')) {
    if (isKh) {
      return "🎓 **កម្មវិធីសិក្សាស្តង់ដារគុណភាពនៅ សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ**\n\n1. **GEP (General English Program Level 1-12):** កម្មវិធីភាសាអង់គ្លេសទូទៅស្តង់ដារអន្តរជាតិ (Cambridge) បង្កើនជំនាញ Speaking, Listening, Reading, Writing ជាមួយគ្រូជំនាញ ➡️ 📱 Telegram/Tel: [015 838 076](https://t.me/+85515838076)\n2. **KGE មត្តេយ្យ & បឋមសិក្សា (Kind & Primary):** មូលដ្ឋានគ្រឹះរឹងមាំ បណ្តុះបណ្តាលភាពវៃឆ្លាត ភាសាខ្មែរ និងការលេងបែបអប់រំ ➡️ 📱 Telegram/Tel: [015 838 047](https://t.me/+85515838047)\n3. **KGE អនុវិទ្យាល័យ & វិទ្យាល័យ (Secondary & High School ថ្នាក់ទី៧ ដល់ទី១២):** បង្រៀនតាមកម្មវិធីគោល MoEYS ពង្រឹងគណិត-វិទ្យាសាស្ត្រ និងត្រៀមប្រឡងសញ្ញាបត្រ ➡️ 📱 Telegram/Tel: [015 838 128](https://t.me/+85515838128)\n4. **E-Lab & STEM Hub:** បន្ទប់កុំព្យូទ័រ និងឧបករណ៍បច្ចេកវិទ្យា AI ទំនើបៗសម្រាប់សិស្ស";
    } else {
      return "🎓 **Academic Programs at Sovannaphumi School 25, Takeo Campus**\n\n1. **GEP (General English Program Levels 1-12):** International Cambridge-aligned English curriculum developing Speaking, Listening, Reading, and Writing ➡️ 📱 Telegram/Tel: [015 838 076](https://t.me/+85515838076)\n2. **KGE Kindergarten & Primary:** Strong foundations in early childhood and primary education ➡️ 📱 Telegram/Tel: [015 838 047](https://t.me/+85515838047)\n3. **KGE Secondary & High School (Grades 7-12):** Standard national curriculum recognized by MoEYS, focusing on Math, Sciences, and National Exam Prep ➡️ 📱 Telegram/Tel: [015 838 128](https://t.me/+85515838128)\n4. **E-Lab & STEM Hub:** Modern computer labs and 120+ interactive digital learning tools.";
    }
  }

  // 3. School Bus & Transportation & District routes
  if (q.includes('ឡាន') || q.includes('ដឹក') || q.includes('សេវា') || q.includes('ធ្វើដំណើរ') || q.includes('bus') || q.includes('van') || q.includes('transport') || q.includes('route') || q.includes('canteen') || q.includes('service')) {
    if (q.includes('ដូនកែវ') || q.includes('doun kaev')) return renderSPSAssistantBusByDistrictHtml('doun_kaev');
    if (q.includes('ត្រាំកក់') || q.includes('tram kak')) return renderSPSAssistantBusByDistrictHtml('tram_kak');
    if (q.includes('សំរោង') || q.includes('samraong')) return renderSPSAssistantBusByDistrictHtml('samraong');
    if (q.includes('ទ្រាំង') || q.includes('treang')) return renderSPSAssistantBusByDistrictHtml('treang');
    if (q.includes('កោះអណ្តែត') || q.includes('kaoh andaet')) return renderSPSAssistantBusByDistrictHtml('kaoh_andaet');
    if (q.includes('បូរីជលសារ') || q.includes('borei cholsar')) return renderSPSAssistantBusByDistrictHtml('borei_cholsar');
    if (q.includes('ព្រៃកប្បាស') || q.includes('prey kabbas')) return renderSPSAssistantBusByDistrictHtml('prey_kabbas');
    if (q.includes('គិរីវង់') || q.includes('kiri vong')) return renderSPSAssistantBusByDistrictHtml('kiri_vong');
    if (q.includes('អង្គរបុរី') || q.includes('angkor borei')) return renderSPSAssistantBusByDistrictHtml('angkor_borei');
    if (q.includes('បាទី') || q.includes('bati')) return renderSPSAssistantBusByDistrictHtml('bati');
    return renderSPSAssistantBusDistrictSelector();
  }

  // 4. Hours, Time, Shift, Open, Schedule
  if (q.includes('ម៉ោង') || q.includes('ពេល') || q.includes('កាលវិភាគ') || q.includes('ចូលរៀន') || q.includes('time') || q.includes('hour') || q.includes('shift') || q.includes('schedule') || q.includes('open')) {
    if (isKh) {
      return "⏰ **ម៉ោងធ្វើការ & ម៉ោងសិក្សា (Working Hours & Schedule)**\n\n• **ច័ន្ទ ដល់ សុក្រ (Mon–Fri):** 7:00 ព្រឹក – 6:30 ល្ងាច (7:00 AM – 6:30 PM)\n• **ថ្ងៃសៅរ៍ (Sat):** 7:00 ព្រឹក – 11:00 ព្រឹក (7:00 AM – 11:00 AM)\n• **ថ្ងៃអាទិត្យ (Sun):** សម្រាក / បិទទ្វារ (CLOSED)\n\n• **វេនសិក្សា (Study Shifts):**\n  - វេនព្រឹក: 7:00 ព្រឹក – 11:00 ព្រឹក\n  - វេនរសៀល: 1:00 រសៀល – 5:00 ល្ងាច";
    } else {
      return "⏰ **School Working Hours & Study Shifts (Sovannaphumi School 25, Takeo Campus)**\n\n• **Monday – Friday:** 7:00 AM – 6:30 PM\n• **Saturday:** 7:00 AM – 11:00 AM\n• **Sunday:** CLOSED\n\n• **Study Shifts:**\n  - Morning Shift: 7:00 AM – 11:00 AM\n  - Afternoon Shift: 1:00 PM – 5:00 PM";
    }
  }

  // 5. Location, Address, Phone, Facebook, Contact Directory
  if (q.includes('ទីតាំង') || q.includes('កន្លែង') || q.includes('ទូរស័ព្ទ') || q.includes('លេខ') || q.includes('ហ្វេសប៊ុក') || q.includes('ផែនទី') || q.includes('អ៊ីមែល') || q.includes('contact') || q.includes('location') || q.includes('phone') || q.includes('address') || q.includes('map') || q.includes('where') || q.includes('facebook') || q.includes('email') || q.includes('telegram')) {
    if (isKh) {
      return "📍 **ទីតាំង & បញ្ជីទំនាក់ទំនងតាមផ្នែកផ្លូវការ (Sovannaphumi School 25, Takeo Campus)**\n\n• **អាសយដ្ឋាន:** ក្រុងដូនកែវ ខេត្តតាកែវ\n• **🗺️ ផែនទី Google Maps:** [ចុចមើលទីតាំងលើ Google Maps](https://maps.app.goo.gl/vm9jjVd65UNTYqtK9)\n\n☎️ **លេខទូរស័ព្ទ & Telegram ផ្ទាល់តាមផ្នែកនីមួយៗ:**\n• 🇬🇧 **ផ្នែក GEP (ភាសាអង់គ្លេសទូទៅ):** [015 838 076](https://t.me/+85515838076) (Tel: **015 838 076**)\n• 🎨 **ផ្នែក KGE (មត្តេយ្យ & បឋមសិក្សា):** [015 838 047](https://t.me/+85515838047) (Tel: **015 838 047**)\n• 📚 **ផ្នែក KGE (អនុវិទ្យាល័យ & វិទ្យាល័យ):** [015 838 128](https://t.me/+85515838128) (Tel: **015 838 128**)\n• 🚌 **ផ្នែកសេវាកម្មសាលាទាំងអស់ (School Bus):** [015 838 928](https://t.me/+85515838928) (Tel: **015 838 928**)\n• 🏢 **រដ្ឋបាលកណ្តាល & ព័ត៌មានទូទៅ:** [015 838 049](https://t.me/+85515838049) (Tel: **015 838 049**)\n\n• **📧 អ៊ីមែល:** [run.borang@sovannaphumi.edu.kh](mailto:run.borang@sovannaphumi.edu.kh)\n• **💬 Telegram ផ្លូវការសាលា:** [t.me/+Ehnt07tATa0zMDI1](https://t.me/+Ehnt07tATa0zMDI1)\n• **🌐 ហ្វេសប៊ុក:** [fb.com/SPS.Takeo.Campus](https://www.facebook.com/SPS.Takeo.Campus)\n• **គេហទំព័រផ្លូវការ:** [sps-takeo.com](https://sps-takeo.com/)";
    } else {
      return "📍 **Campus Location & Department Contacts (Sovannaphumi School 25, Takeo Campus)**\n\n• **Address:** Doun Kaev Town, Takeo Province, Cambodia.\n• **🗺️ Google Maps:** [View on Google Maps](https://maps.app.goo.gl/vm9jjVd65UNTYqtK9)\n\n☎️ **Department Direct Hotlines & Telegram Links:**\n• 🇬🇧 **GEP (General English Program):** [015 838 076](https://t.me/+85515838076) (Hotline: **+855 15 838 076**)\n• 🎨 **KGE (Kindergarten & Primary):** [015 838 047](https://t.me/+85515838047) (Hotline: **+855 15 838 047**)\n• 📚 **KGE (Secondary & High School):** [015 838 128](https://t.me/+85515838128) (Hotline: **+855 15 838 128**)\n• 🚌 **School Services & School Bus:** [015 838 928](https://t.me/+85515838928) (Hotline: **+855 15 838 928**)\n• 🏢 **Head Administration & General:** [015 838 049](https://t.me/+85515838049) (Hotline: **+855 15 838 049**)\n\n• **📧 Email:** [run.borang@sovannaphumi.edu.kh](mailto:run.borang@sovannaphumi.edu.kh)\n• **💬 Official Telegram:** [t.me/+Ehnt07tATa0zMDI1](https://t.me/+Ehnt07tATa0zMDI1)\n• **🌐 Facebook:** [fb.com/SPS.Takeo.Campus](https://www.facebook.com/SPS.Takeo.Campus)\n• **Official Website:** [sps-takeo.com](https://sps-takeo.com/)";
    }
  }

  // 6. Teacher, Staff, Quality
  if (q.includes('គ្រូ') || q.includes('បុគ្គលិក') || q.includes('teacher') || q.includes('staff') || q.includes('quality') || q.includes('faculty')) {
    if (isKh) {
      return "👥 **លោកគ្រូ-អ្នកគ្រូ និងគុណភាពបង្រៀន (Faculty & Quality)**\n\n• គ្រូបង្រៀនមានសញ្ញាបត្រគរុកោសល្យ និងបទពិសោធន៍បង្រៀនយូរឆ្នាំ\n• ទទួលការបណ្តុះបណ្តាលវិជ្ជាជីវៈ (Teacher Professional Training) ជាប្រចាំ\n• យកចិត្តទុកដាក់ និងតាមដានការវិវត្តរបស់សិស្សម្នាក់ៗយ៉ាងដិតដល់!";
    } else {
      return "👥 **Teachers & Academic Quality**\n\n• Certified and experienced national and international educators.\n• Regular pedagogical training and classroom quality audits.\n• Dedicated student-centered support and counseling.";
    }
  }

  // 7. Greeting & General Chat
  if (q.includes('សួស្តី') || q.includes('ជំរាបសួរ') || q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good morning') || q.includes('good afternoon')) {
    if (isKh) {
      return "👋 សួស្តីបាទ/ចាស! ខ្ញុំជា AI Assistant នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ។ តើខ្ញុំអាចជួយផ្តល់ព័ត៌មានអ្វីខ្លះជូនលោកអ្នកថ្ងៃនេះ?";
    } else {
      return "👋 Hello! Welcome to Sovannaphumi School 25, Takeo Campus. How may I assist you with admissions or curriculum today?";
    }
  }

  // 8. Thank you
  if (q.includes('អរគុណ') || q.includes('thank') || q.includes('thanks')) {
    if (isKh) {
      return "🙏 សូមអរគុណលោកអ្នក! ប្រសិនបើមានចម្ងល់បន្ថែម សូមកុំស្ទាក់ស្ទើរក្នុងការសួរខ្ញុំ ឬទាក់ទងមកកាន់លេខទូរស័ព្ទតាមផ្នែកផ្ទាល់ ឬរដ្ឋបាលកណ្តាល **015 838 049** បានគ្រប់ពេលវេលា។ សូមជូនពរថ្ងៃល្អ!";
    } else {
      return "🙏 You're very welcome! If you need further details, feel free to ask or contact our head administration at **+855 15 838 049**. Have a wonderful day!";
    }
  }

  // 9. Smart Fallback Response
  if (isKh) {
    return `ℹ️ **សូមអរគុណចំពោះសំណួររបស់អ្នក!**\n\nទាក់ទងនឹង **"${rawQuery}"** លោកអ្នកអាចទាក់ទងមកកាន់ផ្នែកជំនាញផ្ទាល់ ដើម្បីទទួលបានព័ត៌មានលម្អិតបំផុត៖\n\n☎️ **លេខទូរស័ព្ទ & Telegram តាមផ្នែក:**\n• 🇬🇧 **GEP (ភាសាអង់គ្លេស):** [015 838 076](https://t.me/+85515838076)\n• 🎨 **KGE (មត្តេយ្យ & បឋម):** [015 838 047](https://t.me/+85515838047)\n• 📚 **KGE (អនុវិទ្យាល័យ & វិទ្យាល័យ):** [015 838 128](https://t.me/+85515838128)\n• 🚌 **សេវាកម្មសាលាទាំងអស់ (School Bus):** [015 838 928](https://t.me/+85515838928)\n• 🏢 **រដ្ឋបាលកណ្តាល:** [015 838 049](https://t.me/+85515838049)\n\n📍 **ទីតាំង:** [Google Maps ក្រុងដូនកែវ ខេត្តតាកែវ](https://maps.app.goo.gl/vm9jjVd65UNTYqtK9)\n💬 ឬចុចប៊ូតុង **"ស្នើសុំការប្រឹក្សា"** ខាងលើដើម្បីឱ្យបុគ្គលិកទាក់ទងទៅវិញ!`;
  } else {
    return `ℹ️ **Thank you for your question!**\n\nRegarding **"${rawQuery}"**, please feel free to reach out to our dedicated department hotlines:\n\n☎️ **Department Hotlines & Telegram Links:**\n• 🇬🇧 **GEP (General English):** [015 838 076](https://t.me/+85515838076)\n• 🎨 **KGE (Kindergarten & Primary):** [015 838 047](https://t.me/+85515838047)\n• 📚 **KGE (Secondary & High School):** [015 838 128](https://t.me/+85515838128)\n• 🚌 **School Services & Bus:** [015 838 928](https://t.me/+85515838928)\n• 🏢 **Head Administration:** [015 838 049](https://t.me/+85515838049)\n\n📍 **Location:** [Google Maps Takeo Province](https://maps.app.goo.gl/vm9jjVd65UNTYqtK9)\n💬 Or click **"Request Consultation"** above to have our team contact you!`;
  }
}

function initSPSAssistant() {
  sendSPSAssistantWelcome();
  updateAIBadgeStatus();
}
window.initSPSAssistant = initSPSAssistant;


// =============================================================================
// 11. STUDENT HALL OF FAME & PARENT TESTIMONIALS (តារាងកិត្តិយស & សក្ខីកម្ម)
// =============================================================================

const HALL_OF_FAME_DATA = [
  {
    id: "hof_1",
    category: "grade_a",
    nameKh: "យុវតី ញឹម ផល្លាទេពី (NHIM Phallathevy)",
    nameEn: "Miss NHIM Phallathevy",
    roleKh: "សិស្សឆ្នើមនិទ្ទេស A បាក់ឌុប • សម័យប្រឡង ១០ សីហា ២០២៦",
    roleEn: "BacII Grade A Honor Student • Exam: 10 Aug 2026",
    tagKh: "🏆 និទ្ទេស A បាក់ឌុប",
    tagEn: "🏆 BacII Grade A",
    badgeType: "tag-grade-a",
    avatar: "student_nhim_phallathevy.jpg",
    quoteKh: "ការខិតខំប្រឹងប្រែងប្រកបដោយវិន័យ និងការយកចិត្តទុកដាក់បង្រៀនយ៉ាងកក់ក្តៅពីលោកគ្រូអ្នកគ្រូនៅសាលារៀនសុវណ្ណភូមិទី២៥ បានជួយឱ្យនាងខ្ញុំសម្រេចបាននិទ្ទេស A និងពិន្ទុដ៏ខ្ពស់នេះ!",
    quoteEn: "Disciplined dedication, coupled with the caring and high-standard instruction at SPS 25, empowered me to achieve Grade A and this outstanding score!",
    scoreKh: "លំដាប់ពិន្ទុ៖ 99.802",
    scoreEn: "Score: 99.802",
    year: "10 សីហា 2026"
  },
  {
    id: "hof_2",
    category: "grade_a",
    nameKh: "យុវជន ម៉ែន សនសិទ្ធិរាជ (MEN Sonsithirach)",
    nameEn: "Mr. MEN Sonsithirach",
    roleKh: "សិស្សឆ្នើមនិទ្ទេស A បាក់ឌុប • សម័យប្រឡង ១០ សីហា ២០២៦",
    roleEn: "BacII Grade A Honor Student • Exam: 10 Aug 2026",
    tagKh: "🏆 និទ្ទេស A បាក់ឌុប",
    tagEn: "🏆 BacII Grade A",
    badgeType: "tag-grade-a",
    avatar: "student_men_sonsithirach.jpg",
    quoteKh: "បរិយាកាសសិក្សាដ៏ល្អ វិធីសាស្ត្របង្រៀនស៊ីជម្រៅ និងការបង្វឹកដោះស្រាយវិញ្ញាសាជាប្រចាំពីលោកគ្រូអ្នកគ្រូ បានធ្វើឱ្យខ្ញុំមានទំនុកចិត្តខ្ពស់ក្នុងការប្រឡងបាក់ឌុប!",
    quoteEn: "The inspiring learning environment, in-depth methodology, and regular exam coaching at SPS 25 gave me immense confidence to excel in the national exam!",
    scoreKh: "លំដាប់ពិន្ទុ៖ 99.745",
    scoreEn: "Score: 99.745",
    year: "10 សីហា 2026"
  },
  {
    id: "hof_3",
    category: "grade_a",
    nameKh: "យុវជន អ៊ែល ធីតាវិសាល (EL Thidavisal)",
    nameEn: "Mr. EL Thidavisal",
    roleKh: "សិស្សឆ្នើមនិទ្ទេស A បាក់ឌុប • សម័យប្រឡង ១០ សីហា ២០២៦",
    roleEn: "BacII Grade A Honor Student • Exam: 10 Aug 2026",
    tagKh: "🏆 និទ្ទេស A បាក់ឌុប",
    tagEn: "🏆 BacII Grade A",
    badgeType: "tag-grade-a",
    avatar: "student_el_thidavisal.jpg",
    quoteKh: "ការយកចិត្តទុកដាក់ និងការលើកទឹកចិត្តឥតឈប់ឈរពីសំណាក់គណៈគ្រប់គ្រង និងលោកគ្រូអ្នកគ្រូសាលាសុវណ្ណភូមិទី២៥ គឺជាកម្លាំងចិត្តដ៏ធំបំផុតសម្រាប់ជោគជ័យរបស់ខ្ញុំ!",
    quoteEn: "The relentless mentorship, care, and encouragement from teachers and leadership at SPS 25 were the greatest inspiration for my achievement!",
    scoreKh: "លំដាប់ពិន្ទុ៖ 99.631",
    scoreEn: "Score: 99.631",
    year: "10 សីហា 2026"
  },
  {
    id: "hof_4",
    category: "grade_a",
    nameKh: "យុវតី នួនស៊ីនឿន រក្សា (NOUNSINEUON Raksa)",
    nameEn: "Miss NOUNSINEUON Raksa",
    roleKh: "សិស្សឆ្នើមនិទ្ទេស A បាក់ឌុប • សម័យប្រឡង ១០ សីហា ២០២៦",
    roleEn: "BacII Grade A Honor Student • Exam: 10 Aug 2026",
    tagKh: "🏆 និទ្ទេស A បាក់ឌុប",
    tagEn: "🏆 BacII Grade A",
    badgeType: "tag-grade-a",
    avatar: "student_nounsineuon_raksa.jpg",
    quoteKh: "មូលដ្ឋានគ្រឹះចំណេះដឹងរឹងមាំ និងកម្មវិធីសិក្សាស្តង់ដារខ្ពស់នៅសាលារៀនសុវណ្ណភូមិទី២៥ បានជួយឱ្យនាងខ្ញុំអភិវឌ្ឍសមត្ថភាព និងសម្រេចបាននិទ្ទេស A យ៉ាងពេញមោទនភាព!",
    quoteEn: "A solid academic foundation and high-standard curriculum at SPS 25 helped me maximize my potential and achieve Grade A with true pride!",
    scoreKh: "លំដាប់ពិន្ទុ៖ 99.634",
    scoreEn: "Score: 99.634",
    year: "10 សីហា 2026"
  },
  {
    id: "hof_5",
    category: "grade_a",
    nameKh: "យុវតី ស៊ុយ ហេងលី (SUY Hengly)",
    nameEn: "Miss SUY Hengly",
    roleKh: "សិស្សឆ្នើមនិទ្ទេស A បាក់ឌុប • សម័យប្រឡង ១០ សីហា ២០២៦",
    roleEn: "BacII Grade A Honor Student • Exam: 10 Aug 2026",
    tagKh: "🏆 និទ្ទេស A បាក់ឌុប",
    tagEn: "🏆 BacII Grade A",
    badgeType: "tag-grade-a",
    avatar: "student_suy_hengly.jpg",
    quoteKh: "ខ្ញុំពិតជាមានមោទនភាពដែលបានសិក្សានៅសាលារៀនសុវណ្ណភូមិទី២៥។ ការអប់រំទាំងចំណេះដឹង សីលធម៌ និងការអនុវត្តជាក់ស្តែង គឺជាគន្លឹះនៃភាពជោគជ័យនេះ!",
    quoteEn: "I am truly proud to study at Sovannaphumi School 25. Holistic education spanning knowledge, ethics, and practical learning was the key to this success!",
    scoreKh: "លំដាប់ពិន្ទុ៖ 98.849",
    scoreEn: "Score: 98.849",
    year: "10 សីហា 2026"
  },
  {
    id: "hof_6",
    category: "scholarship",
    nameKh: "យុវតី លី ម៉េងហួរ (LY Menghour)",
    nameEn: "Miss LY Menghour",
    roleKh: "ជ័យលាភីមេដាយមាស គណិតវិទ្យា STEM & Cambridge English C1",
    roleEn: "Gold Medalist in STEM Math Olympiad & Cambridge C1",
    tagKh: "🥇 ជ័យលាភីមេដាយមាស",
    tagEn: "🥇 Gold Medalist",
    badgeType: "tag-scholarship",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    quoteKh: "កម្មវិធីភាសាអង់គ្លេស GEP និងការបង្វឹកបែបអន្តរជាតិនៅ SPS 25 បានជួយខ្ញុំមានទំនុកចិត្តខ្ពស់ក្នុងការប្រកួតប្រជែងថ្នាក់ជាតិ និងអន្តរជាតិ!",
    quoteEn: "The GEP English program and international competition coaching at SPS 25 gave me the confidence to excel in national and international olympiads!",
    scoreKh: "មេដាយមាស STEM • អាហារូបករណ៍ពេញលេញ",
    scoreEn: "Gold Medalist • Full Scholarship Award",
    year: "2026"
  },
  {
    id: "hof_7",
    category: "scholarship",
    nameKh: "យុវជន កែវ រតនៈ (KEO Ratanak)",
    nameEn: "Mr. KEO Ratanak",
    roleKh: "ជ័យលាភីលេខ១ ការប្រកួតមនុស្សយន្ត & STEM Robotics ថ្នាក់តំបន់",
    roleEn: "1st Place Regional Robotics & STEM Innovation Winner",
    tagKh: "🤖 ជ័យលាភី STEM Robotics",
    tagEn: "🤖 STEM Champion",
    badgeType: "tag-scholarship",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quoteKh: "បន្ទប់ពិសោធន៍ E-Lab និងគ្រូណែនាំបានផ្តល់ឱកាសឱ្យខ្ញុំបង្កើតគម្រោងមនុស្សយន្តស្វ័យប្រវត្តិក្លាយជាការពិត!",
    quoteEn: "The E-Lab facilities and mentors at SPS 25 gave me the tools to build autonomous robotics projects and win 1st place!",
    scoreKh: "ជើងឯក STEM Robotics • ខេត្តតាកែវ",
    scoreEn: "Takeo Regional STEM Robotics Champion",
    year: "2026"
  },
  {
    id: "hof_8",
    category: "parent",
    nameKh: "លោកស្រី ហ៊ន គីមសាន (Mrs. HORN Kimsan)",
    nameEn: "Mrs. HORN Kimsan",
    roleKh: "អាណាព្យាបាលសិស្សឆ្នើមថ្នាក់ទី១២ (KGE Highschool Parent)",
    roleEn: "Parent of Grade 12 Highschool Honor Student",
    tagKh: "💬 ចំណាប់អារម្មណ៍អាណាព្យាបាល",
    tagEn: "💬 Parent Voice",
    badgeType: "tag-parent",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    quoteKh: "ក្នុងនាមជាអាណាព្យាបាល ខ្ញុំមានក្តីសោមនស្សរីករាយ និងទុកចិត្ត ១០០% លើសាលារៀនសុវណ្ណភូមិទី២៥ ទាំងវិន័យ សីលធម៌ គុណភាពបង្រៀន និងសុវត្ថិភាពសេវាឡានដឹកសិស្ស។ កូនៗរបស់ខ្ញុំមានការរីកចម្រើនយ៉ាងឆាប់រហ័ស!",
    quoteEn: "As a parent, I have complete 100% trust in SPS 25. The discipline, academic excellence, caring teachers, and safe bus service are unmatched. My children have flourished wonderfully!",
    scoreKh: "⭐⭐⭐⭐⭐ ការវាយតម្លៃ 5 ផ្កាយពេញ",
    scoreEn: "⭐⭐⭐⭐⭐ 5-Star Parent Rating",
    year: "Takeo Campus"
  },
  {
    id: "hof_9",
    category: "parent",
    nameKh: "លោកវេជ្ជបណ្ឌិត ហេង សុវណ្ណ (Dr. HENG Sovann)",
    nameEn: "Dr. HENG Sovann",
    roleKh: "អាណាព្យាបាលសិស្សកម្រិត GEP & បឋមសិក្សា (Primary & GEP Parent)",
    roleEn: "Parent of GEP & Primary Students",
    tagKh: "💬 ចំណាប់អារម្មណ៍អាណាព្យាបាល",
    tagEn: "💬 Parent Voice",
    badgeType: "tag-parent",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quoteKh: "កម្មវិធីភាសាអង់គ្លេសទូទៅ (GEP) និងបច្ចេកវិទ្យាឌីជីថលនៅសាលាសុវណ្ណភូមិទី២៥ ពិតជាស្របតាមស្តង់ដារអន្តរជាតិ។ កូនៗរបស់ខ្ញុំអាចនិយាយភាសាអង់គ្លេសបានយ៉ាងស្ទាត់ជំនាញ និងមានភាពក្លាហាន!",
    quoteEn: "The GEP English program and technology integration at SPS 25 truly meet international standards. My children speak English fluently and with great confidence!",
    scoreKh: "⭐⭐⭐⭐⭐ ការវាយតម្លៃ 5 ផ្កាយពេញ",
    scoreEn: "⭐⭐⭐⭐⭐ 5-Star Parent Rating",
    year: "Takeo Campus"
  }
];

let currentHallCategory = 'all';

function renderHallOfFame(category = currentHallCategory) {
  const container = document.getElementById('hall-of-fame-grid');
  if (!container) return;

  currentHallCategory = category;
  const isEn = (typeof currentAppLanguage !== 'undefined' && currentAppLanguage === 'en');

  let list = HALL_OF_FAME_DATA;
  if (category && category !== 'all') {
    list = list.filter(item => item.category === category);
  }

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">${isEn ? 'No entries found.' : 'មិនមានទិន្នន័យក្នុងផ្នែកនេះឡើយ។'}</div>`;
    return;
  }

  container.innerHTML = list.map(item => {
    const name = isEn ? item.nameEn : item.nameKh;
    const role = isEn ? item.roleEn : item.roleKh;
    const tag = isEn ? item.tagEn : item.tagKh;
    const quote = isEn ? item.quoteEn : item.quoteKh;
    const score = isEn ? item.scoreEn : item.scoreKh;

    let cardClass = 'hall-card';
    if (item.category === 'grade_a') cardClass += ' is-grade-a';
    else if (item.category === 'scholarship') cardClass += ' is-scholarship';
    else if (item.category === 'parent') cardClass += ' is-parent';

    return `
      <div class="${cardClass}">
        <div class="hall-card-header">
          <div class="hall-avatar-wrap">
            <img src="${item.avatar}" alt="${name}" class="hall-avatar-img" onerror="this.src='https://lh3.googleusercontent.com/d/1PoR7-o5Ea4QstFQ2QLcw0WHuV6dKA480'">
          </div>
          <div class="hall-meta-wrap">
            <span class="hall-badge-tag ${item.badgeType}">${tag}</span>
            <h4 class="hall-student-name">${name}</h4>
            <p class="hall-student-role">${role}</p>
          </div>
        </div>
        <div class="hall-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="hall-quote-body">
          ${quote}
        </div>
        <div class="hall-card-footer">
          <span class="hall-achievement-pill">
            <i class="fa-solid fa-award"></i> <span>${score}</span>
          </span>
          <span style="font-size: 0.75rem; color: #94a3b8;">${item.year}</span>
        </div>
      </div>
    `;
  }).join('');
}
window.renderHallOfFame = renderHallOfFame;

window.filterHallOfFame = function(category, btnElement) {
  document.querySelectorAll('.hall-filter-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderHallOfFame(category);
};

// =============================================================================
// 12. SOCIAL SHARE ACTIONS & GLOBAL TOAST FEEDBACK SYSTEM
// =============================================================================

window.showSpsToast = function(message, icon = 'fa-circle-check', duration = 3000) {
  let container = document.getElementById('sps-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'sps-toast-container';
    container.className = 'sps-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'sps-toast';
  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: #4ade80; font-size: 1.1rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
};

window.shareArticleToTelegram = function(title, url) {
  const decTitle = decodeURIComponent(title);
  const decUrl = decodeURIComponent(url);
  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(decUrl)}&text=${encodeURIComponent(decTitle)}`;
  window.open(tgUrl, '_blank', 'noopener,noreferrer');
};

window.shareArticleToFacebook = function(url) {
  const decUrl = decodeURIComponent(url);
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(decUrl)}`;
  window.open(fbUrl, '_blank', 'noopener,noreferrer');
};

window.shareArticleNative = async function(title, url) {
  const decTitle = decodeURIComponent(title);
  const decUrl = decodeURIComponent(url);
  if (navigator.share) {
    try {
      await navigator.share({
        title: decTitle,
        text: decTitle,
        url: decUrl
      });
      return;
    } catch (e) {}
  }
  copyArticleLink(decUrl);
};

window.copyArticleLink = async function(url) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const inp = document.createElement('input');
      inp.value = url;
      document.body.appendChild(inp);
      inp.select();
      document.execCommand('copy');
      document.body.removeChild(inp);
    }
    const isEn = (typeof currentAppLanguage !== 'undefined' && currentAppLanguage === 'en');
    showSpsToast(isEn ? 'Link copied to clipboard!' : 'បានចម្លង Link រួចរាល់!', 'fa-link');
  } catch (err) {
    showSpsToast('Link: ' + url, 'fa-link', 5000);
  }
};

// Initial Auto-Render on DOM load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof renderHallOfFame === 'function') renderHallOfFame('all');
    });
  } else {
    if (typeof renderHallOfFame === 'function') renderHallOfFame('all');
  }
}
