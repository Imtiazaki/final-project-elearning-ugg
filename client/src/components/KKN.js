import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListKKN() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Pendaftaran KKN" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Bimbingan KKN" />
      </ListItem>
    </List>
  );
}
