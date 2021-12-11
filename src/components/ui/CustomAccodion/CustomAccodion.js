import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './CustomAccordion.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: '600',
        // flexBasis: '33.33%',
        flexShrink: 0,
        width: '100%',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


const CustomAccordion = ({ id, title, content, expanded, setExpanded, disabled, handleDisabledClick }) => {
    const classes = useStyles();

    return (
        <Accordion
            expanded={expanded}
            onChange={setExpanded}
            disabled={disabled}
            className={`${disabled && 'accordion--disabled'}`}
            onClick={() => disabled && handleDisabledClick(title)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>

    )
}

export default CustomAccordion