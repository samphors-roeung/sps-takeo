/**
 * Sovannaphumi School Takeo Campus - Main Application Logic
 * ជំនួស Code.gs, JS.gs និង JavaScript.html
 */

// ១. ទិន្នន័យស្ថិតិ Dashboard (លំនាំតាម JS.gs)
const dashboardData = {
  totalStaff: 124,
  documents: 845,
  compliance: "92%",
  eventsToday: 3
};

// ២. ទិន្នន័យ E-Lab & AI Tools (ស្រង់ចេញពី ELab.html ចំនួន ១២៦ Tools)
const teacherTools = [
  { name: "Google Classroom", icon: "🏫", desc: "Manage classes and assignments.", url: "https://classroom.google.com/" },
  { name: "Kahoot!", icon: "🎮", desc: "Game-based learning platform.", url: "https://kahoot.com/" },
  { name: "Quizizz", icon: "🎯", desc: "Interactive quizzes and lessons.", url: "https://quizizz.com/" },
  { name: "Padlet", icon: "📋", desc: "Collaborative digital bulletin board.", url: "https://padlet.com/" },
  { name: "Nearpod", icon: "📱", desc: "Interactive slides and assessments.", url: "https://nearpod.com/" },
  { name: "Edpuzzle", icon: "🧩", desc: "Make any video your lesson.", url: "https://edpuzzle.com/" },
  { name: "MoEYS E-Learning", icon: "🇰🇭", desc: "Official Ministry of Education resources.", url: "https://elearning.moeys.gov.kh/" },
  { name: "E-School Cambodia", icon: "🏫", desc: "Khmer school management system.", url: "https://e-schoolcambodia.com/" },
  { name: "Canva Education", icon: "🎨", desc: "Create educational graphics.", url: "https://www.canva.com/education/" },
  { name: "ClassDojo", icon: "👾", desc: "Classroom behavior management.", url: "https://www.classdojo.com/" },
  { name: "Blooket", icon: "🎲", desc: "Review games with trivia.", url: "https://www.blooket.com/" },
  { name: "Sala.co", icon: "💻", desc: "Khmer LMS and student management.", url: "https://www.sala.co/" },
  { name: "Tesdopi", icon: "🔬", desc: "Khmer STEM learning application.", url: "https://tesdopi.com/" },
  { name: "PhET Simulations", icon: "🧪", desc: "Interactive math & science simulations.", url: "https://phet.colorado.edu/" },
  { name: "GeoGebra", icon: "📐", desc: "Dynamic mathematics software.", url: "https://www.geogebra.org/" },
  { name: "Desmos", icon: "📈", desc: "Advanced graphing calculator.", url: "https://www.desmos.com/" },
  { name: "Scratch", icon: "🐱", desc: "Block-based coding for kids.", url: "https://scratch.mit.edu/" },
  { name: "Code.org", icon: "💻", desc: "Computer science learning platform.", url: "https://code.org/" },
  { name: "Krou.kh", icon: "📚", desc: "Khmer teacher resource sharing platform.", url: "https://krou.moeys.gov.kh/" },
  { name: "Edemy", icon: "🎓", desc: "Khmer blended learning platform.", url: "https://edemy.co/" },
  { name: "Khan Academy", icon: "🏛️", desc: "Free world-class education for anyone.", url: "https://www.khanacademy.org/" },
  { name: "TED-Ed", icon: "🎥", desc: "Educational videos and lessons.", url: "https://ed.ted.com/" },
  { name: "Quizlet", icon: "📇", desc: "Flashcards and study sets.", url: "https://quizlet.com/" },
  { name: "Pear Deck", icon: "🍐", desc: "Add interactivity to presentations.", url: "https://www.peardeck.com/" },
  { name: "Flipgrid", icon: "📹", desc: "Video discussion platform.", url: "https://info.flip.com/" },
  { name: "Moodle", icon: "🎓", desc: "Open-source learning management.", url: "https://moodle.org/" },
  { name: "Seesaw", icon: "📁", desc: "Student driven digital portfolios.", url: "https://web.seesaw.me/" },
  { name: "Socrative", icon: "📝", desc: "Real-time formative assessment.", url: "https://www.socrative.com/" },
  { name: "Mentimeter", icon: "📊", desc: "Interactive presentations and polling.", url: "https://www.mentimeter.com/" },
  { name: "Trello", icon: "📋", desc: "Project organization for teachers.", url: "https://trello.com/" },
  { name: "Notion", icon: "📓", desc: "All-in-one workspace and planning.", url: "https://www.notion.so/" },
  { name: "Zoom", icon: "📹", desc: "Virtual classrooms and meetings.", url: "https://zoom.us/" },
  { name: "Microsoft Teams", icon: "🤝", desc: "Collaboration and communication hub.", url: "https://www.microsoft.com/en-us/education/products/teams" },
  { name: "Google Workspace", icon: "☁️", desc: "Docs, Sheets, and Drive for education.", url: "https://edu.google.com/workspace-for-education/" },
  { name: "Labster", icon: "🔬", desc: "Virtual science laboratory simulations.", url: "https://www.labster.com/" },
  { name: "ChemCollective", icon: "🧪", desc: "Virtual chemistry lab and activities.", url: "http://chemcollective.org/" },
  { name: "TPT", icon: "🍎", desc: "Marketplace for lesson plans.", url: "https://www.teacherspayteachers.com/" },
  { name: "Edutopia", icon: "💡", desc: "Teaching strategies and tips.", url: "https://www.edutopia.org/" },
  { name: "Mengly Library", icon: "📖", desc: "Khmer educational library resources.", url: "https://www.mjqeducation.edu.kh/" },
  { name: "Khmer Academy", icon: "🇰🇭", desc: "Khmer online learning platform.", url: "https://khmeracademy.org/" },
  { name: "ChatGPT", icon: "🤖", desc: "AI assistant for lesson planning.", url: "https://chatgpt.com/" },
  { name: "Claude AI", icon: "🧠", desc: "Advanced AI for educational tasks.", url: "https://claude.ai/" }
];

