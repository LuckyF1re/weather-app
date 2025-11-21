import {createContext} from "react";

type ThemeContextType = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.LIGHT,
    changeTheme: () => {},
})