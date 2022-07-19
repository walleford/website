import React from "react";
import './callingCards.css';
import CallingCards from './assets/CallingCards.PNG';

const callingCards = () => {
    return (
        <div className="examples__container">
            <div className="example__content">
            <a>SPfx Employee Information Tile</a>
                <div className="example__child">
                    <p className="examples__p">
                        This SPfx webpart utilizes PnPjs, filePicker, and PropertyFieldCollectionData to import images of a contact you wish to display. It 
                        allows for multiple phone numbers, a hyperlinked email, a biography link, and the contacts information (name, position, etc...)
                    </p>
                    <img className="examples__employee" src={CallingCards} />
                </div>
            </div>
        </div>
    )
}

export default callingCards;