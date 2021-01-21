import { gql, useQuery } from "@apollo/client";
import Card from "./Card";
export default function Testimoniales() {
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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        data.allVideos.items.map((x) => {
          return (
            <Card
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
    </>
  );
}
