import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Project from './pages/Project.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Clerk reads the Vite publishable key from env in this integration mode. */}
    {/* @ts-expect-error publishableKey is intentionally sourced from env, not passed as a prop. */}
    <ClerkProvider afterSignOutUrl="/">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Project />} />
        </Routes>

      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
