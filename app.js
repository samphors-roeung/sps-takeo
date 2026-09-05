/**
 * Sovannaphumi School Takeo Campus - Main Application Logic
 * ជំនួស Code.gs, JS.gs និង JavaScript.html
 */

// ១. ទិន្នន័យស្ថិតិ Dashboard ជាក់ស្តែង (Real-time Data)
const dashboardData = {
  totalStaff: 131,
  documents: 3,
  compliance: "0%",
  eventsToday: 5
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
      navBtn.style.color = '#10b981';
      navBtn.innerHTML = '<i class="fa-solid fa-crown"></i> <span>Super Admin</span>';
      navBtn.setAttribute('title', 'Super Admin (Active) - ចុចដើម្បីបើក Cloud & Migrate');
    } else if (role && DEPT_CREDENTIALS[role]) {
      navBtn.style.color = '#0284c7';
      navBtn.innerHTML = `${DEPT_CREDENTIALS[role].icon} <span>${DEPT_CREDENTIALS[role].name.split(' ')[0]}</span>`;
      navBtn.setAttribute('title', `ចូលជា៖ ${DEPT_CREDENTIALS[role].name} - ចុចដើម្បីចាកចេញ ឬប្តូរ`);
    } else {
      navBtn.style.color = 'inherit';
      navBtn.innerHTML = '<i class="fa-solid fa-lock"></i> <span data-i18n="nav_admin">Admin</span>';
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
    nav_home: "ទំព័រដើម",
    nav_staff: "ព័ត៌មានបុគ្គលិក",
    nav_dept: "នាយកដ្ឋាន",
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
    nav_dept: "Department",
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
    alert('🎉 Thank you! Your inquiry has been submitted. Our admissions team at Sovannaphumi School Takeo Campus will contact you shortly.');
  } else {
    alert('🎉 អរគុណលោកអ្នក! សំណើរសាកសួរព័ត៌មានរបស់លោកអ្នកត្រូវបានបញ្ជូនទៅកាន់ការិយាល័យប្រឹក្សាយោបល់នៃសាលារៀនសុវណ្ណភូមិ សាខាតាកែវ។ ក្រុមការងារនឹងទាក់ទងមកលោកអ្នកក្នុងពេលឆាប់ៗនេះ។');
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
};

window.closeFirebaseModal = function() {
  const modal = document.getElementById('firebase-modal');
  if (modal) modal.classList.remove('active');
};

function updateFirebaseStatusUI() {
  const statusText = document.getElementById('firebase-status-text');
  if (!statusText) return;
  if (window.isFirebaseReady && window.isFirebaseReady()) {
    const config = (window.getFirebaseConfig ? window.getFirebaseConfig() : {});
    statusText.innerHTML = `<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> បានតភ្ជាប់ (Project: ${config.projectId || 'Connected'})</span>`;
  } else {
    statusText.innerHTML = `<span style="color:#f59e0b;"><i class="fa-solid fa-triangle-exclamation"></i> មិនទាន់តភ្ជាប់ (រង់ចាំ Config)</span>`;
  }
}

window.toggleFirebaseConfigInputs = function() {
  const section = document.getElementById('firebase-config-section');
  if (!section) return;
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
  if (section.style.display === 'block') {
    const saved = localStorage.getItem('sps_firebase_config');
    if (saved) document.getElementById('fb-config-json').value = saved;
  }
};

window.saveFirebaseConfigFromModal = function() {
  const raw = document.getElementById('fb-config-json').value.trim();
  if (!raw) {
    alert('សូមបញ្ចូលកូដ Firebase Config (JSON)!');
    return;
  }
  try {
    let configObj = null;
    if (raw.includes('{')) {
      const jsonClean = raw.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":').replace(/'/g, '"');
      configObj = JSON.parse(raw.startsWith('{') ? raw : jsonClean);
    } else {
      throw new Error('Invalid format');
    }
    localStorage.setItem('sps_firebase_config', JSON.stringify(configObj));
    alert('🎉 បានរក្សាទុក Firebase Config រួចរាល់! ប្រព័ន្ធនឹង Reload ដើម្បីតភ្ជាប់...');
    window.location.reload();
  } catch (err) {
    alert('⚠️ ទម្រង់ Config មិនត្រឹមត្រូវឡើយ។ សូមពិនិត្យមើលម្ដងទៀត!');
  }
};

