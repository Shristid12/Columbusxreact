import React from 'react';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import '../Styles/ContactUs.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    border:"1px solid black",
    background:'white',
  },
}));
function ContactUs() {
  const classes = useStyles();
    const [state, setState] = React.useState({
      four: '',
      one: '',
      two: '',
      three:'',
      page:'about',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  return (
    <div className="ContactUs">
         <h3>Contact Us</h3>
         <div class="ConatctUs-Section">
            <p>What can we help you with?</p>
            <div class="ContactUs-Select">
              <FormControl className={classes.formControl}>
                 <NativeSelect
                    className={classes.selectEmpty}
                    value={state.one}
                     name='one'
                     onChange={handleChange('one')}
                    inputProps={{ 'aria-label': 'one' }}
                  >
                    <option value="" disabled>
                      Other queries & Feedback
                    </option>
                    <option value={10}>Option 1</option>
                    <option value={20}>Option 2</option>
                    <option value={30}>Option 3</option>
                  </NativeSelect>
            </FormControl>
            </div>
         </div>
         <hr></hr>
         <div class="ConatctUs-Section">
            <p>Tell us more about your issue</p>
              <div class="ContactUs-Select">
              <FormControl className={classes.formControl}>
                 <NativeSelect
                    className={classes.selectEmpty}
                    value={state.two}
                     name="two"
                     onChange={handleChange('two')}
                    inputProps={{ 'aria-label': 'two' }}
                  >
                    <option value="" disabled>
                       Please make a selection
                    </option>
                    <option value={10}>Option 1</option>
                    <option value={20}>Option 2</option>
                    <option value={30}>Option 3</option>
                  </NativeSelect>
            </FormControl>
            </div>
         </div>
         <div class="ConatctUs-Section">
            <p>Select issue details</p>
              <div class="ContactUs-Select">
              <FormControl className={classes.formControl}>
                 <NativeSelect
                    className={classes.selectEmpty}
                    value={state.three}
                     name="three"
                     onChange={handleChange('three')}
                    inputProps={{ 'aria-label': 'three' }}
                  >
                    <option value="" disabled>
                       Please make a selection
                    </option>
                    <option value={10}>Option 1</option>
                    <option value={20}>Option 2</option>
                    <option value={30}>Option 3</option>
                  </NativeSelect>
            </FormControl>
            </div>
         </div>
         <hr></hr>
           <div class="ContactUs-Select">
              <h3 class="ContactUs-Recommended">Recommended</h3>
              <p>Average Wait:<span class='Cx'>less than 1 minute</span></p>
              <div class="ConatctUs-Section">
                  <FormControl className={classes.formControl2}>
                     <NativeSelect
                        className={classes.selectEmpty}
                        value={state.four}
                         name="four"
                         onChange={handleChange('four')}
                        inputProps={{ 'aria-label': 'four' }}
                      >
                        <option value="" disabled>
                           Select Language
                        </option>
                        <option value={10}>Option 1</option>
                        <option value={20}>Option 2</option>
                        <option value={30}>Option 3</option>
                      </NativeSelect>
                </FormControl>
                <input class="ContactUs-Button" type="submit" value='Call Us'></input>
              </div>
              <p>Customers who choose "How to use  a website feature" resolve their issues
              more quickly by contacting us via phone</p>
            </div>
    </div>
  );
}

export default ContactUs;
