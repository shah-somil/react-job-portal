const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { companyName, jobTitle, description, salary } = req.body;
    const newJob = new Job({ companyName, jobTitle, description, salary });
    newJob.save()
      .then(() => res.status(201).send('Job created successfully'))
      .catch(err => res.status(500).send(err.message));
  }

  
  exports.getAll = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.json(jobs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


