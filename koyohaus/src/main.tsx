import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MediaQueryProvider } from './components/MediaQueryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MediaQueryProvider>
      <App />
     </MediaQueryProvider>
  </StrictMode>,
)
