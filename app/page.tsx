"use client";

import ScanlineOverlay from "@/components/ScanlineOverlay";
import HolographicMenu from "@/components/HolographicMenu";
import HolographicModal from "@/components/HolographicModal";
import ControllerPrompts from "@/components/ControllerPrompts";
import AboutSection from "@/components/sections/about-section/AboutSection";
import WorkSection from "@/components/sections/work-section/WorkSection";
import ToolsSection from "@/components/sections/tools-section/ToolsSection";
import ContactSection from "@/components/sections/contact-section/ContactSection";
import { useNavigation, ModalSection } from "@/hooks/useNavigation";
import { ReactNode } from "react";

export default function Home() {
  const { activeModal, openModal, closeModal } = useNavigation();

  const sections: Record<string, { title: string; content: ReactNode }> = {
    about: {
      title: "About",
      content: <AboutSection />,
    },
    work: {
      title: "Work",
      content: <WorkSection />,
    },
    tools: {
      title: "Tools",
      content: <ToolsSection />,
    },
    contact: {
      title: "Contact",
      content: <ContactSection />,
    },
  };

  const currentSection = activeModal ? sections[activeModal] : null;

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Scanline Overlay */}
      <ScanlineOverlay />

      {/* Main Menu */}
      <HolographicMenu
        onMenuItemClick={(section) => openModal(section as ModalSection)}
      />

      {/* Modal */}
      {activeModal && currentSection && (
        <HolographicModal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={currentSection.title}
        >
          {currentSection.content}
        </HolographicModal>
      )}

      {/* Controller Prompts */}
      <ControllerPrompts />
    </div>
  );
}
