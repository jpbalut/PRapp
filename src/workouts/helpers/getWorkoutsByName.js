import { workout } from "../data/workout";


export const getWorkoutsByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if  (name.length === 0) return [];

    return workout.filter(
        workout => workout.name.toLocaleLowerCase().includes(name)
    )
       

}