window.runDataMigration = async function() {
  if (!window.isFirebaseReady || !window.isFirebaseReady()) {
    alert('⚠️ សូមបញ្ចូល Firebase Config ជាមុនសិន ដោយចុចលើប៊ូតុង "កែប្រែ Config Keys"!');
    return;
  }

  if (!confirm('តើអ្នកពិតជាចង់ចាប់ផ្តើម Migrate ផ្ទេរទិន្នន័យពី Google Sheets ចូល Firebase មែនទេ?')) return;

  const btn = document.getElementById('btn-start-migration');
  const logBox = document.getElementById('migration-log-box');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> កំពុងដំណើរការ Migration...';
  logBox.style.display = 'block';
  logBox.innerHTML = '<div>🚀 កំពុងចាប់ផ្តើមទាញទិន្នន័យពី Google Sheets...</div>';

  try {
    const results = await window.startMigrationToFirebase((msg) => {
      logBox.innerHTML += `<div>${msg}</div>`;
      logBox.scrollTop = logBox.scrollHeight;
    });

    logBox.innerHTML += `<div style="color:#4ade80; font-weight:bold; margin-top:8px;">🎉 ជោគជ័យពេញលេញ! ទិន្នន័យទាំងអស់ត្រូវបានផ្ទេរចូល Firebase រួចរាល់។</div>`;
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Migration បានជោគជ័យ ១០០%';
    btn.style.background = '#10b981';
    alert('🎉 ជោគជ័យ! ទិន្នន័យទាំងអស់ (Staff, Documents, News, QAC) ត្រូវបានផ្ទេរចូល Firebase រួចរាល់ ១០០% ហើយ!');
  } catch (err) {
    logBox.innerHTML += `<div style="color:#f87171;">❌ កំហុស៖ ${err.message}</div>`;
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-bolt"></i> ព្យាយាមម្តងទៀត';
  }
};

// Initialize theme, language, and Firebase on startup
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentAppLanguage);

  // Initialize Firebase Cloud Service
  if (window.initFirebase) window.initFirebase();

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
});
// =============================================================================

// 8. DEPARTMENT WORKSPACE CONTROLLER (KGE Secondary, KGE Kind & Prim, GEP)
// =============================================================================

const DEPT_INFO = {
  kge_sec: {
    name: "KGE Secondary (ចំណេះទូទៅមធ្យម)",
    icon: "🏫",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - អនុវិទ្យាល័យ និងវិទ្យាល័យ"
  },
  kge_kp: {
    name: "KGE Kind & Prim (ចំណេះទូទៅមត្តេយ្យ & បឋម)",
    icon: "🎒",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - មត្តេយ្យសិក្សា និងបឋមសិក្សា"
  },
  gep: {
    name: "GEP (កម្មវិធីភាសាអង់គ្លេសទូទៅ)",
    icon: "🌐",
    desc: "មជ្ឈមណ្ឌលគ្រប់គ្រងព័ត៌មាន សកម្មភាព និងឯកសារជំនួយ - General English Program"
  }
};

const DEPT_MODULE_INFO = {
  meeting: {
    title: "សកម្មភាពប្រជុំ",
    icon: "fa-solid fa-handshake",
    subtitle: "កត់ត្រាកិច្ចប្រជុំ កាលបរិច្ឆេទ រូបភាពសកម្មភាព និងឯកសារកំណត់ហេតុ"
  },
  support_doc: {
    title: "ឯកសារជំនួយ",
    icon: "fa-solid fa-folder-open",
    subtitle: "មេរៀនជំនួយ សៀវភៅណែនាំ កាលវិភាគ និងទម្រង់បែបបទផ្សេងៗ"
  },
  inspection: {
    title: "អធិការកិច្ចថ្នាក់រៀន",
    icon: "fa-solid fa-magnifying-glass-chart",
    subtitle: "កាលវិភាគអធិការកិច្ច លទ្ធផលវាយតម្លៃ និងកំណត់ត្រាចុះពិនិត្យការបង្រៀន"
  },
  tech: {
    title: "ការប្រើប្រាស់បច្ចេកវិទ្យា",
    icon: "fa-solid fa-laptop-code",
    subtitle: "សកម្មភាពអនុវត្ត Smart TV, Tablet, Computer Lab និង AI ក្នុងការបង្រៀន"
  },
  council: {
    title: "ក្រុមប្រឹក្សាកុមារ",
    icon: "fa-solid fa-users-viewfinder",
    subtitle: "រចនាសម្ព័ន្ធក្រុមប្រឹក្សាកុមារ សកម្មភាពដឹកនាំ និងកិច្ចការស្ម័គ្រចិត្តសាលារៀន"
  },
  stem: {
    title: "ស្ទែម (STEM)",
    icon: "fa-solid fa-flask-vial",
    subtitle: "គម្រោង STEM ការពិសោធន៍វិទ្យាសាស្ត្រ និងការតាំងពិព័រណ៍ស្នាដៃសិស្ស"
  },
  health: {
    title: "អប់រំសុខភាព",
    icon: "fa-solid fa-heart-pulse",
    subtitle: "កម្មវិធីសុខភាពសាលារៀន ការពិនិត្យសុខភាព អនាម័យ និងសុវត្ថិភាពចំណីអាហារ"
  },
  club: {
    title: "ក្លឹបសិក្សា",
    icon: "fa-solid fa-trophy",
    subtitle: "ក្លឹបភាសាអង់គ្លេស ក្លឹបគណិតវិទ្យា ក្លឹបព័ត៌មានវិទ្យា និងការប្រកួតប្រជែងសមត្ថភាព"
  }
};

