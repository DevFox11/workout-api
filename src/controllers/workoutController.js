import {
    getAllWorkoutsService,
    getOneWorkoutService,
    createNewWorkoutService,
    updateOneWorkoutService,
    deleteOneWorkoutService,
} from '../services/workoutService.js';
import { API_MESSAGES } from '../common/constants/messages.js'

const getAllWorkoutsController = (req, res) => {
    try {
        const allWorkouts = getAllWorkoutsService();
        return res.status(200).send({ 
            status: "ok", 
            message: API_MESSAGES.SUCCESS.OK, 
            data: allWorkouts 
        });
    } catch (error) {
        return res.status(500).send({ 
            status: "error", 
            message: API_MESSAGES.ERRORS.INTERNAL_SERVER_ERROR 
        });
    }
}

const getOneWorkoutController = (req, res) => {
    try {
        const workoutId = req.params.workoutId;
        if (!workoutId) {
            return res.status(400).send({ 
                status: "error", 
                message: API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD + "workoutId" 
            });
        }
        const workout = getOneWorkoutService(workoutId);
        return res.status(200).send({ 
            status: "ok", 
            message: API_MESSAGES.SUCCESS.OK, 
            data: workout 
        });
    } catch (error) {
        return res.status(404).send({ 
            status: "error", 
            message: API_MESSAGES.ERRORS.NOT_FOUND 
        });
    }
}

const createNewWorkoutController = (req, res) => {
    const body = req.body;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return res.status(400).send({ 
            status: "error", 
            message: API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD + 
            "name, mode, equipment, exercises, trainerTips" 
        });
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const createWorkout = createNewWorkoutService(newWorkout);
    return res.status(201).send({ 
        status: "ok", 
        message: API_MESSAGES.SUCCESS.CREATED, 
        data: createWorkout 
    });
}

const updateOneWorkoutController = (req, res) => {
    try {
        const workoutId = req.params.workoutId;
        const body = req.body;

        if (!workoutId) {
            return res.status(400).send({
                status: "error",
                message: `${API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD}workoutId`
            });
        }
        if (Object.keys(body).length === 0) {
            return res.status(400).send({ 
                status: "error", 
                message: API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD + "body" 
            });
        }

        const updateWorkout = updateOneWorkoutService(workoutId, body);
        res.status(200).send({ status: "ok", message: API_MESSAGES.SUCCESS.OK, data: updateWorkout });
    } catch (error) {
        res.status(404).send({ status: "error", message: error.message });
    }
}

const deleteOneWorkoutController = (req, res) => {
    try {
        const workoutId = req.params.workoutId;
        if (!workoutId) {
            return res.status(400).send({ 
                status: "error", 
                message: API_MESSAGES.ERRORS.VALIDATION.REQUIRED_FIELD + "workoutId" 
            });
        }
        const deletedWorkout = deleteOneWorkoutService(workoutId);
        return res.status(200).send({ 
            status: "ok", 
            message: API_MESSAGES.SUCCESS.OK, 
            data: deletedWorkout 
        });
    } catch (error) {
        return res.status(404).send({ 
            status: "error", 
            message: API_MESSAGES.ERRORS.NOT_FOUND 
        });
    }
}

export {
    getAllWorkoutsController,
    getOneWorkoutController,
    createNewWorkoutController,
    updateOneWorkoutController,
    deleteOneWorkoutController
};
