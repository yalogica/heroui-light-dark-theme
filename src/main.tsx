import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { App } from '@/components/app';
import '@/main.css';

window.addEventListener('load', async () => { 
    const $app = document.getElementById('app') as HTMLDivElement;

    if ($app && $app.parentElement) {
        ReactDOM.createRoot($app.parentElement).render(
            <React.StrictMode>
                <HeroUIProvider>
                    <App />
                </HeroUIProvider>
            </React.StrictMode>
        );
    };
});