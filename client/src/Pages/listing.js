import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Box, CircularProgress, Button } from '@mui/material';
import JobCard from '../Components/JobCard';

const Listings = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(10); 

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobs(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch jobs:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Get current jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Job Listings
                </Typography>
                <img src="https://source.unsplash.com/shallow-focus-photography-of-red-and-white-for-hire-signage-fY8Jr4iuPQM" alt="Job Listings Hero" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            </Box>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography variant="body1" color="error">Error: {error}</Typography>
            ) : (
                <>
                    <Grid container spacing={4}>
                        {currentJobs.map((job) => (
                            <Grid item key={job._id} xs={12} sm={6} md={4}>
                                <JobCard job={job} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, i) => (
                            <Button key={i + 1} onClick={() => paginate(i + 1)} sx={{ margin: 1 }}>
                                {i + 1}
                            </Button>
                        ))}
                    </Box>
                </>
            )}
        </Container>
    );
};

export default Listings;
