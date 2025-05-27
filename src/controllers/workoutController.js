import { 
    getAllWorkoutsService, 
    getOneWorkoutService, 
    createNewWorkoutService, 
    updateOneWorkoutService, 
    deleteOneWorkoutService,
} from '../services/workoutService.js';

const getAllWorkoutsController = (req, res) => {
    const allWorkouts = getAllWorkoutsService();
    res.send({ status: "ok", data: allWorkouts });
}

const getOneWorkoutController = (req, res) => {
    const workout = getOneWorkoutService();
    res.send("Get an existing workout");
}

const createNewWorkoutController = (req, res) => {
    const createWorkout = createNewWorkoutService();
    res.send("Create a new workout");
}

const updateOneWorkoutController = (req, res) => {
    const updateWorkout = updateOneWorkoutService();
    res.send("Update an existing workout");
}

const deleteOneWorkoutController = (req, res) => {
    const deletedWorkout = deleteOneWorkoutService();
    res.send("Delete an existing workout");
}

export {
    getAllWorkoutsController, 
    getOneWorkoutController, 
    createNewWorkoutController, 
    updateOneWorkoutController, 
    deleteOneWorkoutController
};
