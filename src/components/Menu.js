import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed, faLungs, faAmbulance, faTint} from '@fortawesome/free-solid-svg-icons';
import useWindowSize from './WindowSize';
import '../css/Menu.css';

function Menu(props) {
    const [width] = useWindowSize();
    console.log(width);
    var rows = [
        ["Beds", "List of hospitals with type and number of beds available"],
        ["Oxygen", "Contacts of people who deliver or provide Oxygen"],
        ["Ambulance", "List of Ambulances to contact in case of emergency"],
        ["Blood & Plasma", "Contacts of people ready to donate blood and plasma"],
    ];
    var icons = [
        <FontAwesomeIcon icon={faBed} size="2x"/>,
        <FontAwesomeIcon icon={faLungs} size="2x"/>,
        <FontAwesomeIcon icon={faAmbulance} size="2x"/>,
        <FontAwesomeIcon icon={faTint} size="2x"/>
    ];

    var icons_small = [
        <FontAwesomeIcon icon={faBed} size="1x"/>,
        <FontAwesomeIcon icon={faLungs} size="1x"/>,
        <FontAwesomeIcon icon={faAmbulance} size="1x"/>,
        <FontAwesomeIcon icon={faTint} size="1x"/>
    ];
    if(width >= 1000)
    return (
        <div id="menu-vert">
            {
                rows.map(function(obj, i) {
                    return <div style={props.mode !== obj[0] ? {backgroundColor: "white"} : {backgroundColor: "#b2ceee"}} onClick={() => {props.setMode(obj[0])}} key={obj[0]} className="row">
                        <div style={{textAlign: "center", gridRowStart: 1, gridRowEnd: 3, gridColumnStart: 1, gridColumnEnd: 1}}>{icons[i]}</div>
                        <div style={{gridRowStart: 1, gridColumnStart: 2}}><b>{obj[0]}</b></div>
                        <div style={{gridRowStart: 2, gridColumnStart: 2}}><div>{obj[1]}</div></div>
                    </div>;
                })
            }
        </div>
    )
    else
    return (
        <div id="menu-horiz">
            {
                rows.map(function(obj, i) {
                    return <div style={props.mode !== obj[0] ? {backgroundColor: "white"} : {backgroundColor: "#b2ceee"}} onClick={() => {props.setMode(obj[0])}} key={obj[0]} className="button">
                        <div style={{textAlign: "center", gridRowStart: 1, gridRowEnd: 3, gridColumnStart: 1, gridColumnEnd: 1}}>{icons_small[i]}</div>
                        <div style={{gridRowStart: 1, gridColumnStart: 2}}><b>{obj[0]}</b></div>
                    </div>;
                })
            }
        </div>
    )
}

export default Menu
