import { makeObservable, observable, action } from "mobx";

import instance from "./instance";

class ReservationStore {
  reservation = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      reservation: observable,
      loading: observable,
      fetchReservation: action,
      createReservation: action,
    });
  }

  getreservationById = (reservationId) =>
    this.reservations.find((reservation) => reservation.id === reservationId);

  createReservation = async (newReservation, reservationId) => {
    try {
      const formData = new FormData();
      for (const key in newReservation)
        formData.append(key, newReservation[key]);
      const res = await instance.post("/reservation", newReservation);
      this.reservations.push(res.data);
    } catch (error) {
      console.log("ReservationStore -> createReservation -> error", error);
    }
  };

  fetchReservation = async () => {
    try {
      const response = await instance.get("/reservation");
      this.reservations = response.data;
      this.loading = false;
    } catch (error) {
      console.error("reservationStore -> fetchReservation -> error", error);
    }
  };
}
const reservationStore = new ReservationStore();
reservationStore.fetchReservation();
export default reservationStore;
