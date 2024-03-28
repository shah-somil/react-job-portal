import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <img src="https://source.unsplash.com/man-standing-behind-flat-screen-computer-monitor-bzqU01v-G54" alt="About Us" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              Our mission is to empower employment. We strive to organize all the world's human capital data and make it meaningful for society.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1">
              We envision a world where every job seeker finds their dream job and employers find the perfect candidates effortlessly.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
