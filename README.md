# Dynamic Dashboard with Widget Management

This project is a dynamic dashboard built with React, featuring widget management using context. It uses [Vite](https://vitejs.dev/) for fast development and build tooling.

## 🚀 Technologies Used

- **React** (UI library)
- **Vite** (development/build tool)
- **JavaScript/JSX**
- **Context API** (for state management)
- **Node.js** (runtime for scripts)

## 📁 Project Structure

```
project/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   └── Dashboard.jsx
│   └── context/
│       └── DashboardContext.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Setup & Run Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/anukuldev/Dashboard.git
   cd Dashboard/project
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   - Open the local URL shown in the terminal (usually `http://localhost:5173`).

4. **Build for production**
   ```sh
   npm run build
   ```

5. **Preview the production build**
   ```sh
   npm run preview
   ```

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

## 📝 How It Works

- The app renders a dashboard inside a context provider for widget management.
- Entry point: `src/main.jsx` renders `App.jsx` into the `#root` div in `index.html`.
- All dashboard logic and widgets are managed via React context.

## 🔗 Repository

[https://github.com/anukuldev/Dashboard](https://github.com/anukuldev/Dashboard)

---

Feel free to fork, clone, and
