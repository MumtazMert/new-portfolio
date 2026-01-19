"use client";

import { motion, AnimatePresence } from "framer-motion";
import ChromaticAberration from "./ChromaticAberration";
import { useKeyPress } from "../hooks/useKeyPress";

interface HolographicModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function HolographicModal({
    isOpen,
    onClose,
    title,
    children
}: HolographicModalProps) {

    // Handle ESC key to close modal
    useKeyPress("Escape", () => {
        if (isOpen) {
            onClose();
        }
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.02, 1],
                                opacity: [0, 0.8, 1],
                            }}
                            exit={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                times: [0, 0.6, 1],
                            }}
                            className="w-full max-w-2xl"
                        >
                            <ChromaticAberration>
                                <div className="bg-black/60 backdrop-blur-sm border-2 border-[var(--holo-primary)] holo-border-glow p-8">
                                    {/* Modal Header */}
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--holo-primary)]/30">
                                        <h2 className="text-2xl font-bold tracking-wider holo-glow uppercase">
                                            {title}
                                        </h2>
                                        <button
                                            onClick={onClose}
                                            className="text-[var(--holo-primary)] hover:brightness-150 transition-all holo-glow text-sm mono"
                                        >
                                            [ESC] CLOSE
                                        </button>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="text-[var(--holo-primary)]/90 leading-relaxed">
                                        {children}
                                    </div>
                                </div>
                            </ChromaticAberration>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
