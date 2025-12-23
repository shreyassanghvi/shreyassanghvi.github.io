# Personal Portfolio Website

A modern, responsive portfolio website showcasing projects and experience in biomedical engineering, robotics, and machine learning.

## About

This is a personal portfolio website built to showcase work at the intersection of robotics, machine learning, and medical innovation. The site features a clean, professional design with smooth animations and an intuitive user experience.

## Technologies Used

- **Next.js** - React framework for production-grade applications
- **TypeScript** - Type-safe JavaScript for robust development
- **Framer Motion** - Animation library for smooth, interactive UI elements
- **React Icons** - Icon library for consistent visual elements
- **CSS Modules** - Component-scoped styling for maintainable CSS

## Features

- **Responsive Design** - Mobile-first approach ensuring optimal viewing on all devices
- **Home Page** - Personal introduction with profile image and background
- **Projects Showcase** - Dedicated page displaying portfolio projects with descriptions
- **Resume Download** - Quick access to downloadable resume
- **Smooth Animations** - Page transitions and element animations using Framer Motion
- **Type-Safe** - Full TypeScript implementation for code reliability
- **Fast Performance** - Optimized images and Next.js static generation

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/shreyassanghvi/shreyassanghvi.github.io.git
cd shreyassanghvi.github.io
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── components/       # React components
├── data/            # JSON data files (projects, etc.)
├── pages/           # Next.js pages
├── public/          # Static assets (images, resume, etc.)
├── styles/          # CSS modules and global styles
└── package.json     # Dependencies and scripts
```

## Deployment

The site is deployed using GitHub Pages. Any push to the main branch will trigger an automatic deployment.

For manual deployment or other platforms:

- **Vercel**: Connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments
- **GitHub Pages**: The site is configured for GitHub Pages deployment via GitHub Actions
- **Other platforms**: Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Framer Motion](https://www.framer.com/motion/) - Animation library documentation
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript handbook
