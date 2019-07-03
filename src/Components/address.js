import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cross from '../assets/cross.png';

const useStyles = makeStyles(theme => ({
  textField: {
     margin: theme.spacing(2),
     maxHeight: 30,
     width:"90%",

   },
}));

function Address(props) {
    const classes = useStyles();
  return (
    <div className="Address">
    <div>
       <div class="Address-Popup">
          <h3>Add your Delivery Address</h3>
           <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
       </div>
        <TextField
          className={classes.textField}
          id="dense-with-placeholder"
          label="Full Name"
          placeholder="Full Name"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Street 1"
        placeholder="Street 1"
        margin="normal"
        variant="outlined"
        />
        <br></br>
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Street 2"
        placeholder="Street 2"
        margin="normal"
        variant="outlined"
        />
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Town/City"
        placeholder="Town/City"
        margin="normal"
        variant="outlined"
        />
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Country/Region"
        placeholder="Country/Region"
        margin="normal"
        variant="outlined"
        />
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Postal Code"
        placeholder="Postal Code"
        margin="normal"
        variant="outlined"
        />
        <div class="Address-PopupButtonSection">
          <input class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input class="Account-Popup-Button" type="submit" value="Save"></input>
        </div>
    </div>
    </div>
  );
}
export default Address;
