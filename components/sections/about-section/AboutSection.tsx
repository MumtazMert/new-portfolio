import { P1, P2, SKILLS } from "./Constants";

export default function AboutSection() {
    return (
        <div className="space-y-4">
            <p>
                {P1}
            </p>
            <p>
                {P2}
            </p>
            <div className="mt-6 pt-4 border-t border-[var(--holo-primary)]/30">
                <h3 className="text-lg font-semibold mb-2 holo-glow">Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-[var(--holo-primary)]/80">
                    {SKILLS.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
