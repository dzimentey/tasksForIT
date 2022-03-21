import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {Skills} from "../Skills/Skills";
import {Contacts} from "../Contacts/Contacts";
import {AboutMe} from "../AboutMe/AboutMe";

export enum Path {
  AboutMe = "/about-me",
  Skills = "/skills",
  Contacts = "/contacts",
  Error404 = "/404"
}

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} render={() => <AboutMe />} />
        <Route path={Path.AboutMe} render={() => <AboutMe />} />
        <Route path={Path.Skills} render={() => <Skills />} />
        <Route path={Path.Contacts} render={() => <Contacts />} />
        <Route path={Path.Error404} render={() => <Error404 />} />
        <Redirect from={"*"} to={Path.Error404} />
      </Switch>
    </div>
  )
}
