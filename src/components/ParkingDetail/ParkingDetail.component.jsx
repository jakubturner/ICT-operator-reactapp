import React  from "react";
import './Parking_detail.styles.css'



const ParkingDetail = (props) => {

    return (

            <div>
                <div>
                    <div>
                        <h1>Nazev Parkoviste</h1>
                        <h3>{props.data.properties.name}</h3>
                        <h4>Adresa</h4>
                        <p>{props.data.properties.address.address_formatted}</p>
                        <h4>popis</h4>
                        <div className='describe-border'>
                            <p className='describe'>{props.data.properties.parking_type.description}</p>
                        </div>
                        <h4>pocet mist na parkovani celkem</h4>
                        <p className='Number-total-spaces'>{props.data.properties.total_num_of_places}</p>
                        <h4>pocet volnych mist</h4>
                        <p className='Number-free-spaces'>{props.data.properties.num_of_free_places}</p>
                        <h4>pocet obsazenych mist</h4>
                        <p className='Number-taken-spaces'>{props.data.properties.num_of_taken_places}</p>
                    </div>

                </div>
            </div>
    )}

export default ParkingDetail