import React from "react";
import './tile.styles.css'


const Tile = props => {

    return (
        <div className='tile-container'>
            <h1>{props.parkingLot.properties.name} </h1>
            <h2>{props.parkingLot.properties.parking_type.description}</h2>
        </div>
    )}

export default Tile