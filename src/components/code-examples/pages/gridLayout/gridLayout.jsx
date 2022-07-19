import React from "react";
import './gridLayout.css';
import LaunchPad from './assets/landingpage.PNG';

const gridLayout = () => {
    return (
        <div className="examples__container">
            <div className="example__content">
                <a>SPfx Launch Pad</a>
                <div className="example__child">
                        <p className="examples__p">
                            This is currently being used as a landing page of sorts, allowing for the insertion of links and images to create a tile/grid displaying the image along with its associated tile.
                            For the moment, the title of the image is included in the picture rather than being set through the property pane, but will be updated in the future. It also allows for a hyperlink
                            to be associated with each image or tile. 
                        </p>
                        <img  className="examples__image" src={LaunchPad} />
                </div>
            </div>
        </div>
    )
}

export default gridLayout;