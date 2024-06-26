const mongoose = require("mongoose");
const { generateObjectId } = require("../utils");

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1000,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topicIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Topic",
    },
    spaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Space",
    },
    upVotes: {
      type: Number,
      default: 0,
      min: 0,
    },
    downVotes: {
      type: Number,
      default: 0,
      min: 0,
    },
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
