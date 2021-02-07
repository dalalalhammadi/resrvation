import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function Storepage() {
  return (
    <div>
      <Button>add new kid</Button>
      <Link to={`/allreservation`}>
        <Button>reservation history</Button>
      </Link>
      <Button> edit reserrvation </Button>
    </div>
  );
}

export default Storepage;
