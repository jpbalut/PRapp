import { workout } from "../data/workout"


export const getWorkoutById = (id) => {
    return workout.find(workout => workout.id === id)
}