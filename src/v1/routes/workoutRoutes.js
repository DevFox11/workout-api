import Express from 'express';
import { 
    getAllWorkoutsController, 
    getOneWorkoutController, 
    createNewWorkoutController,
    updateOneWorkoutController, 
    deleteOneWorkoutController 
} from '../../controllers/workoutController.js';

export const router = Express.Router();

router.route('/').get(getAllWorkoutsController);

router.route('/:workoutId').get(getOneWorkoutController);

router.route('/').post(createNewWorkoutController);

router.route('/:workoutId').patch(updateOneWorkoutController);

router.route('/:workoutId').delete(deleteOneWorkoutController);
