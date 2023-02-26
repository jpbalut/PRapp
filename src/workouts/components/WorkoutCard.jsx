import React from 'react'
import { Link } from 'react-router-dom'

const AthletesByWorkout = ({spanish_name, athletes}) => {
    if(spanish_name === athletes) return <></> ;
    return <p>{athletes}</p>
}

export const WorkoutCard = ({
        id,
        exercise, 
        type, 
        spanish_name,
        first_appearance,
        athletes,
}) => {
    
    //const workoutImageUrl = `/assets/workouts/${id}.jpg`
    const workoutImageUrl = `/workouts/${id}.jpg`
    //const athletesByWorkout = (<p>{athletes}</p>)

    return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-12 '>
                    <img src={ workoutImageUrl } className="card-img" alt={ exercise }/>
                </div>
                <div className='col-12'>
                    <div className='card-body'>
                        <h5 className='card-title'> {exercise} </h5>
                        <p className='card-text'>{spanish_name}</p>
                        {/* { (spanish_name !== athletes ) && athletesByWorkout} */}
                        <AthletesByWorkout spanish_name={spanish_name} athletes={athletes}/>
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link to={`/workout/${id}`}>Más...</Link>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
