// import React from 'react';
// import { Card, CardContent, Typography, CardActions, Button, Link } from '@mui/material';

// const JobCard = ({ job }) => {
//   return (
//     <Card sx={{ maxWidth: 345, mb: 4 }}>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {job.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {job.description}
//         </Typography>
//         <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
//           {job.lastUpdated}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">
//           <Link href={job.applyLink} underline="none" target="_blank" rel="noopener">
//             Apply
//           </Link>
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default JobCard;

import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { format } from 'date-fns';  // Make sure to install date-fns if not already installed

const JobCard = ({ job }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.jobTitle} at {job.companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
          Salary: ${job.salary.toLocaleString()}  
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          Posted on: {format(new Date(job.createdDate), 'PPP')}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Placeholder for action, like apply link or more details */}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
