import {createContext} from "react";

export const Theme = {
    LIGHT : 'light',
    DARK : 'dark'
} as const;

export type Theme = typeof Theme[keyof typeof Theme];

type ThemeContextType = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.LIGHT,
    changeTheme: () => {},
})