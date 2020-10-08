import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

var seaNgrass = {
    "Tea Green": "#c9e4ca",
    "Eton Blue": "#87bba2",
    "Steel Teal": "#55828b",
    "Deep Space Sparkle": "#3b6064",
    "Charcoal": "#364958",
    "CharcoalDark": "#172a3a",
}

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: seaNgrass["Charcoal"],
            // default: red[100]
        },
        secondary: {
            main: seaNgrass["Deep Space Sparkle"],
            // default: red[100]
        },
        background: {
            // default: "#364958",
            primary: {
                main: seaNgrass["Tea Green"],
                dark: seaNgrass["CharcoalDark"],
            },
            secondary: {
                main: seaNgrass["Eton Blue"],
            }// contrast: grey[500],
        }
    },
    typography: {
        useNextVariants: true,
    },
    props: {
        MuiButtonBase: {
            disableRipple: true, // No more ripple
        },
    },
    layout: {
        contentMaxWidth: 1112,
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: seaNgrass["Tea Green"],
            // default: red[100]
        },
        secondary: {
            main: seaNgrass["Eton Blue"],
            // default: red[100]
        },
        background: {
            // default: "#364958",
            primary: {
                main: seaNgrass["Charcoal"],
                dark: seaNgrass["CharcoalDark"],
            },
            secondary: {
                main: seaNgrass["Deep Space Sparkle"],
            }// contrast: grey[500],
        }
    },
    typography: {
        useNextVariants: true,
    },
    props: {
        MuiButtonBase: {
            disableRipple: true, // No more ripple
        },
    },
    layout: {
        contentMaxWidth: 1112,
    }
});

darkTheme.shadows[1] = '0 3px 3px rgba(0,0,0,.08)';
darkTheme.shadows[2] = '0 10px 10px rgba(0,0,0,.08)';
darkTheme.shadows[4] = '0px 2px 40px 0px rgba(0,0,0,0.08)';

lightTheme.shadows[1] = '0 3px 3px rgba(0,0,0,.08)';
lightTheme.shadows[2] = '0 10px 10px rgba(0,0,0,.08)';
lightTheme.shadows[4] = '0px 2px 40px 0px rgba(0,0,0,0.08)';

const ThemeContext = React.createContext(darkTheme);        // Creating a Context

const ThemeProvider = ({ children, theme = lightTheme }) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export { ThemeProvider, darkTheme, lightTheme, ThemeContext };