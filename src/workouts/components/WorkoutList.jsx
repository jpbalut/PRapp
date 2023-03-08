import React, { useMemo } from 'react'
import { WorkoutCard } from './'


export const WorkoutList = ({prs}) => {
  //const workout = useMemo( () => getWorkoutByType(type), [type])
    return (
    <div className='row rows-cols-1 row-cols-m-3 g-3'>
        {prs.map(pr => (
            <WorkoutCard 
              key = {pr.id}
              {...pr}
            />
        ))}
    </div>
  )
}
