const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  workoutType: { type: String, required: true },
  youtubeId: { type: String, required: true },
  routine: { type: String, required: true },
  subWorkout: { type: Array, required: true },
  workoutInfo: { type: String, required: false },
  // date: { type: Date, default: Date.now }
});

const workouts = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;