const studentTools = [
  { name: "Google Classroom", icon: "🏫", desc: "Access classwork and assignments.", url: "https://classroom.google.com/" },
  { name: "Khan Academy", icon: "🏛️", desc: "Free online courses and practice.", url: "https://www.khanacademy.org/" },
  { name: "MoEYS E-Learning", icon: "🇰🇭", desc: "Official MoEYS curriculum & videos.", url: "https://elearning.moeys.gov.kh/" },
  { name: "E-School Cambodia", icon: "🏫", desc: "Khmer school learning app.", url: "https://e-schoolcambodia.com/" },
  { name: "Tesdopi", icon: "🔬", desc: "Khmer STEM learning & exercises.", url: "https://tesdopi.com/" },
  { name: "Sala.co", icon: "💻", desc: "University majors & career tests.", url: "https://www.sala.co/" },
  { name: "Duraseksa", icon: "📡", desc: "Distance learning program.", url: "https://duraseksa.com/" },
  { name: "Khmer Academy", icon: "🇰🇭", desc: "Khmer coding and tech tutorials.", url: "https://khmeracademy.org/" },
  { name: "Mengly Library", icon: "📖", desc: "Khmer educational library resources.", url: "https://www.mjqeducation.edu.kh/" },
  { name: "BacII App", icon: "🎓", desc: "Grade 12 national exam prep.", url: "https://moeys.gov.kh/" },
  { name: "Koompi Academy", icon: "🐧", desc: "Khmer open-source learning.", url: "https://academy.koompi.com/" },
  { name: "Edemy", icon: "📝", desc: "Khmer English learning platform.", url: "https://edemy.co/" },
  { name: "Quizlet", icon: "📇", desc: "Flashcards and study sets.", url: "https://quizlet.com/" },
  { name: "Duolingo", icon: "🦉", desc: "Learn languages for free.", url: "https://www.duolingo.com/" },
  { name: "Photomath", icon: "📸", desc: "Scan and solve math problems.", url: "https://photomath.com/" },
  { name: "Wolfram Alpha", icon: "∑", desc: "Computational knowledge engine.", url: "https://www.wolframalpha.com/" },
  { name: "Desmos", icon: "📈", desc: "Advanced graphing calculator.", url: "https://www.desmos.com/" },
  { name: "GeoGebra", icon: "📐", desc: "Dynamic mathematics software.", url: "https://www.geogebra.org/" },
  { name: "PhET Simulations", icon: "🧪", desc: "Interactive math & science labs.", url: "https://phet.colorado.edu/" },
  { name: "Scratch", icon: "🐱", desc: "Block-based coding for kids.", url: "https://scratch.mit.edu/" },
  { name: "Code.org", icon: "💻", desc: "Computer science learning platform.", url: "https://code.org/" },
  { name: "Codecademy", icon: "👨💻", desc: "Learn to code interactively.", url: "https://www.codecademy.com/" },
  { name: "Wikipedia", icon: "🌐", desc: "Free online encyclopedia.", url: "https://www.wikipedia.org/" },
  { name: "Google Scholar", icon: "🎓", desc: "Search academic research.", url: "https://scholar.google.com/" },
  { name: "ResearchGate", icon: "🔬", desc: "Discover scientific knowledge.", url: "https://www.researchgate.net/" },
  { name: "PubMed", icon: "🧬", desc: "Life sciences and biomedical research.", url: "https://pubmed.ncbi.nlm.nih.gov/" },
  { name: "Brainly", icon: "🧠", desc: "Peer-to-peer homework help.", url: "https://brainly.com/" },
  { name: "TED-Ed", icon: "🎥", desc: "Educational videos and lessons.", url: "https://ed.ted.com/" },
  { name: "CrashCourse", icon: "🎬", desc: "High-quality educational videos.", url: "https://thecrashcourse.com/" },
  { name: "Coursera", icon: "🎓", desc: "Online courses from universities.", url: "https://www.coursera.org/" },
  { name: "edX", icon: "🏫", desc: "Access 2000 free online courses.", url: "https://www.edx.org/" },
  { name: "Grammarly", icon: "✍️", desc: "Writing and grammar assistant.", url: "https://www.grammarly.com/" },
  { name: "Hemingway", icon: "📝", desc: "Make your writing bold and clear.", url: "https://hemingwayapp.com/" },
  { name: "Canva", icon: "🎨", desc: "Create presentations and designs.", url: "https://www.canva.com/" },
  { name: "Notion", icon: "📓", desc: "All-in-one workspace and planning.", url: "https://www.notion.so/" },
  { name: "Evernote", icon: "🐘", desc: "Note-taking and organization.", url: "https://evernote.com/" },
  { name: "Forest", icon: "🌳", desc: "Stay focused, be present app.", url: "https://www.forestapp.cc/" },
  { name: "Pomofocus", icon: "🍅", desc: "Pomodoro timer for studying.", url: "https://pomofocus.io/" },
  { name: "Kahoot!", icon: "🎮", desc: "Play learning games and quizzes.", url: "https://kahoot.it/" },
  { name: "Quizizz", icon: "🎯", desc: "Play multiplayer review games.", url: "https://quizizz.com/join" },
  { name: "ChatGPT", icon: "🤖", desc: "AI assistant for study help.", url: "https://chatgpt.com/" },
  { name: "Perplexity AI", icon: "🔍", desc: "AI search engine for research.", url: "https://www.perplexity.ai/" }
];

