"use client";

import { useState, useCallback } from "react";

export type ModalSection = "about" | "work" | "tools" | "contact" | null;

export function useNavigation() {
    const [activeModal, setActiveModal] = useState<ModalSection>(null);

    const openModal = useCallback((section: ModalSection) => {
        setActiveModal(section);
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
    }, []);

    return {
        activeModal,
        openModal,
        closeModal,
    };
}
