import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PaginationContext from "../PaginationContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardSchema from "./CardSchema";
import CardSchemaMobile from "./CardSchemaMobile";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
  },
  buttonStyle: {
    marginLeft: "30%",
  },
});
// {matches ? 3 : 4}
export default function Responsivity({ ...data }) {
  const classes = useStyles();
  const { setBefore, setAfter } = useContext(PaginationContext);
  const matches = useMediaQuery("(min-width:900px)");
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
      {matches ? (
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
      ) : (
        <>
          <Grid container spacing={4} justify="center">
            {data.items.allVideos.items.map((x) => {
              return (
                <CardSchemaMobile
                  name={x.name}
                  poster={x.poster}
                  Tags={x.Tags}
                  id={x.id}
                  key={x.id}
                />
              );
            })}
          </Grid>
          <Grid className={classes.buttonGrid} justify="center">
            {before && (
              <Grid item xs={4}>
                <Button
                  className={classes.buttonStyle}
                  onClick={handlePrevious}
                >
                  <ArrowBackIosIcon />
                </Button>
              </Grid>
            )}
            {after && (
              <Grid item xs={4}>
                <Button className={classes.buttonStyle} onClick={handleNext}>
                  <ArrowForwardIosIcon />
                </Button>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
}
