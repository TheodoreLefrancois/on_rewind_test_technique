import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function DetailPage() {
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
        <>
          <img width="100%" src={data.video.poster} alt={data.video.name} />
          <p>{data.video.name}</p>
          <div>
            {data.video.Tags && data.video.Tags.map((y) => <p>{y.name}</p>)}
          </div>
        </>
      ) : (
        <p>Error :( {error.stringify}</p>
      )}
    </>
  );
}
