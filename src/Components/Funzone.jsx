/* eslint-disable array-callback-return */
import { gql, useQuery } from "@apollo/client";

export default function Funzone() {
  const { loading, error, data } = useQuery(gql`
    query {
      allVideos(limit: 5, tags: "Funzone") {
        items {
          url
          name
          Tags {
            name
          }
        }
      }
    }
  `);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  } else {
    return (
      <>
        {data.allVideos.items.map((x) => {
          <div>
            <p>{x.name}</p>
            <p>{x.url}</p>
          </div>;
        })}
      </>
    );
  }
}
