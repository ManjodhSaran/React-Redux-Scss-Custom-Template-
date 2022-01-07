import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import postRequest from '../../../utils/postRequest'
import Error from '../../Error'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton/CustomButton'
import './ApiInput.scss'

const ApiInput = ({
    label,
    defaultValue,
    access_token,
    target,
    endpoint,
    onSuccess = () => { },
    type = 'number'
}) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (defaultValue === undefined) return
        setValue(defaultValue);
    }, [defaultValue])

    const onClick = () => {
        if (!endpoint || !access_token) return
        const requestBody = { [target]: value }
        postRequest(
            endpoint,
            requestBody,
            onSuccess,
            access_token,
            setLoading,
            setError
        )
    }
    return (
        <Paper elevation={3} className="apiInput">
            <h2>{label}</h2>
            <CustomInput
                variant="standard"
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {defaultValue !== parseInt(value) &&
                <CustomButton
                    title={'Update'}
                    onClick={onClick}
                    loading={loading}
                    variant='text'
                />
            }
            <Error text={error} />
        </Paper>
    )
}

export default ApiInput
