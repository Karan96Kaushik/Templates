import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, darkTheme, lightTheme, ThemeContext } from './Theme';
import Switch from './Switch';
import { useState } from 'react';

function Main(props) {
    var [theme, setTheme] = useState({ dark: false, theme: lightTheme })

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme.theme}>
                <Switch />
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}