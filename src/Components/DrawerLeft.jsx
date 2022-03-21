import React , {useState}from 'react'
import { List, ListItem,ListItemText, Drawer, Box,Divider,ListItemButton,Collapse} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {ExpandMore} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    logoBox:{
        backgroundColor:theme.palette.primary.main,
        justifyContent: 'center !important'
    },
    img:{
         width: '150px',
    },
    box:{
        width:'250px',
    }
}))
const DrawerLeft = ({open,toggleDrawer}) =>{
    const classes = useStyles();
    const [divProductos,setDivProductos] = useState(false);
    return(
        <Drawer
            open={open}
            onClose={()=>{toggleDrawer()}}
          >
            <Box className={classes.box}>
                <List>
                    <ListItem className={classes.logoBox}>
                        <img src={require('../Images/logo.png')} className={classes.img} />
                    </ListItem>
                    <Divider/>
                    <Link to='/'>
                        <ListItem button key='Inicio'> 
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Inicio" />
                            </ListItemButton>
                        </ListItem>
                    <Divider/>
                    </Link>
                    <ListItem button key='Inicio'> 
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{setDivProductos(!divProductos)}}>
                            <ListItemText primary="Productos" />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem button key='Productos'>
                        <Collapse in={divProductos} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List>
                            <Divider/>
                        </Collapse>
                    </ListItem>
                    <Link to='/Nosotros'>
                        <ListItem button key='Nosotros'> 
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Nosotros" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to='/Contacto'>
                        <ListItem button key='Contacto'> 
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Contacto" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Divider/>
                </List>
            </Box>
        </Drawer>
    )
    
}
export default DrawerLeft