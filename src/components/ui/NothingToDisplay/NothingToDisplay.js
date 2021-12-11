import React from 'react'
import './NothingToDisplay.scss'

const NothingToDisplay = ({ text }) => {
    const defaultText = "Nothing to display"

    return (
        <div className='nothingToDisplay'>
            <p>{text ? text : defaultText}</p>
        </div>
    )
}

export default NothingToDisplay
