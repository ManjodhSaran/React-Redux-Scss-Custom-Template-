import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                {...props}
                color="secondary"
                style={{ 'color': '#77D1AD' }}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {!props?.custom ? <Typography variant="caption" component="div" color="textSecondary">
                    {`${Math.round(props.value,)}%`}
                </Typography>
                    :
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}> {`${Math.round(props.value,)}%`}</p>
                }
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default function CircularStatic({ defaultProgress, size = 50, custom }) {
    // const [progress, setProgress] = React.useState(defaultProgress);


    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    return <CircularProgressWithLabel value={defaultProgress} size={size} custom={custom} />;
}
