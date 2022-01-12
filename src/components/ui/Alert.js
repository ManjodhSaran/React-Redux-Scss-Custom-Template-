import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/Alert.scss'
const Alert = ({ body, type, setAlert, onClick }) => {
    let className = 'alert ';
    switch (type) {
        case 'success':
            className += ' bg-success'
            break
        case 'warning':
            className += ' bg-warning'
            break
        case 'error':
            className += ' bg-error'
            break
        case 'info':
            className += ' bg-info'
            break
        default:
            className += ' bg-basic'
    }
    return (
        <Paper elevation={0} className={className}>
            <div onClick={JSON.parse(onClick)} className="body">
                {body}
            </div>
            <div className="close" onClick={setAlert}>
                <CloseIcon className="icon" />
            </div>
        </Paper>
    )
}

export default Alert
