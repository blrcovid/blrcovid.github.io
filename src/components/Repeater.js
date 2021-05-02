import React from 'react'
import Card from './Card'
import '../css/Repeater.css'

function Repeater(props) {
    return (
        <div id="beds">
            <div style={{fontWeight: 700, fontSize: "30px", margin: "10px"}}>{props.mode}</div>
            <Card
                verified={true}
                title="Mallige Hospital"
                loc="Kaggadasapura"
                phno={6230326108}
                desc="Oxygen Beds: 10 ICU Beds: 10"
                src="https://www.google.com"
                time="2.40PM, 1st May 2021"
            />
            <Card
                verified={false}
                title="NRR Hospital"
                loc="Bommanahalli"
                phno={6230326108}
                desc="Oxygen available at Kaggadasapura"
                src="https://www.google.com"
                time="2.40PM, 1st May 2021"
            />
            <Card
                verified={false}
                title="NRR Hospital"
                loc="Bommanahalli"
                phno={6230326108}
                desc="Oxygen available at Kaggadasapura"
                src="https://www.google.com"
                time="2.40PM, 1st May 2021"
            />
            <Card
                verified={false}
                title="NRR Hospital"
                loc="Bommanahalli"
                phno={6230326108}
                desc="Oxygen available at Kaggadasapura"
                src="https://www.google.com"
                time="2.40PM, 1st May 2021"
            />
        </div>
    )
}

export default Repeater
