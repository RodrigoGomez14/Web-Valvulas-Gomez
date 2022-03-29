import { ClassNames } from "@emotion/react";
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { makeStyles } from "@mui/styles";
import {Typography} from '@mui/material'
const useStyles = makeStyles(theme=>({
    banner:{
        aspectRatio:'2/1',
        height:'250px'
    },
    box:{
      position:'absolute',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'#000000c7'
    },
    image:{
      height:'150px'
    }
}))
const Banner = () => {
    const classes = useStyles()
    return (
      <ParallaxBanner
        className={classes.banner}
        layers={[{ image: 'https://www.gilbarco.com/la/sites/gilbarco.com.la/files/article/images/montar-posto-de-gasolina-1.jpg', speed: -25 }]}
      >
        <div className={classes.box}>
          <img src={require('../Images/logo.png')} alt="" className={classes.image}/>
        </div>
    </ParallaxBanner>
    );
  }
  export default Banner