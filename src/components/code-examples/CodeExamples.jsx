import React, { useState, useEffect } from "react";
import './CodeExamples.css';
import LaunchPad from './pages/assets/landingpage.PNG';
import WorldClock from './pages/assets/worldclocks.PNG';
import CallingCards from './pages/assets/CallingCards.PNG';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const CodeExamples = () => {
    
    return (
                <Accordion className="accordion" >
                    <Accordion.Item eventKey='0' flush >
                        <Accordion.Header>SPFX LaunchPad</Accordion.Header>
                        <Accordion.Body>
                            <div className="example__child">
                                <p className="examples__p">
                                    This is currently being used as a landing page of sorts, allowing for the insertion of links and images to create a tile/grid displaying the image along with its associated tile.
                                    For the moment, the title of the image is included in the picture rather than being set through the property pane, but will be updated in the future. It also allows for a hyperlink
                                    to be associated with each image or tile.
                                </p>
                                <img className="examples__image" src={LaunchPad} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>SPfx Employee Information Tiles</Accordion.Header>
                        <Accordion.Body>
                            <div className="example__child">
                                <p className="examples__p">
                                    This SPfx webpart utilizes PnPjs, filePicker, and PropertyFieldCollectionData to import images of a contact you wish to display. It 
                                    allows for multiple phone numbers, a hyperlinked email, a biography link, and the contacts information (name, position, etc...)
                                </p>
                                <img className="examples__employee" src={CallingCards} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>SPFX World Clocks</Accordion.Header>
                        <Accordion.Body>
                            <div className="example__child">
                                <p className="examples__p">
                                    This is an SPfx webpart displaying a full width world clock with multiple timezones displayed. As of right now it only allows for these set timezones to be displayed
                                    but I will continue to update it to allow for whatever timezone you wish to use to be displayed. 
                                </p>
                                <img className="examples__image" src={WorldClock} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
        </Accordion>
    ) 
}

export default CodeExamples