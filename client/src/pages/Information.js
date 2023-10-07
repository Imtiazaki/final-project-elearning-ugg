import React from "react";
import "../styles/Homepage.css";
import "../App.css";
import { Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const itemData = [
  {
    img: require("../images/assets/informasi/attend.jpg"),
    title: 'Show up to Class on Time',
  },
  {
    img: require("../images/assets/informasi/feast.jpg"),
    title: 'No Feasting in Class, Save it For Later !',
  },
    {
    img: require("../images/assets/informasi/litter.jpg"),
    title: 'No Littering !, Keep the Campus Area Clean at Anytime!',
  },
  {
    img: require("../images/assets/informasi/pets.jpg"),
    title: 'No Pets Allowed in Class, Bring Them Outside !',
  },
]

function Information() {
  return (
    <div className="homepage mx-auto">
              <Box 
              sx={{bgcolor: 'black', color:'white'}}>
      <Typography
      align="center"
      variant="h3"
      sx={{mx:3}}>
        <div className="banner">
          College Rules
        </div>
      </Typography>
      </Box> 
      {itemData.map((item) => (
        <div>
        <Box>
      <Typography
      align="center"
      variant="h4"
      sx={{m:3}}>
        <div className="banner">
          {item.title}
        </div>
      </Typography>
      </Box>
      <Box>
      <CardMedia
        component="img"
        image={item.img}
        alt=""
      />
      </Box>
      </div>
      ))}
    </div>
  );
}

export default Information;
