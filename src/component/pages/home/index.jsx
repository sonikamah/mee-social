import React from "react";
import {Button} from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <h3>Home Page</h3>
      <Button color="secondary" variant="contained" href="/about">About Us</Button>
      <Button color="secondary" variant="contained" href="/contact">Contact Us</Button>
      <Button color="secondary" variant="contained" href="/profile">Profile</Button>
      <Button color="secondary" variant="contained" href="/login">Login</Button>
    </div>
  );
};

export default Home;
