import './style.css';
import { detectLanguage } from './i18n';
import { load } from './state';
import { startApp } from './ui/screens';

// Detect language
detectLanguage();

// Load saved state
load();

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// Start
startApp();
