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
    const body = req.body;
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return res.status(400).send({ status: "error", message: "Please provide all required fields" });
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const createWorkout = createNewWorkoutService(newWorkout);
    res.status(201).send({ status: "ok", data: createWorkout });
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
