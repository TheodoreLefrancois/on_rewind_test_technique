import { gql, useQuery } from "@apollo/client";
import PaginationContext from "../PaginationContext";
import { useContext } from "react";
import Responsivity from "./Responsivity";
const Home = () => {
  const { after, before } = useContext(PaginationContext);

  const { loading, data, error } = useQuery(gql`
    query {
      allVideos(limit: 5, before: "${before}", after:"${after}") {
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
};
export default Home;
