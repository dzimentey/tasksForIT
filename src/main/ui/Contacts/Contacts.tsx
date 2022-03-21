import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import {Path} from "../Routes/Routes";
import picture from "../common/assets/img/react-inTouch.jpg"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import {Divider} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    margin: 'auto',
    marginTop: 20
  },
});

export const Contacts = () => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>

        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
          Contacts
        </Typography>

        {/*<CardActionArea>*/}
        <div >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
                <Typography variant="body2" color="textPrimary" component="p">
                    <LocationOnOutlinedIcon fontSize={"small"} style={{color: '#62309d'}}/> 415 Summer St, Boston, MA
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    <PermPhoneMsgOutlinedIcon fontSize={"small"} style={{color: '#62309d'}}/> +1 617-000-0000
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    <MailOutlineOutlinedIcon fontSize={"small"} style={{color: '#62309d'}}/> 123React@gmail.com
                </Typography>

            </div>
            <Divider />
        </CardContent>
        {/*</CardActionArea>*/}
        <CardActions>
          <Button size="small" color="primary">
            <NavLink to={Path.AboutMe} >
              About Me
            </NavLink>
          </Button>
          <Button size="small" color="primary">
            <NavLink to={Path.Skills} >
              Skills
            </NavLink>
          </Button>
        </CardActions>
      </Card>
  )
}