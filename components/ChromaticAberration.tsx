"use client";

import { ReactNode, useState } from "react";

interface ChromaticAberrationProps {
    children: ReactNode;
    className?: string;
}

export default function ChromaticAberration({
    children,
    className = ""
}: ChromaticAberrationProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${isHovered ? 'chromatic-aberration-intense' : 'chromatic-aberration'} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}
