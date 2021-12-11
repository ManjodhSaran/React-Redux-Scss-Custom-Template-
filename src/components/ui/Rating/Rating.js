import React from 'react';
import RatingUI from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CustomTooltip from '../CustomTooltip';

export default function Rating(props) {

    const size = props.size ? props.size : "4"
    const iconStyles = { width: `${size}rem`, height: `${size}rem` }

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon style={iconStyles} />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon style={iconStyles} />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon style={iconStyles} />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon style={iconStyles} />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon style={iconStyles} />,
            label: 'Very Satisfied',
        },
    };


    function IconContainer(props) {
        const { value, ...other } = props;
        return <CustomTooltip
            title={customIcons[value].label}
            body={<span {...other}>{customIcons[value].icon}</span>}
        />;
    }

    return (
        <RatingUI
            name="customized-icons"
            defaultValue={4}
            getLabelText={(value) => customIcons[value].label}
            IconContainerComponent={IconContainer}
            {...props}
        />
    );
}
