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

function Password(props) {
    const classes = useStyles();
  return (
    <div className="Password">
    <div>
       <div class="Account-Popup">
          <h3>Change Password</h3>
          <h3 onClick={props.onCloseModdal2} class="Account-Popup-Cross">x</h3>
        </div>
        <TextField
          id="outlined-with-placeholder"
          label="Current Password"
          placeholder="Current Password"
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <TextField
        id="outlined-with-placeholder"
        label="New Password"
        placeholder="New Password"
        margin="normal"
        variant="outlined"
        />
        <br></br>
        <TextField
        id="outlined-with-placeholder"
        label="Retype New"
        placeholder="Retype New"
        margin="normal"
        variant="outlined"
        />
        <div class="uhhh">
          <input onClick={props.onCloseModdal2} class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input class="Account-Popup-Button" type="submit" value="Save"></input>
        </div>
    </div>
    </div>
  );
}
export default Password;
