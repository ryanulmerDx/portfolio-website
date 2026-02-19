# Ryan Ulmer - Automation Engineer Portfolio

A professional portfolio website showcasing automation engineering expertise with n8n workflows and production systems.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-website/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with fonts
│       ├── page.tsx        # Main portfolio page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json
└── next.config.mjs
```

## Technologies

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- IBM Plex Mono & Space Mono fonts

## Customization

### Contact Email
Update the email address in `src/app/page.tsx`:
- Search for `ryan@reachflowstudio.com`
- Replace with your preferred contact email

### Content
All content is in `src/app/page.tsx`. Edit project details, skills, and text as needed.

### Styling
Colors and design system are defined in inline styles within `page.tsx`. 
Primary accent color: `#22c55e` (green)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the static site:
```bash
npm run build
```
Deploy the `.next` folder to your hosting provider.

## License

Private portfolio - All rights reserved.
# portfolio-website
