import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import PaginationContext from "../PaginationContext";
import Responsivity from "./Responsivity";
export default function Testimoniales() {
  const { after, before } = useContext(PaginationContext);
  const { loading, data, error } = useQuery(gql`
    query {
      allVideos(limit: 5, tags:"Testimoniales", before: "${before}", after:"${after}") {
        items {
          id
          poster
          name
          Tags {
            name
          }
        }
        cursor {
          before
          after
        }
      }
    }
  `);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <Responsivity items={{ ...data }} />
      ) : (
        <p>Error :( {error.message}</p>
      )}
    </>
  );
}
