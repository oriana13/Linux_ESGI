const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let task = new Schema(
  {
    contenu: {
      type: String
    }
  },
  { collection: "tasks" }
);

module.exports = mongoose.model("tasks", task);