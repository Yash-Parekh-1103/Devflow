import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar.tsx'
import { Dashboard } from './pages/Dashboard.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Clerk reads the Vite publishable key from env in this integration mode. */}
    {/* @ts-expect-error publishableKey is intentionally sourced from env, not passed as a prop. */}
    <ClerkProvider afterSignOutUrl="/">
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
