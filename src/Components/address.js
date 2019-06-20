import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({

textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
},
}));

function Address() {
    const classes = useStyles();
  return (
    <div className="Password">
    <div>
       <div class="Account-Popup">
          <h3>Add your Delivery Address</h3>
          <h3 class="Account-Popup-Cross">x</h3>
        </div>
        <TextField
          id="outlined-with-placeholder"
          label="Full Name"
          placeholder="Full Name"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
        id="outlined-with-placeholder"
        label="Street 1"
        placeholder="Street 1"
        margin="normal"
        variant="outlined"
        />
        <br></br>
        <TextField
        id="outlined-with-placeholder"
        label="Street 2"
        placeholder="Street 2"
        margin="normal"
        variant="outlined"
        />
        <TextField
        id="outlined-with-placeholder"
        label="Town/City"
        placeholder="Town/City"
        margin="normal"
        variant="outlined"
        />
        <TextField
        id="outlined-with-placeholder"
        label="Country/Region"
        placeholder="Country/Region"
        margin="normal"
        variant="outlined"
        />
        <TextField
        id="outlined-with-placeholder"
        label="Postal Code"
        placeholder="Postal Code"
        margin="normal"
        variant="outlined"
        />
        <div class="uhhh">
          <input class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input class="Account-Popup-Button" type="submit" value="Save"></input>
        </div>
    </div>
    </div>
  );
}
export default Address;
