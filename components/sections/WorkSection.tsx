export default function WorkSection() {
    return (
        <div className="space-y-4">
            <div className="space-y-4">
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-lg font-semibold mb-2 holo-glow">Project Alpha</h3>
                    <p className="text-[var(--holo-primary)]/80 mb-2">
                        A cutting-edge web application built with Next.js and TypeScript.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">
                            Next.js
                        </span>
                        <span className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">
                            TypeScript
                        </span>
                        <span className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">
                            Tailwind CSS
                        </span>
                    </div>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-lg font-semibold mb-2 holo-glow">Project Beta</h3>
                    <p className="text-[var(--holo-primary)]/80 mb-2">
                        An interactive 3D experience with immersive animations.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">
                            Three.js
                        </span>
                        <span className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">
                            Framer Motion
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
