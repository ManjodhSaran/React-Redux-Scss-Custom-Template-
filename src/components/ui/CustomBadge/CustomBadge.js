import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton } from '@material-ui/core';
import './CustomBadge.scss'

export default function CustomBadge({ onClick, count }) {
    return (
        <div className='customBadge'>
            <IconButton onClick={onClick}>
                <NotificationsIcon className="icon" />
            </IconButton>
            {count !== 0 &&
                <div className="badge">
                    <p>{count}</p>
                </div>
            }
        </div>
    );
}
