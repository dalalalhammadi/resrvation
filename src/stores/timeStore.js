import { makeAutoObservable } from "mobx";

import instance from "./instance";

class TimeStore {
  times = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getTimeById = (timeId) => {
    this.times.find((time) => time.id === timeId);
  };

  getIdOfTime = (time) => {
    this.times.find((timeId) => time.id);
  };

  fetchTimes = async () => {
    try {
      const response = await instance.get("/time");
      this.times = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TimeStore -> fetchTimes -> error", error);
    }
  };

  createTimes = async (newTime) => {
    try {
      const response = await instance.post(`/time`, newTime);
      this.times.push(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("TimeStore --> createTimes", error);
    }
  };

  updateTimes = async (updatedTimes) => {
    try {
      const formData = new FormData();
      for (const key in updatedTimes) formData.append(key, updatedTimes[key]);
      await instance.put(`/time/${updatedTimes.id}`, updatedTimes);
      const time = this.times.find((time) => time.id === updatedTimes.id);
      for (const key in time) time[key] = updatedTimes[key];
    } catch (error) {
      console.log("TimeStore -> updateTimes -> error", error);
    }
  };

  deleteTimes = async (timeId) => {
    try {
      await instance.delete(`/time/${timeId}`);
      this.times = this.times.filter((time) => time.id !== timeId);
    } catch (error) {
      console.log("TimeStore -> deleteTimes -> error", error);
    }
  };
}

const timeStore = new TimeStore();
timeStore.fetchTimes();
export default timeStore;
