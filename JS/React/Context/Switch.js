import React, { useState, useRef, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core"
import { darkTheme, lightTheme, ThemeContext } from "./Theme";

const AppBarCollapse = props => {
    var themeContext = useContext(ThemeContext)

    return (
        <div className={props.classes.root}>
            <Switch
                checked={themeContext.theme.dark}
                onChange={(val) => { themeContext.setTheme({ dark: val.target.checked, theme: val.target.checked ? darkTheme : lightTheme }) }}
                name="checkedB"
                color="primary"
            />
        </div>
    );
};

export default withStyles(styles)(AppBarCollapse);
