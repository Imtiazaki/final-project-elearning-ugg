import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Clock from 'react-live-clock';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{backgroundColor: 'black'}}>
      <Typography sx={{ fontSize: 14, color: 'white' }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography sx={{color: 'white'}}variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 , color: 'white'}} color="text.secondary">
        adjective
      </Typography>
      <Typography sx={{color: 'white'}}variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Typography sx={{ mt: 3, color: 'white'}} color="text.secondary">
        Current Time
      </Typography>
      <Typography variant="h5" component="div" sx={{color: 'white'}}>
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
