import axios from "axios";

export default {
  // Gets all books
  getWorkouts: function () {
    return axios.get("/api/workouts");
  },
  // Deletes the book with the given id
  deleteWorkouts: function (id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a book to the database
  saveWorkouts: function (workoutsData) {
    return axios.post("/api/workouts", workoutsData);
  },
  // Gets the book with the given id
  getWorkout: function (id) {
    return axios.get("/api/workouts/" + id);
  },
  patchWorkouts: function (id, workoutsData) {
    return axios.patch("/api/workouts/" + id, workoutsData);
  },
};
