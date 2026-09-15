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
  // Primary (ថ្នាក់ទី១ - ទី៦)
  { id: "bk-1-1", title: "ភាសាខ្មែរ ថ្នាក់ទី១ (ភាគ១ & ២)", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ១", subject: "khmer", icon: "📘", desc: "សៀវភៅពុម្ពផ្លូវការក្រសួងអប់រំ យុវជន និងកីឡា", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-1-2", title: "គណិតវិទ្យា ថ្នាក់ទី១", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ១", subject: "math", icon: "📐", desc: "មូលដ្ឋានគ្រឹះលេខ វិធីបូក ដក និងរូបធរណីមាត្រសាមញ្ញ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-1-3", title: "វិទ្យាសាស្ត្រ និងសិក្សាសង្គម ថ្នាក់ទី១", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ១", subject: "science", icon: "🌱", desc: "ស្វែងយល់ពីធម្មជាតិ សុខភាព និងបរិស្ថានជុំវិញខ្លួន", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  
  { id: "bk-2-1", title: "ភាសាខ្មែរ ថ្នាក់ទី២", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ២", subject: "khmer", icon: "📘", desc: "ពង្រឹងការអាន សរសេរ និងវេយ្យាករណ៍បឋម", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-2-2", title: "គណិតវិទ្យា ថ្នាក់ទី២", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ២", subject: "math", icon: "📐", desc: "វិធីគុណ វិធីចែក និងការដោះស្រាយចំណោទបឋម", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-2-3", title: "វិទ្យាសាស្ត្រ និងសិក្សាសង្គម ថ្នាក់ទី២", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ២", subject: "science", icon: "🌿", desc: "មេរៀនវិទ្យាសាស្ត្រ និងការរស់នៅស្អាតមានអនាម័យ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },

  { id: "bk-3-1", title: "ភាសាខ្មែរ ថ្នាក់ទី៣", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៣", subject: "khmer", icon: "📘", desc: "ការអានអត្ថបទវែង ការតែងសេចក្តី និងវេយ្យាករណ៍", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-3-2", title: "គណិតវិទ្យា ថ្នាក់ទី៣", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៣", subject: "math", icon: "📐", desc: "ប្រមាណវិធីលើចំនួនរាប់ពាន់ រង្វាស់រង្វាល់ និងប្រភាគ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-3-3", title: "វិទ្យាសាស្ត្រ និងសិក្សាសង្គម ថ្នាក់ទី៣", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៣", subject: "science", icon: "🌍", desc: "ភូមិសាស្ត្រមូលដ្ឋាន វដ្តជីវិតសត្វ និងរុក្ខជាតិ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },

  { id: "bk-4-1", title: "ភាសាខ្មែរ ថ្នាក់ទី៤", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៤", subject: "khmer", icon: "📘", desc: "អក្សរសិល្ប៍បឋម កំណាព្យ និងការពិពណ៌នា", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-4-2", title: "គណិតវិទ្យា ថ្នាក់ទី៤", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៤", subject: "math", icon: "📐", desc: "ប្រភាគ ចំនួនទសភាគ និងផ្ទៃក្រឡាធរណីមាត្រ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-4-3", title: "វិទ្យាសាស្ត្រ ថ្នាក់ទី៤", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៤", subject: "science", icon: "🔬", desc: "រូបធាតុ ថាមពល និងប្រព័ន្ធអេកូឡូស៊ី", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },

  { id: "bk-5-1", title: "ភាសាខ្មែរ ថ្នាក់ទី៥", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៥", subject: "khmer", icon: "📘", desc: "ការវិភាគអត្ថបទ ការសរសេរសំបុត្រ និងសុភាសិត", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-5-2", title: "គណិតវិទ្យា ថ្នាក់ទី៥", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៥", subject: "math", icon: "📐", desc: "ភាគរយ ការគណនាមាឌ និងស្ថិតិបឋម", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-5-3", title: "វិទ្យាសាស្ត្រ ថ្នាក់ទី៥", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៥", subject: "science", icon: "🧪", desc: "អគ្គិសនី មេដែក និងប្រព័ន្ធដង្ហើមមនុស្ស", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },

  { id: "bk-6-1", title: "ភាសាខ្មែរ ថ្នាក់ទី៦", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៦", subject: "khmer", icon: "📘", desc: "អក្សរសិល្ប៍ តែងសេចក្តីពិភាក្សា និងវិញ្ញាសាបញ្ចប់បឋម", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-6-2", title: "គណិតវិទ្យា ថ្នាក់ទី៦", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៦", subject: "math", icon: "📐", desc: "សមាមាត្រ ផ្ទៃក្រឡា និងមាឌរូបធរណីមាត្រស្មុគស្មាញ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },
  { id: "bk-6-3", title: "វិទ្យាសាស្ត្រ ថ្នាក់ទី៦", grade: "grade_1_6", gradeLabel: "ថ្នាក់ទី ៦", subject: "science", icon: "🔬", desc: "ពន្លឺ សំឡេង និងការបន្តពូជរបស់សារពាង្គកាយ", url: "https://elearning.moeys.gov.kh/", badge: "បឋមសិក្សា" },

  // Secondary (ថ្នាក់ទី៧ - ទី៩)
  { id: "bk-7-1", title: "គណិតវិទ្យា ថ្នាក់ទី៧", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៧", subject: "math", icon: "📐", desc: "ចំនួនគត់រ៉ឺឡាទីវ ពីជគណិត និងធរណីមាត្រប្លង់", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-7-2", title: "រូបវិទ្យា ថ្នាក់ទី៧", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៧", subject: "physics", icon: "⚡", desc: "ចលនា កម្លាំង សម្ពាធ និងកម្តៅ", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-7-3", title: "គីមីវិទ្យា ថ្នាក់ទី៧", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៧", subject: "chemistry", icon: "🧪", desc: "រូបធាតុ ធាតុគីមី និងការផ្លាស់ប្តូរគីមី", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-7-4", title: "ជីវវិទ្យា ថ្នាក់ទី៧", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៧", subject: "biology", icon: "🧬", desc: "កោសិកា ជាលិកា និងចំណាត់ថ្នាក់ភាវៈរស់", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },

  { id: "bk-8-1", title: "គណិតវិទ្យា ថ្នាក់ទី៨", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៨", subject: "math", icon: "📐", desc: "សមីការ អសមីការ និងទ្រឹស្តីបទពីតាករ", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-8-2", title: "រូបវិទ្យា ថ្នាក់ទី៨", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៨", subject: "physics", icon: "⚡", desc: "អគ្គិសនី មេកានិច និងអុបទិកបឋម", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-8-3", title: "គីមីវិទ្យា ថ្នាក់ទី៨", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៨", subject: "chemistry", icon: "🧪", desc: "ម៉ូលេគុល អាតូម និងសមីការប្រតិកម្មគីមី", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },
  { id: "bk-8-4", title: "ជីវវិទ្យា ថ្នាក់ទី៨", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៨", subject: "biology", icon: "🧬", desc: "ប្រព័ន្ធរាងកាយមនុស្ស និងការការពារសុខភាព", url: "https://elearning.moeys.gov.kh/", badge: "អនុវិទ្យាល័យ" },

  { id: "bk-9-1", title: "គណិតវិទ្យា ថ្នាក់ទី៩ (ត្រៀមឌីប្លូម)", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៩", subject: "math", icon: "📐", desc: "ប្រព័ន្ធសមីការ អនុគមន៍លីនេអ៊ែរ ធរណីមាត្រត្រៀមប្រឡង", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមឌីប្លូម" },
  { id: "bk-9-2", title: "រូបវិទ្យា ថ្នាក់ទី៩", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៩", subject: "physics", icon: "⚡", desc: "ច្បាប់អូម ថាមពលអគ្គិសនី និងមេកានិចរឹងមាំ", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមឌីប្លូម" },
  { id: "bk-9-3", title: "គីមីវិទ្យា ថ្នាក់ទី៩", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៩", subject: "chemistry", icon: "🧪", desc: "អាស៊ីត បាស អំបិល លោហៈ និងអលោហៈ", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមឌីប្លូម" },
  { id: "bk-9-4", title: "ជីវវិទ្យា ថ្នាក់ទី៩", grade: "grade_7_9", gradeLabel: "ថ្នាក់ទី ៩", subject: "biology", icon: "🧬", desc: "ពន្ធុវិទ្យាម៉ង់ដែល ក្រូម៉ូសូម និងការបំប្លែងពូជ", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមឌីប្លូម" },

  // High School (ថ្នាក់ទី១០ - ទី១២)
  { id: "bk-10-1", title: "គណិតវិទ្យា ថ្នាក់ទី១០", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១០", subject: "math", icon: "📐", desc: "អនុគមន៍ដឺក្រេទី២ ត្រីកោណមាត្រ និងវ៉ិចទ័រ", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-10-2", title: "រូបវិទ្យា ថ្នាក់ទី១០", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១០", subject: "physics", icon: "⚡", desc: "ស៊ីនេម៉ាទិច ឌីណាមិច និងច្បាប់ញូតុន", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-10-3", title: "គីមីវិទ្យា ថ្នាក់ទី១០", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១០", subject: "chemistry", icon: "🧪", desc: "តារាងខួបធាតុគីមី សម្ព័ន្ធគីមី និងដំណោះស្រាយទឹក", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-10-4", title: "ជីវវិទ្យា ថ្នាក់ទី១០", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១០", subject: "biology", icon: "🧬", desc: "ជីវគីមី កោសិកា និងការបំប្លែងថាមពល (ATP)", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },

  { id: "bk-11-1", title: "គណិតវិទ្យា ថ្នាក់ទី១១", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១១", subject: "math", icon: "📐", desc: "លីមីត ដេរីវេ ស្វ៊ីតចំនួន និងធរណីមាត្រក្នុងលំហ", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-11-2", title: "រូបវិទ្យា ថ្នាក់ទី១១", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១១", subject: "physics", icon: "⚡", desc: "កម្ដៅ ទែម៉ូឌីណាមិច និងដែនម៉ាញេទិច", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-11-3", title: "គីមីវិទ្យា ថ្នាក់ទី១១", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១១", subject: "chemistry", icon: "🧪", desc: "គីមីសរីរាង្គ អ៊ីដ្រូកាបួ និងកាបូន", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },
  { id: "bk-11-4", title: "ជីវវិទ្យា ថ្នាក់ទី១១", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១១", subject: "biology", icon: "🧬", desc: "ប្រព័ន្ធប្រសាទ អ័រម៉ូន និងសរីរវិទ្យារុក្ខជាតិ", url: "https://elearning.moeys.gov.kh/", badge: "វិទ្យាល័យ" },

  { id: "bk-12-1", title: "គណិតវិទ្យា ថ្នាក់ទី១២ (វិទ្យាសាស្ត្រពិត)", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១២", subject: "math", icon: "📐", desc: "អាំងតេក្រាល សមីការឌីផេរ៉ង់ស្យែល ចំនួនកុំផ្លិច និងប្រូបាប", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមបាក់ឌុប" },
  { id: "bk-12-2", title: "រូបវិទ្យា ថ្នាក់ទី១២", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១២", subject: "physics", icon: "⚡", desc: "ចលនាញ័រ រលក ដែនអេឡិចត្រូម៉ាញេទិច និងរូបវិទ្យានុយក្លេអ៊ែរ", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមបាក់ឌុប" },
  { id: "bk-12-3", title: "គីមីវិទ្យា ថ្នាក់ទី១២", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១២", subject: "chemistry", icon: "🧪", desc: "ល្បឿនប្រតិកម្ម លំនឹងគីមី អាស៊ីត-បាស និងគីមីសរីរាង្គស៊ីជម្រៅ", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមបាក់ឌុប" },
  { id: "bk-12-4", title: "ជីវវិទ្យា ថ្នាក់ទី១២", grade: "grade_10_12", gradeLabel: "ថ្នាក់ទី ១២", subject: "biology", icon: "🧬", desc: "ADN/ARN ការសំយោគប្រូតេអ៊ីន វិស្វកម្មពន្ធុ និងការវិវត្ត", url: "https://elearning.moeys.gov.kh/", badge: "ត្រៀមបាក់ឌុប" },

  // Exams & Cambridge
  { id: "bk-ex-1", title: "កម្រងវិញ្ញាសា និងអត្រាកំណែបាក់ឌុប (BacII)", grade: "exam", gradeLabel: "Grade 12", subject: "exam", icon: "🎓", desc: "វិញ្ញាសាប្រឡងបាក់ឌុបគ្រប់ឆ្នាំ គណិត រូប គីមី ជីវ អមដំណោះស្រាយ", url: "https://moeys.gov.kh/", badge: "វិញ្ញាសាបាក់ឌុប" },
  { id: "bk-ex-2", title: "កម្រងវិញ្ញាសា និងអត្រាកំណែឌីប្លូម (Diploma)", grade: "exam", gradeLabel: "Grade 9", subject: "exam", icon: "📝", desc: "វិញ្ញាសាប្រឡងឌីប្លូមថ្នាក់ទី៩ គ្រប់មុខវិជ្ជាស្នូល", url: "https://elearning.moeys.gov.kh/", badge: "វិញ្ញាសាឌីប្លូម" },
  { id: "bk-cam-1", title: "Cambridge Primary & Secondary Worksheets", grade: "cambridge", gradeLabel: "IEP & GEP", subject: "english", icon: "🇬🇧", desc: "សន្លឹកកិច្ចការ និងលំហាត់ភាសាអង់គ្លេស Cambridge ស្តង់ដារអន្តរជាតិ", url: "https://www.cambridgeenglish.org/learning-english/", badge: "Cambridge" }
];

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
  renderMoEYSBooksGrid();
}

function filterMoEYSBooks(gradeKey, btnElement) {
  currentMoEYSGrade = gradeKey;
  document.querySelectorAll('#moeys-grade-filters .elab-filter-pill').forEach(p => p.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }
  renderMoEYSBooksGrid();
}

function renderMoEYSBooksGrid() {
  const container = document.getElementById('moeys-books-grid');
  if (!container) return;

  let filtered = moeysBookCatalog;
  if (currentMoEYSGrade !== 'all') {
    filtered = filtered.filter(b => b.grade === currentMoEYSGrade);
  }
  if (currentMoEYSBookSearch) {
    filtered = filtered.filter(b => `${b.title} ${b.desc} ${b.gradeLabel} ${b.badge} ${b.subject}`.toLowerCase().includes(currentMoEYSBookSearch));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1rem; color: #94a3b8; background: #f8fafc; border-radius: 14px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 2.2rem; margin-bottom: 6px;">📖</div>
        <h4 style="margin: 0 0 4px; color: #475569; font-size: 0.95rem; font-weight: 700;">រកមិនឃើញសៀវភៅដែលត្រូវនឹងការស្វែងរកទេ</h4>
        <p style="margin: 0; font-size: 0.8rem;">សូមសាកល្បងស្វែងរកឈ្មោះមុខវិជ្ជា ឬជ្រើសរើស «🌟 ទាំងអស់»</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(b => `
    <div class="moeys-book-card">
      <div>
        <div class="book-card-header">
          <span class="book-card-icon">${b.icon}</span>
          <span class="book-card-grade">${b.gradeLabel}</span>
        </div>
        <h4 class="book-card-title">${b.title}</h4>
        <p class="book-card-desc">${b.desc}</p>
      </div>
      <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="btn-read-book">
        <i class="fa-solid fa-book-open"></i> <span>📖 អានសៀវភៅ</span>
      </a>
    </div>
  `).join('');
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
window.renderMoEYSBooksGrid = renderMoEYSBooksGrid;
window.onSalaFrameLoaded = onSalaFrameLoaded;
window.reloadSalaLibraryFrame = reloadSalaLibraryFrame;
window.switchSalaLibraryLang = switchSalaLibraryLang;

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
async function renderDashboardStats() {
  const staffEl = document.getElementById('staff-count');
  const docEl = document.getElementById('doc-count');
  const compEl = document.getElementById('comp-count');
  const eventEl = document.getElementById('event-count');

  // បង្ហាញទិន្នន័យបច្ចុប្បន្នជាបឋម
  if (staffEl) staffEl.innerText = dashboardData.totalStaff;
  if (docEl) docEl.innerText = dashboardData.documents;
  if (compEl) compEl.innerText = dashboardData.compliance;
  if (eventEl) eventEl.innerText = dashboardData.eventsToday;

  // ១. ចាប់យកចំនួនបុគ្គលិកជាក់ស្តែងចេញពី Google Sheet (Real Staff Count)
  try {
    const res = await fetch(STAFF_SHEET_GVIZ_URL);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const json = JSON.parse(jsonStr);
    if (json && json.table && Array.isArray(json.table.rows)) {
      const realStaffCount = json.table.rows.length;
      if (staffEl) staffEl.innerText = realStaffCount;
      dashboardData.totalStaff = realStaffCount;
    }
  } catch (err) {
    console.warn("Could not fetch live staff count:", err);
  }

  // ២. ចាប់យកចំនួនឯកសារជាក់ស្តែងចេញពី Google Sheet (Real Documents Count)
  try {
    const res = await fetch(DOCS_SHEET_GVIZ_URL);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const json = JSON.parse(jsonStr);
    if (json && json.table && Array.isArray(json.table.rows)) {
      const realDocCount = json.table.rows.length;
      if (docEl) docEl.innerText = realDocCount;
      dashboardData.documents = realDocCount;
    }
  } catch (err) {
    console.warn("Could not fetch live document count:", err);
  }

  // ៣. ចាប់យកចំនួនព័ត៌មាន/ព្រឹត្តិការណ៍ជាក់ស្តែង (Real News / Events Count)
  try {
    const articles = getStoredNews();
    if (eventEl && articles && articles.length > 0) {
      eventEl.innerText = articles.length;
      dashboardData.eventsToday = articles.length;
    }
  } catch (e) {}

  // ៤. ចាប់យកភាគរយស្តង់ដារ QAC ជាក់ស្តែងចេញពី Google Sheet (Real QAC Compliance %)
  try {
    const res = await fetch(QAC_SHEET_GVIZ_URL);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const json = JSON.parse(jsonStr);
    if (json && json.table && Array.isArray(json.table.rows) && json.table.rows.length > 0) {
      const rows = json.table.rows;
      let completed = 0;
      rows.forEach(r => {
        const cells = r.c || [];
        const isDone = cells.some(c => c && (c.v === true || c.v === 'TRUE' || c.v === 'Done' || c.v === 'Completed' || c.v === 'Yes' || c.v === 'ជាប់' || c.v === 'ចប់'));
        if (isDone) completed++;
      });
      const pct = Math.round((completed / rows.length) * 100) + "%";
      if (compEl) compEl.innerText = pct;
      dashboardData.compliance = pct;
    } else {
      const pct = "0%";
      if (compEl) compEl.innerText = pct;
      dashboardData.compliance = pct;
    }
  } catch (err) {
    if (compEl) compEl.innerText = "0%";
    dashboardData.compliance = "0%";
  }
}

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

function getStoredNews() {
  try {
    const data = localStorage.getItem('sps_news_articles');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error loading news from localStorage:', e);
  }
  localStorage.setItem('sps_news_articles', JSON.stringify(initialNewsArticles));
  return initialNewsArticles;
}

function saveStoredNews(articles) {
  try {
    localStorage.setItem('sps_news_articles', JSON.stringify(articles));
  } catch (e) {
    console.error('Error saving news to localStorage:', e);
  }
}

async function syncNewsFromGoogleSheet() {
  try {
    const res = await fetch(GOOGLE_NEWS_API_URL);
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      saveStoredNews(json.data);
      renderNewsGrid();
    }
  } catch (e) {
    console.warn('Google Sheet news sync warning (using cached data):', e);
  }
}

function initNewsSystem() {
  updateAdminUI();
  renderNewsGrid();
  syncNewsFromGoogleSheet();
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
            <span><i class="fa-regular fa-calendar"></i> ${item.date || 'N/A'}</span>
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

// គ្រប់គ្រងរូបភាព និងឯកសារភ្ជាប់ (Gallery & Attachment State)
let currentGalleryFiles = [];
let currentAttachment = null;

function compressImageFile(file, maxWidth = 1200, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData && webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch (err) {}

        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

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
    const dataUrl = await compressImageFile(file, 1200, 0.85);
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
  const files = Array.from(event.target.files);
  if (!files.length) return;

  const remainingSlots = 10 - currentGalleryFiles.length;
  if (remainingSlots <= 0) {
    alert('⚠️ អ្នកបានជ្រើសរើសរូបភាពគ្រប់ចំនួនអតិបរមា ១០ រូបហើយ!');
    return;
  }

  const filesToProcess = files.slice(0, remainingSlots);
  if (files.length > remainingSlots) {
    alert(`⚠️ អនុញ្ញាតឱ្យផ្ទុកត្រឹមតែ ១០ រូបភាពប៉ុណ្ណោះ! ប្រព័ន្ធនឹងផ្ទុកតែ ${remainingSlots} រូបដំបូង។`);
  }

  for (const file of filesToProcess) {
    try {
      const dataUrl = await compressImageFile(file, 1000, 0.8);
      currentGalleryFiles.push(dataUrl);
    } catch (err) {
      console.error('Gallery image error:', err);
    }
  }

  renderGalleryPreviews();
  event.target.value = '';
};

window.removeGalleryItem = function(index) {
  currentGalleryFiles.splice(index, 1);
  renderGalleryPreviews();
};

function renderGalleryPreviews() {
  const badge = document.getElementById('gallery-count-badge');
  if (badge) badge.innerText = `${currentGalleryFiles.length} / 10 រូប`;

  const container = document.getElementById('gallery-previews-container');
  if (!container) return;

  container.innerHTML = currentGalleryFiles.map((imgUrl, index) => `
    <div class="gallery-preview-item">
      <img src="${imgUrl}" alt="Gallery photo ${index + 1}">
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
  `;

  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.add('active');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.remove('active');
};

window.openPublishModal = function() {
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

window.handlePublishSubmit = function(event) {
  event.preventDefault();

  const editId = document.getElementById('post-id-edit').value.trim();
  const title = document.getElementById('post-title').value.trim();
  const category = document.getElementById('post-category').value;
  const date = document.getElementById('post-date').value.trim();
  const image = document.getElementById('post-image-url').value.trim();
  const summary = document.getElementById('post-summary').value.trim();
  const content = document.getElementById('post-content').value.trim();

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

  let articles = getStoredNews();

  if (editId) {
    // Mode: Update Existing
    const index = articles.findIndex(a => a.id === editId);
    if (index !== -1) {
      articles[index] = {
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
        attachment: currentAttachment ? { ...currentAttachment } : null
      };
      saveStoredNews(articles);
      renderNewsGrid();
      closePublishModal();

      // Sync to Google Sheet in background
      fetch(GOOGLE_NEWS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'update', article: articles[index] })
      }).catch(err => console.error('Sheet update error:', err));

      alert('💾 ព័ត៌មានត្រូវបានកែសម្រួល និងរក្សាទុកក្នុង Google Sheet ដោយជោគជ័យ!');
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
    isCustom: true
  };

  articles.unshift(newArticle);
  saveStoredNews(articles);

  renderNewsGrid();
  closePublishModal();
  document.getElementById('publish-form').reset();

  // Sync to Google Sheet in background
  fetch(GOOGLE_NEWS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'create', article: newArticle })
  }).catch(err => console.error('Sheet create error:', err));

  alert('🎉 ព័ត៌មានរបស់អ្នកត្រូវបាន Publish ចូល Google Sheet ដោយជោគជ័យ!');
};

window.deleteNewsPost = function(id, event) {
  if (event) event.stopPropagation();
  if (confirm('តើអ្នកពិតជាចង់លុបព័ត៌មាននេះមែនទេ?')) {
    let articles = getStoredNews();
    articles = articles.filter(a => a.id !== id);
    saveStoredNews(articles);
    renderNewsGrid();

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
    
    // Stats & Home
    stat_staff: "បុគ្គលិកសរុប",
    stat_docs: "ឯកសារ",
    stat_comp: "ស្តង់ដារ QAC",
    stat_events: "ព្រឹត្តិការណ៍ថ្ងៃនេះ",
    admission_tag: "ទទួលចុះឈ្មោះសិស្សជារៀងរាល់ថ្ងៃ",
    admission_title: "ចុះឈ្មោះចូលរៀន ឬសាកសួរព័ត៌មានអាហារូបករណ៍",
    admission_desc: "សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ ផ្តល់ជូននូវកម្មវិធីចំណេះទូទៅខ្មែរ (K-12) ភាសាអង់គ្លេស (GEP/IEP) ជាមួយនឹងបរិយាកាសសិក្សាទំនើប និងគ្រូបង្រៀនមានវិជ្ជាជីវៈខ្ពស់។",
    btn_inquire: "សាកសួរព័ត៌មានចុះឈ្មោះ (Inquire Now)",
    quick_nav: "ផ្លូវកាត់រហ័ស",
    nav_mgt_staff: "គ្រប់គ្រងបុគ្គលិក",
    nav_track_docs: "តាមដានឯកសារ",
    nav_qac_cl: "តារាងត្រួតពិនិត្យ QAC",
    nav_elab_tools: "ឧបករណ៍ E-Lab & AI",
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
    lbl_dept_author: "អ្នកទទួលខុសត្រូវ / កត់ត្រា (Author)",
    ph_dept_form_author: "ឧ. SC GEP, SSC KGE, Head Teacher...",
    lbl_dept_cover: "🖼️ រូបភាពតំណាង (Cover Image / Thumbnail)",
    btn_browse_img: "Upload ពីរូបក្នុងម៉ាស៊ីន (Browse)",
    lbl_dept_gallery: "📸 កម្រងរូបភាពបន្ថែម (Additional Gallery Photos)",
    btn_browse_multi: "ជ្រើសរើសរូបភាពច្រើន (Upload Multiple)",
    lbl_dept_desc: "ខ្លឹមសារសង្ខេប ឬកំណត់ហេតុពិស្តារ (Description / Details)",
    ph_dept_form_desc: "ពិពណ៌នាអំពីសកម្មភាព របៀបវារៈ ឬព័ត៌មានសំខាន់ៗ...",
    lbl_dept_doc: "📎 ឯកសារភ្ជាប់ (PDF / Word / Excel / PowerPoint)",
    btn_attach_file: "ជ្រើសរើសឯកសារ (Attach File)",
    btn_publish_now: "បង្ហោះ (Publish)",
    btn_download_img: "ទាញយករូបភាព",
    dept_gallery_title: "កម្រងរូបភាពបន្ថែម",
    photos_count_suffix: "រូប",
    qac_year_title: "ឆ្នាំសិក្សា / ជ្រើសរើសឆ្នាំ៖",
    qac_btn_refresh: "ផ្ទុកឡើងវិញ",

    // AI Assistant
    ai_badge_text: "សួរ AI 24/7",
    ai_status_online: "Online 24/7 • Khmer & English",
    ai_quick_suggestions: "សំណួររហ័ស (Quick Questions):",
    ai_chip_tuition: "តម្លៃសិក្សា & ការចុះឈ្មោះ",
    ai_chip_curriculum: "កម្មវិធី GEP & KGE",
    ai_chip_bus: "សេវាឡានដឹកសិស្ស",
    ai_chip_hours: "ម៉ោងសិក្សា & ថ្ងៃចូលរៀន",
    ai_chip_contact: "ទីតាំង & ទំនាក់ទំនង",

    // PWA & Footer
    pwa_title: "ដំឡើង SPS 25 Takeo App",
    pwa_sub: "ចុចដើម្បីដំឡើងលើអេក្រង់ទូរស័ព្ទដៃ",
    pwa_btn_install: "ដំឡើង",
    footer_copyright: "© 2026 សាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ (Sovannaphumi School 25, Takeo Campus)។ រក្សាសិទ្ធិគ្រប់យ៉ាង។"
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
    
    // Stats & Home
    stat_staff: "Total Staff",
    stat_docs: "Documents",
    stat_comp: "Compliance",
    stat_events: "Events Today",
    admission_tag: "Open For Admissions Daily",
    admission_title: "Student Admissions & Scholarship Inquiries",
    admission_desc: "Sovannaphumi School 25, Takeo Campus offers Khmer General Education (K-12), General English Program (GEP/IEP) with modern learning environments and professional educators.",
    btn_inquire: "Inquire About Admissions",
    quick_nav: "Quick Navigation",
    nav_mgt_staff: "Manage Staff",
    nav_track_docs: "Document Tracking",
    nav_qac_cl: "QAC Checklist",
    nav_elab_tools: "E-Lab & AI Tools",
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
    footer_copyright: "© 2026 Sovannaphumi School 25, Takeo Campus. All rights reserved."
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

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.warn('PWA ServiceWorker registration:', err);
    });
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
let currentDeptModule = 'meeting';
let inMemoryDeptPosts = null;
let deptSearchKeyword = '';

let currentDeptCoverFile = null;
let currentDeptGalleryFiles = [];
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

// Smart client-side image compressor (reduces multi-megabyte photos to lightweight WebP / JPEG)
function compressImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.75) {
  if (!file) return Promise.resolve(null);
  if (!file.type || !file.type.startsWith('image/')) {
    return fileToBase64(file);
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const webpUrl = canvas.toDataURL('image/webp', quality);
          if (webpUrl && webpUrl.startsWith('data:image/webp')) {
            resolve(webpUrl);
            return;
          }
        } catch (err) {}

        try {
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        } catch (err2) {
          resolve(e.target.result);
        }
      };
      img.onerror = function() {
        resolve(e.target.result);
      };
      img.src = e.target.result;
    };
    reader.onerror = function() {
      resolve(null);
    };
    reader.readAsDataURL(file);
  });
}

// Helper: convert file to Base64 data URL
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

// Smart merger for Firebase cloud data & local data (Preserves all created posts & full galleries)
function mergeAndSaveDeptPosts(cloudList) {
  const localList = getStoredDeptPosts();
  const map = new Map();

  // 1. First add all local posts so locally created/edited posts are preserved
  (localList || []).forEach(item => {
    if (item && item.id) map.set(String(item.id), item);
  });

  // 2. Add or update with cloud items
  (cloudList || []).forEach(item => {
    if (item && item.id && !String(item.id).startsWith('def_')) {
      const existing = map.get(String(item.id)) || {};
      const gallery = (Array.isArray(item.gallery) && item.gallery.length >= (existing.gallery || []).length)
        ? item.gallery
        : (existing.gallery || item.gallery || []);
      map.set(String(item.id), { ...existing, ...item, gallery, isCustom: true, syncedToCloud: true });
    }
  });

  const merged = Array.from(map.values());
  saveStoredDeptPosts(merged);
  return merged;
}

// Background sync for locally saved posts to Firestore
async function syncLocalDeptPostsToCloud() {
  if (!window.DepartmentService || !window.DepartmentService.create || !window.isFirebaseReady || !window.isFirebaseReady()) return;
  const localList = getStoredDeptPosts();
  let changed = false;
  for (const post of localList) {
    if (post && post.isCustom && !post.syncedToCloud) {
      try {
        const res = await window.DepartmentService.create(post, null, null, post.gallery || []);
        if (res && res.id) {
          post.syncedToCloud = true;
          changed = true;
        }
      } catch (e) {
        console.warn('Background sync note for post:', post.title, e);
      }
    }
  }
  if (changed) {
    saveStoredDeptPosts(localList);
  }
}

window.navigateToDepartment = function(deptKey, moduleKey = 'meeting') {
  navigateTo('Department');
  switchDepartmentTab(deptKey || currentDepartment || 'kge_sec');
  if (moduleKey) {
    const modBtn = document.getElementById('dept-mod-' + moduleKey);
    if (modBtn) switchDeptModule(moduleKey, modBtn);
  }
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
  currentDeptModule = moduleKey || 'meeting';

  document.querySelectorAll('.dept-side-link').forEach(btn => btn.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  } else {
    const target = document.getElementById('dept-mod-' + moduleKey);
    if (target) target.classList.add('active');
  }

  const modInfo = DEPT_MODULE_INFO[moduleKey] || DEPT_MODULE_INFO.meeting;
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
  const currentModKey = String(currentDeptModule || 'meeting').trim().toLowerCase();

  const key = `${currentDeptKey}_${currentModKey}`;
  const defaultList = DEFAULT_DEPT_ITEMS[key] || [];
  
  // Custom posts (from Firestore & localStorage & in-memory)
  const storedList = getStoredDeptPosts();
  const customList = storedList.filter(p => {
    if (!p) return false;
    const pDept = String(p.department || currentDeptKey).trim().toLowerCase();
    const pMod = String(p.module || currentModKey).trim().toLowerCase();
    return pDept === currentDeptKey && pMod === currentModKey;
  });

  let combined = [...customList, ...defaultList];

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
    const rawMod = item.module || currentDeptModule || 'meeting';
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
            <div style="display: flex; gap: 6px; margin-bottom: 6px; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; background: #e0f2fe; color: #0071ba; padding: 2px 9px; border-radius: 10px; font-weight: 700;">
                ${deptInfo.icon} ${deptName}
              </span>
              <span style="font-size: 0.75rem; background: #f1f5f9; color: #475569; padding: 2px 9px; border-radius: 10px; font-weight: 600;">
                <i class="${modInfo.icon}" style="font-size: 0.7rem;"></i> ${modTitle}
              </span>
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

window.handleDeptCoverSelect = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  currentDeptCoverFile = file;
  
  const preview = document.getElementById('dept-cover-preview');
  const img = document.getElementById('dept-cover-preview-img');
  const hiddenUrl = document.getElementById('dept-cover-custom-url');
  const selectPreset = document.getElementById('dept-image-preset-select');
  
  if (selectPreset) selectPreset.value = 'custom';
  if (hiddenUrl) hiddenUrl.value = '';
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    if (img) img.src = evt.target.result;
    if (preview) preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
};

window.handleDeptGallerySelect = function(e) {
  const files = Array.from(e.target.files || []);
  currentDeptGalleryFiles = files;
  
  const container = document.getElementById('dept-gallery-preview-container');
  if (!container) return;
  
  container.innerHTML = files.map((f, i) => `
    <div style="position: relative; width: 60px; height: 60px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1;">
      <img src="${URL.createObjectURL(f)}" alt="Gallery Preview" style="width: 100%; height: 100%; object-fit: cover;">
      <span style="position: absolute; bottom: 2px; right: 2px; background: rgba(0,0,0,0.6); color: white; font-size: 0.65rem; padding: 1px 4px; border-radius: 4px;">#${i+1}</span>
    </div>
  `).join('');
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
  currentDeptGalleryFiles = [];
  currentDeptDocFile = null;

  const modal = document.getElementById('dept-publish-modal');
  const form = document.getElementById('dept-publish-form');
  const titleText = document.getElementById('dept-modal-title-text');
  const submitText = document.getElementById('dept-btn-submit-text');
  const idEdit = document.getElementById('dept-post-id-edit');
  const preview = document.getElementById('dept-cover-preview');
  const galleryContainer = document.getElementById('dept-gallery-preview-container');
  const docBadge = document.getElementById('dept-doc-preview-badge');

  if (form) form.reset();
  if (preview) preview.style.display = 'none';
  if (galleryContainer) galleryContainer.innerHTML = '';
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
        if (galleryContainer) {
          galleryContainer.innerHTML = item.gallery.map((imgUrl, i) => `
            <div style="position: relative; width: 60px; height: 60px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1;">
              <img src="${imgUrl}" alt="Gallery Preview" style="width: 100%; height: 100%; object-fit: cover;">
              <span style="position: absolute; bottom: 2px; right: 2px; background: rgba(0,0,0,0.6); color: white; font-size: 0.65rem; padding: 1px 4px; border-radius: 4px;">#${i+1}</span>
            </div>
          `).join('');
        }
      }
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
        coverImage = await compressImageFile(currentDeptCoverFile, 1200, 1200, 0.72);
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

    // 3. Process & Compress Multiple Gallery Images (Retains all uploaded images)
    let galleryList = [];
    if (currentDeptGalleryFiles && currentDeptGalleryFiles.length > 0) {
      const totalGal = currentDeptGalleryFiles.length;
      if (submitTextSpan) submitTextSpan.innerText = `កំពុងបង្ហាប់រូបភាព (0/${totalGal})...`;
      
      let doneCount = 0;
      const compressPromises = currentDeptGalleryFiles.map(async (file) => {
        try {
          const comp = await compressImageFile(file, 960, 960, 0.65);
          doneCount++;
          if (submitTextSpan) submitTextSpan.innerText = `កំពុងបង្ហាប់រូបភាព (${doneCount}/${totalGal})...`;
          return comp;
        } catch (e) {
          return await fileToBase64(file);
        }
      });
      galleryList = (await Promise.all(compressPromises)).filter(Boolean);
    } else if (editId) {
      const allPosts = getStoredDeptPosts();
      const existingPost = allPosts.find(p => String(p.id) === String(editId));
      if (existingPost && Array.isArray(existingPost.gallery)) {
        galleryList = existingPost.gallery;
      }
    }

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

    if (submitTextSpan) submitTextSpan.innerText = 'កំពុងរក្សាទុក...';

    // 1. Immediately Save to Local Cache & State
    const currentList = getStoredDeptPosts();
    if (editId) {
      const idx = currentList.findIndex(p => String(p.id) === String(editId));
      if (idx !== -1) {
        currentList[idx] = { ...currentList[idx], ...payload };
      } else {
        currentList.unshift(payload);
      }
    } else {
      currentList.unshift(payload);
    }
    saveStoredDeptPosts(currentList);

    // 2. Switch Tab & Module to match published post and render IMMEDIATELY
    currentDepartment = dept;
    currentDeptModule = mod;
    switchDepartmentTab(dept);
    const modBtn = document.getElementById('dept-mod-' + mod);
    if (modBtn) switchDeptModule(mod, modBtn);
    renderDeptContent();

    // 3. Automatically sync and update main School Activities & News feed
    if (typeof renderNewsGrid === 'function') {
      renderNewsGrid();
    }

    closeDeptPublishModal();

    if (editId) {
      alert('🎉 បានកែប្រែព័ត៌មានដេប៉ាតឺម៉ង់ដោយជោគជ័យ!');
    } else {
      alert(`🎉 បានបង្ហោះចូលផ្នែក «${DEPT_MODULE_INFO[mod]?.title || mod}» នៃដេប៉ាតឺម៉ង់ «${DEPT_INFO[dept]?.name || dept}» ដោយជោគជ័យ!`);
    }

    // Scroll smoothly to the content
    const area = document.querySelector('.dept-content-area');
    if (area) area.scrollIntoView({ behavior: 'smooth' });

    // 3. Background Sync to Firebase Firestore / Storage
    if (window.DepartmentService && (window.DepartmentService.create || window.DepartmentService.update) && window.isFirebaseReady && window.isFirebaseReady()) {
      try {
        if (editId) {
          await window.DepartmentService.update(editId, payload, currentDeptCoverFile, currentDeptDocFile, currentDeptGalleryFiles);
        } else {
          const res = await window.DepartmentService.create(payload, currentDeptCoverFile, currentDeptDocFile, currentDeptGalleryFiles);
          if (res && res.id && res.id !== postId) {
            const all = getStoredDeptPosts();
            const it = all.find(p => p.id === postId);
            if (it) {
              it.id = res.id;
              it.syncedToCloud = true;
              saveStoredDeptPosts(all);
              renderDeptContent();
            }
          }
        }
      } catch (fbErr) {
        console.warn('Firebase cloud sync in background note:', fbErr);
      }
    }

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

// Initialize Department Service Real-time Subscription Helper
function initDepartmentRealtimeSync() {
  // Asynchronously hydrate local cache from IndexedDB
  loadDeptPostsFromIndexedDB().then(idbList => {
    if (idbList && Array.isArray(idbList) && idbList.length > 0) {
      inMemoryDeptPosts = idbList;
      if (typeof renderDeptContent === 'function') {
        renderDeptContent();
      }
    }
  });

  if (window.DepartmentService && window.DepartmentService.subscribe && window.isFirebaseReady && window.isFirebaseReady()) {
    window.DepartmentService.subscribe((list) => {
      if (list && Array.isArray(list) && list.length > 0) {
        mergeAndSaveDeptPosts(list);
        renderDeptContent();
        if (typeof renderNewsGrid === 'function') {
          renderNewsGrid();
        }
      } else {
        syncLocalDeptPostsToCloud();
        renderDeptContent();
        if (typeof renderNewsGrid === 'function') {
          renderNewsGrid();
        }
      }
    });
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
- Working & Operating Hours (ម៉ោងធ្វើការ & ផ្តល់ព័ត៌មាន):
  • Monday to Friday (ច័ន្ទ ដល់ សុក្រ): 7:00 AM - 6:30 PM (7:00 ព្រឹក – 6:30 ល្ងាច)
  • Saturday (សៅរ៍): 7:00 AM - 11:00 AM (7:00 ព្រឹក – 11:00 ព្រឹក)
  • Sunday (អាទិត្យ): CLOSED (សម្រាក / បិទទ្វារ)
- Study Shifts (វេនសិក្សា): Morning (7:00 AM - 11:00 AM) and Afternoon (1:00 PM - 5:00 PM)

2. Academic Programs:
- KGE (Khmer General Education / ចំណេះទូទៅខ្មែរ): Kindergarten to Grade 12 (មត្តេយ្យ ដល់ ថ្នាក់ទី១២) recognized by MoEYS.
- GEP (General English Program / ភាសាអង់គ្លេសទូទៅ): Level 1 to Level 12 (aligned with Cambridge Assessment English).
- Kindergarten / Pre-School (មត្តេយ្យសិក្សា): Play-based learning, cognitive development, physical and moral activities.
- STEM & E-Lab (មន្ទីរពិសោធន៍បច្ចេកវិទ្យា & STEM): 120+ interactive tools, computer lab, modern robotics/coding exposure.

3. Admissions & Tuition:
- Tuition fees are affordable and tailored per grade level and program.
- Scholarship & Early-Bird Discounts: 10% to 30% discounts for early enrollment, sibling enrollments, and academic excellence.
- Required Enrollment Documents: Student birth certificate copy, 3 photos (4x6), family/residence book.

4. Facilities & Transportation:
- School Bus (សេវាឡានដឹកសិស្ស): Air-conditioned vans/buses with verified drivers, safety seatbelts, dedicated attendants across Doun Kaev Town and nearby districts in Takeo (Contact: 015 838 928).
- Classroom & Campus: Modern air-conditioned rooms, multimedia projectors, safe playground, hygienic canteen, library, clean restrooms.

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

window.handleSPSAssistantSubmit = async function(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('sps-ai-input');
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  input.value = '';
  appendSPSMessage('user', query);
  spsAIChatHistory.push({ role: 'user', content: query });

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
  }, 350 + Math.random() * 200);
};

function sendSPSAssistantWelcome() {
  const isKhmer = (currentAppLanguage !== 'en');
  const welcomeText = isKhmer
    ? "👋 **សួស្តី! ខ្ញុំជាជំនួយការឆ្លាតវៃ (AI Assistant) នៃសាលារៀនសុវណ្ណភូមិទី25 ទីតាំងខេត្តតាកែវ**。\n\nខ្ញុំត្រៀមឆ្លើយរាល់ចម្ងល់របស់អ្នក ២៤/៧ អំពី៖\n• 🎓 **កម្មវិធីសិក្សា (GEP & KGE)**\n• 💰 **តម្លៃសិក្សា & ការចុះឈ្មោះ**\n• 🚌 **សេវាឡានដឹកសិស្ស (School Bus)**\n• ⏰ **ម៉ោងសិក្សា & ទីតាំង**\n\nសូមជ្រើសរើស **សំណួររហ័ស** ខាងក្រោម ឬវាយសំណួររបស់អ្នកបានភ្លាមៗ!"
    : "👋 **Hello! I am the Smart AI Assistant of Sovannaphumi School 25, Takeo Campus**.\n\nI am here 24/7 to answer your questions about:\n• 🎓 **Curriculum (GEP & KGE)**\n• 💰 **Tuition & Admissions**\n• 🚌 **School Bus Transportation**\n• ⏰ **Class Schedule & Campus Location**\n\nFeel free to tap a quick suggestion chip below or type your question!";

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
  if (isRawHtml) {
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

  // 3. School Bus & Transportation & Services
  if (q.includes('ឡាន') || q.includes('ដឹក') || q.includes('សេវា') || q.includes('ធ្វើដំណើរ') || q.includes('bus') || q.includes('van') || q.includes('transport') || q.includes('route') || q.includes('canteen') || q.includes('service')) {
    if (isKh) {
      return "🚌 **សេវាឡានដឹកសិស្ស & សេវាកម្មសាលាទាំងអស់ (School Bus & Services)**\n\n• **សុវត្ថិភាពខ្ពស់:** ឡានដឹកសិស្សទំនើប មានម៉ាស៊ីនត្រជាក់ ខ្សែក្រវ៉ាត់សុវត្ថិភាព និងអ្នកបើកបរមានការបណ្តុះបណ្តាលច្បាស់លាស់\n• **តំបន់សេវាកម្ម:** ដឹកជញ្ជូនសិស្សានុសិស្សជុំវិញក្រុងដូនកែវ និងបណ្តាឃុំ/ស្រុកជិតខាងក្នុងខេត្តតាកែវ\n• **ការយកចិត្តទុកដាក់:** មានបុគ្គលិកជួយសម្របសម្រួល និងតាមដានសុវត្ថិភាពកូនៗរៀងរាល់ពេលចេញ-ចូលរៀន\n\n📞 **ទំនាក់ទំនងផ្នែកសេវាកម្មសាលា & ឡានដឹកផ្ទាល់:**\n• 📱 **Telegram / Tel:** [015 838 928](https://t.me/+85515838928) (ទូរស័ព្ទ: **015 838 928**)\n• 🏢 **រដ្ឋបាលកណ្តាល:** **015 838 049**";
    } else {
      return "🚌 **Safe School Bus & School Services (Sovannaphumi School 25, Takeo Campus)**\n\n• **Safety First:** Air-conditioned vans/buses with safety seatbelts and verified professional drivers.\n• **Coverage Area:** Transports students across Doun Kaev Town and neighboring districts in Takeo Province.\n• **Dedicated Staff:** Assigned attendants assisting students during boarding and arrival.\n\n📞 **Direct School Services & Bus Department Contact:**\n• 📱 **Telegram / Tel:** [015 838 928](https://t.me/+85515838928) (Hotline: **+855 15 838 928**)\n• 🏢 **Head Administration:** **+855 15 838 049**";
    }
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

