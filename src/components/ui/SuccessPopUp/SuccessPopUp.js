import { Button, ClickAwayListener } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SuccessGif from '../assets/icons/success.gif'
import SuccessImg from '../assets/icons/success.png'
import CustomModal from '../CustomModal';
import '../styles/SuccessPopUp.scss'

const SuccessPopUp = ({ show = true, text, okAction, setOpen }) => {
    const [successImage, setSuccessImage] = useState(SuccessGif);


    useEffect(() => {
        setTimeout(() => setSuccessImage(SuccessImg), 1300)
    }, []);

    return (
        <div className='successMessage'>
            {show && <CustomModal
                width={300}
                body={
                    <ClickAwayListener onClickAway={() => setOpen && setOpen(false)}>
                        <div className='successMessageModal'>
                            <div className="row1">
                                <img src={successImage} alt="successImage" />
                                <p>{text}</p>
                            </div>
                            <Button
                                className='button'
                                variant='outlined'
                                color='primary'
                                onClick={okAction}
                            >OK</Button>
                        </div>
                    </ClickAwayListener>

                }
            />}
        </div>
    )
}

export default SuccessPopUp