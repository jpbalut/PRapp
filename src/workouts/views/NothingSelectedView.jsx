// import { StarOutline } from "@mui/icons-material"
import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
// import { getAllUsers } from "../../store/workout"
import { WorkoutList } from "../components"

export const NothingSelectedView = () => {
  const {exercise} = useSelector(state => state.workout)
//   const updateFields = () => {
//     dispatch(getAllUsers())
// }
  return (
    <Grid
      container
      spacer={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)' , backgroundColor: 'white', borderRadius: 3}}
      >
        {/* <Button onClick={updateFields}>The Button</Button> */}
          <WorkoutList prs={exercise}/>

        
        {/* <Grid item xs={12}>
            <StarOutline sx={{fontSize: 100, color:'white'}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
        </Grid> */}
    </Grid>
  )
}
