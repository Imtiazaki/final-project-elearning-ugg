import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "white",
};

export default function ListKKP() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText sx={{ color: "black" }} primary="Pendaftaran KKP" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText sx={{ color: "black" }} primary="Bimbingan KKP" />
      </ListItem>
      <ListItem button>
        <ListItemText sx={{ color: "black" }} primary="Sidang KKP" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText sx={{ color: "black" }} primary="Unggah File KKP" />
      </ListItem>
    </List>
  );
}
