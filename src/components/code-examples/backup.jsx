import React from "react";
import './CodeExamples.css';
import LaunchPad from './pages/assets/landingpage.PNG';
import WorldClock from './pages/assets/worldclocks.PNG';
import CallingCards from './pages/assets/CallingCards.PNG';

const CodeExamples = () => {


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
                <a>SPfx Employee Information Tile</a>
                <div className="example__child">
                    <p className="examples__p">
                        This SPfx webpart utilizes PnPjs, filePicker, and PropertyFieldCollectionData to import images of a contact you wish to display. It 
                        allows for multiple phone numbers, a hyperlinked email, a biography link, and the contacts information (name, position, etc...)
                    </p>
                    <img className="examples__employee" src={CallingCards} />
                </div>
                <a>SPfx World Clocks</a>
                <div className="example__child">
                    <p className="examples__p">
                        This is an SPfx webpart displaying a full width world clock with multiple timezones displayed. As of right now it only allows for these set timezones to be displayed
                        but I will continue to update it to allow for whatever timezone you wish to use to be displayed. 
                    </p>
                    <img className="examples__image" src={WorldClock} />
                </div>
                <div className="examples__end">
                    More coming soon...
                </div>
            </div>
        </div>
    )
}

export default CodeExamples