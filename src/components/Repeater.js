import React, {useState, useEffect} from 'react'
import Card from './beds/Card'
import BedEditOverlay from './beds/EditOverlay';
import BedDeleteOverlay from './beds/DeleteOverlay';
import BedAddOverlay from './beds/AddOverlay';
import request from '../js/request';
import '../css/Repeater.css'

function Repeater(props) {
    let edit = true

    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1)
    const [delIndex, setDelIndex] = useState(-1)
    const [showAdd, setShowAdd] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        request(`http://localhost:5000/${props.mode}`)
        .then(data => {
            console.log(data);
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err.message);
            setLoading(false);
        });
    }, [props.mode]);

    if(!loading)
    return (
        <>
            <div id="repeater">
                <div style={{fontWeight: 700, fontSize: "30px"}}>{props.mode}</div>
                {
                    data.map((row, i) => {
                        return <Card key={i} row={row} index={i} edit={edit} setEditIndex={setEditIndex} setDelIndex={setDelIndex}/>
                    })
                }
                {edit && <button id="add-button" onClick={() => setShowAdd(!showAdd)}>Add Bed</button>}
            </div>
            {editIndex !== -1 && <BedEditOverlay formData={data[editIndex]} setEditIndex={setEditIndex}/>}
            {delIndex !== -1 && <BedDeleteOverlay formData={data[delIndex]} setDelIndex={setDelIndex}/>}
            {showAdd && <BedAddOverlay setShowAdd={setShowAdd}/>}
        </>
    )
    else
    return <div>Loading...</div>
}

export default Repeater
