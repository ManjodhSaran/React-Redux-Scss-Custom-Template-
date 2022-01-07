import { TextField } from '@material-ui/core'
import React from 'react'


const CustomInput = (props) => {
    return (
        <TextField
            size="small"
            type="text"
            variant="outlined"
            color="primary"
            className="input"
            label={props?.title}
            {...props}
        />
    )
}

export default CustomInput
