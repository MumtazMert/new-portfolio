export default function AboutSection() {
    return (
        <div className="space-y-4">
            <p>
                Welcome to my portfolio. I'm a developer passionate about creating immersive
                digital experiences with cutting-edge technologies.
            </p>
            <p>
                This interface is inspired by the holographic UI systems from Dead Space,
                combining futuristic aesthetics with modern web technologies.
            </p>
            <div className="mt-6 pt-4 border-t border-[var(--holo-primary)]/30">
                <h3 className="text-lg font-semibold mb-2 holo-glow">Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-[var(--holo-primary)]/80">
                    <li>Next.js & React Development</li>
                    <li>TypeScript & Modern JavaScript</li>
                    <li>UI/UX Design & Animation</li>
                    <li>Full-Stack Development</li>
                </ul>
            </div>
        </div>
    );
}
