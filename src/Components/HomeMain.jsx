import React from 'react'
import {Grid,Box,Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import fondo from '../Images/wave.svg'
const useStyles = makeStyles(theme=>({
    container:{
        marginTop:'75px',
        minHeight:"100vh",
        display:'flex',
        alignItems:"center",
        justifyContent:'space-around',
        backgroundColor:theme.palette.primary.light,
        color:'#fff',
        textShadow:'5px 0px 5px #000',
        backgroundImage:`url(${fondo})`,
        backgroundPosition:'bottom',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    },
    image:{
        maxWidth:'300px'
    }
}))

const HomeMain = () =>{
    const classes = useStyles();
    return(
        <Grid container className={classes.container}>
            <Grid item>
                <Typography variant='h2' textAlign='center'>Accesorios <br/> para estaciones <br/>de servicio</Typography>
            </Grid>
            <Grid item>
                <img src={require('../Images/logo.png')} alt="" className={classes.image}/>
            </Grid>
        </Grid>
    )
}
export default HomeMain