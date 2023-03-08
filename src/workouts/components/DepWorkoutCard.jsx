import { Grid, IconButton } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActivePr } from '../../store/workout'

// const AthletesByWorkout = ({spanish_name, athletes}) => {
//     if(spanish_name === athletes) return <></> ;
//     return <p>{athletes}</p>
// }

export const WorkoutCard = ({
        Rm, 
        date,
        name, 
        type, 
        id,
        imageUrls,
}) => {
    
    const dispatch = useDispatch();
    const onClickPr = ()=> {
        dispatch(setActivePr( { Rm, date, name, type, id, imageUrls,} ))
    }
    const newName = useMemo(() => {
        return name.length>17 
            ? name.substring(0,17) + '...'
            : name
    },[name])

    return (
    <Grid container>
        <IconButton
        onClick={onClickPr}>
         <div className='card'>
                    {/* <img src={ workoutImageUrl } className="card-img" alt={ exercise }/> */}
                        <h5 className='card-title'> {newName} </h5>
                        <p className='card-text'>{date}</p>
                        <p className='card-text'>
                            <small className='text-muted'>{type}</small>
                        </p>

            </div>
        </IconButton>
    </Grid>
  )
}
