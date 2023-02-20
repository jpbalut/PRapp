import React, { useMemo } from 'react'
import { getWorkoutByType } from '../helpers'
import { WorkoutCard } from './'


export const WorkoutList = ({type}) => {
  const workout = useMemo( () => getWorkoutByType(type), [type])
    return (
    <div className='row rows-cols-1 row-cols-m-3 g-3'>
        {workout.map(workout => (
            <WorkoutCard 
              key = {workout.id}
              {...workout}
            />
        ))}
    </div>
  )
}
