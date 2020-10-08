import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core"
import { ThemeContext } from "./Theme";

const AppBarCollapse = props => {
    var themeContext = useContext(ThemeContext)

    return (
        <div className={props.classes.root}>
            <Switch
                checked={themeContext.theme.dark}
                onChange={(val) => { themeContext.setTheme({ dark: val.target.checked }) }}
                name="checkedB"
                color="primary"
            />
        </div>
    );
};

export default withStyles(styles)(AppBarCollapse);
