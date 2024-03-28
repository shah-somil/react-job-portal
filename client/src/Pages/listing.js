import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import JobCard from '../Components/JobCard';
import { jobPosts } from '../data/JobPosts';

const Listings = () => {
    const heroImageUrl = "";

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Job Listings
        </Typography>
        <img src="https://source.unsplash.com/shallow-focus-photography-of-red-and-white-for-hire-signage-fY8Jr4iuPQM" alt="Job Listings Us" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      <Grid container spacing={4}>
        {jobPosts.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Listings;
