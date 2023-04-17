import { LogoutOutlined, MenuOutlined, SearchOffOutlined, SearchOffTwoTone, SearchOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout, startLogout } from "../../store"
import { deSelectPr } from "../../store/workout"
import { FadeMenu } from "./FadeMenu"

export const NavBar = ({drawerWidth=240}) => {
    const dispatch = useDispatch();
    const {exercise} = useSelector(state => state.workout)

    const onLogout = () => {
        dispatch(startLogout())
    }

    const {displayName} = useSelector(state => state.auth )

    const onRmClick = () =>{
        dispatch(deSelectPr())
    }
    
    return (
    <AppBar 
        position='fixed' 
        sx={{ 
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px` }
        }}>
        <Toolbar>
            {/* <IconButton
                color='inherit'
                edge='start'
                sx = {{mr:2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton> */}
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
                <NavLink 
                        onClick={onRmClick}
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/rms"
                    >
                        Mis RM
                    </NavLink>
               
                {/* <FadeMenu exercise = {exercise}>
                
                        Mis RM
                        
                 </FadeMenu> */}
                    
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/calculate"
                    >
                        Calculate Lb
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/calculatekg"
                    >
                        Calculate Kg
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/sumplates"
                    >
                        Sumar Discos
                    </NavLink>

                    {/* <IconButton> <SearchOutlined sx={{color: 'white'}}/> </IconButton> */}

                <IconButton onClick={onLogout} color ='error'>
                    <LogoutOutlined  />
                </IconButton>
                

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
