import { AddOutlined } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewPr } from '../../store/workout/thunks'
import { WorkoutLayout } from '../layout/WorkoutLayout'
import { NothingSelectedView, PrView} from '../views'

export const WorkoutsPage = () => {
  const {active} = useSelector(state => state.workout)
  const dispatch = useDispatch();

  const onClickNewPr = () => {
    dispatch(startNewPr())

  }
  return (
    <WorkoutLayout>

{
        (!!active)
          ? <PrView />
          : <NothingSelectedView />
}
        {/* <div>WorkoutsPage</div> */}
        <Grid
            container
            spacer={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)' , borderRadius: 3}}
        >
        {/* <WorkoutList prs = {maximum}/> */}
        {/* <IconButton 
        disabled = {isSaving}
        onClick={onClickNewPr}
        size='large' 
        sx={{
          color: 'white', 
          backgroundColor: 'error.main',
           ':hover': {backgroundColor: 'error.main', opacity:0.9},
           position:'fixed',
           right: 50,
           bottom: 50
           }}
      >
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton> */}


        </Grid>
    </WorkoutLayout>
    
  )
}