const aiTools = [
  { name: "ChatGPT", icon: "💬", desc: "OpenAI's conversational AI model.", url: "https://chatgpt.com/" },
  { name: "Claude AI", icon: "🧠", desc: "Anthropic's advanced AI assistant.", url: "https://claude.ai/" },
  { name: "Google Gemini", icon: "✨", desc: "Google's multimodal AI model.", url: "https://gemini.google.com/" },
  { name: "Microsoft Copilot", icon: "💻", desc: "Your everyday AI companion.", url: "https://copilot.microsoft.com/" },
  { name: "Midjourney", icon: "🎨", desc: "High-quality AI image generation.", url: "https://www.midjourney.com/" },
  { name: "DALL-E 3", icon: "🖼️", desc: "Create images from text by OpenAI.", url: "https://openai.com/dall-e-3" },
  { name: "Stable Diffusion", icon: "🌌", desc: "Open-source image generator.", url: "https://stability.ai/" },
  { name: "Leonardo AI", icon: "🖌️", desc: "Create production-quality assets.", url: "https://leonardo.ai/" },
  { name: "RunwayML", icon: "🎬", desc: "Advancing creativity with AI video.", url: "https://runwayml.com/" },
  { name: "Sora", icon: "🎥", desc: "OpenAI's text-to-video model.", url: "https://openai.com/sora" },
  { name: "Synthesia", icon: "👩💼", desc: "Create AI avatar videos easily.", url: "https://www.synthesia.io/" },
  { name: "HeyGen", icon: "🗣️", desc: "AI video generation for teams.", url: "https://www.heygen.com/" },
  { name: "ElevenLabs", icon: "🎙️", desc: "Realistic AI voice generator.", url: "https://elevenlabs.io/" },
  { name: "Suno AI", icon: "🎵", desc: "Create songs from text prompts.", url: "https://suno.com/" },
  { name: "Udio", icon: "🎧", desc: "High-fidelity AI music creation.", url: "https://www.udio.com/" },
  { name: "Notion AI", icon: "📓", desc: "Work faster with AI writing tools.", url: "https://www.notion.so/product/ai" },
  { name: "GrammarlyGO", icon: "✍️", desc: "AI communication assistant.", url: "https://www.grammarly.com/ai" },
  { name: "Jasper AI", icon: "📝", desc: "AI copilot for marketing teams.", url: "https://www.jasper.ai/" },
  { name: "Copy.ai", icon: "🖊️", desc: "Generate copy and content faster.", url: "https://www.copy.ai/" },
  { name: "Writesonic", icon: "⚡", desc: "AI writer and SEO content creator.", url: "https://writesonic.com/" },
  { name: "Rytr", icon: "✒️", desc: "AI writing assistant & content generator.", url: "https://rytr.me/" },
  { name: "QuillBot", icon: "🔄", desc: "AI paraphrasing and writing tool.", url: "https://quillbot.com/" },
  { name: "Perplexity", icon: "🔍", desc: "AI-powered search and discovery.", url: "https://www.perplexity.ai/" },
  { name: "You.com", icon: "🔎", desc: "The AI search engine you control.", url: "https://you.com/" },
  { name: "Phind", icon: "💻", desc: "AI search engine for developers.", url: "https://www.phind.com/" },
  { name: "GitHub Copilot", icon: "🐙", desc: "Your AI pair programmer.", url: "https://github.com/features/copilot" },
  { name: "Cursor", icon: "⌨️", desc: "The AI-first code editor.", url: "https://cursor.sh/" },
  { name: "Gamma", icon: "📊", desc: "A new medium for presenting ideas.", url: "https://gamma.app/" },
  { name: "Tome", icon: "📖", desc: "AI-powered storytelling format.", url: "https://tome.app/" },
  { name: "Beautiful.ai", icon: "🎨", desc: "Presentation maker with AI design.", url: "https://www.beautiful.ai/" },
  { name: "Hugging Face", icon: "🤗", desc: "The AI community building the future.", url: "https://huggingface.co/" },
  { name: "Replicate", icon: "⚙️", desc: "Run machine learning models in cloud.", url: "https://replicate.com/" },
  { name: "Fireflies.ai", icon: "🔥", desc: "Automate your meeting notes.", url: "https://fireflies.ai/" },
  { name: "Otter.ai", icon: "🦦", desc: "AI meeting assistant and transcription.", url: "https://otter.ai/" },
  { name: "Llama", icon: "🦙", desc: "Meta's open foundation models.", url: "https://llama.meta.com/" },
  { name: "Mistral AI", icon: "💨", desc: "Frontier AI in your hands.", url: "https://mistral.ai/" },
  { name: "Character.ai", icon: "🎭", desc: "Chat with AI characters and personas.", url: "https://character.ai/" },
  { name: "Pi by Inflection", icon: "🥧", desc: "Your personal AI companion.", url: "https://pi.ai/" },
  { name: "Krea AI", icon: "🖌️", desc: "Real-time AI image generation.", url: "https://www.krea.ai/" },
  { name: "Magnific AI", icon: "✨", desc: "AI image upscaler and enhancer.", url: "https://magnific.ai/" },
  { name: "Canva Magic Studio", icon: "🪄", desc: "All the power of AI, all in Canva.", url: "https://www.canva.com/magic/" },
  { name: "Adobe Firefly", icon: "🦋", desc: "Generative AI for creators.", url: "https://firefly.adobe.com/" }
];

