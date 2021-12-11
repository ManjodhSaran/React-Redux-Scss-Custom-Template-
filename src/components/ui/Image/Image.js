import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import './Image.scss'

const Image = ({ src, height, width }) => {
    const [loading, setLoading] = useState(true)
    return (
        <div style={{ height: height }} className={`Image`}>
            <img
                src={src}
                onLoad={() => setLoading(false)}
                loading='lazy'
                alt="image of website" />
            {loading && <div className="imageLoading">
                <CircularProgress size={16} color='inherit' />
            </div>}
        </div>
    )
}

export default Image
