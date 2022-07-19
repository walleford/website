import React from "react";
import './worldClocks.css';
import WorldClock from './assets/worldclocks.PNG';

const worldClocks = () => {
    return (
        <div className="examples__container">
            <div className="example__content">
                <a>SPfx World Clocks</a>
                <div className="example__child">
                    <p className="examples__p">
                        This is an SPfx webpart displaying a full width world clock with multiple timezones displayed. As of right now it only allows for these set timezones to be displayed
                        but I will continue to update it to allow for whatever timezone you wish to use to be displayed. 
                    </p>
                    <img className="examples__image" src={WorldClock} />
                </div>
            </div>
        </div>
    )
}

export default worldClocks;