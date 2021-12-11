import React from 'react'
import { withStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

const OnlineBadge = ({ online }) => {

    const StyledBadge = withStyles((theme) => ({
        badge: {
            backgroundColor: online ? "#44b700" : "#FD2D00",
            color: '#44b700',
            boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: -.5,
                left: -.45,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                // animation: '$ripple 5s infinite ease-in-out',
                border: `${online ? ".5px solid #44b700" : "0px"}`,
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }))(Badge);


    return (

        <StyledBadge
            overlap="circle"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant="dot"
        >
            {/* <Avatar src={'o'} /> */}
        </StyledBadge>

    )
}

export default OnlineBadge