# Day 02 - DevAtlas

Date: 16-06-2026

## Prework done today

Day 02 Status Report

✅ React Router Installed? Yes 

✅ Tailwind Installed? Yes 

✅ Folder Structure Created? Yes 

✅ GitHub Repository Created? yes 

GitHub Link: https://github.com/abhinandkrishna20/devatlas 

Problems Faced: No 

Questions: Will ask later?

### Note

At starting of today I learn about how to install Tailwind Css in React app, and how to configure it

npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

### Learning

vite.config.ts is the control unit file for the project, I tells the program how to execute. It stores important plugins we used in the project.

### Task Done today

src/pages
|
├── Overview
│   └── Overview.tsx
├── Projects
│   └── Projects.tsx
├── Learning
│   └── Learning.tsx
├── Notes
│   └── Notes.tsx
├── Roadmaps
│   └── Roadmaps.tsx
├── Achievements
│   └── Achievements.tsx
├── Blog
│   └── Blog.tsx
└── Resources
    └── Resources.tsx
