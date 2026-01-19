import { FIRSTPROJECTNAME, FIRSTPROJECTDESC, FIRSTPROJECTTECH, SECONDPROJECTNAME, SECONDPROJECTDESC, SECONDPROJECTTECH } from "./Constants";

export default function WorkSection() {
    return (
        <div className="space-y-4">
            <div className="space-y-4">
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-lg font-semibold mb-2 holo-glow">{FIRSTPROJECTNAME}</h3>
                    <p className="text-[var(--holo-primary)]/80 mb-2">
                        {FIRSTPROJECTDESC}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {FIRSTPROJECTTECH.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">

                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5">
                    <h3 className="text-lg font-semibold mb-2 holo-glow">{SECONDPROJECTNAME}</h3>
                    <p className="text-[var(--holo-primary)]/80 mb-2">
                        {SECONDPROJECTDESC}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {SECONDPROJECTTECH.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 border border-[var(--holo-primary)]/50 bg-[var(--holo-primary)]/10">

                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
