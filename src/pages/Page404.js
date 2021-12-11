import React from 'react'
import { Button, Paper } from '@material-ui/core'
import Image404 from '../assets/images/404-error.jpg'
import '../styles/Page404.scss'
import { useHistory } from 'react-router-dom'

const Page404 = () => {
    const history = useHistory();
    return (
        <div className='page404'>
            <Paper className='container' elevation={5}>
                <img src={Image404} alt="" />
                <div className="buttonGroup">
                    <Button onClick={() => history.replace('/')} variant='contained' color='primary'>Home</Button>
                    <Button onClick={() => history.goBack()} variant='outlined' color='primary'>Back</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Page404
