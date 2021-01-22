import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { List, ListItemText, makeStyles } from "@material-ui/core";
import imageDefault from "../assets/images/imageDefault.jpeg";

const useStyles = makeStyles({
  cardDetail: {
    alignItems: "center",
    width: "80%",
    height: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  tagsRow: {
    display: "flex",
    color: "aqua",
    fontStyle: "bold",
    fontWeight: 300,
  },
  tagsItem: {
    fontFamily: "Georgia",
    fontWeight: 300,
  },
});
export default function DetailPage() {
  const classes = useStyles();
  const { goodId } = useParams();
  console.log(goodId);
  const { loading, error, data } = useQuery(gql`
  query {
    video(id: "${goodId}") {
      name
      poster
      Tags{
          name
      }
    }
  }
  `);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <GridListTile
          className={classes.cardDetail}
          key={data.video.poster ? data.video.poster : imageDefault}
        >
          <img
            width="100%"
            src={data.video.poster ? data.video.poster : imageDefault}
            alt={data.video.name}
          />
          <GridListTileBar
            title={data.video.name}
            subtitle={
              <List className={classes.tagsRow}>
                {data.video.Tags.map((y) => (
                  <ListItemText className={classes.tagsItem}>
                    # {y.name.toUpperCase()}
                  </ListItemText>
                ))}
              </List>
            }
          />
        </GridListTile>
      ) : (
        <p>Error :( {error.stringify}</p>
      )}
    </>
  );
}
