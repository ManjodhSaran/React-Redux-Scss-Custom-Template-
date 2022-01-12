import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Switch from "react-switch";
import '../../styles/ToggleSwitch.scss'

const ToggleSwitch = ({
    label = 'Toogle Switch',
    defaultState = false,
    onTurnon = () => { },
    onTurnoff = () => { },
    style = {},
    loading = false
}) => {
    const [on, setOn] = useState(false);

    useEffect(() => {
        defaultState ? setOn(true) : setOn(false)
    }, [defaultState])

    const onChange = (val) => {
        if (val) onTurnon()
        else onTurnoff()
        setOn(!on)
    }

    return (
        <div className='toggleSwitch' style={style}>
            <h2>{label}</h2>
            {!loading ? <Switch
                onChange={onChange}
                checked={on}
                onColor="#86d3ff"
                onHandleColor="#1976D2"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="#1976D2"
                height={10}
                width={24}
            /> :
                <CircularProgress size={14} color="inherit" />
            }
        </div>
    )
}

export default ToggleSwitch
