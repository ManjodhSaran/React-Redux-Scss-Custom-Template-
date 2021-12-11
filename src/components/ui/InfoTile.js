import { Paper } from '@material-ui/core'
import React from 'react'
import '../../styles/InfoTile.scss'

const InfoTile = ({ label = '', value = '', elevation = 0 }) => {
    return (
        <Paper elevation={elevation} className="infoTile">
            <h3>{label}</h3>
            <p>{value}</p>
        </Paper>
    )
}

export default InfoTile
