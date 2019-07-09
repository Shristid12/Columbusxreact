import React from 'react';
import '../Styles/login.css';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import {Link} from 'react-router-dom';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: "black",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "black",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor:"black",
      },
      '&:hover fieldset': {
        borderColor: "black",
      },
      '&.Mui-focused fieldset': {
        borderColor:"black",
      },
    },
  },
})(TextField);
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: '137%',
  },
}));
const primary = grey[900];
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#212121',
      main: '#212121',
      dark: '#212121',
      contrastText: '#212121',
    },
  },
});

function Login(){
  const classes = useStyles();
  return (
    <div className="SignUp">
      <div class="SignUp-Message">
         <p class="SignUp-WelcomeMessage"><span class="Cx">Columbus X</span> : The Platform That <br></br>
         Helps You To Expand Your Business <br></br>
         Across Borders.</p>
      </div>
      <div className="SignUp-Section">
      <p class="SignUp-Policy">This is two step registration process, all fields are mandatory to complete the
       registration.You agree to our Terms and that you have read our Privacy Policy and Content Policy</p>
      <div class="Login-form">
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Email"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
       <br></br>
       <ThemeProvider theme={theme}>
         <TextField
           className={classes.margin}
           label="Password"
           variant="outlined"
           id="mui-theme-provider-outlined-input"
         />
       </ThemeProvider>
       <br></br>
       <ThemeProvider theme={theme}>
         <TextField
           className={classes.margin}
           label="Repeat Password"
           variant="outlined"
           id="mui-theme-provider-outlined-input"
         />
       </ThemeProvider>
      <br></br>
      <Link to='/auth/signuptwo'><input class="LoginButton" value="NEXT"></input></Link>
      <p class="SignUpOption">Already a member ? LogIn</p>
      </div>
      </div>
    </div>
  );
}
export default Login;
