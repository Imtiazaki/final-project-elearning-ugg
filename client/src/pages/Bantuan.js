import React from "react";
import "../styles/Homepage.css";
import "../App.css";
import { Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const itemData = [
  {
    img: "",
    title: "What website is this ?",
    answer: "I was planning to make a website platform for E-Learning with features that help students to attend a class, submitting assignments, and communicating with other students via online. but this website is far from finished. I still need to make improvement and redesign to make this project practical."
  },
  {
    img: "",
    title: "What did you use to make this website ?",
    answer: "I used a vscode to write the program, and for the resources i used Bootstrap, Material UI, react-type-animation, react-fast-marquee, react-live-clock, and many more."
  },
  {
    img: require("../images/assets/bantuan/answer.jpg"),
    title: "Why do you like goth girls so much ?",
    answer: ""
  },
];

function Bantuan() {
  return (
    <div className="homepage mx-auto">
      <Box sx={{ bgcolor: "black", color: "white" }}>
        <Typography align="center" variant="h3" sx={{ mx: 3 }}>
          <div className="banner">FAQ</div>
        </Typography>
      </Box>
      {itemData.map((item) => (
        <div>
          <Box>
          <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{m: 0}}><QuestionMarkIcon sx={{m: 1}}/> {item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.answer}
          </Typography>
          <Box>
            <CardMedia component="img" image={item.img} alt="" />
          </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
          </Box>
        </div>
      ))}
    </div>
  );
}

export default Bantuan;
