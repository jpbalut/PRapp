import { Note, TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActivePr } from "../../store/workout"

export const SideBarItem = ({Rm,
    date, 
    name,
    type,
    id,
    imageUrls,}) => {
    // const {} = useMemo(() => { return name.length>17
    //                     ? name.substring(0,17) + '...'
    //                     : name 
    //                 }, [name])
    // const {maximum} = useSelector(state => state.workout)

    
    const dispatch = useDispatch();
    const onClickPr = ()=> {
        dispatch(setActivePr( { date, Rm, id, name, type, imageUrls,} ))
    }
    // const newName = useMemo(() => {
    //     return name.length>17 
    //         ? name.substring(0,17) + '...'
    //         : name
    // },[name])
  return (
    <ListItem key={id} disablePadding>
                        <ListItemButton
                        onClick={onClickPr}
                        >
                            <ListItemIcon>
                                <TurnedInNot/>
                                </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={name}/>
                                <ListItemText secondary={Rm}/>
                            </Grid>
                            
                        </ListItemButton>
                    </ListItem>
  )
}
