const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouts",
  {
    useMongoClient: true
  }
);

const workoutSeed = [
  {
    _id: ObjectId("5b57bb0b12fdbcf41b5862ee"),
    routine: "3x15",
    workoutType: "legs",
    subWorkout: [
      "squats",
      "lunges",
      "leg press",
      "leg curls",
      "leg extentions",
      "calf raise"
    ]
  },
  {
    _id: ObjectId("5b57bb7d12fdbcf41b5862ef"),
    routine: "3x12",
    workoutType: "chest",
    subWorkout: [
      "bench press",
      "incline bench press",
      "decline bench press",
      "machine flyes",
      "weighted dips",
      "push ups"
    ]
  },
  {
    _id: ObjectId("5b57bcf4a3281c4452923921"),
    routine: "3x12",
    workoutType: "back",
    subWorkout: [
      "bent over rows",
      "cable rows",
      "deadlift",
      "shrugs",
      "cable pulldown",
      "pullup"
    ]
  },
  {
    _id: ObjectId("5b57bdf5a3281c4452923922"),
    routine: "3x10",
    workoutType: "shoulder",
    subWorkout: [
      "shoulder press",
      "side lateral raise",
      "front dumbbell raise",
      "reverse flyes",
      "arnold dumbbell raise",
      "military press"
    ]
  },
  {
    _id: ObjectId("5b57bee9a3281c4452923923"),
    routine: "3x12",
    workoutType: "core",
    subWorkout: [
      "crunches",
      "cables crunch",
      "russian twist",
      "reverse crunch",
      "lying leg raise",
      "oblique crunch"
    ]
  },
  {
    _id: ObjectId("5b57c141a3281c4452923924"),
    routine: "3x10",
    workoutType: "arms",
    subWorkout: [
      "overhead tricep extensions",
      "tricep pushdown",
      "close-grip bench press",
      "barbell curl",
      "dumbbell bicep curl",
      "bicep cable curl"
    ]
  },
  {
    _id: ObjectId("5b57c1b2a3281c4452923925"),
    routine: "30-60 mins",
    workoutType: "cardio",
    subWorkout: [
      "jogging",
      "sprinting",
      "jump ropes",
      "walking",
      "swimming",
      "cycling"
    ]
  },
  {
    _id: ObjectId("5b4fc5e49ea65a541f1409d5"),
    routine: "3x20",
    calisthenics: [
      "push ups",
      "pull ups",
      "dips",
      "jumping jack",
      "burpees",
      "mountain climbers"
    ]
  }
];
db.Workouts
  .remove({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });