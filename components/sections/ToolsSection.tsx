export default function ToolsSection() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Frontend</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        <li>• Next.js</li>
                        <li>• React</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Framer Motion</li>
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Backend</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        <li>• Node.js</li>
                        <li>• PostgreSQL</li>
                        <li>• MongoDB</li>
                        <li>• REST APIs</li>
                        <li>• GraphQL</li>
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">Design</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        <li>• Figma</li>
                        <li>• Adobe XD</li>
                        <li>• Blender</li>
                        <li>• After Effects</li>
                    </ul>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-sm font-semibold mb-2 holo-glow uppercase">DevOps</h3>
                    <ul className="space-y-1 text-sm text-[var(--holo-primary)]/80">
                        <li>• Docker</li>
                        <li>• Vercel</li>
                        <li>• GitHub Actions</li>
                        <li>• AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
