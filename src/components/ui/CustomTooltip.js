import { makeStyles, Tooltip } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(() => ({
    tooltip: {
        fontSize: "1em",
    },
}));

const CustomTooltip = ({ body, title, placement, arrow }) => {
    const classes = useStyles();

    return (
        <Tooltip
            classes={{ tooltip: classes.tooltip }}
            title={title}
            placement={placement ? placement : 'top'}
            arrow={arrow}
        >
            {body}
        </Tooltip>
    )
}

export default CustomTooltip
