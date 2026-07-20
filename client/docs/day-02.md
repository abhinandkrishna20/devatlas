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

I learned about navigation in this application react-router

first create 3 componets
1. MainLayout
2. Navbar
3. Sidebar
into layout folder that placed in componets folder (The parent folder)

then I work on Sidebar component

here first I create an array object namely menuItems, and add values like { name: "somthing", path:"/something"},

then I create a map funtion that add the list of menuItem in that object, that enclosed <ul></ul>( childe of <aside></aside>) the map function work with key and pair value

i.e. {meneItems.map((item)=>{
  <li key={item.path}>
  <NavLink>
  {item.name}
    </NavLink>
  </li>
})}
// NavLink is part of react-router-dom
this map funtions iterate all items listed in the menuItem object. so now the side bar is over

Then I code the Navbar component, it is a simple component only had a Title as DevAtlas in top, later we add search, theme toggle etc

and last I code the MainLayout, here we add the Navbar component in top (after the main div componet) and sidebar to div component then, then add add <main></main> tag to enclosed the <Outlet />(here only the main contents are appear)

after all I did, I run the comment "npm run dev" and wait for the result, 

Unfortunately I saw a White Blank page in the browser, it was littlebit shock to me! what I made mistake?

then go to chatgpt and ask what happen here?


it reminds me to add the routing items then I goto routes folder and create a component AppRoutes 

here I add the routes like below

<Route path="/" element={<MainLayout />}>
  <Route index element={<Overview />} />
  <Route path="projects" element={<Projects />} />
  <Route path="learning" element={<Learning />} />
  <Route path="notes" element={<Notes />} />
  <Route path="roadmaps" element={<Roadmaps />} />
  <Route path="achievements" element={<Achievements />} />
  <Route path="blog" element={<Blog />} />
  <Route path="resources" element={<Resources />} />
</Route>

then I add this component to <App><AppRoutes />
</App>
now I think now the code defenitly works, 

another shocking surprise now also I see the blank page, again I go to chatgpt.

Now it tell me check the developer mode and find the error, 

useRoutes() may be used only in the context of a <Router> component.

this error I got, then it teach me 

you do 

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

instead of this 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

now I understand what I did wrong. now I correct the issue then the code work perfectly 

### issue

Uncaught Error: useRoutes() may be used only in the context of a <Router> component. at invariant (chunk-6CSD65Y2.mjs:200:11) at useRoutesImpl (chunk-6CSD65Y2.mjs:5951:3) at useRoutes (chunk-6CSD65Y2.mjs:5948:10) at Routes (chunk-6CSD65Y2.mjs:7055:10) at Object.react_stack_bottom_frame (react-dom-client.development.js:25904:20) at renderWithHooks (react-dom-client.development.js:7662:22) at updateFunctionComponent (react-dom-client.development.js:10166:19) at beginWork (react-dom-client.development.js:11778:18) at runWithFiberInDEV (react-dom-client.development.js:871:30) at performUnitOfWork (react-dom-client.development.js:17641:22) react-dom-client.development.js:9362 An error occurred in the <Routes> component. Consider adding an error boundary to your tree to customize error handling behavior. Visit https://react.dev/link/error-boundaries to learn more about error boundaries. defaultOnUncaughtError @ react-dom-client.development.js:9362 [NEW] Explain Console errors by using Copilot in Edge: click to explain an error. Learn moreDon't show again

useRoutes() may be used only in the context of a <Router> component.


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


--------------------------------------
Navbar
--------------------------------------

Sidebar        |      Page Content

               |
               |
               |