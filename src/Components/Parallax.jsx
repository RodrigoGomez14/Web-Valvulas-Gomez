import * as React from 'react';
import {makeStyles} from '@mui/styles';
import { useParallax } from 'react-scroll-parallax';
import {Box,Button,Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    box:{
        height:'200px',
        backgroundColor:theme.palette.primary.dark,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:theme.palette.primary.contastText
    },
    text:{
        color:theme.palette.primary.contrastText
    },
    link:{
        color:theme.palette.primary.contrastText
    }
}))

const ParallaxComponent = (props) =>{
    const classes = useStyles()
    const {ref} = useParallax({speed:25})
    return(
        <Box ref={ref} className={classes.box}>
            <Typography variant='h4' className={classes.text}>Conoce nuestros <Link to='/Productos' className={classes.link}>Productos</Link></Typography>
        </Box>
    )
} 
export default ParallaxComponent