import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Remove the static fallback SEO tags (index.html) meant for non-JS crawlers now that
// react-helmet-async (src/components/SEO.tsx) is about to take over — otherwise both sets
// of canonical/OG tags would coexist in the rendered DOM.
document.querySelectorAll('[data-default-seo]').forEach((el) => el.remove());

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);