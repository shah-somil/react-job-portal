import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
    // Clear errors
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!contactForm.name) {
      tempErrors.name = "Name is required";
    }
    if (!contactForm.email) {
      tempErrors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!contactForm.message) {
      tempErrors.message = "Message is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(contactForm); // Process form submission here
      alert('Form is valid and can be submitted!');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <img src="https://source.unsplash.com/colorful-bright-image-of-female-hand-holding-old-fashioned-green-colored-phone-picking-up-handset-isolated-over-orange-background-concept-of-pop-art-vintage-things-mix-old-and-modernity-2Oj9tGznf5k" alt="Contact Us" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      <Typography paragraph sx={{ mt: 2 }}>
        If you have any questions, please feel free to drop us a line. If you don't get an answer immediately, we might just be travelling through the middle of nowhere. We'll get back to you as soon as we can. That's a promise!
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                value={contactForm.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                name="message"
                multiline
                rows={4}
                value={contactForm.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
