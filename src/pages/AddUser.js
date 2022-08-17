import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const history = useNavigate();
  const dispatch = useDispatch();
  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      console.log("please input all input field");
    } else {
      dispatch(addUser(state));
      history("/");
    }
  };
  return (
    <div>
      <Button
        onClick={() => history("/")}
        variant="contained"
        style={{ margin: "20px", width: "100x", display: "flex" }}
        color="primary"
        size="small"
      >
        Go Back
      </Button>
      <h1>ADD USER</h1>
      <Box
        onSubmit={(e) => handleSubmit(e)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <TextField
          onChange={(e) => handleInputChange(e)}
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          value={name}
        />
        <br />
        <TextField
          onChange={(e) => handleInputChange(e)}
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          type="email"
          value={email}
        />
        <br />
        <TextField
          onChange={(e) => handleInputChange(e)}
          id="standard-basic"
          name="contact"
          label="Contact"
          variant="standard"
          type="number"
          value={contact}
        />
        <br />
        <TextField
          onChange={(e) => handleInputChange(e)}
          id="standard-basic"
          name="address"
          label="Address"
          variant="standard"
          type="text"
          value={address}
        />
        <br />
        <Button
          variant="contained"
          style={{ width: "100px" }}
          color="primary"
          size="small"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;

// https://youtu.be/hXpYQqykORU?t=3317
