import React from 'react';
import Navbar from '../Components/Navbar'
import ParallaxComponent from '../Components/Parallax'
import InfoCards from '../Components/InfoCards'
import HomeMain from '../Components/HomeMain'
import Banner from '../Components/Banner'
import {Button,Divider,Typography,Grid,Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme=>({
    boxInfoCards:{
        display:'flex',
        justifyContent:'space-around'
    },
    grid:{
        backgroundColor:theme.palette.backgorund,
        flexWrap:'wrap',
        marginTop:'85px',
        marginBottom:'85px',
    },
    button:{
        width:'150px',
        color:'white',
        borderColor:'white',
        
    },
    box:{
        height:'175px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:theme.palette.gray
    }
}))
const Home = () =>{
    const info = [
        {title:'Entrega inmediata', icon:'shipping', text:'Contamos con amplio stock de nuestros productos para ofrecer una buena atencion y rapidez en los envios.'},
        {title:'Stock Permanente', icon:'gas', text:'Abastecemos estaciones de servicio de todo el pais en busqueda de brindar el mejor servicio posible '},
        {title:'Los Precios mas bajos', icon:'price', text:'Lorem ipsum dolor sit amet. Ut soluta asperiores ab omnis nihil qui inventore quas eum volup'}
    ]
    const classes = useStyles();
    return(
        <>
            <HomeMain/>
            <Grid container xs={12} className={classes.grid} >
                {info.map((card)=>(
                    <InfoCards title={card.title} icon={card.icon} text={card.text}/>
                ))}
            </Grid>
            <Banner/>
            <Box className={classes.box}>
                    <Typography variant='subtitle1' textAlign='center' color='white'>Conocé</Typography>
                    <Typography variant='h4' textAlign='center' color='white'>Nuestros Productos</Typography>
                    <Button variant='outlined' className={classes.button}>VER MAS</Button>
            </Box>
            <Grid container xs={12} className={classes.grid}>
                
                {info.map((card)=>(
                    <InfoCards title={card.title} icon={card.icon} text={card.text}/>
                ))}
            </Grid>
        </>
    )
}

export default Home