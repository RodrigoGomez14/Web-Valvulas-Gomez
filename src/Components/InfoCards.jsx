import React from 'react';
import { makeStyles } from '@mui/styles';
import {Container,Box,Paper,Typography} from '@mui/material'

const useStyles = makeStyles(theme=>({
    box:{
        width:'350px',
        height:'600px',
        margin:theme.spacing(2),
        backgroundColor:theme.palette.primary.dark + '!important',
        color:theme.palette.primary.contrastText + '!important',
    }
}))
const InfoCards = ({title,text}) =>{
    const classes = useStyles()
    return(
        <Paper className={classes.box}>
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='body1'>
                {text}
            </Typography>
        </Paper>
    )
}
export default InfoCards