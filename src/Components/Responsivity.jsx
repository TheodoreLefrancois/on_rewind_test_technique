import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import PaginationContext from "../PaginationContext";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import CardSchema from "./CardSchema";
// import CardSchemaMobile from "./CardSchemaMobile";

// {matches ? 3 : 4}
export default function Responsivity({ ...data }) {
  const { setBefore, setAfter } = useContext(PaginationContext);
  // const matches = useMediaQuery("(min-width:900px)");
  const { after, before } = data.items.allVideos.cursor;
  const handleNext = (e) => {
    e.preventDefault();
    setBefore("");
    setAfter(data.items.allVideos.cursor.after);
    console.log(after);
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setAfter("");
    setBefore(data.items.allVideos.cursor.before);
    console.log(before);
  };
  return (
    <>
      <Grid container spacing={3} justify="center">
        {data.items.allVideos.items.map((x) => {
          return (
            <CardSchema
              name={x.name}
              poster={x.poster}
              Tags={x.Tags}
              id={x.id}
              key={x.id}
            />
          );
        })}
      </Grid>
      {before && (
        <Grid item xs={2}>
          <Button onClick={handlePrevious}>Previous</Button>
        </Grid>
      )}
      {after && (
        <Grid item xs={2}>
          <Button onClick={handleNext}>Next</Button>
        </Grid>
      )}
    </>
  );
}
