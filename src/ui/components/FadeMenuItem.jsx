import { MenuItem } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActivePr } from "../../store/workout";


export const FadeMenuItem = ({Rm,
    date, 
    name,
    type,
    id,
    imageUrls,}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
      };

      const onClickPr = ()=> {
        dispatch(setActivePr( { date, Rm, id, name, type, imageUrls,} ))
    }
  return (
    <MenuItem onClick={onClickPr}>{name}</MenuItem>
  )
}
