import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "../../assets/react-inTouch.jpg"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import {Divider} from "@material-ui/core";
import {Path} from "../../App";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 800,
        margin: 'auto',
        marginTop: 20,
    },
    contactsBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 13.5,
    },
    icons: {
        color: '#62309d',
        fontSize: 20,
    },
});

const addressIntro: string = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
const address: string = `415 Summer St, Boston, MA`
const phone: string = `+1 617-000-0000`
const mail: string = `123React@gmail.com`

export const Contacts = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>

            <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                Contacts
            </Typography>

            {/*<CardActionArea>*/}
            <div>
                <CardMedia
                    component="img"
                    alt="React developer"
                    height="280"
                    image={picture}
                    title="React developer"
                />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h4" align={"center"}>
                    Get in touch with me
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {addressIntro}
                </Typography>
                <div className={classes.contactsBlock}>
                    <Typography variant="body2" component="p">
                        <LocationOnOutlinedIcon className={classes.icons}/> {address}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <PermPhoneMsgOutlinedIcon className={classes.icons}/> {phone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <MailOutlineOutlinedIcon className={classes.icons}/> {mail}
                    </Typography>
                </div>
                <Divider/>
            </CardContent>
            {/*</CardActionArea>*/}
            <CardActions>
                <Button size="small">
                    <NavLink to={Path.AboutMe}>
                        About Me
                    </NavLink>
                </Button>
                <Button size="small">
                    <NavLink to={Path.Skills}>
                        Skills
                    </NavLink>
                </Button>
            </CardActions>
        </Card>
    )
}