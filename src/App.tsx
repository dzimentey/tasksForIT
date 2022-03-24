import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {AboutMe} from "./pages/AboutMe/AboutMe";
import {Skills} from "./pages/Skills/Skills";
import {Contacts} from "./pages/Contacts/Contacts";
import {Error404} from "./pages/Error404/Error404";
import {Navigate, Route, Routes} from "react-router-dom";

export enum Path {
    AboutMe = "/about-me",
    Skills = "/skills",
    Contacts = "/contacts",
    Error404 = "/404",
}

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<AboutMe/>} />
                <Route path={'/dev-port'} element={<AboutMe/>} />
                <Route path={Path.AboutMe} element={<AboutMe/>} />
                <Route path={Path.Skills} element={<Skills/>} />
                <Route path={Path.Contacts} element={<Contacts/>} />
                <Route path={Path.Error404} element={<Error404/>} />
                <Route path={'*'} element={ <Navigate to={Path.Error404}/>} />
            </Routes>
        </div>
    )
}
