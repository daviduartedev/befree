export const colors = {
    beige: "#fff2eb",
    white: "#FFFFFF",
    gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
    },
};

export const workerTheme = {
    primary: "#f23030",
    secondary: "#FFFFFF",
    background: colors.beige,
    surface: "#FFFFFF",
    accent: "#fde0d0",
    text: colors.gray[900],
    textSecondary: colors.gray[500],
};

export const companyTheme = {
    primary: "#340b8c",
    secondary: "#ffbe43",
    background: colors.beige,
    surface: "#FFFFFF",
    accent: "#fde0d0", // Keeping it compatible with the warm beige
    text: colors.gray[900],
    textSecondary: colors.gray[500],
};

export type Theme = typeof workerTheme;

export const themes = {
    WORKER: workerTheme,
    COMPANY: companyTheme,
};
