import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Link } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
          {job.lastUpdated}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={job.applyLink} underline="none" target="_blank" rel="noopener">
            Apply
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
