import React from 'react'
import request from '../../js/request'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import '../../css/Overlay.css'

async function deleteData(data) {
    console.log(data)
    await request("http://localhost:5000/beds/delete", "POST", data, {"Content-Type": "application/json"})
    .then(() => console.log("Bed deleted successfully!"))
    .catch((err) => console.log(err.message));
    window.location.reload();
}

function DeleteOverlay(props) {
    return (
        <div id="delete-overlay">
            <div id="delete">
                <div></div>
                <div style={{textAlign: "right"}}>
                    <FontAwesomeIcon icon={faTimes} onClick={() => props.setDelIndex(-1)}/>
                </div>
                <div style={{gridArea: "2 / 1 / span 1 / span 2"}}>
                Are you sure you want to delete this hospital?<br/>
                <button onClick={() => deleteData(props.formData)} style={{width: "60px", height: "30px", marginTop: "10px"}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteOverlay
