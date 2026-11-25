/**
 * Mahima Kumari Portfolio Interactive Controller
 */

// Project Data from Resume
const projects = {
  ailifeos: {
    title: "AILifeOS — AI-Powered Personal Productivity Platform",
    subtitle: "MERN Stack • Groq LLM • JWT • bcrypt Password Hashing",
    category: "Full-Stack AI Platform",
    bullets: [
      "Built a full-stack AI productivity platform with 11 feature modules including tasks, goals, calendar, notes, study, analytics, and AI assistant using React, Node.js/Express & MongoDB.",
      "Integrated Groq LLMs to deliver 5 AI capabilities: context-aware chat, goal-roadmap generation, note summarization, quiz generation, and flashcard creation with structured JSON outputs.",
      "Developed a personalized AI assistant with multi-turn conversation history, user-specific productivity context, and persistent chat sessions, secured through JWT authentication and bcrypt password hashing."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Groq LLM", "JWT Auth", "bcrypt", "Tailwind CSS"],
    github: "https://github.com"
  },
  ablespace: {
    title: "Ablespace — Task & Project Management Platform",
    subtitle: "Next.js • React • TypeScript • Tailwind CSS",
    category: "Productivity & Project Management",
    bullets: [
      "Built a task and project management platform using Next.js, React, and TypeScript, featuring 8+ routed pages for tasks, projects, dashboard, profile, settings, and authentication.",
      "Developed dual-view task management with Kanban and sortable list views, supporting priorities, labels, assignees, subtasks, threaded comments, search, and dynamic filtering.",
      "Engineered a typed API client with 10 CRUD endpoints, centralized error handling, request timeouts, and protected routes with persistent authentication using Bearer tokens and redirect-with-return-path support."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Kanban Board", "10 CRUD Endpoints", "Bearer Auth"],
    github: "https://github.com"
  },
  kidrove: {
    title: "Kidrove — AI & Robotics Workshop Landing Platform",
    subtitle: "React • TypeScript • Vite • Tailwind CSS • Node.js • Express • MongoDB",
    category: "AI & Robotics Workshop Platform",
    bullets: [
      "Built a responsive workshop landing platform using React, TypeScript, Vite, and Tailwind CSS, with 9 modular sections covering workshop details, learning outcomes, instructors, testimonials, registration, FAQs, and more.",
      "Developed reusable UI components and a custom IntersectionObserver-based React hook for scroll-triggered animations, delivering a responsive and interactive experience across devices.",
      "Built a Node.js/Express + MongoDB enquiry service with a Mongoose model, server-side validation, structured error responses, and configurable CORS handling for secure registration data processing."
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "IntersectionObserver", "Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com"
  }
};

// Open Project Details Modal
function openProjectModal(key) {
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('div');

  if (key === 'all' || !projects[key]) {
    // Default to AILifeOS if clicking general details
    key = 'ailifeos';
  }

  const proj = projects[key];
  document.getElementById('modalTitle').textContent = proj.title;
  document.getElementById('modalSubtitle').textContent = proj.subtitle;
  document.getElementById('modalCategory').textContent = proj.category;

  // Bullets
  const bulletsEl = document.getElementById('modalBullets');
  bulletsEl.innerHTML = '';
  proj.bullets.forEach(b => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2.5';
    li.innerHTML = `<span class="text-brand-600 font-bold mt-0.5">•</span><span>${b}</span>`;
    bulletsEl.appendChild(li);
  });

  // Tech tags
  const techEl = document.getElementById('modalTechTags');
  techEl.innerHTML = '';
  proj.tech.forEach(t => {
    const span = document.createElement('span');
    span.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 border border-brand-200 text-brand-800';
    span.textContent = t;
    techEl.appendChild(span);
  });

  // Github link
  document.getElementById('modalGithubBtn').href = proj.github;

  // Show
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-95');
  modalContent.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('div');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  document.body.style.overflow = '';
}

function handleModalBackdrop(e) {
  if (e.target.id === 'projectModal') {
    closeProjectModal();
  }
}

// Resume Modal Controls
const resumeModal = document.getElementById('resumeModal');
const resumeModalBtn = document.getElementById('resumeModalBtn');

if (resumeModalBtn) {
  resumeModalBtn.addEventListener('click', () => {
    const modalContent = resumeModal.querySelector('div');
    resumeModal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
  });
}

function closeResumeModal() {
  const modalContent = resumeModal.querySelector('div');
  resumeModal.classList.add('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  document.body.style.overflow = '';
}

function handleResumeBackdrop(e) {
  if (e.target.id === 'resumeModal') {
    closeResumeModal();
  }
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeResumeModal();
  }
});

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}

// Clipboard copy helper
function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
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
    showToast(successMsg);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(textArea);
}

console.log("Mahima Kumari Portfolio initialized successfully ✨");
