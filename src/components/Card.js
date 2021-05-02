import React from 'react'
import '../css/Card.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/fontawesome-free-regular'
import {faTwitter, faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons"


function Card(props) {
    return (
        <div className="card">
            {props.verified ? 
                <div className="status" style={{width: "70px", backgroundColor: "rgba(5, 194, 46, 0.3)"}}>Verified</div> : 
                <div className="status" style={{width: "100px", backgroundColor: "rgba(185, 19, 7, 0.2)", color: "rgb(220,38,38)"}}>Not Verified</div>
            }
            <div></div>
            <div style={{margin: "5px", fontWeight: 700, fontSize: "25px"}}>
                {props.title}
            </div>
            <div style={{textAlign: "right", marginTop: "10px"}}>
                <FontAwesomeIcon icon={faTwitter}/>&nbsp;&nbsp;
                <FontAwesomeIcon icon={faFacebook}/>&nbsp;&nbsp;
                <FontAwesomeIcon icon={faWhatsapp}/>&nbsp;&nbsp;
                <FontAwesomeIcon icon={faClone}/>&nbsp;&nbsp;
            </div>
            <div style={{marginTop: "10px"}}>
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/>&nbsp;&nbsp;
                <span style={{fontSize: "18px"}}>{props.loc}</span>
            </div>
            <div style={{marginTop: "10px", textAlign:"right"}}>
                <FontAwesomeIcon icon={faPhoneAlt}/>&nbsp;&nbsp;<a href={`tel:${props.phno}`}>{props.phno}</a>
            </div>
            <div style={{marginTop: "10px", paddingLeft: "10px"}}>
                {props.desc}
            </div>
            <div style={{textAlign: "right"}}>
                Last {props.verified ? "Verified" : "Checked"} - <b>{props.time}</b>
            </div>
        </div>
    )
}

export default Card
