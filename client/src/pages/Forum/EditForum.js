import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddForum from "./AddForum";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import FormEdit from "./FormEditForum";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 500,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditForum() {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const handleClose = () =>     navigation("/forum");;
 
  return (
    <div>
      <Modal
        open={!open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Forum
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormEdit/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default EditForum;
