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
                <Modal className='modal' show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Detailni informace</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-body'>
                        <ParkingDetail data={props.parkingLot}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            <div className='tile-container' onClick={()=> setShowModal(true) } >
                <h1 className='tile-name'>{props.parkingLot.properties.name}</h1>
                <h2 className='tile-type'>{props.parkingLot.properties.parking_type.description}</h2>
            </div>
        </>
    )}

export default withRouter(Tile)