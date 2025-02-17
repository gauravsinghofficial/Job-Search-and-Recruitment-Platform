const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

// Create a new job (only recruiters)
router.post("/", auth, async (req, res) => {
  if (req.user.role !== "recruiter")
    return res.status(403).json({ message: "Unauthorized" });

  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

module.exports = router;
