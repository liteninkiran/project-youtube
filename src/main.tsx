import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');

    worker.start({
        onUnhandledRequest(request) {
            const url = new URL(request.url);

            // Ignore static asset/module requests
            const ignoredExtensions = [
                '.tsx',
                '.ts',
                '.js',
                '.jsx',
                '.css',
                '.map',
            ];
            if (ignoredExtensions.some((ext) => url.pathname.endsWith(ext))) {
                return;
            }

            // Optionally ignore navigation requests (e.g., front-end routes)
            if (request.mode === 'navigate') {
                return;
            }

            // Log unhandled API requests only
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
