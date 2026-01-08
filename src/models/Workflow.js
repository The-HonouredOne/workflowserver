const mongoose = require("mongoose");

const WorkflowSchema = new mongoose.Schema({
  nodes: {
    type: Array,
    required: true,
  },
  edges: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
