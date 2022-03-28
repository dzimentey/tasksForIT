import React from "react";
import classes from "./Header.module.css";
import {AppBar, Button} from "@material-ui/core";
import {Path} from "../../App";
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <AppBar position="static" className={classes.nav} >

            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.AboutMe} className={({ isActive }) => isActive ? classes.active : undefined}>
                        About Me
                    </NavLink>
                </Button>
            </div>
            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Skills} className={({ isActive }) => isActive ? classes.active : undefined}>
                        Skills
                    </NavLink>
                </Button>
            </div>
            <div className={classes.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Contacts} className={({ isActive }) => isActive ? classes.active : undefined}>
                        Contacts
                    </NavLink>
                </Button>
            </div>
        </AppBar>
    )
}
