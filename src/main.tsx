
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18n from "../src/Config/i18n.ts";
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import { LanguageProvider } from "../src/Config/LanguageContext";
createRoot(document.getElementById('root')!).render(
    <LanguageProvider>
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </I18nextProvider>
    </LanguageProvider>

)