// ៣. មុខងារផ្លាស់ប្តូរទំព័រ (Single Page Navigation)
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

  // Scroll ឡើងលើវិញ
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ៤. មុខងារផ្លាស់ប្តូរ Sub-tab ក្នុង E-Lab & AI
function switchElabTab(tabId, element) {
  document.querySelectorAll('#elab-menu .side-link').forEach(link => {
    link.classList.remove('active');
  });
  element.classList.add('active');

  document.getElementById('elab-teacher').style.display = 'none';
  document.getElementById('elab-student').style.display = 'none';
  document.getElementById('elab-ai').style.display = 'none';

  const activeTab = document.getElementById('elab-' + tabId);
  if (activeTab) {
    activeTab.style.display = 'block';
  }
}

// ៥. មុខងារ Render Grid Cards សម្រាប់ E-Lab
function renderToolGrid(containerId, tools) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = tools.map(tool => `
    <div class="tool-card" onclick="window.open('${tool.url}', '_blank')">
      <div style="font-size: 1.8rem; margin-bottom: 6px; line-height: 1;">${tool.icon}</div>
      <h4 style="margin: 0 0 3px; font-size: 0.78rem; color: #1e293b; font-weight: 700;">${tool.name}</h4>
      <p style="margin: 0; font-size: 0.68rem; color: #64748b; line-height: 1.2;">${tool.desc}</p>
    </div>
  `).join('');
}

