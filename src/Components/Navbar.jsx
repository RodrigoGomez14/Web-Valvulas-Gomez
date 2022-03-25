import React, {useState} from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Button,Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@mui/styles';
import DrawerLeft from '../Components/DrawerLeft';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    titleBox:{
        flexGrow:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:'75px',
    },
    button:{
    }
}))

const Navbar = (props) =>{
    const [stateDrawer, setStateDrawer] = useState(false);

    const classes = useStyles()
    return(
    <>
        <DrawerLeft open={stateDrawer} toggleDrawer={()=>{setStateDrawer(false)}}/>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={4}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>{setStateDrawer(!stateDrawer)}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.titleBox}>
                        <img src={require('../Images/logo.png')} alt="" className={classes.image} />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
} 
export default Navbar