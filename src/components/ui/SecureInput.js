import React, { useState } from 'react'
import { IconButton, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CustomInput from './CustomInput';

const SecureInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <CustomInput
            {...props}
            InputProps={{
                endAdornment: props?.canSeeValue && (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            type={showPassword ? (props?.type ? props.type : 'text') : "password"}
        />
    )
}

export default SecureInput
