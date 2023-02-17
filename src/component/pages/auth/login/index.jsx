import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Login = () => {
  
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField label="Email" variant="filled" type="email" required />
      <TextField label="Password" variant="filled" type="password" required />

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>

      <Button color="secondary" variant="contained" href="/signup">
        Sign up
      </Button>
    </form>
  );
};

export default Login;
