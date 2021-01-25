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
  buttonGridMobile: {
    display: "flex",
    justifyContent: "center",
  },
  buttonGrid: {
    display: "flex",
    flexDirection: "row",
  },
  buttonDesktop: {
    marginLeft: "40%",
    marginTop: "50%",
    marginBottom: "50%",
    marginRight: "50",
  },
  buttonStyle: {
    marginLeft: "30%",
  },
});
export default function Responsivity({ ...data }) {
  const classes = useStyles();
  const { setBefore, setAfter } = useContext(PaginationContext);
  const matches = useMediaQuery("(min-width:900px)");
  const { after, before } = data.items.allVideos.cursor;
  const handleNext = (e) => {
    e.preventDefault();
    setBefore("");
    setAfter(data.items.allVideos.cursor.after);
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setAfter("");
    setBefore(data.items.allVideos.cursor.before);
  };
  return (
    <>
      {matches ? (
        <Grid container justify="center" spacing={3}>
          {data.items.allVideos.items.length >= 3 ? (
            <>
              {data.items.allVideos.items.map((x, index) => {
                return (
                  <>
                    {index === 2 ? (
                      <>
                        <CardSchema
                          key={x.name}
                          name={x.name}
                          poster={x.poster}
                          Tags={x.Tags}
                          id={x.id}
                        />
                        {before && (
                          <Grid item xs={2}>
                            <Button
                              className={classes.buttonDesktop}
                              onClick={handlePrevious}
                            >
                              <ArrowBackIosIcon
                                color="primary"
                                style={{ fontSize: 80 }}
                              />
                            </Button>
                          </Grid>
                        )}
                      </>
                    ) : index === 4 ? (
                      <>
                        <CardSchema
                          key={x.name}
                          name={x.name}
                          poster={x.poster}
                          Tags={x.Tags}
                          id={x.id}
                        />
                        {after && (
                          <Grid item xs={2}>
                            <Button
                              className={classes.buttonDesktop}
                              onClick={handleNext}
                            >
                              <ArrowForwardIosIcon
                                color="primary"
                                style={{ fontSize: 80 }}
                              />
                            </Button>
                          </Grid>
                        )}
                      </>
                    ) : (
                      <CardSchema
                        key={x.name}
                        name={x.name}
                        poster={x.poster}
                        Tags={x.Tags}
                        id={x.id}
                      />
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <>
              {data.items.allVideos.items.map((x) => {
                return (
                  <CardSchema
                    key={x.name}
                    name={x.name}
                    poster={x.poster}
                    Tags={x.Tags}
                    id={x.id}
                  />
                );
              })}
              <Grid item xs={2}>
                <Button
                  className={classes.buttonDesktop}
                  onClick={handlePrevious}
                >
                  <ArrowBackIosIcon color="primary" style={{ fontSize: 80 }} />
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      ) : (
        <>
          <Grid container spacing={4} justify="center">
            {data.items.allVideos.items.map((x) => {
              return (
                <CardSchemaMobile
                  key={x.name}
                  name={x.name}
                  poster={x.poster}
                  Tags={x.Tags}
                  id={x.id}
                />
              );
            })}
          </Grid>
          <Grid container className={classes.buttonGridMobile} justify="center">
            {before && (
              <Grid item xs={4}>
                <Button
                  key="previous"
                  className={classes.buttonStyle}
                  onClick={handlePrevious}
                >
                  <ArrowBackIosIcon color="primary" />
                </Button>
              </Grid>
            )}
            {after && (
              <Grid item xs={4}>
                <Button
                  key="next"
                  className={classes.buttonStyle}
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon color="primary" />
                </Button>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
}