let currentDepartment = 'kge_sec';
let currentDeptModule = 'meeting';
let deptCustomPosts = [];
let deptSearchKeyword = '';

let currentDeptCoverFile = null;
let currentDeptGalleryFiles = [];
let currentDeptDocFile = null;

const DEFAULT_DEPT_ITEMS = {
  "kge_sec_meeting": [
    {
      id: "def_ks_m1",
      department: "kge_sec",
      module: "meeting",
      title: "កិច្ចប្រជុំបូកសរុបលទ្ធផលបង្រៀនប្រចាំខែសីហា ២០២៦",
      date: "2026-08-28",
      author: "SSC KGE Highschool",
      description: "កិច្ចប្រជុំពិនិត្យលើវឌ្ឍនភាពនៃការបង្រៀនរបស់លោកគ្រូ-អ្នកគ្រូមធ្យមសិក្សា និងការត្រៀមរៀបចំការប្រឡងឆមាសទី២។",
      image: "20250819094329432.jpeg",
      attachmentName: "Minutes_Meeting_Aug2026.pdf"
    }
  ],
  "kge_sec_support_doc": [
    {
      id: "def_ks_sd1",
      department: "kge_sec",
      module: "support_doc",
      title: "កម្រងមេរៀនសង្ខេប និងលំហាត់គំរូ ថ្នាក់ទី ៩ និងទី ១២",
      date: "2026-08-20",
      author: "គណៈកម្មការបច្ចេកទេស",
      description: "ឯកសារជំនួយស្មារតីសម្រាប់ការបង្រៀន និងរំលឹកមេរៀនត្រៀមប្រឡងសញ្ញាបត្រមធ្យមសិក្សា។",
      attachmentName: "KGE_Secondary_Lesson_Guide_2026.pdf"
    }
  ],
  "kge_sec_inspection": [
    {
      id: "def_ks_ins1",
      department: "kge_sec",
      module: "inspection",
      title: "របាយការណ៍អធិការកិច្ចការបង្រៀន និងរៀនប្រចាំសប្តាហ៍ទី ៣",
      date: "2026-08-22",
      author: "ក្រុមអធិការកិច្ចសាលា",
      description: "ការចុះពិនិត្យផ្ទាល់លើវិធីសាស្ត្របង្រៀន កិច្ចតែងការបង្រៀន និងការចូលរួមរបស់សិស្សក្នុងថ្នាក់រៀន។",
      attachmentName: "Inspection_Report_Week3.pdf"
    }
  ],
  "kge_sec_tech": [
    {
      id: "def_ks_tech1",
      department: "kge_sec",
      module: "tech",
      title: "សកម្មភាពប្រើប្រាស់ Interactive Smart Board ក្នុងម៉ោងរូបវិទ្យា និងគីមីវិទ្យា",
      date: "2026-08-15",
      author: "គ្រូបច្ចេកវិទ្យា",
      description: "ការបង្ហាញម៉ូដែល 3D និងកម្មវិធីត្រាប់តាមការពិសោធន៍ជាក់ស្តែង (PhET Simulation) លើអេក្រង់ Smart TV។",
      image: "2026011310215279.jpg"
    }
  ],
  "kge_sec_council": [
    {
      id: "def_ks_coun1",
      department: "kge_sec",
      module: "council",
      title: "សកម្មភាពយុទ្ធនាការបរិស្ថានស្អាត និងការដាំកូនឈើរបស់ក្រុមប្រឹក្សាកុមារ",
      date: "2026-08-10",
      author: "ក្រុមប្រឹក្សាកុមារអនុវិទ្យាល័យ",
      description: "សិស្សានុសិស្សនៃក្រុមប្រឹក្សាកុមារបានដឹកនាំសកម្មភាពសម្អាតបរិវេណសាលា និងដាំផ្កាលម្អក្នុងបរិវេណ SPS 25។",
      image: "20260113102328681.jpeg"
    }
  ],
  "kge_sec_stem": [
    {
      id: "def_ks_stem1",
      department: "kge_sec",
      module: "stem",
      title: "ពិព័រណ៍ស្នាដៃស្ទែម (STEM Fair): ការបង្កើតប្រព័ន្ធស្រោចស្រពស្វ័យប្រវត្តិដោយ Arduino",
      date: "2026-08-05",
      author: "ក្លឹប STEM",
      description: "សិស្សានុសិស្សថ្នាក់ទី ១០ និង ១១ បានបង្កើតគម្រោង Smart Agriculture ដោយប្រើប្រាស់ Sensor និង Board Arduino។",
      image: "20251013140823315.jpeg"
    }
  ],
  "kge_sec_health": [
    {
      id: "def_ks_h1",
      department: "kge_sec",
      module: "health",
      title: "សិក្ខាសាលាផ្សព្វផ្សាយស្តីពី សុខភាពផ្លូវចិត្ត និងអាហារូបត្ថម្ភសម្រាប់យុវវ័យ",
      date: "2026-07-28",
      author: "គណៈកម្មការសុខភាព",
      description: "ការណែនាំពីរបបអាហារត្រឹមត្រូវ ការគ្រប់គ្រងអារម្មណ៍តានតឹងអំឡុងពេលប្រឡង និងការថែរក្សាសុខភាពទូទៅ។"
    }
  ],
  "kge_sec_club": [
    {
      id: "def_ks_cl1",
      department: "kge_sec",
      module: "club",
      title: "ការប្រកួតជជែកដេញដោលជាភាសាជាតិ (Khmer Debate Championship)",
      date: "2026-07-20",
      author: "ក្លឹបភាសាខ្មែរ",
      description: "ការប្រកួតប្រជែងលើប្រធានបទ 'តួនាទីបច្ចេកវិទ្យាក្នុងការអភិវឌ្ឍវិស័យអប់រំនៅកម្ពុជា' រវាងសិស្សថ្នាក់ទី ១០ និង ១១។"
    }
  ],
  "kge_kp_meeting": [
    {
      id: "def_kp_m1",
      department: "kge_kp",
      module: "meeting",
      title: "កិច្ចប្រជុំគ្រូបឋម និងមត្តេយ្យ ស្តីពីការអនុវត្តកម្មវិធីកុមារមេត្រី",
      date: "2026-08-25",
      author: "SC KGE Primary",
      description: "ការរៀបចំបរិយាកាសថ្នាក់រៀនទាក់ទាញ ការលើកទឹកចិត្តសិស្សតូចៗ និងការតាមដានអវត្តមាន។",
      image: "20250819094329432.jpeg"
    }
  ],
  "kge_kp_support_doc": [
    {
      id: "def_kp_sd1",
      department: "kge_kp",
      module: "support_doc",
      title: "កាតពាក្យ និងរូបភាពជំនួយស្មារតីក្នុងការអាន (Flashcards & Worksheets)",
      date: "2026-08-18",
      author: "ក្រុមបច្ចេកទេសបឋម",
      description: "ឯកសារជំនួយសម្រាប់បង្រៀនអក្សរផ្ចង់ ការប្រកបពាក្យ និងការរាប់លេខសម្រាប់ថ្នាក់ទី ១ ដល់ទី ៣។"
    }
  ],
  "kge_kp_inspection": [
    {
      id: "def_kp_ins1",
      department: "kge_kp",
      module: "inspection",
      title: "លទ្ធផលពិនិត្យការអនុវត្តវិធីសាស្ត្ររៀនតាមរយៈការលេង (Play-based Learning)",
      date: "2026-08-12",
      author: "គណៈគ្រប់គ្រងបឋម",
      description: "ការវាយតម្លៃភាពរីករាយ និងការយល់ដឹងរបស់កុមារតូចៗក្នុងម៉ោងសិក្សាភាសា និងគណិតវិទ្យា។"
    }
  ],
  "kge_kp_tech": [
    {
      id: "def_kp_tech1",
      department: "kge_kp",
      module: "tech",
      title: "ការប្រើប្រាស់កម្មវិធីគំនូរជីវចលអប់រំ និងហ្គេមឆ្លាតវៃលើ Tablet ក្នុងថ្នាក់មត្តេយ្យ",
      date: "2026-08-08",
      author: "គ្រូមត្តេយ្យសិក្សា",
      description: "សិស្សានុសិស្សតូចៗបានអនុវត្តការគូររូប និងស្គាល់ពណ៌ សត្វ និងអក្សរតាមរយៈ Tablet អន្តរកម្ម។",
      image: "20260113103535815.jpg"
    }
  ],
  "kge_kp_council": [
    {
      id: "def_kp_coun1",
      department: "kge_kp",
      module: "council",
      title: "សកម្មភាពមិត្តជួយមិត្ត និងការដឹកនាំជួរពេលព្រឹករបស់សិស្សបឋម",
      date: "2026-08-02",
      author: "ក្រុមប្រឹក្សាកុមារបឋម",
      description: "សកម្មភាពជួយមិត្តភក្តិរៀបចំសៀវភៅ និងការលើកទឹកចិត្តឱ្យមានវិន័យស្អាតបាត។"
    }
  ],
  "kge_kp_stem": [
    {
      id: "def_kp_stem1",
      department: "kge_kp",
      module: "stem",
      title: "ការពិសោធន៍ 'ភ្នំភ្លើងផ្ទុះ និងឥន្ទធនូទឹក': ការរៀនវិទ្យាសាស្ត្របឋម",
      date: "2026-07-25",
      author: "គ្រូវិទ្យាសាស្ត្របឋម",
      description: "កុមារតូចៗបានរៀនពីប្រតិកម្មគីមីសាមញ្ញរវាងម្សៅសូដា និងទឹកខ្មេះ ដោយក្តីរីករាយ។",
      image: "2026011310215279.jpg"
    }
  ],
  "kge_kp_health": [
    {
      id: "def_kp_h1",
      department: "kge_kp",
      module: "health",
      title: "យុទ្ធនាការលាងសម្អាតដៃ ៧ ជំហាន និងការដុសធ្មេញត្រឹមត្រូវ",
      date: "2026-07-15",
      author: "បុគ្គលិកសុខភាព",
      description: "ការបង្រៀនកុមារតូចៗឱ្យចេះថែរក្សាអនាម័យផ្ទាល់ខ្លួនដើម្បីការពារជំងឺឆ្លងផ្សេងៗ។"
    }
  ],
  "kge_kp_club": [
    {
      id: "def_kp_cl1",
      department: "kge_kp",
      module: "club",
      title: "ក្លឹបនិទានរឿង និងអានសៀវភៅ (Storytelling & Reading Club)",
      date: "2026-07-10",
      author: "បណ្ណារក្ស",
      description: "ការអានសៀវភៅរឿងនិទានអប់រំ និងការសម្តែងតួអង្គក្នុងបណ្ណាល័យសាលា។"
    }
  ],
  "gep_meeting": [
    {
      id: "def_gep_m1",
      department: "gep",
      module: "meeting",
      title: "GEP Monthly Teachers Meeting & Curriculum Review",
      date: "2026-08-27",
      author: "Head Teacher GEP",
      description: "Reviewing student progress in General English Program, speaking test criteria, and Cambridge mock exam preparations.",
      image: "20250819094329432.jpeg",
      attachmentName: "GEP_Meeting_Minutes_Aug.pdf"
    }
  ],
  "gep_support_doc": [
    {
      id: "def_gep_sd1",
      department: "gep",
      module: "support_doc",
      title: "Cambridge English Young Learners (YLE) & KET/PET Practice Tests",
      date: "2026-08-19",
      author: "GEP Academic Team",
      description: "Supplementary worksheets and mock test papers for Starters, Movers, Flyers, and KET levels.",
      attachmentName: "Cambridge_Practice_Tests_2026.pdf"
    }
  ],
  "gep_inspection": [
    {
      id: "def_gep_ins1",
      department: "gep",
      module: "inspection",
      title: "GEP Classroom Observation & Pronunciation Quality Check",
      date: "2026-08-14",
      author: "SC GEP",
      description: "Classroom inspection evaluating teacher-student talk time ratio, interactive speaking drills, and phonics teaching."
    }
  ],
  "gep_tech": [
    {
      id: "def_gep_tech1",
      department: "gep",
      module: "tech",
      title: "Utilizing Kahoot, Quizizz, and AI Chatbots for English Vocabulary Expansion",
      date: "2026-08-09",
      author: "GEP IT & Teaching Team",
      description: "Students actively engaged in competitive vocabulary quizzes and interactive dialogue games on screen.",
      image: "20260113102328681.jpeg"
    }
  ],
  "gep_council": [
    {
      id: "def_gep_coun1",
      department: "gep",
      module: "council",
      title: "English Ambassadors Council: 'Speak English Only Day' Campaign",
      date: "2026-08-01",
      author: "Student Council GEP",
      description: "Student leaders promoting daily conversational English among peers across all campus areas."
    }
  ],
  "gep_stem": [
    {
      id: "def_gep_stem1",
      department: "gep",
      module: "stem",
      title: "English through STEM: Solar System Model & Ecosystem Presentation",
      date: "2026-07-22",
      author: "GEP Science Club",
      description: "Students presented scientific models entirely in English, explaining planetary orbits and biological chains.",
      image: "20251013140823315.jpeg"
    }
  ],
  "gep_health": [
    {
      id: "def_gep_h1",
      department: "gep",
      module: "health",
      title: "Healthy Habits Workshop: Physical Fitness & Nutrition in English",
      date: "2026-07-16",
      author: "GEP Health Activity Team",
      description: "Interactive presentation on balanced nutrition and fitness exercises delivered in English."
    }
  ],
  "gep_club": [
    {
      id: "def_gep_cl1",
      department: "gep",
      module: "club",
      title: "English Public Speaking & Toastmasters Club Competition",
      date: "2026-07-08",
      author: "GEP Speaking Club",
      description: "Annual campus speech competition showcasing confident presentations from Levels 6 to 12.",
      image: "20251013140823315.jpeg"
    }
  ]
};

