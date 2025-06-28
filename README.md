# PRODIGY_WD_01

A modern React TypeScript project built with Vite, featuring a clean and responsive web application.

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality and consistency
- **PostCSS** for advanced CSS processing
- **Hot Module Replacement (HMR)** for instant development feedback

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tejas5405/PRODIGY_WD_01.git
   cd PRODIGY_WD_01
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Usage

### Development Mode

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
PRODIGY_WD_01/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # Vite environment types
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling

This project uses **Tailwind CSS** for styling. You can:

- Use utility classes directly in your components
- Customize the design system in `tailwind.config.js`
- Add custom CSS in `src/index.css`

## 🔧 Configuration

### Vite Configuration

The Vite configuration is in `vite.config.ts` and includes:

- React plugin for JSX support
- TypeScript support
- Development server settings

### TypeScript Configuration

TypeScript is configured in `tsconfig.json` with:

- Strict type checking
- React JSX support
- Module resolution settings

### ESLint Configuration

ESLint is configured in `eslint.config.js` for:

- Code quality enforcement
- TypeScript linting
- React best practices

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tejas Raykar**

- GitHub: [@Tejas5405](https://github.com/Tejas5405)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

---

⭐ If you found this project helpful, please give it a star!
