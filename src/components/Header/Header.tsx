import React from "react";
import {AppBar, Button} from "@material-ui/core";
import {Path} from "../../App";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({

    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        border: '4px solid #ddcddb',
        borderRadius: '15px',
        width: '100%',
        flexWrap: 'wrap',
    },
    item: {
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '15px 10px',
        color: '#62309d',
    },
    active: {
        transform: 'scale(1.2)',
        textDecoration: 'underline solid 2px',
    },
});

export const Header = () => {
    const cl = useStyles();

    return (
        <AppBar position="static" className={cl.nav} >

            <div className={cl.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.AboutMe} className={({ isActive }) => isActive ? cl.active : undefined}>
                        About Me
                    </NavLink>
                </Button>
            </div>
            <div className={cl.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Skills} className={({ isActive }) => isActive ? cl.active : undefined}>
                        Skills
                    </NavLink>
                </Button>
            </div>
            <div className={cl.item}>
                <Button color={"secondary"} variant={"text"} size={"large"}>
                    <NavLink to={Path.Contacts} className={({ isActive }) => isActive ? cl.active : undefined}>
                        Contacts
                    </NavLink>
                </Button>
            </div>
        </AppBar>
    )
}
