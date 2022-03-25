import { Container,Box } from '@mui/material'
import React from 'react'
import Navbar from './Components/Navbar'
const Layout = ({component}) =>{
    return(
        <Box>
            <Navbar/>
            <Box>
                {component}
            </Box>
        </Box>
    )
}

export default Layout