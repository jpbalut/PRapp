import { DeleteOutline } from "@mui/icons-material";
import { Button, Grid, ImageList, ImageListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { startDeletingImage } from "../../store/workout";


export const  ImageGallery = ({images}) => {
  const dispatch = useDispatch();
  const deleteImage = (event) => {
    const image_id = event.currentTarget.id
    dispatch(startDeletingImage(image_id))
  }
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <Grid key={image} container justifyContent='end'>
        <ImageListItem >
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt= "Imagen del Rm"
            loading="lazy"/>
          
            <Button 
              onClick={deleteImage}
              sx={{mt:2}}
              color = "error" 
              id = {image}
              aria-label="delete" 
              size="small"
            >
              <DeleteOutline fontSize="inherit" />
            </Button>
          
        </ImageListItem>
        </Grid>
      ))}
    </ImageList>
  );
}
