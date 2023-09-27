import * as React from 'react';
//import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
//import DialogContentText from '@mui/material/DialogContentText';

export default function LogIn() {
  const [open, setOpen] = React.useState(false);
  // const [email, setEmail] = useState("")
  // const [error , setError] = useState(null)

  // const isValidateEmail  = (email)=>{
  //   return /^[\w-]+@(gmail+\.)+[\w-]{2,4}$/.test(email)
  // }

  // const handleChange = (event) =>{
  //   if(!isValidateEmail(event.targtet.value)){
  //       setError("Email is invalid");
  //   }
  //   else{
  //       setError(null);
  //   }
  //   setEmail(event.target.value)
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        LogIn
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* <input className="email_address" type="email" placeholder='Email'/> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            // value={email}
            // onChange={handleChange}
          /> 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            autoComplete="current-password"
            variant="outlined"
          />
          {/* <input type="password" className="password" /> */}
          {/* {error && <DialogContentText>{error}</DialogContentText> } */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>LogIn</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


