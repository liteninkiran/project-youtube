import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');

    worker.start({
        onUnhandledRequest(request) {
            // Ignore front-end route navigation requests
            if (request.destination === '' && request.mode === 'navigate') {
                return;
            }

            // Log other unhandled requests
            console.warn(
                `[MSW] Warning: Unhandled ${request.method} request to ${request.url}`
            );
        },
    });
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
