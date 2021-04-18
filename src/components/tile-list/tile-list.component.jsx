import React from "react";
import Tile from '../tile/tile.component'
import './tile-list.styles.css'



 const Tilelist = props => (
    <div className='tile-list'>
     {props.parkingLots.map(parkingLot => (<Tile key={parkingLot.properties.id} parkingLot={parkingLot}/>))}
    </div>
)

export default Tilelist
