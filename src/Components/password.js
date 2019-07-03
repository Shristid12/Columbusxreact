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

function Password(props) {
    const classes = useStyles();
  return (
    <div className="Password">
    <div>
       <div class="Address-Popup">
          <h3>Change Password</h3>
          <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
        </div>
        <TextField
          className={classes.textField}
          id="outlined-with-placeholder"
          label="Current Password"
          placeholder="Current Password"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="New Password"
        placeholder="New Password"
        margin="normal"
        variant="outlined"
        />
        <br></br>
        <TextField
        className={classes.textField}
        id="outlined-with-placeholder"
        label="Retype New"
        placeholder="Retype New"
        margin="normal"
        variant="outlined"
        />
        <div class="Account-PopupButtonSection">
          <input onClick={props.onCloseModdal} class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input class="Account-Popup-Button" type="submit" value="Save"></input>
        </div>
    </div>
    </div>
  );
}
export default Password;
