import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Path } from "../Routes/Routes";
import {AppBar, Button} from "@material-ui/core";

export const Header = () => {

    return (
        <AppBar position="static" className={classes.nav} color={"inherit"}
                style={{flexDirection: "row"}}>

            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.AboutMe} activeClassName={classes.active}>
                        About Me
                    </NavLink>
                </Button>
            </div>
            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Skills} activeClassName={classes.active}>
                        Skills
                    </NavLink>
                </Button>
            </div>
            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Contacts} activeClassName={classes.active}>
                        Contacts
                    </NavLink>
                </Button>
            </div>
        </AppBar>
    )
}
