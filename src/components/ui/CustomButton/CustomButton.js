import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Button
            color="primary"
            variant="contained"
            {...props}
            className={`button ${props.className}`}
            endIcon={props?.loading && <CircularProgress size={12} color="inherit" />
            }
        > {props.title}</Button>
    )
}

export default CustomButton
