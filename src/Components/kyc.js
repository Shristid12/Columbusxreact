import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dropzone from "react-dropzone";
import Checkbox from '@material-ui/core/Checkbox';
import FileUploadProgress  from 'react-fileupload-progress';
import Cross from '../assets/cross.png';

const useStyles = makeStyles(theme => ({
  textField: {
     marginTop: theme.spacing(2),
     marginBottom: theme.spacing(2),
     maxHeight: 30,
     width:'100%',
   },
}));

function Kyc(props) {
    const classes = useStyles();
  return (
    <div className="Kyc">
    <div class="Address-Popup">
       <h3>Complete Your KYC</h3>
       <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
     </div>
        <div class="KycPopup">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
              <TextField
                className={classes.textField}
                id="dense-with-placeholder"
                label="Full Name"
                placeholder="Full Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                id="dense-with-placeholder"
                label="Last Name"
                placeholder="Last Name"
                margin="normal"
                variant="outlined"
              />
              <div class="Kyc-checkBox">
                <Checkbox
                  value="checkedC"
                  inputProps={{
                    'aria-label': 'uncontrolled-checkbox',
                  }}/>
                  <h3>Passport</h3>
              </div>
              <div  class="Kyc-checkBox">
                <Checkbox
                  value="checkedT"
                  inputProps={{
                    'aria-label': 'uncontrolled-checkbox',
                  }}/>
                  <h3>Unique ID</h3>
              </div>
              <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                    </div>
                  </section>
                )}
              </Dropzone>
              <FileUploadProgress key='ex1' url='http://localhost:3000/kyc'
                onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
                onLoad={ (e, request) => {console.log('load', e, request);}}
                onError={ (e, request) => {console.log('error', e, request);}}
                onAbort={ (e, request) => {console.log('abort', e, request);}}
                />
              <div class="Address-PopupButtonSection">
                <input class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
                <input class="Account-Popup-Button" type="submit" value="Validate"></input>
              </div>
         </div>
    </div>
  );
}

export default Kyc;
