import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide loading screen after React app loads
const hideLoadingScreen = () => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.style.display = 'none';
    }, 500);
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Hide loading screen after a short delay to ensure smooth transition
setTimeout(hideLoadingScreen, 1000);
