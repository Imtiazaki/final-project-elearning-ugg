import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const itemData = [
  {
    img: require("../images/assets/sidecard/exam.jpg"),
    title: 'Final Exams',
    date: "September 22, 2023",
    caption: "Fall 2023 Final Exams will take place Thursday, December 14, 2023 through Thursday, December 21, 2023, excluding weekends.",
    description: "The schedule and locations for in-person, synchronous final exams will be available on October 6, 2023 and can be found in PATH on the section details panel. The published schedule will be subject to change and the campus community is strongly encouraged to check their exam information in Path periodically. Once published, the day and time of exams should be fairly stable, however, room assignments may change",
  },
  {
    img: require("../images/assets/sidecard/festival.jpg"),
    title: 'Festical Music Live',
    date: "July 12, 2024",
    caption: "Europe's biggest celebration of goth music returns with the world's biggest artists",
    description: "FML is an annual rap and hip-hop music festival that takes place in London, England. It is owned and managed by Live Nation. While it started as primarily a rock and pop festival, since the early 2010s, it has focused on hip-hop and other genres of music",
  },
    {
    img: require("../images/assets/sidecard/graduation.jpg"),
    title: 'Class of 23 Graduation',
    date: "October 31, 2023",
    caption: "Ceremonies for graduating students date from the first goth universities in Europe in the twenty-first century.",
    description: "In a graduation ceremony at the college and university level, the presiding officer or another authorized person formally confers degrees upon candidates, either individually or en masse, even though graduates may physically receive their diploma later at a smaller college or departmental ceremony, or simply receive their diploma through the mail.",
  },
]

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
  const number = Math.floor(Math.random() * 3)

export default function SideCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 360 }} variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={itemData[number].title}
        subheader={`UGG Admins - ${itemData[number].date}`}
      />
      <CardMedia
        component="img"
        height="300"
        image={itemData[number].img}
        alt="Ujian Semester"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {itemData[number].caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description :</Typography>
          <Typography paragraph textAlign="justify">
            {itemData[number].description}
          </Typography>
{/*           <Typography paragraph>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </Typography>
          <Typography paragraph>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?"
          </Typography>
          <Typography>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
