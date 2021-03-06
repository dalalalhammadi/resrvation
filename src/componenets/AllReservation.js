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

function AllReservation() {
  const totalRes = reservationStore.reservations.map((reservation) => (
    <ReservationItem reservation={reservation} key={reservation.id} />
  ));

  return (
    <div>
      <Liststyle>{totalRes}</Liststyle>
    </div>
  );
}

export default observer(AllReservation);
