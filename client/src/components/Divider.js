import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <Typography>Pemograman Dasar - AC</Typography>
        </ListItem>
    </List>
  );
}
