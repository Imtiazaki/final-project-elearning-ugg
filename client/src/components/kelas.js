import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListKKP from "./KKP";
import ListKKN from "./KKN";
import { Link } from "react-router-dom";
import { getMatkul } from "../axios/MatkulAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Kelas() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [matkul, setMatkul] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getMatkul((result) => setMatkul(result));
  }, []);
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        variant="outlined"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0, color: "white" }}>
            Kelas
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          { matkul.map((mat) => {
            const { idMatkul, namaMatkul, nomorInduk, nama, kelompok, hari, waktu_mulai, waktu_selesai } = mat
            const link = `/${namaMatkul}/${kelompok}`
            return (
              <Link
              to={link}
              style={{ color: "black", textDecoration: "none" }}
            >
              <Typography>
                <List sx={style} component="nav" aria-label="mailbox folders">
                  <ListItem button>
                    <Typography>{namaMatkul} - {kelompok}</Typography>
                  </ListItem>
                </List>
              </Typography>
            </Link>
            )
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        variant="outlined"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0, color: "white" }}>
            KKP
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListKKP />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        variant="outlined"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0, color: "white" }}>
            KKN
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListKKN />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        variant="outlined"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{ backgroundColor: "black" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0, color: "white" }}>
            Tugas Akhir
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Maaf, anda belum bisa mendaftar tugas akhir.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
