import { makeStyles } from "@mui/styles";
import { blue, blueGrey } from "@mui/material/colors";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  },
  logo: {
    color: "white"
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px"
  },
  // Side Nav
  drawerPaper: {
    width: "250px",
    marginTop: "65px"
  },
  // Wrapper
  wrapper: {
    padding: theme.spacing(2, 2, 0, 32),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2)
    }
  },

  navlinks: {
    color: blueGrey["A400"],
    " &: hover,&: hover div": {
      color: blue["A200"]
    },
    " & div ": {
      color: blueGrey["A400"]
    }
  },
  activeNavlinks: {
    color: blue["A700"],
    " & div ": {
      color: blue["A700"]
    }
  }
}));