// ៦. បង្ហាញកាលបរិច្ឆេទថ្ងៃនេះ (ស្រង់ពី JavaScript.html)
function initCurrentDate() {
  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = new Date().toLocaleDateString('en-US', options);
  }
}

// ៧. បង្ហាញ Dashboard Stats
function renderDashboardStats() {
  const staffEl = document.getElementById('staff-count');
  const docEl = document.getElementById('doc-count');
  const compEl = document.getElementById('comp-count');
  const eventEl = document.getElementById('event-count');

  if (staffEl) staffEl.innerText = dashboardData.totalStaff;
  if (docEl) docEl.innerText = dashboardData.documents;
  if (compEl) compEl.innerText = dashboardData.compliance;
  if (eventEl) eventEl.innerText = dashboardData.eventsToday;
}

// ៨. Toggle Mobile Menu
function toggleMobileNav() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) {
    menu.classList.toggle('mobile-open');
  }
}

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

  // Render E-Lab Grids
  renderToolGrid('teacher-tools-grid', teacherTools);
  renderToolGrid('student-tools-grid', studentTools);
  renderToolGrid('ai-tools-grid', aiTools);

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
    content: "សាលារៀនសុវណ្ណភូមិ សាខាតាកែវ បានរៀបចំសិក្ខាសាលាផ្ទៃក្នុងស្តីពី «ការអនុវត្តបច្ចេកវិទ្យា AI ក្នុងការបង្រៀន និងរៀនសតវត្សរ៍ទី២១» ជូនដល់គណៈគ្រប់គ្រង និងលោកគ្រូ-អ្នកគ្រូទាំងអស់។\n\nសិក្ខាសាលានេះផ្តោតសំខាន់លើការប្រើប្រាស់ឧបករណ៍ AI ដូចជា ChatGPT, Claude, Canva Education និង Edpuzzle ក្នុងការរៀបចំកិច្ចតែងការបង្រៀន ការបង្កើតកម្រងសំណួរអន្តរកម្ម និងការវាយតម្លៃសមត្ថភាពសិស្សប្រកបដោយភាពច្នៃប្រឌិតខ្ពស់។",
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
    content: "ដើម្បីបន្តពង្រឹងគុណភាពអប់រំ សាលារៀនសុវណ្ណភូមិបានរៀបចំវគ្គបណ្តុះបណ្តាលបន្តគរុកោសល្យជូនដល់លោកគ្រូ-អ្នកគ្រូគ្រប់កម្រិតថ្នាក់។\n\nវគ្គបណ្តុះបណ្តាលនេះផ្តោតលើវិធីសាស្ត្របង្រៀនបែបសកម្ម (Active Learning), ការលើកទឹកចិត្តសិស្សឱ្យចូលរួមពិភាក្សា និងការគ្រប់គ្រងថ្នាក់រៀនបែបវិជ្ជមាន (Positive Classroom Management) ដើម្បីធានាថាសិស្សគ្រប់រូបទទួលបានចំណេះដឹងយ៉ាងពិតប្រាកដ។",
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
    content: "សាលារៀនសុវណ្ណភូមិ សាខាតាកែវ សូមស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះសិស្សានុសិស្សចាស់-ថ្មីទាំងអស់ក្នុងឱកាសបើកបវេសនកាលថ្មី។\n\nសាលាផ្តល់ជូននូវកម្មវិធីសិក្សាគ្រប់ជ្រុងជ្រោយ រួមមាន៖\n- កម្មវិធីចំណេះទូទៅខ្មែរ (ពីថ្នាក់មត្តេយ្យ ដល់ថ្នាក់ទី១២)\n- កម្មវិធីភាសាអង់គ្លេសទូទៅ (General English Program - GEP)\n- កម្មវិធីភាសាអង់គ្លេសកម្រិតខ្ពស់ (Integrated English Program - IEP)\n- វគ្គត្រៀមប្រឡងតេស្តអន្តរជាតិ Cambridge & IELTS។",
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
    content: "គណៈគ្រប់គ្រងសាលារៀនសុវណ្ណភូមិ សាខាតាកែវ បានរៀបចំកិច្ចប្រជុំបូកសរុបលទ្ធផលការងារប្រចាំខែជាមួយបុគ្គលិកគ្រប់ផ្នែក។\n\nកិច្ចប្រជុំបានពិភាក្សាលើការកែលម្អសេវាកម្មទទួលស្វាគមន៍ ការគ្រប់គ្រងឯកសារចេញ-ចូល (Document In & Out) និងការអនុវត្តស្តង់ដារត្រួតពិនិត្យគុណភាព QAC ដើម្បីធានាបាននូវការបម្រើសេវាកម្មប្រកបដោយវិជ្ជាជីវៈខ្ពស់ជូនដល់មាតាបិតា និងអាណាព្យាបាលសិស្ស។",
    isCustom: false
  }
];

