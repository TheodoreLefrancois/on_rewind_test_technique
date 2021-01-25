import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import imageDefault from "../assets/images/imageDefault.jpeg";

const useStyles = makeStyles({
  media: {
    height: 300,
  },
  littleMediaRoot: {
    maxWidth: 750,
  },
  tagsRow: {
    display: "flex",
    color: "blue",
  },
  tagsItem: {
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  name: {
    diplay: "flex",
    jusfifyContent: "center",
  },
});
export default function CardSchemaMobile({ poster, name, Tags, id }) {
  const classes = useStyles();
  const goodId = id;
  return (
    <Grid key={name} item xs={11}>
      <Card className={classes.littleMediaRoot}>
        <CardActionArea>
          <Link to={`/video/${goodId}`}>
            <CardMedia
              className={classes.media}
              width="100%"
              height="100%"
              image={poster ? poster : imageDefault}
              title={name}
            />
          </Link>
          <CardContent>
            <Typography className={classes.name}>{name}</Typography>
            {Tags && (
              <List className={classes.tagsRow}>
                {Tags.map((y) => (
                  <ListItemText key={y.name} className={classes.tagsItem}>
                    # {y.name.toUpperCase()}
                  </ListItemText>
                ))}
              </List>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
