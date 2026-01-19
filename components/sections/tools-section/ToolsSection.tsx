import { FRONTENDTOOLS, BACKENDTOOLS, DESIGNTOOLS, DEVOPSTOOLS } from "./Constants";

export default function ToolsSection() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Frontend</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        {FRONTENDTOOLS.map((tool) => (
                            <li key={tool}>• {tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Backend</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        {BACKENDTOOLS.map((tool) => (
                            <li key={tool}>• {tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Design</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        {DESIGNTOOLS.map((tool) => (
                            <li key={tool}>• {tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">DevOps</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        {DEVOPSTOOLS.map((tool) => (
                            <li key={tool}>• {tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

