import React from "react";
import { observer } from "mobx-react";
import { Itemstyle } from "../styles";

const ReservationItem = ({ reservation }) => {
  return (
    <div>
      <Itemstyle>{reservation.email}</Itemstyle>

      <Itemstyle>{reservation.day}</Itemstyle>
    </div>
  );
};

export default observer(ReservationItem);
