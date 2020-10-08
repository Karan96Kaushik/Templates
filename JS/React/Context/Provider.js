import React from 'react';
import { ThemeProvider, lightTheme, ThemeContext, darkTheme } from './Theme';
import Switch from './Switch';
import { useState } from 'react';

export default function Main(props) {
    var [theme, setTheme] = useState({ dark: false })

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme.dark? darkTheme:lightTheme}>
                <Switch />
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}