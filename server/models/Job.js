const mongoose = require('mongoose');

// Define the job schema
const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
    // You can add additional fields as necessary
});

// Create the model from the schema
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
