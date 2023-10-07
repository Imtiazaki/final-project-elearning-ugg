import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { getDasar } from "../axios/PemogramanAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Participant() {
  const [dasar, setDasar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getDasar((result) => setDasar(result));
  }, []);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <Typography>Participant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={0}>
            <Link className="nav-link" to="/kelas/details">
            <Button fullWidth variant="outlined" sx={{ color: "black" }}>
              Details
            </Button>
            </Link>
          </Stack>
          {dasar.map((parti) => {
            const {
              nomorInduk,
              nama,
              role,
              nilaiUjian,
              nilaiTugas,
              nilaiUjianAkhir,
              grade,
            } = parti;
            return (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={nama} src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={nama}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {nomorInduk}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Divider variant="inset" component="li" />
    </List>
  );
}
