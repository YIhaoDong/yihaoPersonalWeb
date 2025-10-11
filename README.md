# Yihao Dong - Personal Academic Website

A professional personal website showcasing academic work, research, publications, and teaching experience.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and transitions
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph tags, and structured data for search engines
- **Fast Performance**: Built with SvelteKit and Tailwind CSS for optimal performance
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation support
- **Easy Content Updates**: Centralized data files for easy content management

## 📄 Pages

- **Home**: Hero section with research highlights and recent publications
- **About**: Detailed biography, education timeline, skills, and languages
- **Research**: PhD thesis overview, research areas, and interests
- **Publications**: Filterable list of publications with BibTeX export
- **Teaching**: Courses taught with responsibilities and philosophy
- **Projects**: Academic projects with detailed descriptions
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Modern web framework
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript - Type-safe development
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for serverless deployment
- **Fonts**: Google Fonts (Inter & Merriweather)

## 📦 Project Structure

```
my-website/
├── src/
│   ├── lib/
│   │   ├── components/       # Reusable Svelte components
│   │   │   ├── Header.svelte
│   │   │   └── Footer.svelte
│   │   ├── data/            # Content data files
│   │   │   ├── publications.ts
│   │   │   ├── courses.ts
│   │   │   ├── projects.ts
│   │   │   └── skills.ts
│   │   └── utils/           # Utility functions
│   │       └── seo.ts
│   ├── routes/              # SvelteKit routes
│   │   ├── +layout.svelte   # Main layout
│   │   ├── +page.svelte     # Home page
│   │   ├── about/
│   │   ├── research/
│   │   ├── publications/
│   │   ├── teaching/
│   │   ├── projects/
│   │   └── contact/
│   └── app.css              # Global styles with Tailwind
├── static/                  # Static assets
├── package.json
├── svelte.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Basic knowledge of SvelteKit (optional for content updates)

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd my-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Updating Content

### Publications

Edit `src/lib/data/publications.ts`:

```typescript
export const publications: Publication[] = [
  {
    id: 1,
    title: 'Your Paper Title',
    authors: 'Author1, Author2, Author3',
    venue: 'Conference Name',
    year: 2025,
    doi: '10.1145/xxxxx',
    pages: '10 pages',
    type: 'conference',
    isFirstAuthor: true
  }
];
```

### Courses

Edit `src/lib/data/courses.ts`:

```typescript
export const courses: Course[] = [
  {
    code: 'COMP5427',
    name: 'Usability Engineering',
    semester: 'S1',
    year: 2025,
    role: 'Teaching Assistant'
  }
];
```

### Projects

Edit `src/lib/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    year: 2022,
    description: 'Project description...',
    responsibilities: ['Task 1', 'Task 2'],
    outcomes: 'Results and achievements',
    technologies: ['Python', 'JavaScript']
  }
];
```

### Skills & Research Interests

Edit `src/lib/data/skills.ts` to update technical skills, professional skills, and research interests.

### Personal Information

Update contact information in:
- `src/lib/components/Footer.svelte`
- `src/routes/contact/+page.svelte`
- `src/lib/utils/seo.ts`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Visit [vercel.com](https://vercel.com) and import your repository

3. Vercel will auto-detect SvelteKit and configure everything automatically

4. Click "Deploy" - your site will be live in minutes!

Or using Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Install Netlify adapter:
   ```bash
   npm install -D @sveltejs/adapter-netlify
   ```

2. Update `svelte.config.js`:
   ```javascript
   import adapter from '@sveltejs/adapter-netlify';
   ```

3. Push to Git and connect to Netlify, or use CLI:
   ```bash
   npm run build
   netlify deploy --prod
   ```

## 🎨 Customization

### Colors

The color scheme uses Tailwind CSS. Main colors:
- **Primary**: Blue (blue-600, blue-700)
- **Accent**: Various complementary colors
- **Background**: White and light gray (gray-50)

To change colors, update class names in components or modify `src/app.css`.

### Fonts

Current fonts from Google Fonts:
- **Headings**: Inter (sans-serif)
- **Body**: Merriweather (serif)

Update font imports in `src/routes/+layout.svelte`.

### Adding New Pages

1. Create a new directory in `src/routes/`
2. Add a `+page.svelte` file
3. Update navigation in `src/lib/components/Header.svelte`

## 🔧 Maintenance

### Adding a Blog

To add a blog section:
1. Install MDsveX for Markdown support
2. Create `src/routes/blog/` directory
3. Add blog posts as `.md` or `.svx` files

### Analytics

To add Google Analytics or Plausible:
1. Add tracking script in `src/routes/+layout.svelte`
2. Ensure privacy compliance (GDPR, CCPA)

### Contact Form Backend

The contact form currently uses client-side validation only. To add backend functionality:

**Option 1: FormSpree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Serverless Function**
Create API endpoint in `src/routes/api/contact/+server.ts`

## 📊 Performance

- Lighthouse Score: >90
- Fast initial load time: <3s
- Optimized bundle size
- Lazy loading where applicable
- SEO-friendly with semantic HTML

## 🤝 Support

For issues or questions:
- Email: yihao.dong@outlook.com
- Check SvelteKit docs: https://kit.svelte.dev/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## 📜 License

This project is created for personal academic use by Yihao Dong.

---

**Built with** ❤️ **using SvelteKit and Tailwind CSS**

Last Updated: October 2025
