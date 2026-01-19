const P1 = "Interested in working together? Feel free to reach out through any of the following channels: "
const EMAIL = "mumtazmert@gmail.com"
const GITHUB = "github.com/MumtazMert"
const LINKEDIN = "linkedin.com/in/mumtazmert"
const UPWORK = "upwork.com/freelancers/~012bd880a6ac5b00e8"

export const CONTACT_LINKS = [
    {
        id: "email",
        label: "EMAIL:",
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        isExternal: false
    },
    {
        id: "github",
        label: "GITHUB:",
        value: GITHUB,
        href: `https://${GITHUB}`,
        isExternal: true
    },
    {
        id: "linkedin",
        label: "LINKEDIN:",
        value: LINKEDIN,
        href: `https://${LINKEDIN}`,
        isExternal: true
    },
    {
        id: "upwork",
        label: "UPWORK:",
        value: UPWORK,
        href: `https://${UPWORK}`,
        isExternal: true,
        truncate: true
    }
];

export { P1, EMAIL, GITHUB, LINKEDIN, UPWORK };
