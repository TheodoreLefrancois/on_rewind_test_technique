import onRewindLogo from "../assets/images/onRewindLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

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
  const classes = useStyles();

  return (
    <Typography className={classes.container}>
      <Link className={classes.items} href="/">
        <img
          height="110px"
          width="110px"
          src={onRewindLogo}
          alt="OnRewind Logo"
        />
      </Link>
      <Link href="/funzone" className={classes.items}>
        Funzone
      </Link>

      <Link href="/testimoniales" className={classes.items}>
        Testimoniales
      </Link>
    </Typography>
  );
}
