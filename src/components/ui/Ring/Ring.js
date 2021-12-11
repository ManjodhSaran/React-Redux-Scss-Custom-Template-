import React from 'react'
import './Ring.scss'

const Ring = ({ size, value, width }) => {
    size = parseInt(size)
    width = parseInt(width)

    // const baseStyle = { "height": `${size}px`, "width": `${size}px` }
    // const innerStyle = { "height": `${size - width}px`, "width": `${size - width}px` }

    return (
        <div className="ring">
            <div className={`c100 p${size} small green`}>
                <span>{size}</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
        </div>
    )
}

export default Ring
