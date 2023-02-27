import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const NavBar = ({drawerWidth=240}) => {
  return (
    <AppBar 
        position='fixed' 
        sx={{ 
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px` }
        }}>
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx = {{mr:2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>PR App</Typography>
                <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/calculate"
                    >
                        Calculate
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/sumplates"
                    >
                        Sumar Discos
                    </NavLink>
                <IconButton color ='error'>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
