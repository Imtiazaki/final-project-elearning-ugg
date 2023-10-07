import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/Homepage.css";
import "../App.css";
import { Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

function Homepage() {
  return (
    <div className="homepage mx-auto">
      <Box>
      <Typography
      align="center">
      <TypeAnimation
        sequence={[
          "Welcome to", // Types 'One'
          1500, // Waits 1s
          "Selamat Datang di", // Deletes 'One' and types 'Two'
          1500, // Waits 2s
          "Velkommen", // Types 'Three' without deleting 'Two'
          1500, // Waits 2s
          "هلا بك", // Types 'Three' without deleting 'Two'
          1500, // Waits 2s
          "स्वागत हे", 
          1500,
          "ברוך הבא",
          1500,// Types 'Three' without deleting 'Two'
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
          textAlign: "center",
        }}
      />
      </Typography>
      </Box>
      <Box>
      <Typography
      align="center"
      variant="h3">
        <div className="banner">
          University Of Goth Girls
        </div>
      </Typography>
      </Box>
      <Box>
      <CardMedia
        component="img"
        height="720"
        image={require("../images/logo.png")}
        alt="Ujian Semester"
      />
      </Box>
      <Box>
      <Typography
      align="center"
      variant="h5"
      sx={{m: 3}}>
        <div className="banner">
        "Everyone deserves a chance to fly, because there's a little witch in all of us."
        </div>
      </Typography>
      </Box>
    </div>
  );
}

export default Homepage;
