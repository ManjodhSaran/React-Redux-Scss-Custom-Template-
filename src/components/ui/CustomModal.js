import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function CustomModal({ show = true, body, width }) {
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            maxWidth: width ? `${width}px` : '600px',
            width: '100%',
            borderRadius: '4px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    return (
        show && <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={true}
                // onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={true}>
                    <div className={classes.paper}>
                        {body}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
