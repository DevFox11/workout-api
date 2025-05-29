import DB from './db.json' with { type: "json" };
import { saveToDatabase } from './utils.js';

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        throw new Error("Entrenamiento no encontrado");
    }
    return workout;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        throw new Error("El entrenamiento ya existe");
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;

}

const updateWorkout = (workoutId, body) => {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if(workoutIndex === -1) {
        throw new Error("Entrenamiento no encontrado");
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
        throw new Error("Entrenamiento no encontrado");
    }
    DB.workouts.splice(workoutIndex, 1);
    saveToDatabase(DB);
    return `El entrenamiento con id ${workoutId} fue eliminado exitosamente`;
}

export {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout
};