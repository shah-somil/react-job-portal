import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, CircularProgress, Box } from '@mui/material';

function AddJob() {
    const [formData, setFormData] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/jobs', formData);
            setMessage('Job created successfully');
            setFormData({
                companyName: '',
                jobTitle: '',
                description: '',
                salary: ''
            });
        } catch (error) {
            setMessage('Failed to create job: ' + error.message);
        }
        setLoading(false);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Job
        </Typography>
        <img src="https://source.unsplash.com/man-standing-behind-flat-screen-computer-monitor-bzqU01v-G54" alt="Employees" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Job Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Salary"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {loading ? <CircularProgress size={24} /> : 'Add Job'}
                </Button>
            </form>
            {message && <Typography color="textSecondary" style={{ marginTop: 20 }}>{message}</Typography>}
            </Container>
        </Container>
    );
}

export default AddJob;
