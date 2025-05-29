import { v4 as uuid } from 'uuid'
import { getAllWorkouts, getOneWorkout, createNewWorkout, updateWorkout, deleteWorkout } from '../database/workout.js'
import { API_MESSAGES } from '../common/constants/messages.js'

const getAllWorkoutsService = () => {
    const allWorkouts = getAllWorkouts();
    return allWorkouts;
}

const getOneWorkoutService = (workoutId) => {
    const workout = getOneWorkout(workoutId);
    return workout;
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

const updateOneWorkoutService = (workoutId, body ) => {
    const update = updateWorkout(workoutId, body);
    return update;
}


const deleteOneWorkoutService = (workoutId) => {
    try {
        if (!workoutId) {
            throw new Error( API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD + "workoutId");
        }
        const deleted = deleteWorkout(workoutId);
        return deleted;
    } catch (error) {
        throw new Error(API_MESSAGES.ERRORS.INTERNAL_SERVER_ERROR);
    }
}

export { 
    getAllWorkoutsService, 
    getOneWorkoutService, 
    createNewWorkoutService, 
    updateOneWorkoutService, 
    deleteOneWorkoutService
};