import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import showConsoleMessage from './utils/showConsoleMessage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

showConsoleMessage('success', 'Aplicação em execulção')
