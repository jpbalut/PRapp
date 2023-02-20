import { workout } from "../data/workout";
import { WorkoutRoutes } from "../routes/WorkoutRoutes";

export const getWorkoutByType = (type) =>{
    const validTypes = ['Weightlifting', 'Gymnastic']
    if (!validTypes.includes(type)) {
        throw new Error (`${type} is not a valid type`);

    }

    return workout.filter(workout => workout.type === type)
}