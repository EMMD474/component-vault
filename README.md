# 🧩 Component Vault

A personal collection of reusable UI components, sections, hooks, and templates built with **React, TypeScript, and Tailwind CSS**.

This repository is designed to **speed up development** by providing ready-to-use building blocks that can be copied, customized, and reused across multiple projects.

---

## 🚀 Purpose

Instead of rewriting the same components from scratch, this vault serves as a **central source of truth for reusable patterns**.

Use it to:

* Quickly bootstrap new projects
* Maintain consistency across apps
* Reuse proven UI patterns
* Experiment and refine components in isolation

---

## 🛠 Tech Stack

* **React + TypeScript**
* **Vite**
* **Tailwind CSS**
* Optional utilities:

  * `lucide-react` (icons)
  * `framer-motion` (animations)
  * `clsx` / `cn` (class utilities)

---

## 📁 Project Structure

```
component-vault/
├── src/                    # Playground app (for testing components)
│   ├── App.tsx
│   ├── main.tsx
│   └── playground/
│
├── vault/                  # 🔥 Main reusable code
│   ├── components/         # UI components (buttons, inputs, cards, etc.)
│   ├── sections/           # Page sections (hero, FAQ, contact, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions
│   ├── templates/          # Layouts and page structures
│   └── screenshots/        # Optional previews
│
├── public/
├── index.html
├── package.json
└── README.md
```

---

## 🧠 How to Use

This is **not a package** — it is a **copy-and-customize system**.

### Steps:

1. Browse the `vault/` directory
2. Find a component or section you need
3. Copy it into your project
4. Adjust styling, props, or logic as needed

Example:

```tsx
// Copy from vault/components/buttons/primary-button/component.tsx
import { PrimaryButton } from "@/components/ui/button";

<PrimaryButton>Click me</PrimaryButton>
```

---

## 📌 Guidelines

### ✅ What to include

* Reusable and generic components
* Clean, well-structured code
* Components that can be adapted easily

### ❌ What to avoid

* Project-specific components (e.g. `UHLBookingCard`)
* Hardcoded business logic
* Overly complex or tightly coupled components

---

## 🧩 Component Structure

Each component should follow this structure:

```
component-name/
├── component.tsx
├── notes.md        # usage, dependencies, tips
└── preview.png     # optional screenshot
```

---

## 🧪 Playground

The `src/` directory acts as a **live testing environment**.

Use it to:

* Preview components
* Test variations
* Experiment before copying

---

## 🔁 Workflow

1. Build a component in a real project
2. Extract and clean it
3. Generalize it (remove project-specific logic)
4. Add it to the vault
5. Document it briefly
6. Reuse it in future projects

---

## 📈 Future Improvements

* CLI tool for copying components (like shadcn/ui)
* Better categorization and tagging
* Component previews or Storybook integration
* Versioned reusable components (optional package system)

---

## 🧑‍💻 Author

**Emmanuel Banda**

---

## 📄 License

MIT — free to use, modify, and distribute.
