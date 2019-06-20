import React from 'react';
import '../Styles/about.css';
import Nav from '../Components/nav.js';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Mon from '../assets/mon.jpg';
import Rob from '../assets/rob.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '50%',
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    border:"1px solid black",
    background:'white',
  },
}));
function About() {

  const classes = useStyles();
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
      language: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    const handleChange1 = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

  return (
    <div className="About">
      <Nav/>
      <div class="Basic">
      <div class="About-Navigation-Menu">
        <h3>About CX</h3>
        <p>Newsroom</p>
        <p>About Leadership</p>
        <p>Investors</p>
        <p>Events</p>
        <p>Our Stories</p>
      </div>
      <div class="Content">
        <div class="About-text">
         <div class="About-Selector-One">
           <FormControl className={classes.formControl}>
              <NativeSelect
                 className={classes.selectEmpty}
                 value={state.age}
                  name="age"
                  onChange={handleChange('age')}
                 inputProps={{ 'aria-label': 'age' }}
               >
                 <option value="" disabled>
                    The Platform
                 </option>
                 <option value={10}>Option 1</option>
                 <option value={20}>Option 2</option>
                 <option value={30}>Option 3</option>
               </NativeSelect>
              <FormHelperText ><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</b></FormHelperText>
         </FormControl>
         </div>
         <div class="About-Selector-Two">
          <FormControl className={classes.formControl1}>
              <NativeSelect
                 className={classes.selectEmpty}
                 value={state.language}
                  name="language"
                  onChange={handleChange1('language')}
                 inputProps={{ 'aria-label': 'language' }}
               >
                 <option value={10}>English</option>
                 <option value={20}>Hindi</option>
                 <option value={30}>French</option>
               </NativeSelect>
           </FormControl>
          </div>
         </div>
         <div class="About-text">
           <div class="About-section">
              <p class="About-UpdateDate"> UPDATED AT 01 JAN, 2019</p>
              <h2>The Platform</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et
                 dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                 clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                 sed diam voluptua. At vero eos et accusam et justo duo</p>
              <h4>Read More</h4>
          </div>
          <div class="About-section">
             <img class="About-Image-One" src={Mon}></img>
          </div>
         </div>
         <div class="About-text">
         <div class="About-section">
            <img class="About-Image-Two" src={Rob}></img>
         </div>
         <div class="About-section">
            <p class="About-UpdateDate"> UPDATED AT 01 JAN, 2019</p>
            <h2>The Value Chain</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et
               dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
               clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
               consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
               sed diam voluptua. At vero eos et accusam et justo duo</p>
            <h4>Read More</h4>
        </div>
         </div>
      </div>
      </div>
    </div>
  );
}

export default About;
