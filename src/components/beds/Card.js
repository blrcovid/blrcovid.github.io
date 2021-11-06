import React from 'react'
import useWindowSize from '../../hooks/WindowSize';
import '../../css/Card.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/fontawesome-free-regular'
import {faTwitter, faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

function zfill(s) {
    if(s.length === 1)
    return "0" + s;
    return s;
}

function postFix(s) {
    if(s[s.length - 1] === "1")
    return s + "st";
    else if(s[s.length - 1] === "2")
    return s + "nd";
    else if(s[s.length - 1] === "3")
    return s + "rd";
    return s + "th";
}

function formatDate(time) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return zfill(time.getHours().toString()) + ":" + zfill(time.getMinutes().toString()) + (time.getHours() > 12 ? " PM, " : " AM, ") + postFix(time.getDate().toString()) +" " + monthNames[time.getMonth()] + " '" + (time.getYear() - 100).toString()
}

function createShareString(data) {
    let s = ""
    if(data.verified)
    s += "VERIFIED INFO!!!\r\n"
    else
    s += "NON-VERIFIED INFO!!!\r\n"
    if(data.title)
    s += "Hospital: " + data.title + "\r\n";
    if(data.phno)
    s += "Phone: " + data.phno + "\r\n";
    if(data.loc)
    s += "Location: " + data.loc + "\r\n";
    s += "Beds Available:\r\n"
    s += (data.nonoxy ? "General Beds: " + data.nonoxy + "\r\n" : "General Beds: 0\r\n")
    s += (data.hdu ? "HDU Beds: " + data.hdu + "\r\n" : "HDU Beds: 0\r\n")
    s += (data.icu ? "ICU Beds: " + data.icu + "\r\n" : "ICU Beds: 0\r\n")
    s += (data.icuv ? "ICU-V Beds: " + data.icuv + "\r\n" : "ICU-V Beds: 0\r\n")
    s += "Last " + (data.verified ? "Verified: " : "Checked: ") + formatDate(new Date(data.time)) + "\r\n"
    s += "https://blrcovid.github.io"
    return s
}

function Card(args) {
    let props = args.row;
    let edit = args.edit;
    let shareString = createShareString(props)
    const size = useWindowSize();
    return (
        <>
            <div className="card" style={edit ? (size[0] > 600 ? {gridTemplateRows: "40px 50px 50px 90px 50px"} : {gridTemplateRows: "40px 70px 70px 70px 50px"}) : (size[0] > 600 ? {gridTemplateRows: "40px 50px 50px 90px"} : {gridTemplateRows: "40px 70px 70px 90px"})}>
                {props.verified ? 
                    <div className="status" style={{width: "70px", backgroundColor: "rgba(5, 194, 46, 0.3)"}}>Verified</div> : 
                    <div className="status" style={{width: "100px", backgroundColor: "rgba(185, 19, 7, 0.2)", color: "rgb(220,38,38)"}}>Not Verified</div>
                }
                <div style={{textAlign: "right", marginTop: "10px", fontSize: "1.1em"}}>
                    <a style={{color: "#007F88"}} href={`https://twitter.com/intent/tweet?text=${window.encodeURIComponent(shareString)}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>&nbsp;&nbsp;
                    <a style={{color: "#007F88"}} href={`https://www.facebook.com/sharer/sharer.php?u=blrcovid.github.io&quote=${window.encodeURIComponent(shareString)}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;
                    <a style={{color: "#007F88"}} href={`https://api.whatsapp.com/send?text=${window.encodeURIComponent(shareString)}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faClone} className="copy" onClick={async () => {
                        await window.navigator.clipboard.writeText(shareString);
                        let el = document.getElementsByClassName("copied")?.[args.index];
                        if(el !== null && el !== undefined)
                        {
                            el.style.display = "block";
                            setTimeout(() => el.style.display = "none", 1500);
                        }
                    }}/>&nbsp;&nbsp;
                    <div className="copied" style={{position: "absolute", top: document.getElementsByClassName("copy")?.[args.index]?.getBoundingClientRect()?.top - 35 || 0, left: document.getElementsByClassName("copy")?.[args.index]?.getBoundingClientRect()?.left - 40 || 0, display: "none", background: "white", height: "25px", width: "75px", border: "2px solid #4f86c6", borderRadius: "5px", paddingTop: "5px", textAlign: "center"}}>Copied!</div>
                </div>
                <div style={{margin: "5px", fontWeight: 700, fontSize: "25px", display: "flex"}}>
                    {props.title}
                </div>
                <div style={{marginTop: "10px", textAlign:"right"}}>
                    <FontAwesomeIcon icon={faPhoneAlt}/>&nbsp;&nbsp;<a href={`tel:${props.phno}`}>{props.phno}</a>
                </div>
                <div style={{marginTop: "10px"}}>
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/>&nbsp;&nbsp;
                    <span style={{fontSize: "18px"}}>{props.loc}</span>
                </div>
                <div style={{textAlign: "right"}}>
                Last {props.verified ? "Verified" : "Checked"}<br/><b>{formatDate(new Date(props.time))}</b><br/>
                </div>
                <div style={{display: "flex", justifyContent: "center", gridArea: "auto / auto / span 1 / span 2"}}>
                    <table>
                        <thead>
                            <tr>
                                <th>General</th>
                                <th>HDU</th>
                                <th>ICU</th>
                                <th>ICU-V</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.nonoxy}</td>
                                <td>{props.hdu}</td>
                                <td>{props.icu}</td>
                                <td>{props.icuv}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {edit && 
                <div style={{marginTop: "15px", display: "flex", justifyContent: "center", gridArea: "auto / auto / span 1 / span 2",}}>
                    <button onClick={() => {args.setEditIndex(args.index)}} style={{width: "60px", height: "30px", margin: "5px 5px 0 0"}}>
                        Edit
                    </button>
                    <button onClick={() => {args.setDelIndex(args.index);}} style={{width: "60px", height: "30px", marginTop: "5px"}}>
                        Delete
                    </button>
                </div>}
            </div>
        </>
    )
}

export default Card
