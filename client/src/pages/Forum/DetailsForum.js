import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editForum, forumDetails, removeForum } from "../../axios/ForumAxios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import TextField from "@mui/material/TextField";

export default function ForumDetails() {
  const [form, setForm] = useState({
    idForum: 666,
    nomorInduk: 1001,
    nama: "Anonymous",
    title: "",
    komentar: "",
    profile: "",
    createdAt: "",
  });

  const navigation = useNavigate();
  const params = useParams();
  const { id } = params;

  const getForumDetails = () => {
    
    forumDetails(+id, (result) => {
      setForm({
        idForum: result.idForum,
        nomorInduk: result.nomorInduk,
        nama: result.nama,
        title: result.title,
        komentar: result.komentar,
        profile: result.profile,
        createdAt: result.createdAt.toString(),
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getForumDetails();
  }, []);

  const submitHandler = () => {
    editForum(+params.id, form);
    navigation("/forum");
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteHandler = () => {
    removeForum(id)
    navigation(`/forum`);
  }
  const editHandler = () => {
    navigation(`/forum/edit/${id}`);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={form.nama} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={form.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {form.nama} a
                </Typography>
                t {form.createdAt}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom sx={{ ml: 9 }}>
        {form.komentar}
      </Typography>
      <Stack direction="row" justifyContent="end">
      <Button variant="outlined" sx={{my: 3, ml: 1}} onClick={editHandler}color="secondary">Edit</Button>
      <Button variant="outlined" sx={{my: 3, ml: 1}} onClick={deleteHandler} color="error">Delete</Button>
        <Button variant="outlined" sx={{my: 3, ml: 1}} onClick={handleClick}>Reply</Button>
      </Stack>
      <ListItemButton >
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <div>
          <Box sx={{width: '95%', ml: 1}}>
        <TextField
          onChange={(e) => setForm({ ...form, komentar: e.target.value })}
          fullWidth
          sx={{ m: 1 }}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          defaultValue="Reply Feature is Still in Development"
          width="100%"
        />
              <Stack direction="row" justifyContent="end">
        <Button variant="outlined" sx={{my: 1, ml: 2}} onClick={handleClick}>Post</Button>
      </Stack>
        </Box>
      </div>
        </List>
      </Collapse>
    </Box>
  );
}
