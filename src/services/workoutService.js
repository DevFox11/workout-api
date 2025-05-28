import { getAllWorkouts, createNewWorkout } from '../database/workout.js'
import { v4 as uuid } from 'uuid'

const getAllWorkoutsService = () => {
    const allWorkouts = getAllWorkouts();
    return allWorkouts;
}

const getOneWorkoutService = () => {
    return;
}

const createNewWorkoutService = (newWorkout) => {
    const workoutToInsert = {
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }

    const createdWorkout = createNewWorkout(workoutToInsert);

    return createdWorkout;
}   

const updateOneWorkoutService = () => {
    return;
}

const deleteOneWorkoutService = () => {
    return;
}

export { 
    getAllWorkoutsService, 
    getOneWorkoutService, 
    createNewWorkoutService, 
    updateOneWorkoutService, 
    deleteOneWorkoutService
};