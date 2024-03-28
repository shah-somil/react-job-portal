import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#000', p: 2 ,textAlign: 'center' , marginTop: 20}} component="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" color="#ccc">
          © 2024 Job Portal
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
