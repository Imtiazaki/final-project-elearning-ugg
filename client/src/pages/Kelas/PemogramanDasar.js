import React, { useState, useEffect } from "react";
import { getKelas } from "../../axios/KelasAxios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../helpers/Loading";
import LinkIcon from "@mui/icons-material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ForumIcon from "@mui/icons-material/Forum";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import QuizIcon from "@mui/icons-material/Quiz";
import Quiz from "@mui/icons-material/Quiz";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import KeteranganAbsensi from "../Keterangan";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PemogramanDasar() {
  const [kelas, setKelas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getKelas((result) => setKelas(result));
  }, []);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

/*   const [openModal, setopenModal] = React.useState(false);
  const handleopenModal = () => setopenModal(true);
  const handleCloseModal = () => setopenModal(false); */

  return (
    <div>
      {kelas.length > 0 ? (
        kelas.map((kelases) => {
          const { pertemuan, idMatkul, absensi, quiz, forum, link } = kelases;
          const noPertemuan = `Pertemuan ${pertemuan}`;
          const linkAbsensi = `/absensi/${pertemuan}`;
          return (
            <div className="mb-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ bgcolor: "#696969" }}
                >
                  <Typography sx={{ color: "white" }}>{noPertemuan}</Typography>
                  {/*                   <Typography sx={{color:'white'}}><SettingsIcon/></Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <List component="div" disablePadding>
                    <Link to={linkAbsensi}>
                    <ListItemButton  sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <CoPresentIcon />
                      </ListItemIcon>

                      <ListItemText sx={{ color: "black" }} primary="Absensi" />
                    </ListItemButton>
                    </Link>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ForumIcon />
                      </ListItemIcon>
                      <ListItemText primary="Forum" />
                    </ListItemButton>
                    {Link === true ? (
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Link" />
                      </ListItemButton>
                    ) : (
                      <ListItemButton sx={{ pl: 4 }} disabled>
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Link" />
                      </ListItemButton>
                    )}
                    {Quiz === true ? (
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <QuizIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quiz" />
                      </ListItemButton>
                    ) : (
                      <ListItemButton sx={{ pl: 4 }} disabled>
                        <ListItemIcon>
                          <QuizIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quiz" />
                      </ListItemButton>
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
                      
{/*               <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Absensi {noPertemuan}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <KeteranganAbsensi/>
                  </Typography>
                </Box>
              </Modal> */}
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PemogramanDasar;
