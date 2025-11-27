import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

type ThemeContextType = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.LIGHT,
    changeTheme: () => {},
})