import React from 'react';
import '../Styles/login.css';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import FacebookLogin from 'react-facebook-login';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'pink',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'pink',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'pink',
      },
      '&:hover fieldset': {
        borderColor: 'pink',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'pink',
      },
    },
  },
})(TextField);
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: '130%',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

function Login(){
  const classes = useStyles();
  return (
    <div className="Login">
      <div class="Login-Message">
         <h1 class="Home-WelcomeMessage">Global Expansion Open to Everyone</h1>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
      </div>
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
          <p class="PasswordReminder">Forgot Your Password?</p>
       </ThemeProvider>
       <br></br>
       <div class="LoginOption">
       <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      <br></br>
      <input class="LoginButton" value="Sign In"></input>
      <p class="SignUpOption">New to CoulmbusX? SignUp</p>
      </div>
      </div>
    </div>
  );
}
export default Login;
