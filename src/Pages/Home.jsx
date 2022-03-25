import React from 'react';
import Navbar from '../Components/Navbar'
import ParallaxComponent from '../Components/Parallax'
import InfoCards from '../Components/InfoCards'
import HomeMain from '../Components/HomeMain'
import Banner from '../Components/Banner'
import {Container,Box,Typography,Grid} from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme=>({
    boxInfoCards:{
        display:'flex',
        justifyContent:'space-around'
    },
    grid:{
        margin:0,
        backgroundColor:theme.palette.primary.light,
        
    }
}))
const Home = (props) =>{
    const info = [
        {title:'Entrega inmediata', icon:'shipping', text:'Contamos con amplio stock de nuestros productos para ofrecer una buena atencion y rapidez a la hora de los envios.'},
        {title:'Stock Permanente', icon:'gas', text:'Abastecemos estaciones de servicio de todo el pais en busqueda de brindar el mejor servicio posible '},
        {title:'Stock Permanente', icon:'shipping', text:'Lorem ipsum dolor sit amet. Ut soluta asperiores ab omnis nihil qui inventore quas eum volup'}
    ]
    const classes = useStyles();
    return(
        <>
            <HomeMain/>
            <Banner/>
            <Grid container xs={12} spacing={3} className={classes.grid}>
                {info.map((card)=>(
                    <InfoCards title={card.title} icon={card.icon} text={card.text}/>
                ))}
            </Grid>
            <Banner/>
            <Grid container xs={12} spacing={3} className={classes.grid}>
                <Grid item xs={12}>
                    <Typography variant='h3' textAlign='center'>Nuestros Productos</Typography>
                </Grid>
                {info.map((card)=>(
                    <InfoCards title={card.title} icon={card.icon} text={card.text}/>
                ))}
            </Grid>
        </>
    )
}

export default Home