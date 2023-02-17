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

const Signup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField label="First Name" variant="filled" required />
        <TextField label="Last Name" variant="filled" required />
        <TextField label="Email" variant="filled" type="email" required />
        <TextField label="Password" variant="filled" type="password" required />
        <Button variant="contained">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
