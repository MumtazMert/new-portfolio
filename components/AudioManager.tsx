"use client";

import { useEffect, useRef, useState } from "react";

export function useAudioManager() {
    const hoverBuffer = useRef<HTMLAudioElement | null>(null);
    const clickBuffer = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {

        try {
            if (!hoverBuffer.current) {
                hoverBuffer.current = new Audio('/sounds/hover.wav');
                hoverBuffer.current.preload = 'auto';
                hoverBuffer.current.volume = 0.3;
                hoverBuffer.current.load();
            }

            if (!clickBuffer.current) {
                clickBuffer.current = new Audio('/sounds/click.wav');
                clickBuffer.current.preload = 'auto';
                clickBuffer.current.volume = 0.4;
                clickBuffer.current.load();
            }
        } catch (e) {
            console.error("Audio initialization failed", e);
        }
    }, []);

    const playHover = () => {
        if (hoverBuffer.current) {

            const sound = hoverBuffer.current.cloneNode() as HTMLAudioElement;
            sound.volume = 0.3;
            sound.play().catch(() => {

            });
        }
    };

    const playClick = () => {
        if (clickBuffer.current) {
            const sound = clickBuffer.current.cloneNode() as HTMLAudioElement;
            sound.volume = 0.4;
            sound.play().catch(() => {

            });
        }
    };

    return { playHover, playClick };
}
