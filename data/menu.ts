export const menuItems = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "tools", label: "Tools" },
    { id: "contact", label: "Contact" },
] as const;

export type MenuId = typeof menuItems[number]["id"];
