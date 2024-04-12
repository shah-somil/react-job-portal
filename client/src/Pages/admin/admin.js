import React, { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, CircularProgress, Box } from '@mui/material';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  (async function fetchData() {
    try {
      const response = await axios.get('/api/users/getAll');
      setUsers(response.data.users);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  })();

  return (
    <Container>
        <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Employees
        </Typography>
        <img src="https://source.unsplash.com/man-standing-behind-flat-screen-computer-monitor-bzqU01v-G54" alt="Employees" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </Box>
      
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Failed to fetch users: {error}</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
