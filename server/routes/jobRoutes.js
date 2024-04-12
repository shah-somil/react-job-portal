const express = require('express');
const router = express.Router();
const {createJob, getAll} = require('../controllers/jobsController');

// Models
const Job = require('../models/Job'); // Make sure you have a Job model

// Post a job
router.post('/',createJob);
router.get('/',getAll);

// router.post('/', async (req, res) => {
//     try {
//         const { companyName, jobTitle, description, salary } = req.body;
//         const newJob = new Job({ companyName, jobTitle, description, salary });
//         await newJob.save();
//         res.status(201).send('Job created successfully');
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });

// // Get all jobs
// router.get('/', async (req, res) => {
//     try {
//         const jobs = await Job.find({});
//         res.json(jobs);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

module.exports = router;
