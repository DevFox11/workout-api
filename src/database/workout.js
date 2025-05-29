import DB from './db.json' with { type: "json" };
import { saveToDatabase } from './utils.js';
import { API_MESSAGES } from '../common/constants/messages.js'

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        throw new Error(API_MESSAGES.ERRORS.NOT_FOUND);
    }
    return workout;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        return {
            message: API_MESSAGES.ERRORS.CONFLICT,
            status: 409
        }
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;

}

const updateWorkout = (workoutId, body) => {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if(workoutIndex === -1) {
        return {
            message: API_MESSAGES.ERRORS.NOT_FOUND,
            status: 404
        }
    }
    const updateWorkout = {
        ...DB.workouts[workoutIndex],
        ...body,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }

    DB.workouts[workoutIndex] = updateWorkout;
    saveToDatabase(DB);
    return updateWorkout;
}

const deleteWorkout = (workoutId) => {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (workoutIndex === -1) {
        return {
            message: API_MESSAGES.ERRORS.NOT_FOUND,
            status: 404
        }
    }
    DB.workouts.splice(workoutIndex, 1);
    saveToDatabase(DB);
    return { message: API_MESSAGES.SUCCESS.DELETED, workoutId };
}

export {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout
};