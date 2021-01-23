import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useContext } from "react";
import PaginationContext from "../PaginationContext";
import CardSchema from "./CardSchema";
// import CardSchemaMobile from "./CardSchemaMobile";

// {matches ? 3 : 4}
export default function Responsivity(items, handleNext, handlePrevious) {
  // const matches = useMediaQuery("(min-width:900px)");
  const { after, before } = useContext(PaginationContext);
  console.log(items);
  return (
    <Grid container spacing={3} justify="center">
      {items.map((x, i) => {
        return (
          <>
            {i === 2 ? (
              <>
                <CardSchema
                  name={x.name}
                  poster={x.poster}
                  Tags={x.Tags}
                  id={x.id}
                  key={x.id}
                />
                {before && (
                  <Button xs={2} onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
              </>
            ) : i === 4 ? (
              <CardSchema
                name={x.name}
                poster={x.poster}
                Tags={x.Tags}
                id={x.id}
                key={x.id}
              />
            ) : (
              <>
                <CardSchema
                  name={x.name}
                  poster={x.poster}
                  Tags={x.Tags}
                  id={x.id}
                  key={x.id}
                />
                {after && (
                  <Button xs={2} onClick={handleNext}>
                    Previous
                  </Button>
                )}
              </>
            )}
          </>
        );
      })}
    </Grid>
  );
}
