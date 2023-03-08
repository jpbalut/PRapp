
import { Divider, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Drawer from '@mui/material/Drawer';
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({drawerWidth =240}) => {
  const {displayName} = useSelector(state => state.auth)
  const {exercise} = useSelector(state => state.workout)

  
    return (
    <Box 
        component='nav' 
        sx={{width: {sm:drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant = 'permanent' //temporary
            // variant="persistent"
            anchor="left"
            open={true}
            sx={{
                display: {xs: 'flex'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            {/* <AppBar position="fixed" open={open}> */}
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            {displayName}
          </Typography>

        </Toolbar>

            <Toolbar>
                <Typography variant='h6' noWrap component = 'div'>Juan Balut</Typography>
            </Toolbar>
            <Divider/>
            <List>
                { exercise.map(pr=>(
                    <SideBarItem key = {pr.id}  {...pr }/>
                )) }

                
            </List>

        </Drawer>

          


    </Box>
  )
}
