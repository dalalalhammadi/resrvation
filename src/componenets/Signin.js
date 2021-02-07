import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Storepage from "./Storepage";

function Signin() {
  return (
    <div>
      <Link to={`/Storepage`}>
        <Button on> signin </Button>
      </Link>
    </div>
  );
}

export default Signin;
