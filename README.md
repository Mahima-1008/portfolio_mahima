# Mahima Kumari — Full-Screen Inverted Monochrome Portfolio (White, Black & Grey)

A high-performance, full-screen portfolio web application built with **React**, **Tailwind CSS**, and **Vite**. Features an inverted editorial **White, Black, and Grey** monochrome aesthetic, structured cleanly like the reference presentation bento design with comprehensive resume details, direct PDF download, and official brand icons for every skill.

---

## 🎨 Design & Navigation Features

- **Comprehensive Skill Icons (`react-icons` & `lucide-react`)**:
  - Downloaded and integrated `react-icons` (Simple Icons & FontAwesome) alongside `lucide-react`.
  - Every technical skill from Mahima's resume now features its official vector brand icon:
    - **Frontend**: React, Next.js, HTML5, CSS3, Tailwind CSS, Framer Motion
    - **Backend & APIs**: Node.js, Express.js, REST APIs
    - **Databases**: MongoDB, MySQL, DBMS
    - **Languages**: TypeScript, JavaScript, Python, C++, SQL
    - **Tools & Workflow**: Git, GitHub, Postman, Vite, npm, VS Code
    - **AI & Core**: Groq LLMs, Data Structures & Algorithms, OOP
  - Includes interactive category tabs in the skills section to filter across competencies.
- **Zero Emojis — 100% Crisp Vector Icons**:
  - Replaced all emojis and unicode characters with official SVG vector icons (Sparkles, Download, Heart, BadgeCheck, Copy, Mail, Phone, ExternalLink).
- **Direct Resume PDF Download**:
  - The Navbar features a direct **"Download Resume"** button that immediately downloads your official resume PDF (`Mahima_Kumari_Resume.pdf`) with zero modal popup or preview box friction.
- **Perfect Navlink Alignment**:
  - Balanced 3-column flex distribution (`flex-1` left brand, centered `flex-shrink-0` navlinks, and `flex-1` right actions) ensuring links are centered with micro-interaction hover underlines.
- **Removed "MK" Logo**:
  - Clean, elegant text brand: **`Mahima Kumari`** with subtitle *"Full Stack Developer"*.
  - Minimalist modern avatar frame in About Me without the circular initials logo.
- **Full Screen Monochrome Palette (White, Black & Grey)**:
  - Background: Clean radiant off-white (`#F8F9FA`).
  - Cards: Crisp pure white (`#FFFFFF`) with light grey borders (`border-zinc-200`) and soft shadows.
  - Headings & Accents: Solid black (`#000000`).
  - Body & Meta: Charcoal and zinc greys (`#27272A`, `#52525B`).

---

## 🚀 Running the App

```bash
# Start development server
npm run dev

# Or build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
port/
├── dist/                          # Production build output
│   ├── Mahima_Kumari_Resume.pdf   # Resume PDF ready for static download
│   └── index.html
├── public/
│   ├── Mahima_Kumari_Resume.pdf   # Authentic resume PDF file
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Centered navlinks & direct Resume download
│   │   ├── Hero.jsx               # Hero banner with waves, vector icons & calligraphy
│   │   ├── AboutMe.jsx            # About card with clean silhouette avatar
│   │   ├── Skills.jsx             # Skills grid + All skills showcase with brand icons
│   │   ├── SkillIcon.jsx          # Vector icon component for all tech skills
│   │   ├── Projects.jsx           # 3 featured project cards (AILifeOS, Ablespace, Kidrove)
│   │   ├── Experience.jsx         # Encore Ascend internship & component mockup stack
│   │   ├── Services.jsx           # 4 service tiles (Full Stack, UI/UX, AI, APIs)
│   │   ├── Contact.jsx            # "Let's Work Together!" + copy & monochrome confetti
│   │   └── ProjectModal.jsx       # Interactive project deep-dive modal
│   ├── data/
│   │   └── portfolioData.js       # Structured resume details with all 26 skills
│   ├── App.jsx                    # Full-screen container & state
│   ├── index.css                  # Tailwind directives & styles
│   └── main.jsx                   # React DOM entrypoint
├── index.html                     # HTML entry with Google Fonts
├── package.json                   # Scripts & dependencies
├── tailwind.config.js             # Tailwind configuration
└── vite.config.js                 # Vite configuration
```
