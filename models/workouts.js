const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  routine: { type: String, required: true },
  workoutType: { type: String, required: true },
  subWorkout: Array,
  // date: { type: Date, default: Date.now }
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
