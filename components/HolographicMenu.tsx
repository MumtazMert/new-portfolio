"use client";

import { motion } from "framer-motion";
import ChromaticAberration from "./ChromaticAberration";
import { useAudioManager } from "./AudioManager";

interface HolographicMenuProps {
    onMenuItemClick: (section: string) => void;
}

const menuItems = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "tools", label: "Tools" },
    { id: "contact", label: "Contact" },
];

export default function HolographicMenu({ onMenuItemClick }: HolographicMenuProps) {
    const { playHover, playClick } = useAudioManager();

    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{
                opacity: [0.5, 1, 0.7, 1],
            }}
            transition={{
                duration: 0.4,
                times: [0, 0.3, 0.6, 1],
            }}
            className="relative"
        >
            <ChromaticAberration>
                <div className="bg-black/40 backdrop-blur-sm border-2 border-[var(--holo-primary)] holo-border-glow p-6 min-w-[320px]">
                    {/* Menu Header */}
                    <div className="mb-6 pb-3 border-b border-[var(--holo-primary)]/30">
                        <h2 className="text-sm font-bold tracking-wider holo-glow uppercase">
                            / PAUSE MENU
                        </h2>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2">
                        {menuItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => {
                                    playClick();
                                    onMenuItemClick(item.id);
                                }}
                                onMouseEnter={playHover}
                                whileHover={{
                                    x: 10,
                                    filter: "brightness(1.3)",
                                }}
                                transition={{ duration: 0.2 }}
                                className="w-full text-left px-4 py-3 bg-[var(--holo-primary)]/10 border border-[var(--holo-primary)]/50 holo-glow hover:bg-[var(--holo-primary)]/20 transition-colors"
                            >
                                <span className="text-base font-medium tracking-wide">
                                    {item.label}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </ChromaticAberration>
        </motion.div>
    );
}
