/* eslint-disable array-callback-return */
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function Home() {
  const { loading, error, data } = useQuery(gql`
    query {
      allVideos(limit: 5) {
        items {
          name
          url
        }
      }
    }
  `);
  useEffect(() => {}, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }
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
