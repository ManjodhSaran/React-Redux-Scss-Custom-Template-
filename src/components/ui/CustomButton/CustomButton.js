import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Button
            color="primary"
            variant="contained"
            endIcon={props?.loading && <CircularProgress size={12} color="inherit" />}
            {...props}
            className={`button ${props.className}`}
        > {props.title}</Button>
    )
}

export default CustomButton
