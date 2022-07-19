import React from "react";
import './introduction.css';
import introImage from './introImage.png';


const Introduction = () => {
    return (
        <div className="intro__container section__padding">
            <div className="intro__content" id="Home">
                <h1>Jordan Wallingsford:</h1>
                <p>
                    I am a current Software Developer specializing in React/JS and React/TS and the SharePoint Framework.
                    I use SPfx to develop custom webparts for SharePoint Online tenants.
                    This web application I built to better learn the fundamentals of React and JavaScript.
                </p>
            </div>
            <div className="intro__image">
                <img src={introImage} alt=""/>
            </div>
        </div>
    )
}

export default Introduction