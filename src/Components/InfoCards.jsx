import React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid,Box,Paper,Typography} from '@mui/material'
import { LocalGasStation, LocalShipping } from '@mui/icons-material';

const useStyles = makeStyles(theme=>({
    paper:{
        color:theme.palette.secondary.contrastText + '!important',
        height:'400px',
        padding:'10px',
        borderRadius:'45px'
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
    }
}))
const  InfoCards = ({title,text,icon}) =>{
    const classes = useStyles()
    function switchIcon(icon){
        switch(icon){
            case 'shipping':
                return <LocalShipping sx={{fontSize:'50px', color:'white'}}/>
            case 'gas':
                return <LocalGasStation sx={{fontSize:'50px', color:'white'}}/>      
        }
    }
    return(
        <Grid item xs={10} sm={8} md={6} lg={4}>
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
                        <Typography variant='body1' textAlign='center'>
                            {text}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default InfoCards