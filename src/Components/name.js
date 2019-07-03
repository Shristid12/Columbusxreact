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

function Name(props) {
    const classes = useStyles();
  return (
    <div className="Name">
    <div>
       <div class="Address-Popup">
          <h3>Edit Name</h3>
          <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
        </div>
        <TextField
          className={classes.textField}
          id="outlined-with-placeholder"
          label="Full Name"
          placeholder="Full Name"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
          className={classes.textField}
          id="outlined-with-placeholder"
          label="Last Name"
          placeholder="Last Name"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
          className={classes.textField}
          id="outlined-with-placeholder"
          label="User Name"
          placeholder="User Name"
          margin="normal"
          variant="outlined"
        />
        <div class="Account-PopupButtonSection">
          <input class="Account-Popup-ButtonTwo" onClick={props.onCloseModdal} type="submit" value="Cancel"></input>
          <input class="Account-Popup-Button" type="submit" value="Save"></input>
        </div>
    </div>
    </div>
  );
}
export default Name;
