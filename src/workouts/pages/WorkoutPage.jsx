import { useMemo } from "react"
import { useNavigate, Navigate, useParams } from "react-router-dom"
import { getWorkoutById } from "../helpers"

export const WorkoutPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const workout = useMemo( () => getWorkoutById(id),[id])

  if (!workout) {
    return <Navigate to="/gymnastic"/>;
  }
  
  return (
    <>
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/workouts/${id}.jpg`} 
          alt={workout.exercise} 
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>
      <div className="col-8">
        <h3>{workout.exercise}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Spanish Name:</b>{workout.spanish_name}</li>
          <li className="list-group-item"><b>Type:</b>{workout.type}</li>
          <li className="list-group-item"><b>First_appearance:</b>{workout.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Athletes</h5>
        <p>{workout.athletes}</p>

        <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
      
    </>
  )
}
