import React, { useRef } from 'react'
import {Grid,Box,Typography,Grow,Slide} from '@mui/material'
import { makeStyles } from '@mui/styles'
import fondo from '../Images/wave.svg'
const useStyles = makeStyles(theme=>({
    container:{
        minHeight:"calc(100vh + 75px)",
        backgroundColor:theme.palette.primary.light,
        color:'#fff',
        textShadow:'4px 0px 4px #000',
        backgroundImage:`url(${fondo})`,
        backgroundPosition:'bottom',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    },
    image:{
        maxWidth:'300px'
    },
    item:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))

const HomeMain = () =>{
    const classes = useStyles();
    const containerRef = useRef(null)
    return(
        <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} md={6} ref={containerRef}>
                <Slide direction='down' in={true} container={containerRef.current} timeout={1500}>
                   <Typography variant='h3' textAlign='center'>Accesorios <br/> para estaciones <br/>de servicio</Typography>

                </Slide>
            </Grid>
            <Grid item className={classes.item} xs={12} md={6} >
                <Box className={classes.box}>
                    <Grow in={true} timeout={2000}>
                        <img src={require('../Images/logo.png')} alt="" className={classes.image}/>
                    </Grow>
                </Box >
            </Grid>
        </Grid>
    )
}
export default HomeMain