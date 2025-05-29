import { getAllWorkouts, getOneWorkout, createNewWorkout, updateWorkout, deleteWorkout } from '../database/workout.js'
import { v4 as uuid } from 'uuid'

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
            throw new Error("Se requiere ID del entrenamiento");
        }
        const deleted = deleteWorkout(workoutId);
        return deleted;
    } catch (error) {
        throw error;
    }
}

export { 
    getAllWorkoutsService, 
    getOneWorkoutService, 
    createNewWorkoutService, 
    updateOneWorkoutService, 
    deleteOneWorkoutService
};