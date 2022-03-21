import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import picture from "../common/assets/img/react-JS-image-min.jpg"
import {Path} from "../Routes/Routes";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    margin: 'auto',
    marginTop: 20
  },
});

export const AboutMe = () => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>

        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
          About Me
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
          <Typography gutterBottom variant="h5" component="h2">
            React developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Typography>
        </CardContent>
        {/*</CardActionArea>*/}
        <CardActions>
          <Button size="small" color="primary">
            <NavLink to={Path.Skills} >
              Skills
            </NavLink>
          </Button>
          <Button size="small" color="primary">
            <NavLink to={Path.Contacts} >
              Contacts
            </NavLink>
          </Button>
        </CardActions>
      </Card>
  )
}