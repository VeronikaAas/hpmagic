import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Oppstartspunkt for React-applikasjonen.
// Bruker StrictMode for å hjelpe med å identifisere potensielle problemer i applikasjonen.
// BrowserRouter brukes for å håndtere klient-side routing.
// App-komponenten er hovedkomponenten som inneholder hele applikasjonen.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
