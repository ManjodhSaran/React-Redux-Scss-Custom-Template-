import React, { useState } from 'react'
import CustomModal from './CustomModal'
import '../../styles/TitleModal.scss'

const TitleModal = ({ defaultState = false, title = "Give me title!", Modal, width = '350', inModalComponent }) => {
    const [show, setShow] = useState(defaultState)
    return (
        <div className="titleModal">
            <h2 onClick={() => setShow(true)}>{title}</h2>
            {inModalComponent ?
                <Modal open={false} close={() => setShow(false)} />
                :
                <CustomModal
                    show={show}
                    width={width}
                    body={<Modal close={() => setShow(false)} />}
                />}
        </div>
    )
}

export default TitleModal
