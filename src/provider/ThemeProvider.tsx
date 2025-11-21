import {type ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext.ts";
import {changeCssRootVariables} from "../model/ChangeCssRootVariables.ts";
import {storage} from "../model/Storage.ts";

type ThemeProviderType = {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: ThemeProviderType) => {

    const [theme, setTheme] = useState<Theme>(
       storage.getItem('theme') || Theme.LIGHT
    );

    changeCssRootVariables(theme);

    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    return <ThemeContext.Provider
        value={{
            theme: theme,
            changeTheme: changeTheme,
        }}
        {...props}
    >{children}</ThemeContext.Provider>
}