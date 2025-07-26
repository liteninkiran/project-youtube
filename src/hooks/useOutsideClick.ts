import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(handler: () => void, listenCapturing = true) => {
    const ref = useRef<T>(null);

    const effectFn = () => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current) {
                const el: T = ref.current;
                if (!el.contains(e.target as Node)) {
                    handler();
                }
            }
        };

        document.addEventListener('click', handleClick, listenCapturing);

        return () =>
            document.removeEventListener('click', handleClick, listenCapturing);
    };

    useEffect(effectFn, [handler, listenCapturing]);

    return ref;
};
