import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  medium: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop:"-50px",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    border: "5px solid white",

  },
  large: {
    position: "relative",
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: `30px`,
    border: "5px solid white",
  },
  behind: {
    position: `absolute`,
    width: theme.spacing(20),
    height: theme.spacing(20),
    filter: `blur(20px)`,
    zIndex: `-1`,
    transform: "translate(24px, 10px)",
    opacity: "0.7",
  },
}));

export default useStyles;
