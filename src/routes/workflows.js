const express = require("express");
const {
  createWorkflow,
  getWorkflows,
  getWorkflowById,
  updateWorkflow,
  deleteWorkflow
} = require("../controllers/workflowController");

const router = express.Router();

router.post("/workflows", createWorkflow);
router.get("/workflows", getWorkflows);
router.get("/workflows/:id", getWorkflowById);
router.put("/workflows/:id", updateWorkflow);
router.delete("/workflows/:id", deleteWorkflow);

module.exports = router;