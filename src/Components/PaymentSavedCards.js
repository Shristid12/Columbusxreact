import React from 'react';
import '../Styles/payment.css';
import visa from '../assets/download.png';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    maxHeight: 34,
    background:'white',
    color:'black',
    paddingBottom:'6px',
  },
  inputControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 34,
    color:'black',
    paddingBottom:'6px',
  },
  labelControl: {
    color:'black',
    paddingBottom:'6px',
  },
}));

function PaymentSavedCards () {
  const classes = useStyles();

  const [state, setState] = React.useState({
    option: '',
    name: 'hai',
    open1: false,
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="PaymentSavedCards">
        <div class="Profile-Information">
           <div class="Profile-ImageInstitute">
              <img src={visa} class="payment_image"></img>
           </div>
           <div class="Profile-EducationalInfo">
               <h4>ICICI</h4>
               <p>**** **** **** 1234</p>
               <p class="Grey-Text">Lorem ipsum</p>
           </div>
           <div class="Profile-InputForm">
             <FormControl variant="outlined" className={classes.formControl}>
                 <InputLabel className={classes.labelControl} ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Option
                 </InputLabel>
                 <Select
                    className={classes.inputControl}
                    native
                    value={state.option}
                    onChange={handleChange('option')}
                    input={
                      <OutlinedInput name="option" labelWidth={labelWidth} id="outlined-age-native-simple" />
                    }>
                      <option value={0}></option>
                      <option value={10}>Delete</option>
                      <option value={20}>Edit</option>
                 </Select>
              </FormControl>
           </div>
        </div>
    </div>
  );
}
export default PaymentSavedCards;
