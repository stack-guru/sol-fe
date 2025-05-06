import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SolanaProvider } from './SolanaProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolanaProvider>
      <App />
    </SolanaProvider>
  </StrictMode>,
)
