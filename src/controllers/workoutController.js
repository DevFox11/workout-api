import { 
    getAllWorkoutsService, 
    getOneWorkoutService, 
    createNewWorkoutService, 
    updateOneWorkoutService, 
    deleteOneWorkoutService,
} from '../services/workoutService.js';

const getAllWorkoutsController = (req, res) => {
    try {
        const allWorkouts = getAllWorkoutsService();
        res.status(200).send({ status: "ok", data: allWorkouts });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
}

const getOneWorkoutController = (req, res) => {
    try {
        const workoutId = req.params.workoutId;
        if (!workoutId) {
            return res.status(400).send({ status: "error", message: "Se requiere ID del entrenamiento" });
        }
        const workout = getOneWorkoutService(workoutId);
        res.status(200).send({ status: "ok", data: workout });
    } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
    }
}

const createNewWorkoutController = (req, res) => {
    const body = req.body;
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return res.status(400).send({ status: "error", message: "Por favor proporcione todos los campos requeridos" });
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
    try {
        const workoutId = req.params.workoutId;
        const body = req.body;
        
        if (!workoutId) {
            return res.status(400).send({ status: "error", message: "Se requiere ID del entrenamiento" });
        }
        if (Object.keys(body).length === 0) {
            return res.status(400).send({ status: "error", message: "Se requieren datos para actualizar" });
        }

        const updateWorkout = updateOneWorkoutService(workoutId, body);
        res.status(200).send({ status: "ok", data: updateWorkout });
    } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
    }
}

const deleteOneWorkoutController = (req, res) => {
    try {
        const workoutId = req.params.workoutId;
        if (!workoutId) {
            return res.status(400).send({ status: "error", message: "Se requiere ID del entrenamiento" });
        }
        const deletedWorkout = deleteOneWorkoutService(workoutId);
        res.status(200).send({ status: "ok", data: deletedWorkout });
    } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
    }
}

export {
    getAllWorkoutsController, 
    getOneWorkoutController, 
    createNewWorkoutController, 
    updateOneWorkoutController, 
    deleteOneWorkoutController
};
