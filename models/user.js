const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    numberOfPets: {
      type: Number,
      required: true,
    },
    likesMarmite: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)