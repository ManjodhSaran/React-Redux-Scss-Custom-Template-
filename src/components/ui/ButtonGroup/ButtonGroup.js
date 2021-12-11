import React from 'react'
import { Button, ButtonGroup as BG } from '@material-ui/core'
import './ButtonGroup.scss'

const ButtonGroup = ({ target, options, data, setData, disabled }) => {
    return (
        <BG className='customButtonGroup' size="medium" color="primary" disabled={disabled} aria-label="large outlined primary button group">
            {options.map(({ label, value }) =>
                <Button
                    key={value}
                    variant={data[target] === value ? 'contained' : 'outlined'}
                    onClick={() => setData({ ...data, [target]: value })}
                >
                    {label}
                </Button>
            )}
        </BG>
    )
}

export default ButtonGroup