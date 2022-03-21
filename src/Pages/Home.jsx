import React from 'react';
import Navbar from '../Components/Navbar'
import ParallaxComponent from '../Components/Parallax'
import InfoCards from '../Components/InfoCards'
import {Container,Box} from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    boxInfoCards:{
        display:'flex',
        justifyContent:'space-around'
    }
}))
const Home = (props) =>{
    const classes = useStyles();
    return(
        <>
            <Navbar/>
            <ParallaxComponent/>
            <Container>
                <Box className={classes.boxInfoCards}>
                    <InfoCards title={'Stock Permanente'} text={'Lorem ipsum dolor sit amet. Ut soluta asperiores ab omnis nihil qui inventore quas eum volup'}/>
                    <InfoCards title={'Stock Permanente'} text={'Lorem ipsum dolor sit amet. Ut soluta asperiores ab omnis nihil qui inventore quas eum volup'}/>
                    <InfoCards title={'Stock Permanente'} text={'Lorem ipsum dolor sit amet. Ut soluta asperiores ab omnis nihil qui inventore quas eum volup'}/>
                </Box>
            </Container>
            <h1>Hola</h1>
            <h1>Hola</h1>
            <h1>Hola</h1>

        </>
    )
}

export default Home