import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../../styles/Forum.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getForum } from "../../axios/ForumAxios";
import NoContent from "./NoContent";
import Button from "@mui/material/Button";
import { removeItAll, removeForum } from "../../axios/ForumAxios";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ForumDetails from "./DetailsForum";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ForumContent() {
  const [forum, setForum] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getForum((result) => setForum(result));
  }, []);
  const submitHandler = (id) => {
    removeForum(id);
    navigate("/forum");
  };
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", variant: "outlined" }}
    >
      {forum.length > 0 ? (
        forum.map((forums) => {
          const {
            id,
            idForum,
            nomorInduk,
            nama,
            title,
            komentar,
            profile,
            createdAt,
          } = forums;
          const link = "/forum/" + id;
          return (
            <div className="forum">
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={nama} src={profile} />
                </ListItemAvatar>
                <ListItemText
                  primary={title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {nama} at {createdAt}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Link to={`details/${id}`}>
                <MoreVertIcon/>
                </Link>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })
      ) : (
        <div className="keterangan">
          <NoContent />
        </div>
      )}
    </List>
  );
}
