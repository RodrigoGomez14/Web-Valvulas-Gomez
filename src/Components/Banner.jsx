import { ClassNames } from "@emotion/react";
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { makeStyles } from "@mui/styles";
import {Typography} from '@mui/material'
const useStyles = makeStyles(theme=>({
    banner:{
        aspectRatio:'2/1',
        height:'200px'
    }
}))
const Banner = () => {
    const classes = useStyles()
    return (
      <ParallaxBanner
        className={classes.banner}
        layers={[{ image: 'https://www.gilbarco.com/la/sites/gilbarco.com.la/files/article/images/montar-posto-de-gasolina-1.jpg', speed: -15 }]}
      >
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
        </div>
    </ParallaxBanner>
    );
  }
  export default Banner