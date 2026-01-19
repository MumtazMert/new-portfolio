export default function ContactSection() {
    return (
        <div className="space-y-4">
            <p>
                Interested in working together? Feel free to reach out through any of the
                following channels:
            </p>
            <div className="space-y-3 mt-6">
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5 hover:bg-[var(--holo-primary)]/10 transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold holo-glow">EMAIL:</span>
                        <span className="text-[var(--holo-primary)]/80">contact@example.com</span>
                    </div>
                </div>
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5 hover:bg-[var(--holo-primary)]/10 transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold holo-glow">GITHUB:</span>
                        <span className="text-[var(--holo-primary)]/80">@yourusername</span>
                    </div>
                </div>
                <div className="border border-[var(--holo-primary)]/30 p-4 bg-[var(--holo-primary)]/5 hover:bg-[var(--holo-primary)]/10 transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold holo-glow">LINKEDIN:</span>
                        <span className="text-[var(--holo-primary)]/80">linkedin.com/in/yourprofile</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
