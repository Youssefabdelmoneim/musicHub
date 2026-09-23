# 🎵 musicHub

A modern, responsive music web application built with **React**, **Vite**, and **Tailwind CSS**. musicHub allows users to discover, search, and preview tracks, explore albums, and navigate curated music content with a seamless, modular user experience.

---

## ✨ Features

- **Dynamic Search & Discovery:** Explore artists, albums, and tracks with real-time feedback.
- **Audio Previews:** Listen to track snippets directly within the app.
- **Centralized State Management:** Built using React Context API for predictable global state (active tracks, playback state, search query).
- **Client-Side Routing:** Fast, declarative page navigation powered by React Router.
- **Clean Architecture:** Organized strictly into modular layers (`api`, `components`, `context`, `hooks`, `pages`, `routes`).
- **High Performance:** Bundled with Vite and linted using Oxlint for fast builds and code quality.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API & Custom Hooks
- **Linting & Formatting:** [Oxlint](https://oxc-project.github.io/) & [Prettier](https://prettier.io/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
musicHub/
├── public/              # Static assets
├── src/
│   ├── api/             # API clients and data-fetching utilities
│   ├── components/      # Reusable UI components (Navbar, Player, Cards, etc.)
│   ├── context/         # React Context providers for global state
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # View/route components (Home, Search, Details, etc.)
│   ├── routes/          # Route configuration (AppRoutes.jsx)
│   ├── App.css          # Base styles and Tailwind imports
│   ├── App.jsx          # Root component wrapped with providers
│   └── main.jsx         # Application entry point
├── .oxlintrc.json       # Oxlint configuration
├── .prettierrc          # Prettier code formatting rules
├── vercel.json          # Deployment configuration
└── vite.config.js       # Vite configuration
