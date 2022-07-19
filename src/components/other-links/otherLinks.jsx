import React from "react";
import './otherLinks.css';
import LinkedIn from './linkedin.png';
import GitHub from './github.png';
import Twitter from './twitter.png';

const OtherLinks = () => {
    return (
        <div className="links__container">
            <div className="links__title">Social Media:</div>
            <div className="links__row">
                <div className="link__content" >
                    <img src={GitHub} alt='Github' />
                    <a href="https://github.com/walleford">GitHub</a>
                </div>
                <div className="link__content">
                    <img src={Twitter} alt='Twitter' />
                    <a href="https://twitter.com/_Wheezeus">Twitter</a>
                </div>
                <div className="link__content">
                    <img src={LinkedIn} alt='LinkedIn' />
                    <a href="https://www.linkedin.com/in/jordan-wallingsford-4276a91ba/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default OtherLinks