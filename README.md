# Study CSC

A modern study management and computer science learning platform built with React, TypeScript, and Vite.

## 🎯 About

Study-CSC is a web application designed to help computer science students organize their learning materials and master fundamental CS concepts. Whether you are learning data structures or building projects, this platform provides the tools you need to succeed. 

## ✨ Features

- **📚 Study Material Organization**: Organize notes, resources, and learning materials by topic
- **🎯 Topic Management**: Categorize and manage different CS topics (Data Structures, Algorithms, System Design, etc.)
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## Live link
[Live Link](https://studycscfuta.netlify.app/)

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: [Your styling solution - Tailwind/CSS Modules/etc]
- **State Management**: [Your state management - Context/Redux/Zustand/etc]
- **Routing**: React Router
- **Code Quality**: ESLint + TypeScript ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Coderio10/Study-CSC.git
cd Study-CSC
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
Study-CSC/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # You are here
```

## 🎨 Key Features Breakdown

### Study Management
Organize your learning materials by categories:
- Data Structures & Algorithms
- System Design
- Operating Systems
- Computer Networks
- Databases
- Web Development

## 🔧 Configuration

### ESLint Setup

This project uses strict TypeScript ESLint rules. To enable type-aware linting:

```javascript
// eslint.config.js
export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

### Vite Plugins

Currently using `@vitejs/plugin-react` with Babel for Fast Refresh. You can switch to SWC for faster builds:

```typescript
// vite.config.ts
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None currently reported

If you find any bugs, please [open an issue](https://github.com/Coderio10/Study-CSC/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Anointed Kayode**

- GitHub: [@Coderio10](https://github.com/Coderio10)
- Email: kayodeanointed@gmail.com
- LinkedIn: [anointedkayode](https://www.linkedin.com/in/anointedkayode)

## 🙏 Acknowledgments

- Vite team for the amazing build tool
- React community for excellent documentation
- All contributors who help improve this project

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue
- Email me at kayodeanointed@gmail.com
- Connect on LinkedIn

---

**⭐ If you find this project helpful, please consider giving it a star!**

---

*Built with ❤️ by Anointed Kayode*
