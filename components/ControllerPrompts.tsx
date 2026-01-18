"use client";

export default function ControllerPrompts() {
    return (
        <div className="fixed bottom-6 right-6 z-30 flex gap-6 mono text-sm">
            <div className="flex items-center gap-2 holo-glow">
                <span className="text-[var(--holo-primary)] font-bold">[X]</span>
                <span className="text-[var(--holo-primary)]/80">SELECT</span>
            </div>
            <div className="flex items-center gap-2 holo-glow">
                <span className="text-[var(--holo-primary)] font-bold">[O]</span>
                <span className="text-[var(--holo-primary)]/80">CLOSE</span>
            </div>
        </div>
    );
}
