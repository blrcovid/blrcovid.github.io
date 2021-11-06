import {React, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import '../../css/Overlay.css'
import request from '../../js/request'

async function addData(data) {
    console.log(data);
    data.time = new Date();
    await request("http://localhost:5000/beds/add", "POST", data, {"Content-Type": "application/json"})
    .then(() => console.log("Bed added successfully!"))
    .catch((err) => console.log(err.message));
}

function AddOverlay(props) {
    const [formData, setFormData] = useState({
        verified: true,
        title: '',
        loc: '',
        phno: '',
        nonoxy: 0,
        hdu: 0,
        icu: 0,
        icuv: 0,
      });
    return (
        <div id="add-overlay">
            <form id="add" onSubmit={() => addData(formData)}>
                <div></div>
                <div style={{display: "block", textAlign: "right"}}>
                    <FontAwesomeIcon icon={faTimes} onClick={() => props.setShowAdd(false)}/>
                </div>
                <div>Status:</div>
                <div>
                <select onChange={e => formData.verified = e.target.value === "Verified" ? true : false}>
                    {
                        formData.verified ? <option defaultValue>Verified</option> : <option defaultValue>Not Verified</option>
                    }
                    {
                        formData.verified ? <option>Not Verified</option> : <option>Verified</option>
                    }
                </select> <br/>
                </div>
                
                <div>Hospital Name:</div>
                <div>
                    <input type="text" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/> <br/>
                </div>

                <div>Location:</div>
                <div>
                    <input type="text" defaultValue={formData.loc} onChange={(e) => setFormData({...formData, loc: e.target.value})}/> <br/>
                </div>

                <div>Phone Number:</div>
                <div>
                    <input type="text" defaultValue={formData.phno} onChange={(e) => setFormData({...formData, phno: e.target.value})}/> <br/>
                </div>
    
                <div>Beds without Oxygen:</div>
                <div>
                    <input type="number" min={0} defaultValue={formData.nonoxy} onChange={(e) => setFormData({...formData, nonoxy: e.target.value})}/> <br/>
                </div>

                <div>Beds with Oxygen (HDU):</div>
                <div>
                    <input type="number" min={0} defaultValue={formData.hdu} onChange={(e) => setFormData({...formData, hdu: e.target.value})}/> <br/>
                </div>

                <div>Beds with ICU:</div>
                <div>
                    <input type="number" min={0} defaultValue={formData.icu} onChange={(e) => setFormData({...formData, icu: e.target.value})}/> <br/>
                </div>

                <div>Beds with ICU Ventilator:</div>
                <div>
                    <input type="number" min={0} defaultValue={formData.icuv} onChange={(e) => setFormData({...formData, icuv: e.target.value})}/> <br/>
                </div>
                <div style={{display: "block", gridArea: "auto / auto / span 1 / span 2", textAlign: "center"}}>
                    <button style={{width: "80px", height: "30px", marginTop: "10px"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddOverlay
