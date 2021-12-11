import React from 'react'
import './Error.scss'
const Error = ({ text }) => {
    return (
        text && <p className="error">
            {text}
        </p>
    )
}

export default Error