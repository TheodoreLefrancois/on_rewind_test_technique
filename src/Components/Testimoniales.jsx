import { gql, useQuery } from "@apollo/client";
import CardSchema from "./CardSchema";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Testimoniales() {
  const matches = useMediaQuery("(min-width:900px)");
  const { loading, error, data } = useQuery(gql`
    query {
      allVideos(limit: 5, tags: "Testimoniales") {
        items {
          id
          poster
          name
          Tags {
            name
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={matches ? 3 : 4} justify="center">
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        // mobile
        data.allVideos.items.map((x) => {
          return (
            <CardSchema
              name={x.name}
              poster={x.poster}
              Tags={x.Tags}
              id={x.id}
              key={x.id}
            />
          );
        })
      ) : (
        <p>Error :( {error.stringify}</p>
      )}
    </Grid>
  );
}
