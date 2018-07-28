import axios from "axios";

export default {
  // Gets all books
  getWorkouts: function () {
    return axios.get("/api/workouts");
  },
  // Deletes the book with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a book to the database
  saveWorjout: function (bookData) {
    return axios.post("/api/workouts", bookData);
  },
  // Gets the book with the given id
  getWorkout: function (id) {
    return axios.get("/api/workouts/" + id);
  },
  patchWorkout: function (id, bookData) {
    return axios.patch("/api/workouts/" + id, bookData);
  },
};
