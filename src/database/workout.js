import DB from './db.json' with { type: "json" };
import { saveToDatabase } from './utils.js';

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        throw new Error("Workout already exists");
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;

}

export {
    getAllWorkouts,
    createNewWorkout
};