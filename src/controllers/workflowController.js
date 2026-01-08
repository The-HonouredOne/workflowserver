const Workflow = require("../models/Workflow");

const createWorkflow = async (req, res) => {
  try {
    const workflow = await Workflow.create(req.body);
    res.status(201).json(workflow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWorkflows = async (req, res) => {
  try {
    const workflows = await Workflow.find().sort({ createdAt: -1 });
    res.json(workflows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkflowById = async (req, res) => {
  try {
    const workflow = await Workflow.findById(req.params.id);

    if (!workflow) {
      return res.status(404).json({ error: "Workflow not found" });
    }

    res.json(workflow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWorkflow = async (req, res) => {
  try {
    const workflow = await Workflow.findByIdAndDelete(req.params.id);
    if (!workflow) {
      return res.status(404).json({ error: "Workflow not found" });
    }
    res.json({ message: "Workflow deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWorkflow = async (req, res) => {
  try {
    const workflow = await Workflow.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!workflow) {
      return res.status(404).json({ error: "Workflow not found" });
    }
    res.json(workflow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkflow,
  getWorkflows,
  getWorkflowById,
  updateWorkflow,
  deleteWorkflow
};
