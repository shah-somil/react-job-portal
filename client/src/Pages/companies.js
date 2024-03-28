import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import axios from 'axios';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/users/getImages');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Showcase
        </Typography>
        <img src="https://source.unsplash.com/two-people-shaking-hands-n95VMLxqM2I" alt="Job Listings Us" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      <Grid container spacing={4}>
        {companies.map((company, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={company.imageUrl}
                alt={company.name}
                style={{objectFit: 'contain'}}
              />
              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {company.name}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;
