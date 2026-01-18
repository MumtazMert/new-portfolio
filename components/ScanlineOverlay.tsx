"use client";

export default function ScanlineOverlay() {
    return (
        <div
            className="scanlines fixed inset-0 z-50 pointer-events-none"
            style={{
                backgroundSize: '100% 100px',
            }}
        />
    );
}
