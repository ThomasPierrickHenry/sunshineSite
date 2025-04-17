import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/Router'
import { Normalize } from 'theme'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Normalize />
    <AppRouter/>
  </StrictMode>,
)
