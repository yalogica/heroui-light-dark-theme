import { heroui } from '@heroui/react';

export default heroui({
    defaultTheme: 'light',
    layout: {
        radius: {
            medium: "6px",
        }
    },
    themes: {
        light: {
            colors: {
                primary: {
                    50: "#1c2030",
                    100: "#2c334c",
                    200: "#3c4667",
                    300: "#4c5883",
                    400: "#5c6b9f",
                    500: "#7985b0",
                    600: "#959fc1",
                    700: "#b2b9d1",
                    800: "#ced3e2",
                    900: "#ebedf3",
                    foreground: "#fff",
                    DEFAULT: "#5c6b9f"
                },
                secondary: {
                    50: "#162b2f",
                    100: "#22444b",
                    200: "#2f5d66",
                    300: "#3b7682",
                    400: "#488f9d",
                    500: "#68a3ae",
                    600: "#88b6bf",
                    700: "#a8cad0",
                    800: "#c8dde2",
                    900: "#e8f1f3",
                    foreground: "#fff",
                    DEFAULT: "#488f9d"
                },
                background: "#f0f0f0",
                foreground: "#272727",
            }
        },
        dark: {
            colors: {
                primary: {
                    50: "#1c2030",
                    100: "#2c334c",
                    200: "#3c4667",
                    300: "#4c5883",
                    400: "#5c6b9f",
                    500: "#7985b0",
                    600: "#959fc1",
                    700: "#b2b9d1",
                    800: "#ced3e2",
                    900: "#ebedf3",
                    foreground: "#fff",
                    DEFAULT: "#5c6b9f"
                },
                secondary: {
                    50: "#162b2f",
                    100: "#22444b",
                    200: "#2f5d66",
                    300: "#3b7682",
                    400: "#488f9d",
                    500: "#68a3ae",
                    600: "#88b6bf",
                    700: "#a8cad0",
                    800: "#c8dde2",
                    900: "#e8f1f3",
                    foreground: "#fff",
                    DEFAULT: "#488f9d"
                },
                background: "#1a202c",
                foreground: "#e5e5e5",
                focus: "#6379a7"
            }
        }
    }
});