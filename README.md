# Vue Components Library

A boilerplate for building and sharing Vue 3 components using the Composition API, styled with Tailwind CSS, documented with Storybook, and powered by Vite.

## 🚀 Features

- ⚡ **Vue 3 + Composition API** – Modern and scalable component structure
- 🎨 **Tailwind CSS** – Utility-first styling with full customization
- 📚 **Storybook** – Interactive documentation and isolated component development
- 🛠 **Vite** – Fast development server and optimized builds
- 📦 **Ready for npm publishing** – Easily package and share your components

## 📂 Project Structure

src/
├─ components/ # Vue 3 components
├─ stories/ # Storybook stories
├─ styles/ # Tailwind setup
└─ index.ts # Entry point

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/caiokawasaki/vue-components-library.git
cd vue-components-library
npm install
```

Run the dev server:

```bash
npm run dev
```

Start Storybook:

```bash
npm run storybook
```

Build for production:

```bash
npm run build
```

📖 Usage as a Dependency

After publishing the package to npm (or GitHub Packages), install it in your project:

```bash
npm install your-package-name
```

Import and register components:

```vue
import { createApp } from 'vue'
import App from './App.vue'
import VueComponentLibrary from 'your-package-name'
import 'your-package-name/style.css'

const app = createApp(App)
app.use(VueComponentLibrary)
app.mount('#app')
```

🧪 Storybook

Each component includes its own Storybook stories for testing, showcasing variants, and improving documentation.

```bash
npm run storybook
```
