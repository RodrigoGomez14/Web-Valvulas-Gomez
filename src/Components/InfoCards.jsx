import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import {Grid,Box,Paper,Typography,Slide} from '@mui/material'
import { AttachMoney, LocalGasStation, LocalShipping } from '@mui/icons-material';

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'auto',
        marginRight:'auto'
    },
    paper:{
        color:theme.palette.primary.contrastText + '!important',
        backgroundColor:theme.palette.primary.light,
        height:'400px',
        maxWidth:'420px',
        margin:'10px',
        padding:'10px',
        borderRadius:'45px',
    },
    outerIcon:{
        width:'75px',
        height:'75px',
        borderRadius:'50%',
        backgroundColor:theme.palette.primary.main,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    grid:{
        height:'100%',
        alignContent:"space-around"
    },
    item:{
        display:'flex',
        justifyContent:'center',
    },
    icon:{
        fontSize:'50px',
        color:theme.palette.primary.contrastText
    }
}))
const  InfoCards = ({title,text,icon}) =>{
    const classes = useStyles()
    const containerRef = useRef(null)
    function switchIcon(icon){
        switch(icon){
            case 'shipping':
                return <LocalShipping className={classes.icon}/>
            case 'gas':
                return <LocalGasStation className={classes.icon}/>      
            case 'price':
                return <AttachMoney className={classes.icon}/>      
        }
    }
    return(
        <Grid item xs={10} sm={8} md={6} lg={4} className={classes.root} ref={containerRef}>
            <Slide direction='up' in={true} mountOnEnter unmountOnExit timeout={1000} container={containerRef.current}>
                <Paper className={classes.paper} elevation={10} rounded >
                    <Grid container className={classes.grid}>
                        <Grid item xs={12} className={classes.item}>
                            <Typography variant='h4'>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.item}>
                            <Box className={classes.outerIcon}>
                                {switchIcon(icon)}
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.item}>
                            <Typography variant='subtitle1' textAlign='center'>
                                {text}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </Grid>
    )
}
export default InfoCards