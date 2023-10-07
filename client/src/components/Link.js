import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function LinksList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography onClick={handleClick}>
        Links
        <ExpandMoreIcon sx={{ ml: 0.5 }} />
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
        <Link color="inherit" sx={{textDecoration: 'none'}} href="https://github.com/Imtiazaki">
        <GitHubIcon sx={{ mr: 2 }} /> GitHub
      </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link color="inherit" sx={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <YouTubeIcon sx={{ mr: 2 }} /> Youtube
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link color="inherit" sx={{textDecoration: 'none'}} href="https://instagram.com/imtiazaki?igshid=OGQ5ZDc2ODk2ZA==">
          <InstagramIcon sx={{ mr: 2 }} /> Instagram
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link color="inherit" sx={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <TwitterIcon sx={{ mr: 2 }} /> Twitter
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
