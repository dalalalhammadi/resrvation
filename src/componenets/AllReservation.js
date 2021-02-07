import React from "react";
import reservationStore from "../stores/reservationStore";
import { Liststyle } from "../styles";
import { observer } from "mobx-react";
import ReservationItem from "./ReservationItem";

function AllReservation() {
  const totalRes = reservationStore.reservations.map((reservation) => (
    <ReservationItem reservation={reservation} key={reservation.id} />
  ));
  return <Liststyle>{totalRes}</Liststyle>;
}

export default observer(AllReservation);
