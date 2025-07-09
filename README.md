# Portfolio

A modern, interactive portfolio website showcasing my expertise in DevOps, Cloud Architecture, and Infrastructure automation. Built with Next.js, featuring a live terminal simulation and 3D tech ecosystem visualization.

## 🚀 Features

- **Interactive Terminal**: Real-time terminal simulation with authentic DevOps commands
- **3D Tech Globe**: Interactive visualization of technology stack and tools
- **Modern Design**: Dark theme with smooth animations and responsive layout
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber
- **Typography**: Geist font family
- **Deployment**: GitHub Pages

## 🏃‍♂️ Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build & Export

To build and export the project for static hosting:

```bash
npm run build
npm run export
```

## 🚀 Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages:

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository

2. **Deploy using GitHub CLI**:
   ```bash
   npm run deploy
   ```

3. **Or deploy manually**:
   ```bash
   npm run build
   npm run export
   gh repo create your-portfolio --public
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   gh repo edit --enable-pages --pages-source-path="/out"
   ```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── Terminal.tsx     # Interactive terminal component
│   ├── EnhancedGlobe3D.tsx # 3D tech visualization
│   ├── HeroSection.tsx  # Main hero section
│   ├── Navbar.tsx       # Navigation component
│   └── ContactSection.tsx # Contact form
└── ...
```

## 🎯 Key Components

### Terminal Component
- Authentic terminal appearance with 70x22 character resolution
- Realistic typing animation with variable speed
- DevOps-focused command demonstrations
- Auto-scrolling and cursor blinking effects

### 3D Tech Globe
- Interactive 3D visualization of technology stack
- Responsive design with proper spacing
- Smooth animations and hover effects

## 📧 Contact

- **Email**: arzanashraf03@gmail.com
- **LinkedIn**: [Sheikh Arzan Ashraf](https://linkedin.com/in/your-profile)
- **GitHub**: [arzan03](https://github.com/arzan03)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
