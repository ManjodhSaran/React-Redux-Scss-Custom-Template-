import React, { useRef, useState, useEffect } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BackupIcon from '@material-ui/icons/Backup';
import { IconButton } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import './AddImage.scss';

const useStyles = makeStyles((theme) => ({
    tooltip: {
        fontSize: "1em",
    },
}));

const AddImage = ({ data, setData, limit, multiple, error, controls }) => {
    const imageInputRef = useRef();
    const [image, setImage] = useState('');
    const [pointer, setPointer] = useState(0);

    const classes = useStyles();

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        }
        reader.readAsDataURL(file);
    };

    const handleImageChange = (e) => {
        try {
            const files = e.target.files;
            const file = e.target.files[0];
            if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
                if (!limit) {
                    setData(multiple ? [...data, ...files] : file)
                } else {
                    setData(multiple ? [...data, ...files].slice(0, limit) : file)
                }
                readFile(file)
            } else {
                error("Only Image Allowed")
            }
        } catch (e) { console.log(e) }
    }

    useEffect(() => {
        if (data.length !== 0) {
            try {
                readFile(data[pointer])
            } catch (e) { console.log(e) }
        } else {
            setImage(null)
        }
    }, [pointer, data]);

    const disablePrevious = !(pointer > 0);
    const disableNext = !(pointer < data.length - 1);
    const handlePrevious = () => !disablePrevious && setPointer(pointer - 1);
    const handleNext = () => !disableNext && setPointer(pointer + 1);

    const removeImage = () => {
        let arr = data;
        if (arr.length === 0) {
            setImage(null)
            return
        }

        arr.splice(pointer, 1);
        setData(arr);

        if (pointer === 0) {
            handleNext();
        } else {
            handlePrevious();
        }
    };

    return (
        <Paper
            className='addImage'
            elevation={5}
            style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
            {(multiple && image && controls) &&
                <div className="controls">
                    <div className="previous">
                        <Tooltip classes={{ tooltip: classes.tooltip }} title='Previous Image' placement='top' arrow>
                            <IconButton onClick={handlePrevious} className='iconButton' disabled={disablePrevious}>
                                <NavigateNextIcon className='icon' />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="next">
                        <Tooltip classes={{ tooltip: classes.tooltip }} title='Next Image' placement='top' arrow>
                            <IconButton onClick={handleNext} className='iconButton' disabled={disableNext}>
                                <NavigateNextIcon className='icon' />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <Paper className="label">
                        <p>{`${pointer + 1} of ${data.length}`}</p>
                    </Paper>
                    <div className="delete">
                        <Tooltip classes={{ tooltip: classes.tooltip }} title='Remove this image' placement='top' arrow>
                            <IconButton onClick={removeImage} className='deleteIconButton'>
                                <DeleteIcon className='deleteIcon' />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            }

            {!image ?
                <div onClick={() => imageInputRef.current.click()}>
                    <BackupIcon className='icon' />
                    {<h2>Pick
                        {multiple ?
                            ` ${limit ? limit : ''} Images`
                            :
                            ' Image'
                        }
                    </h2>}
                </div>
                :
                <div className='changeImage'>
                    {multiple ?

                        <h2 onClick={() => imageInputRef.current.click()}>Add Images</h2>

                        :
                        <h2 onClick={() => imageInputRef.current.click()}>Change Image</h2>
                    }
                </div>
            }

            <input
                type="file"
                ref={imageInputRef}
                onChange={handleImageChange}
                multiple={multiple}
                accept="image/*"
                hidden
            />
        </Paper>
    )
}

export default AddImage