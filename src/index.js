import Express from 'express';
import { router as v1WorkoutsRouter } from './v1/routes/workoutRoutes.js';


const app = Express();

const port = process.env.PORT || 3000;

app.use('/api/v1/workouts', v1WorkoutsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})