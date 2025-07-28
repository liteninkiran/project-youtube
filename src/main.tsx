import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const onUnhandledRequest = (request: Request) => {
    const url = new URL(request.url);
    const ignores = ['.tsx', '.ts', '.js', '.jsx', '.css', '.map'];
    const warning = `[MSW] Warning: Unhandled ${request.method} request to ${request.url}`;
    if (ignores.some((ext) => url.pathname.endsWith(ext))) return;
    if (request.mode === 'navigate') return;
    console.warn(warning);
};

if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    worker.start({ onUnhandledRequest });
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
