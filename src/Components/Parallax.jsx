import * as React from 'react';
import {makeStyles} from '@mui/styles';
import { Parallax, Background } from 'react-parallax';

const useStyles = makeStyles(theme=>({
    bg:{
        backgroundColor: theme.palette.primary.dark
    },
    div:{
         height: '425px',
    }
}))

const ParallaxComponent = (props) =>{
    const classes = useStyles()
    return(
        <Parallax
        blur={{max:10}}
        className={classes.bg}
        bgImage={require('../Images/download.png')}
        bgImageAlt="the dog"
    >
        <div className={classes.div} />
    </Parallax>
    )
} 
export default ParallaxComponent