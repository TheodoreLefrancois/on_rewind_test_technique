import onRewindLogo from "../assets/images/onRewindLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PaginationContext from "../PaginationContext";
import { useContext } from "react";

const useStyles = makeStyles({
  container: {
    backgroundColor: "Gainsboro",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  items: {
    color: "DodgerBlue",
    marginRight: "10%",
  },
});
export default function Header() {
  const { setBefore, setAfter, setPageCount } = useContext(PaginationContext);
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    setBefore(null);
    setAfter(null);
    setPageCount(1);
  };
  return (
    <Typography className={classes.container}>
      <Link className={classes.items} onClick={handleClick} href="/">
        <img
          height="110px"
          width="110px"
          src={onRewindLogo}
          alt="OnRewind Logo"
        />
      </Link>
      <Link href="/funzone" onClick={handleClick} className={classes.items}>
        Funzone
      </Link>

      <Link
        href="/testimoniales"
        onClick={handleClick}
        className={classes.items}
      >
        Testimoniales
      </Link>
    </Typography>
  );
}
