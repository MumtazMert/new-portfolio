import { P1, CONTACT_LINKS } from "./Constants";

export default function ContactSection() {
    return (
        <div className="space-y-4">
            <p>{P1}</p>
            <div className="space-y-3 mt-6">
                {CONTACT_LINKS.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="block border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5 hover:bg-[var(--holo-primary)]/10 transition-colors cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold holo-glow group-hover:text-[var(--holo-primary)]">{link.label}</span>
                            <span className={`text-[var(--holo-primary)]/80 group-hover:text-[var(--holo-primary)] transition-colors ${link.truncate ? "truncate" : ""}`}>
                                {link.value}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
