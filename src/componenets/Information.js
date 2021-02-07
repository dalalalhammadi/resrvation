import React, { useState } from "react";
import {
  CreateButtonStyled,
  InputStyled,
  DetailWrapper,
  Wrapper,
} from "../styles";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";
import reservationStore from "../stores/reservationStore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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

  const handleSubmit = (event) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <DetailWrapper>
        Name:
        <InputStyled
          type="text"
          name="name"
          placeholder="full name"
          onChange={handleChange}
        />
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
            // value={time}
            name="time"
            onChange={handleChange}
          >
            {/* <MenuItem value="">
            <em>None</em> */}
            {/* </MenuItem> */}
            <MenuItem value={10}>10-11:30</MenuItem>
            <MenuItem value={"11:45-1:30"}>11:45-1:30</MenuItem>
            <MenuItem value={30}>1:45-3</MenuItem>
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
      </div>
      <div>
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

// import { Button } from "@material-ui/core";
// import React, { Component } from "react";
// // import { FaPlus } from "react-icons/fa";
// // import { FaTimes } from "react-icons/fa";
// import Moment from "react-moment";

// class Information extends Component {
//   constructor() {
//     super();
//     this.state = {
//       petName: "",
//       ownerName: "",
//       aptDate: "",
//       aptTime: "",
//       aptNotes: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleAdd = this.handleAdd.bind(this);
//   }

//   handleAdd(e) {
//     e.preventDefault();
//     let tempApt = {
//       petName: this.state.petName,
//       ownerName: this.state.ownerName,
//       aptDate: this.state.aptDate + " " + this.state.aptTime,
//       aptNotes: this.state.aptNotes,
//     };

//     this.props.addAppointment(tempApt);

//     this.setState({
//       petName: "",
//       ownerName: "",
//       aptDate: "",
//       aptTime: "",
//       aptNotes: "",
//     });
//     this.props.toggleForm();
//   }

//   handleChange(e) {
//     const target = e.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div
//         className={
//           "card textcenter mt-3 " +
//           (this.props.formDisplay ? "" : "add-appointment")
//         }
//       >
//         <div
//           className="apt-addheading card-header bg-primary text-white"
//           onClick={this.props.toggleForm}
//         >
//           <Button>Add Appointment</Button>
//         </div>

//         <div className="card-body">
//           <form id="aptForm" noValidate onSubmit={this.handleAdd}>
//             <div className="form-group form-row">
//               <label
//                 className="col-md-2 col-form-label text-md-right"
//                 htmlFor="petName"
//                 readOnly
//               >
//                 Pet Name
//               </label>
//               <div className="col-md-10">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="petName"
//                   placeholder="Pet's Name"
//                   value={this.state.petName}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-group form-row">
//               <label
//                 className="col-md-2 col-form-label text-md-right"
//                 htmlFor="ownerName"
//               >
//                 Pet Owner
//               </label>
//               <div className="col-md-10">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="ownerName"
//                   placeholder="Owner's Name"
//                   value={this.state.ownerName}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-group form-row">
//               <label
//                 className="col-md-2 col-form-label text-md-right"
//                 htmlFor="aptDate"
//               >
//                 Date
//               </label>
//               <div className="col-md-4">
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="aptDate"
//                   id="aptDate"
//                   value={this.state.aptDate}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <label
//                 className="col-md-2 col-form-label text-md-right"
//                 htmlFor="aptTime"
//               >
//                 Time
//               </label>
//               <div className="col-md-4">
//                 <input
//                   type="time"
//                   className="form-control"
//                   name="aptTime"
//                   id="aptTime"
//                   value={this.state.aptTime}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-group form-row">
//               <label className="col-md-2 text-md-right" htmlFor="aptNotes">
//                 Apt. Notes
//               </label>
//               <div className="col-md-10">
//                 <textarea
//                   className="form-control"
//                   rows="4"
//                   cols="50"
//                   name="aptNotes"
//                   id="aptNotes"
//                   placeholder="Appointment Notes"
//                   value={this.state.aptNotes}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div className="form-group form-row mb-0">
//               <div className="offset-md-2 col-md-10">
//                 <button
//                   type="submit"
//                   className="btn btn-primary d-block ml-auto"
//                 >
//                   Add Appointment
//                 </button>
//                 <span className="apt-date ml-auto">
//                   {/* <Moment
//                     date={tempApt.aptDate}
//                     parse="YYYY-MM-dd hh:mm"
//                     format="MMM-d h:mma"
//                   /> */}
//                 </span>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Information;
