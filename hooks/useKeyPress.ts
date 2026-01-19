import { useEffect } from "react";

export function useKeyPress(targetKey: string, handler: () => void) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === targetKey) {
                handler();
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [targetKey, handler]);
}
