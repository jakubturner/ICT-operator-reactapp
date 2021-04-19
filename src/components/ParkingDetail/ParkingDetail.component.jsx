import React  from "react";
// import './/modal.styles.css'



const ParkingDetail = (props) => {

    return (

            <div>
                <div>
                    <div>
                        <h4 >{props.data.properties.name}</h4>
                    </div>
                    <div >
                        This is modal content
                    </div>
                    <div >
                    </div>
                </div>
            </div>
    )}

export default ParkingDetail