import React from "react";
import REservationItem from "./ReservationItem";
import { observer } from "mobx-react";

const ReservationList = () => {
  const reservationList = filteredREservation.map((reservation) => (
    <REservationItem reservation={reservation} key={reservation.id} />
  ));
  return <div>{reservationList}</div>;
};

export default observer(ReservationList);