let currentNewsCategory = 'all';
let currentNewsSearch = '';

// Google Sheets Web App Endpoint (Live Database for News & Activities)
const GOOGLE_NEWS_API_URL = "https://script.google.com/macros/s/AKfycbxaIhauIa-3qobeBGELhgIhA0uSE1rnWvPa-C7nnsZfBrYq8_6qviG2nqKQqaAFNGWFww/exec";

function isAdminLoggedIn() {
  return sessionStorage.getItem('sps_admin_logged_in') === 'true';
}

function updateAdminUI() {
  const isAdm = isAdminLoggedIn();
  const trigger = document.getElementById('btn-admin-login-trigger');
  const actions = document.getElementById('admin-actions-bar');
  if (trigger) trigger.style.display = isAdm ? 'none' : 'inline-flex';
  if (actions) actions.style.display = isAdm ? 'flex' : 'none';
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

function renderNewsGrid(category = currentNewsCategory, search = currentNewsSearch) {
  currentNewsCategory = category;
  currentNewsSearch = search.toLowerCase().trim();

  const grid = document.getElementById('news-grid');
  if (!grid) return;

  const isAdm = isAdminLoggedIn();
  const articles = getStoredNews();
  const filtered = articles.filter(item => {
    const matchCat = (currentNewsCategory === 'all') || (item.category === currentNewsCategory);
    const matchSearch = !currentNewsSearch || 
      item.title.toLowerCase().includes(currentNewsSearch) || 
      item.summary.toLowerCase().includes(currentNewsSearch) ||
      (item.content && item.content.toLowerCase().includes(currentNewsSearch));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: white; border-radius: 18px; border: 2px dashed #cbd5e1;">
        <i class="fa-regular fa-folder-open" style="font-size: 3rem; color: #94a3b8; margin-bottom: 1rem;"></i>
        <h3 style="color: #475569; margin: 0 0 0.5rem 0;">មិនមានព័ត៌មានក្នុងប្រភេទនេះនៅឡើយទេ</h3>
        <p style="color: #94a3b8; margin: 0;">${isAdm ? 'សូមចុចលើប៊ូតុង "+ បង្កើតព័ត៌មានថ្មី" ដើម្បីផ្សព្វផ្សាយព័ត៌មានដំបូងរបស់អ្នក!' : 'សូមរង់ចាំការផ្សព្វផ្សាយព័ត៌មានថ្មីៗឆាប់ៗនេះ។'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="news-card">
      <div class="news-card-media">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='20250819094329432.jpeg'">
        <span class="news-card-badge ${item.badgeClass || 'badge-student'}">${item.categoryLabel}</span>
      </div>
      <div class="news-card-body">
        <div class="news-card-date">
          <i class="fa-regular fa-calendar"></i>
          <span>${item.date}</span>
        </div>
        <h2 class="news-card-title">${item.title}</h2>
        <p class="news-card-desc">${item.summary}</p>
        <div class="news-card-footer">
          <button class="btn-read-more" onclick="openArticleModal('${item.id}')">
            អានលម្អិត <i class="fa-solid fa-arrow-right"></i>
          </button>
          ${isAdm ? `
            <div style="display: flex; gap: 4px; align-items: center;">
              <button class="btn-edit-post" title="កែសម្រួល" onclick="openEditPostModal('${item.id}', event)">
                <i class="fa-solid fa-pen-to-square"></i> កែប្រែ
              </button>
              <button class="btn-delete-post" title="លុបព័ត៌មាននេះ" onclick="deleteNewsPost('${item.id}', event)">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
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

function compressImageFile(file, maxWidth = 1200, quality = 0.82) {
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

window.openArticleModal = function(id) {
  const articles = getStoredNews();
  const article = articles.find(a => a.id === id);
  if (!article) return;

  const modalBody = document.getElementById('article-modal-body');
  const formattedContent = article.content.split('\n\n').map(p => `<p style="margin-bottom: 1.2rem;">${p.replace(/\n/g, '<br>')}</p>`).join('');

  // 1. Gallery Section in Reader
  let galleryHtml = '';
  if (Array.isArray(article.gallery) && article.gallery.length > 0) {
    galleryHtml = `
      <div style="margin-top: 2.2rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
        <h3 style="color: #0f172a; font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
          <span>📸</span> កម្រងរូបភាពពាក់ព័ន្ធ (${article.gallery.length} រូប)
        </h3>
        <div class="article-gallery-grid">
          ${article.gallery.map(img => `
            <div class="gallery-photo-card" onclick="window.open('${img}', '_blank')" title="ចុចដើម្បីមើលរូបធំ">
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
        <span><i class="fa-solid fa-school" style="color: var(--sps-red); margin-right: 5px;"></i>សាលារៀនសុវណ្ណភូមិ សាខាតាកែវ</span>
      </div>
    </div>

    <div style="border-radius: 16px; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-bottom: 4px solid var(--sps-gold);">
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
  const image = document.getElementById('post-image-url').value.trim() || '20250819094329432.jpeg';
  const summary = document.getElementById('post-summary').value.trim();
  const content = document.getElementById('post-content').value.trim();

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
window.openAdminLoginModal = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-login-error').style.display = 'none';
    modal.classList.add('active');
  }
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) modal.classList.remove('active');
};

window.handleAdminLoginSubmit = function(event) {
  event.preventDefault();
  const pass = document.getElementById('admin-password-input').value.trim();
  
  // លេខសម្ងាត់ Admin លំនាំដើម: sps2026, sps@2026, admin123
  if (pass === 'sps2026' || pass === 'sps@2026' || pass === 'admin123') {
    sessionStorage.setItem('sps_admin_logged_in', 'true');
    closeAdminLoginModal();
    updateAdminUI();
    renderNewsGrid();
    alert('🎉 ជោគជ័យ! អ្នកបានចូលជា Admin រួចរាល់។ ឥឡូវអ្នកអាចបង្កើត កែសម្រួល ឬលុបព័ត៌មានបាន!');
  } else {
    document.getElementById('admin-login-error').style.display = 'block';
  }
};

window.handleAdminLogout = function() {
  if (confirm('តើអ្នកចង់ចាកចេញពីសិទ្ធិគ្រប់គ្រង Admin មែនទេ?')) {
    sessionStorage.removeItem('sps_admin_logged_in');
    updateAdminUI();
    renderNewsGrid();
    alert('🚪 បានចាកចេញពីសិទ្ធិ Admin ដោយសុវត្ថិភាព។ ប៊ូតុងបង្កើត និងកែសម្រួលត្រូវបានលាក់វិញ!');
  }
};

window.handleModalBackdropClick = function(event, modalId) {
  if (event.target.id === modalId) {
    if (modalId === 'article-modal') closeArticleModal();
    if (modalId === 'publish-modal') closePublishModal();
    if (modalId === 'admin-login-modal') closeAdminLoginModal();
    if (modalId === 'admission-modal') closeAdmissionModal();
  }
};

// ==================== BILINGUAL LANGUAGE SWITCHER (EN / KH) ====================
const I18N_DICT = {
  kh: {
    nav_home: "ទំព័រដើម",
    nav_staff: "ព័ត៌មានបុគ្គលិក",
    nav_docs: "ឯកសារចេញ-ចូល",
    nav_qac: "ត្រួតពិនិត្យគុណភាព QAC",
    nav_elab: "E-Lab & AI",
    nav_activities: "សកម្មភាព & ព័ត៌មាន",
    stat_staff: "បុគ្គលិកសរុប",
    stat_docs: "ឯកសារ",
    stat_comp: "ស្តង់ដារ QAC",
    stat_events: "ព្រឹត្តិការណ៍ថ្ងៃនេះ",
    admission_tag: "ទទួលចុះឈ្មោះសិស្សជារៀងរាល់ថ្ងៃ",
    admission_title: "ចុះឈ្មោះចូលរៀន ឬសាកសួរព័ត៌មានអាហារូបករណ៍",
    admission_desc: "សាលារៀនសុវណ្ណភូមិ សាខាតាកែវ ផ្តល់ជូននូវកម្មវិធីចំណេះទូទៅខ្មែរ (K-12) ភាសាអង់គ្លេស (GEP/IEP) ជាមួយនឹងបរិយាកាសសិក្សាទំនើប និងគ្រូបង្រៀនមានវិជ្ជាជីវៈខ្ពស់។",
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
    adm_badge: "ការិយាល័យប្រឹក្សាយោបល់ចុះឈ្មោះ",
    adm_modal_title: "សាកសួរព័ត៌មានចុះឈ្មោះចូលរៀន",
    adm_modal_sub: "សូមបំពេញព័ត៌មានខាងក្រោម ក្រុមការងារប្រឹក្សាយោបល់នៃសាលារៀនសុវណ្ណភូមិ សាខាតាកែវ នឹងទាក់ទងទៅលោកអ្នកភ្លាមៗ។",
    lbl_parent_name: "ឈ្មោះមាតាបិតា / អាណាព្យាបាល *",
    lbl_phone: "លេខទូរស័ព្ទ / Telegram *",
    lbl_student_name: "ឈ្មោះកូន / សិស្ស *",
    lbl_program: "កម្មវិធីសិក្សាដែលចាប់អារម្មណ៍ *",
    lbl_grade: "កម្រិតថ្នាក់ដែលចង់ចូលរៀន",
    lbl_notes: "សំណួរ ឬសារបន្ថែម (ករណីបើមាន)",
    btn_cancel: "បោះបង់",
    btn_send_inquiry: "ផ្ញើសំណើរសាកសួរ (Submit)"
  },
  en: {
    nav_home: "Home",
    nav_staff: "Staff Profile",
    nav_docs: "Document In & Out",
    nav_qac: "QAC CL",
    nav_elab: "E-Lab & AI",
    nav_activities: "Activities",
    stat_staff: "Total Staff",
    stat_docs: "Documents",
    stat_comp: "Compliance",
    stat_events: "Events Today",
    admission_tag: "Open For Admissions Daily",
    admission_title: "Student Admissions & Scholarship Inquiries",
    admission_desc: "Sovannaphumi School Takeo Campus offers Khmer General Education (K-12), General English Program (GEP/IEP) with modern learning environments and professional educators.",
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
    adm_badge: "Admissions Consulting Office",
    adm_modal_title: "Online Admission & Information Inquiry",
    adm_modal_sub: "Please fill in the form below. Our admissions consulting team at Sovannaphumi School Takeo Campus will contact you promptly.",
    lbl_parent_name: "Parent / Guardian Name *",
    lbl_phone: "Phone / Telegram Number *",
    lbl_student_name: "Student Name *",
    lbl_program: "Interested Program *",
    lbl_grade: "Grade / Level",
    lbl_notes: "Additional Notes or Questions",
    btn_cancel: "Cancel",
    btn_send_inquiry: "Send Inquiry"
  }
};

let currentAppLanguage = localStorage.getItem('sps_site_lang') || 'kh';

window.switchLanguage = function(lang) {
  currentAppLanguage = lang;
  localStorage.setItem('sps_site_lang', lang);

  const btnEn = document.getElementById('lang-btn-en');
  const btnKh = document.getElementById('lang-btn-kh');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnKh) btnKh.classList.toggle('active', lang === 'kh');

  const dict = I18N_DICT[lang] || I18N_DICT.kh;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });

  document.documentElement.lang = lang;
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
    alert('🎉 Thank you! Your inquiry has been submitted. Our admissions team at Sovannaphumi School Takeo Campus will contact you shortly.');
  } else {
    alert('🎉 អរគុណលោកអ្នក! សំណើរសាកសួរព័ត៌មានរបស់លោកអ្នកត្រូវបានបញ្ជូនទៅកាន់ការិយាល័យប្រឹក្សាយោបល់នៃសាលារៀនសុវណ្ណភូមិ សាខាតាកែវ។ ក្រុមការងារនឹងទាក់ទងមកលោកអ្នកក្នុងពេលឆាប់ៗនេះ។');
  }
};

// Initialize language on startup
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentAppLanguage);
});


