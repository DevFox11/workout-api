import DB from './db.json' with { type: "json" };

const getAllWorkouts = () => {
    return DB.workouts;
}

export {
    getAllWorkouts
};