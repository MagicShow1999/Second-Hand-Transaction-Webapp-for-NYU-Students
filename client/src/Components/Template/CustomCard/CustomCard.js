// Custom card that renders each listing item on Home view
import React from "react";
import Theme from "../../../Theme/theme";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Typography from "@material-ui/core/Typography";
import ImagePlaceholder from "../../../Assets/img/img-placeholder.png";
import { CallReceived } from "@material-ui/icons";
import Grow from "@material-ui/core/Grow";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
    position: "relative",
    boxShadow: "0 0 5px #888",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  media: {
    height: "180px",
    width: "100%",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  cardarea: {
    maxHeight: 1000,
  },
  row: {
    width: "100%",
    position: "absolute",
    bottom: 5,
    display: "flex",
    flexDirection: "row",
    height: "10vh",
    alignItems: "center",
  },
  fixed: {
    position: "absolute",
    bottom: 24,
    right: 25,
    fontSize: 22,
    color: Theme.colors.pinky,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 200,
    fontSize: 22,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: "2vh",
  },
});

export default function CustomCard(props) {
  const classes = useStyles();
  // const [checked, setChecked] = useState();

  return (
    <Grow in={true} timeout={props.timeout}>
      <Card className={classes.root}>
        <Link to={"/listing/" + props._id} className={classes.link}>
          <CardActionArea className={classes.cardarea}>
            <CardMedia
              className={classes.media}
              image={props.image_url ? props.image_url : ImagePlaceholder}
            />
            <CardContent>
              <Typography gutterBottom className={classes.title}>
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                by {props.user_id}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <div className={classes.row}>
            {props.category_id ? <LocalOfferIcon /> : null}
            <p className={classes.categoryText}>{props.category_id}</p>
          </div>
          <Typography className={classes.fixed}>${props.price}</Typography>
        </CardActions>
      </Card>
    </Grow>
  );
}
