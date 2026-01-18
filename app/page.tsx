"use client";

import { useState } from "react";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import HolographicMenu from "@/components/HolographicMenu";
import HolographicModal from "@/components/HolographicModal";
import ControllerPrompts from "@/components/ControllerPrompts";

type ModalSection = "about" | "work" | "tools" | "contact" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalSection>(null);

  const modalContent = {
    about: {
      title: "About",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to my portfolio. I'm a developer passionate about creating
            immersive digital experiences with cutting-edge technologies.
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
      ),
    },
    work: {
      title: "Work",
      content: (
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
      ),
    },
    tools: {
      title: "Tools",
      content: (
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
      ),
    },
    contact: {
      title: "Contact",
      content: (
        <div className="space-y-4">
          <p>
            Interested in working together? Feel free to reach out through any of
            the following channels:
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
      ),
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Scanline Overlay */}
      <ScanlineOverlay />



      {/* Main Menu */}
      <HolographicMenu onMenuItemClick={(section) => setActiveModal(section as ModalSection)} />

      {/* Modal */}
      {activeModal && modalContent[activeModal] && (
        <HolographicModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={modalContent[activeModal].title}
        >
          {modalContent[activeModal].content}
        </HolographicModal>
      )}

      {/* Controller Prompts */}
      <ControllerPrompts />
    </div>
  );
}
