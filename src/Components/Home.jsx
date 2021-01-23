import { gql, useQuery } from "@apollo/client";
import PaginationContext from "../PaginationContext";
import { useContext } from "react";
import Responsivity from "./Responsivity";
const Home = () => {
  const { after, setAfter, before, setBefore } = useContext(PaginationContext);

  const { data, error, loading } = useQuery(gql`
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
  const handleNext = (e) => {
    e.preventDefault();
    setBefore(null);
    setAfter(data.allVideo.cursor.after);
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setAfter(null);
    setBefore(data.allVideo.cursor.before);
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <Responsivity
          items={[...data.allVideos.items]}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ) : (
        <p>Error :( {error.message}</p>
      )}
    </>
  );
};
export default Home;
