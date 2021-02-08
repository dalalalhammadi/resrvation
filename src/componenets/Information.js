import React, { useState } from "react";
import {
  CreateButtonStyled,
  InputStyled,
  DetailWrapper,
  Wrapper,
} from "../styles";
import { observer } from "mobx-react";
import reservationStore from "../stores/reservationStore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import timeStore from "../stores/timeStore";

const Information = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [reservation, setReservation] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    kidsNumber: "",
    time: "",
  });

  const handleChange = (event) =>
    setReservation({ ...reservation, [event.target.name]: event.target.value });

  const handleSubmit = (event, time) => {
    event.preventDefault();
    reservationStore.createReservation(reservation);
    console.log(reservation);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const n = 0;
  const AllTimesList = timeStore.times.map((time) => (
    <MenuItem value={time.timeRange}>{time.timeRange}</MenuItem>
  ));
  return (
    <form onSubmit={handleSubmit}>
      <DetailWrapper>
        Name:
        <InputStyled type="text" name="name" onChange={handleChange} />
      </DetailWrapper>

      <DetailWrapper>
        Phone number:
        <InputStyled type="number" name="phoneNumber" onChange={handleChange} />
      </DetailWrapper>

      <DetailWrapper>
        Email:
        <InputStyled type="text" name="email" onChange={handleChange} />
      </DetailWrapper>
      <DetailWrapper>
        Number of Kids :
        <InputStyled type="text" name="kidsNumber" onChange={handleChange} />
      </DetailWrapper>
      {/* <TimeSelect /> */}
      {/* <TimePicker /> */}
      <Wrapper>
        <Button className={classes.button} onClick={handleOpen}>
          Select Time
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Time</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            // value={AllTimesList}
            name="time"
            onChange={handleChange}
          >
            {AllTimesList}
          </Select>
        </FormControl>
      </Wrapper>

      <Wrapper>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Day"
            type="date"
            name="day"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </form>
      </Wrapper>
      <div>
        <CreateButtonStyled type="submit">Chick out</CreateButtonStyled>
        <Link to={`/signin`}>
          <Button>signin for admin</Button>
        </Link>
      </div>
    </form>
  );
};

export default observer(Information);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