// Local storage helper
function getStoredDeptPosts() {
  try {
    const raw = localStorage.getItem('sps_dept_custom_posts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error loading department posts from localStorage:', e);
  }
  return [];
}

function saveStoredDeptPosts(list) {
  const safeList = Array.isArray(list) ? list : [];
  try {
    localStorage.setItem('sps_dept_custom_posts', JSON.stringify(safeList));
  } catch (e) {
    console.error('Error saving department posts to localStorage:', e);
  }
}

// Smart merger for Firebase cloud data & local data (Preserves all created posts)
function mergeAndSaveDeptPosts(cloudList) {
  const localList = getStoredDeptPosts();
  const map = new Map();

  // 1. First add all local posts so locally created/edited posts are preserved
  (localList || []).forEach(item => {
    if (item && item.id) map.set(String(item.id), item);
  });

  // 2. Add or update with cloud items
  (cloudList || []).forEach(item => {
    if (item && item.id) {
      const existing = map.get(String(item.id)) || {};
      map.set(String(item.id), { ...existing, ...item, syncedToCloud: true });
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
  
  if (titleEl) titleEl.innerText = info.name;
  if (iconEl) iconEl.innerText = info.icon;
  if (descEl) descEl.innerText = info.desc;

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

  if (modTitleEl) {
    modTitleEl.innerHTML = `<i class="${modInfo.icon}"></i> <span>${modInfo.title}</span>`;
  }
  if (modSubEl) {
    modSubEl.innerText = modInfo.subtitle;
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

  const key = `${currentDepartment}_${currentDeptModule}`;
  const defaultList = DEFAULT_DEPT_ITEMS[key] || [];
  
  // Custom posts (from Firestore & localStorage)
  const storedList = getStoredDeptPosts();
  const customList = storedList.filter(p => p.department === currentDepartment && p.module === currentDeptModule);

  let combined = [...customList, ...defaultList];

  if (deptSearchKeyword) {
    combined = combined.filter(item => {
      const t = (item.title || '').toLowerCase();
      const d = (item.description || '').toLowerCase();
      const a = (item.author || '').toLowerCase();
      return t.includes(deptSearchKeyword) || d.includes(deptSearchKeyword) || a.includes(deptSearchKeyword);
    });
  }

  if (combined.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: #94a3b8;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.8rem; margin-bottom: 14px; color: #cbd5e1; display: block;"></i>
        <h4 style="margin: 0 0 8px; color: #64748b; font-size: 1.1rem;">មិនទាន់មានទិន្នន័យ ឬឯកសារក្នុងផ្នែក «${DEPT_MODULE_INFO[currentDeptModule]?.title || ''}» នៃដេប៉ាតឺម៉ង់នេះទេ</h4>
        <p style="margin: 0 0 16px; font-size: 0.88rem;">លោកគ្រូ-អ្នកគ្រូអាចចុចប៊ូតុងខាងក្រោមដើម្បីបង្កើត និងបង្ហោះសកម្មភាពថ្មី</p>
        <button type="button" class="btn-publish-post" onclick="openDeptPublishModal()" style="margin: 0 auto; display: inline-flex;">
          <i class="fa-solid fa-plus"></i> បង្កើតសកម្មភាពថ្មីក្នុងផ្នែកនេះ
        </button>
      </div>
    `;
    return;
  }

  const activeRole = getActiveUserRole();

  container.innerHTML = combined.map(item => {
    const isCustom = !!item.isCustom;
    const deptInfo = DEPT_INFO[item.department || currentDepartment] || DEPT_INFO.kge_sec;
    const modInfo = DEPT_MODULE_INFO[item.module || currentDeptModule] || DEPT_MODULE_INFO.meeting;
    const canManageThis = isCustom && canManageDepartment(item.department || currentDepartment);

    return `
      <div class="dept-item-card">
        <div class="dept-card-header">
          <div>
            <div style="display: flex; gap: 6px; margin-bottom: 6px; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; background: #e0f2fe; color: #0071ba; padding: 2px 9px; border-radius: 10px; font-weight: 700;">
                ${deptInfo.icon} ${deptInfo.name.split(' ')[0]}
              </span>
              <span style="font-size: 0.75rem; background: #f1f5f9; color: #475569; padding: 2px 9px; border-radius: 10px; font-weight: 600;">
                <i class="${modInfo.icon}" style="font-size: 0.7rem;"></i> ${modInfo.title}
              </span>
            </div>
            <h4 class="dept-card-title">${item.title}</h4>
          </div>
          <span style="font-size: 0.8rem; background: #f8fafc; color: #64748b; padding: 4px 12px; border-radius: 12px; font-weight: 700; white-space: nowrap; border: 1px solid #e2e8f0;">
            <i class="fa-solid fa-calendar-day" style="color: #0071ba;"></i> ${item.date || 'N/A'}
          </span>
        </div>

        <div class="dept-card-meta">
          <span><i class="fa-solid fa-user-pen"></i> អ្នកកត់ត្រា៖ <strong>${item.author || 'Takeo Campus'}</strong></span>
          ${item.attachmentName ? `<span style="color:#059669; font-weight:600;"><i class="fa-solid fa-paperclip"></i> ${item.attachmentName}</span>` : ''}
          ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `<span style="color:#8b5cf6;"><i class="fa-solid fa-images"></i> ${item.gallery.length} រូបភាព</span>` : ''}
        </div>

        ${item.image ? `
          <div style="margin: 12px 0; max-height: 260px; overflow: hidden; border-radius: 12px; border: 1px solid #e2e8f0; cursor: pointer;" onclick="openDeptArticleModal('${item.id}')">
            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        ` : ''}

        <p class="dept-card-desc">${item.description || ''}</p>

        <div class="dept-card-actions">
          <div>
            ${item.attachmentUrl ? `
              <a href="${item.attachmentUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; background: #0071ba; color: white; padding: 6px 14px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                <i class="fa-solid fa-download"></i> ទាញយកឯកសារ (${item.attachmentName || 'PDF'})
              </a>
            ` : (item.attachmentName ? `
              <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; background: #f1f5f9; color: #475569; padding: 5px 12px; border-radius: 6px;">
                <i class="fa-solid fa-file-lines" style="color: #0071ba;"></i> ${item.attachmentName}
              </span>
            ` : '')}
          </div>

          <div style="display: flex; gap: 8px;">
            <button type="button" onclick="openDeptArticleModal('${item.id}')" style="padding: 6px 14px; font-size: 0.82rem; background: #f0f9ff; color: #0284c7; border: 1px solid #bae6fd; border-radius: 8px; font-weight: 600; cursor: pointer;">
              <i class="fa-solid fa-eye"></i> មើលលម្អិត
            </button>
            ${canManageThis ? `
              <button type="button" onclick="openDeptPublishModal('${item.id}')" style="padding: 6px 12px; font-size: 0.82rem; background: #fefce8; color: #ca8a04; border: 1px solid #fef08a; border-radius: 8px; font-weight: 600; cursor: pointer;">
                <i class="fa-solid fa-pen-to-square"></i> កែប្រែ
              </button>
              <button type="button" onclick="deleteDeptPost('${item.id}')" style="padding: 6px 10px; font-size: 0.82rem; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: 8px; cursor: pointer;">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
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
  // If editId is an event object or not a string, treat as null
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

  // If logged in as specific department (e.g. kge_sec), auto-switch to that tab if creating new
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
    const allPosts = [...getStoredDeptPosts(), ...Object.values(DEFAULT_DEPT_ITEMS).flat()];
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
    }
  } else {
    if (idEdit) idEdit.value = '';
    if (titleText) titleText.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i> បង្ហោះព័ត៌មាន ឬឯកសារដេប៉ាតឺម៉ង់';
    if (submitText) submitText.innerText = 'បង្ហោះ (Publish)';

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
  const dept = (deptSelect ? deptSelect.value : '') || currentDepartment;

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
    const mod = document.getElementById('dept-form-module')?.value || currentDeptModule;
    const title = (document.getElementById('dept-form-title')?.value || '').trim();
    const date = document.getElementById('dept-form-date')?.value || new Date().toISOString().split('T')[0];
    const author = (document.getElementById('dept-form-author')?.value || '').trim() || 'Takeo Campus';
    const desc = (document.getElementById('dept-form-desc')?.value || '').trim();
    const presetUrl = document.getElementById('dept-cover-custom-url')?.value || '';
    const existingDocName = document.getElementById('dept-existing-doc-name')?.value || '';
    const existingDocUrl = document.getElementById('dept-existing-doc-url')?.value || '';

    let coverImage = presetUrl;
    if (currentDeptCoverFile) {
      try {
        coverImage = await fileToBase64(currentDeptCoverFile);
      } catch (e) {
        coverImage = URL.createObjectURL(currentDeptCoverFile);
      }
    }

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

    let galleryList = [];
    if (currentDeptGalleryFiles && currentDeptGalleryFiles.length > 0) {
      for (const file of currentDeptGalleryFiles) {
        try {
          const gBase64 = await fileToBase64(file);
          galleryList.push(gBase64);
        } catch (e) {
          galleryList.push(URL.createObjectURL(file));
        }
      }
    }

    const payload = {
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
      isCustom: true
    };

    let savedItem = null;

    if (editId) {
      // 1. Try Firebase update if online
      try {
        if (window.DepartmentService && window.DepartmentService.update && window.isFirebaseReady && window.isFirebaseReady()) {
          savedItem = await window.DepartmentService.update(editId, payload, currentDeptCoverFile, currentDeptDocFile, currentDeptGalleryFiles);
        }
      } catch (fbErr) {
        console.warn('Firebase update skipped or errored, saving locally:', fbErr);
      }

      // 2. Update local storage list
      const stored = getStoredDeptPosts();
      const idx = stored.findIndex(p => String(p.id) === String(editId));
      if (idx !== -1) {
        stored[idx] = { ...stored[idx], ...payload };
        saveStoredDeptPosts(stored);
      }
      alert('🎉 បានកែប្រែព័ត៌មានដេប៉ាតឺម៉ង់ដោយជោគជ័យ!');
    } else {
      // 1. Try Firebase create if online
      try {
        if (window.DepartmentService && window.DepartmentService.create && window.isFirebaseReady && window.isFirebaseReady()) {
          savedItem = await window.DepartmentService.create(payload, currentDeptCoverFile, currentDeptDocFile, currentDeptGalleryFiles);
        }
      } catch (fbErr) {
        console.warn('Firebase create skipped or errored, saving locally:', fbErr);
      }

      if (savedItem && savedItem.id) {
        payload.id = savedItem.id;
      } else {
        payload.id = 'dept_post_' + Date.now();
      }

      const stored = getStoredDeptPosts();
      stored.unshift(payload);
      saveStoredDeptPosts(stored);

      alert(`🎉 បានបង្ហោះចូលផ្នែក «${DEPT_MODULE_INFO[mod]?.title || mod}» នៃដេប៉ាតឺម៉ង់ «${DEPT_INFO[dept]?.name || dept}» ដោយជោគជ័យ!`);
    }

    closeDeptPublishModal();

    // Auto-route and update view
    currentDepartment = dept;
    currentDeptModule = mod;
    switchDepartmentTab(dept);
    const modBtn = document.getElementById('dept-mod-' + mod);
    if (modBtn) switchDeptModule(mod, modBtn);
    renderDeptContent();

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

window.openDeptArticleModal = function(id) {
  if (!id) return;
  const allPosts = [...getStoredDeptPosts(), ...Object.values(DEFAULT_DEPT_ITEMS).flat()];
  const item = allPosts.find(x => String(x.id) === String(id));

  if (!item) {
    console.warn('Post not found for id:', id);
    return;
  }

  const bodyEl = document.getElementById('dept-article-modal-body');
  if (!bodyEl) return;

  const deptInfo = DEPT_INFO[item.department || currentDepartment] || DEPT_INFO.kge_sec;
  const modInfo = DEPT_MODULE_INFO[item.module || currentDeptModule] || DEPT_MODULE_INFO.meeting;

  bodyEl.innerHTML = `
    <div style="padding: 1.8rem 2.2rem;">
      <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <span style="font-size: 0.8rem; background: #0071ba; color: white; padding: 4px 14px; border-radius: 12px; font-weight: 700;">
          ${deptInfo.icon} ${deptInfo.name}
        </span>
        <span style="font-size: 0.8rem; background: #e0f2fe; color: #0071ba; padding: 4px 14px; border-radius: 12px; font-weight: 700;">
          <i class="${modInfo.icon}"></i> ${modInfo.title}
        </span>
      </div>

      <h1 style="margin: 0 0 10px 0; font-size: 1.5rem; font-weight: 800; color: #0f172a; line-height: 1.4;">${item.title}</h1>
      
      <div style="font-size: 0.88rem; color: #64748b; margin-bottom: 20px; display: flex; gap: 16px; flex-wrap: wrap; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        <span><i class="fa-solid fa-calendar-day" style="color: #0071ba;"></i> ${item.date || ''}</span>
        <span><i class="fa-solid fa-user-pen" style="color: #bd1e2d;"></i> អ្នកកត់ត្រា៖ <strong>${item.author || 'Takeo Campus'}</strong></span>
      </div>

      ${item.image ? `
        <div style="margin-bottom: 20px; border-radius: 14px; overflow: hidden; max-height: 420px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border-bottom: 3px solid #0071ba;">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      ` : ''}

      <div style="font-size: 0.95rem; color: #334155; line-height: 1.8; white-space: pre-line; margin-bottom: 24px;">
        ${item.description || ''}
      </div>

      ${Array.isArray(item.gallery) && item.gallery.length > 0 ? `
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px; font-size: 0.95rem; color: #0f172a; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-images" style="color: #0071ba;"></i> កម្រងរូបភាពបន្ថែម (${item.gallery.length} រូប)
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px;">
            ${item.gallery.map(imgSrc => `
              <div style="height: 140px; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; cursor: pointer;" onclick="window.open('${imgSrc}', '_blank')">
                <img src="${imgSrc}" alt="Gallery Image" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
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
              <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a;">${item.attachmentName || 'ឯកសារភ្ជាប់ (Attachment)'}</div>
              <div style="font-size: 0.8rem; color: #64748b;">ចុចទាញយកដើម្បីអានឯកសារពេញលេញ</div>
            </div>
          </div>
          <a href="${item.attachmentUrl}" target="_blank" download="${item.attachmentName || 'document.pdf'}" style="background: #0071ba; color: white; padding: 8px 18px; border-radius: 8px; text-decoration: none; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-download"></i> ទាញយកឯកសារ
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

  const allPosts = [...getStoredDeptPosts(), ...Object.values(DEFAULT_DEPT_ITEMS).flat()];
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
    alert('🗑️ បានលុបដោយជោគជ័យ!');
  } catch (err) {
    alert('❌ បរាជ័យក្នុងការលុប៖ ' + err.message);
  }
};

// Initialize Department Service Real-time Subscription
if (window.DepartmentService && window.DepartmentService.subscribe) {
  window.DepartmentService.subscribe((list) => {
    if (list && Array.isArray(list) && list.length > 0) {
      mergeAndSaveDeptPosts(list);
      renderDeptContent();
    } else {
      // If cloud has 0 items, preserve local items and push them to cloud
      syncLocalDeptPostsToCloud();
      renderDeptContent();
    }
  });
}
