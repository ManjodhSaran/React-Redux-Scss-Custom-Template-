import React from 'react'
import CustomModal from './CustomModal'
import CustomButton from './CustomButton/CustomButton'
import '../../styles/AlertBeforeAction.scss'
import { CircularProgress } from '@material-ui/core'

const AlertBeforeAction = ({
    show = false,
    title = 'Are you sure.',
    okAction = () => { },
    cancelAction = () => { },
    okText = 'Ok',
    cancelText = 'Cancel',
    loading = false
}) => {
    return (
        show &&
        <div className='alertBeforeAction'>
            <CustomModal
                width={'400'}
                body={
                    <div className='alertBeforeActionContent'>
                        <h3>{title ? title : "Are you Sure."}</h3>
                        <div className="actions">
                            <CustomButton
                                title={!loading ? okText : <CircularProgress size={12} color='inherit' />}
                                onClick={okAction}
                                variant='text'
                            />
                            <CustomButton
                                title={cancelText}
                                onClick={cancelAction}
                                variant='text'
                                color="secondary"
                            />
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default AlertBeforeAction
