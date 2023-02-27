import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../../ui/components"

export const WorkoutLayout = ({children}) => {
    const drawerWidth = 0
  return (
    <Box sx={{display:'flex'}}>
        <NavBar drawerWidth={drawerWidth}/>
        {/* <SideBar drawerWidth={drawerWidth}/> */}

        <Box component='main' sx={{flexGrow: 1, p:3}}>
            <Toolbar />
            {children}
        </Box>

    </Box>
  )
}
