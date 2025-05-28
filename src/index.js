import Express from 'express';
import { router as v1WorkoutsRouter } from './v1/routes/workoutRoutes.js';


const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use('/api/v1/workouts', v1WorkoutsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})