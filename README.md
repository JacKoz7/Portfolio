# Portfolio

Personal portfolio - AI engineer / fullstack developer. Next.js 14 + TypeScript + Tailwind CSS, bilingual (EN/PL), static export deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Deployment

Push to `master` - the GitHub Actions workflow builds a static export (`out/`) and deploys it to GitHub Pages.

## Structure

```
src/
  app/          # layout (fonts, metadata), page (language state), globals.css
  lib/          # content.ts - all EN/PL copy in one place
  sections/     # Header, Hero, About, Projects, Experience, Education, Contact, Footer
  components/   # SectionHeader
public/         # portrait.jpg, CV PDF
```

To edit copy, change `src/lib/content.ts` only.
