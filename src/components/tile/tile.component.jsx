import React, {useState} from "react";
import ParkingDetail from '../ParkingDetail/ParkingDetail.component'
import {withRouter} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './tile.styles.css'




const Tile = props => {

    const handleClose = () => setShowModal(false)


    const [showModal, setShowModal] = useState(false)

    return (<>
        <div className='tile-container' onClick={()=> setShowModal(true) } >
            <h1>{props.parkingLot.properties.name}</h1>
            <h2>{props.parkingLot.properties.parking_type.description}</h2>
        </div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ParkingDetail data={props.parkingLot}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )}

export default withRouter(Tile)