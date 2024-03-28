import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid } from '@mui/material';

const HomePage = () => {
  const heroImageUrl = 'https://source.unsplash.com/random';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${heroImageUrl})`,
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Our Job Portal
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Discover your dream job with us and build your career today!
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" size="large">
              Find Jobs
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Feature One
            </Typography>
            <Typography variant="body1" align="center">
              Quickly find all the resources you need to get started and make your next career move.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Feature Two
            </Typography>
            <Typography variant="body1" align="center">
              Connect with top employers and get noticed by companies that value your skills.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Feature Three
            </Typography>
            <Typography variant="body1" align="center">
              Utilize our resources to polish your resume, ace your interviews, and land your perfect job.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Ready to take the next step?
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="outlined" size="large">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
