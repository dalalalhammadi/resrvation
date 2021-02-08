import React from "react";
import reservationStore from "../stores/reservationStore";
import timeStore from "../stores/timeStore";
import { Liststyle } from "../styles";
import { observer } from "mobx-react";
import ReservationItem from "./ReservationItem";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  CreateButtonStyled,
  InputStyled,
  DetailWrapper,
  Wrapper,
} from "../styles";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function EditResvation() {
  const AllTimesList = timeStore.times.map((time) => (
    <MenuItem>{time.timeRange}</MenuItem>
  ));

  return (
    <div>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        // open={open}
        // onClose={handleClose}
        // onOpen={handleOpen}
        // value={time}
        name="time"
        // onChange={handleChange}
      >
        {AllTimesList}
      </Select>
    </div>
  );
}

export default observer(EditResvation);
