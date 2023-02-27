import { TurnedInNot } from "@mui/icons-material"
import { AppBar, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import { useTheme } from "@emotion/react";

export const SideBar = ({drawerWidth =240}) => {
//     const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
  
    return (
    <Box 
        component='nav' 
        sx={{width: {sm:drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            //variant = 'permanent' //temporary
            variant="persistent"
            anchor="left"
            open={true}
            sx={{
                display: {xs: 'flex'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Persistent drawer
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
            {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
            <Toolbar>
                <Typography variant='h6' noWrap component = 'div'>Juan Balut</Typography>
            </Toolbar>
            <Divider/>
            <List>
                { ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text=>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                                </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti in possimus neque.'}/>
                            </Grid>
                            
                        </ListItemButton>
                    </ListItem>
                )) }
            </List>

        </Drawer>

          


    </Box>
  )
}
