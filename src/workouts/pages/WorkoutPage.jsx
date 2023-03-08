import { Grid, TextField } from "@mui/material"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useNavigate, Navigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { CalculateTable } from "../components"
import { getWorkoutById } from "../helpers"
import { WorkoutLayout } from "../layout/WorkoutLayout"

export const WorkoutPage = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const { active:pr } = useSelector(state => state.workout)
  const {name, type, date, onInputChange, formState} = useForm(pr)
  const workout = useMemo( () => getWorkoutById(id),[id])

  const rmUser = 150
  if (!workout) {
    return <Navigate to="/rms"/>;
  }

  const rmUserChange = () => {
    console.log('hola')
  }

  return (
    <WorkoutLayout>
    {/* <div className="row mt-5">
      <div className="col-4"> */}
      <Grid container>
        <img 
          src={`/assets/workouts/${id}.jpg`} 
          alt={workout.exercise} 
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      
      <div className="col-8">
        <h3>{workout.exercise}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Spanish Name:</b>{workout.spanish_name}</li>
          <li className="list-group-item"><b>Type:</b>{workout.type}</li>
          <li className="list-group-item"><b>Tu RM:</b>{rmUser} 
          <TextField
                type='number'
                variant='filled'
                fullWidth
                placeholder="Ingresa tu Máximo"
                label='RM'
                value={rmUser}
                onChange={rmUserChange}
                sx={{border:'none', mb:1}}
            />
            <TextField
                type='number'
                variant='filled'
                fullWidth
                placeholder="Ingresa tu Máximo"
                label='RM'
                value={rmUser}
                onChange={rmUserChange}
                sx={{border:'none', mb:1}}
            />
            <TextField
                type='number'
                variant='filled'
                fullWidth
                placeholder="Ingresa tu Máximo"
                label='RM'
                value={rmUser}
                onChange={rmUserChange}
                sx={{border:'none', mb:1}}
            />
          {/* <IconButton
            onClick={onRmEdit}
            size='large' 
            sx={{
              color: 'black', 
              }}
              >
            <EditOutlined/>
            </IconButton>
            <IconButton
            display = {!edit}
            >
                <OutlinedInput/>
                <button >Guardar</button>
            </IconButton> */}

          </li>
        </ul>
        <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Back</button>
        
            
            </div>
            </Grid>
      
    {/* </div>  */}
    <hr />
    {/* <IconButton 
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
    <CalculateTable varMaximo={100} barraWeight={45}/>

    </WorkoutLayout>
  )
}
