import React from 'react';
import '../Styles/profile.css';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Inp from'../Components/inp.js';
import Name from'../Components/name.js';
import {Link} from 'react-router-dom';
import Nav from '../Components/nav.js';
import Sidemenu from'../Components/SideMenu.js';

const AddButton = withStyles({
  root: {
    margin: 10,
    borderRadius: 30,
    paddingLeft: 14,
  },
})(Button);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 30,
  },
  selectControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxHeight: 30,
  },
  ButtonControl: {
    maxHeight: 12,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    height: 40,
  },
}));
const contentStyle = {
   width: "15%",
   padding: "1%"
 };

function Profile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    option: '',
    optionSideMenu:'2',
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
  const openModal1 = open1 => event => {
    setState({
      ...state,
      [open1]: true,
    });
  };
  const closeModal1 = open1 => event => {
    setState({
      ...state,
      [open1]: false,
    });
  };
  return (
    <div className="Home">
      <Nav/>
      <div class="Basic">
         <div class="Menu">
            <Sidemenu option={state.optionSideMenu}/>
         </div>
         <div class="Content">
            <h3>Profile Picture and Name</h3>
            <div class="Profile-SelectImage">
                <div class="Profile-FileSelect">
                    <input class="Profile-FileInput" type="file"></input>
                </div>
              <div class="Profile-Sectiontwo">
                   <h3 class="Grey-Text">Name</h3>
                   <div class="Profile-Input">
                      <input class="Profile-TextField" type="text" value="Mr Jon Doe"/>
                   </div>
                   <h3 class="Grey-Text">User Name</h3>
                   <div class="Profile-Input">
                        <input class="Profile-TextField" type="text" value="Mr Jon Doe"/>
                        <input class="Profile-TextFieldButton" onClick={openModal1('open1')} type="submit" value="Edit"></input>
                        <Popup
                         contentStyle={contentStyle}
                         open={state.open1}
                         closeOnDocumentClick
                         onClose={closeModal1('open1')}
                        >
                          <Name/>
                       </Popup>
                    </div>
               </div>
            </div>
            <hr></hr>
            <h3>KYC Details</h3>
            <h3 class="Grey-Text">Complete your KYC for uninterrupted experience.</h3>
            <h4>Do KYC Now</h4>
            <hr></hr>
            <h3>Bio</h3>
            <div class="Profile-Input">
                <Inp/>
                <div class="Profile-Disabled-Button">
                  <Button variant="contained" color="disabled">
                     Save
                  </Button>
                </div>
            </div>
            <hr></hr>
            <h3>Work</h3>
            <div class="Profile-Input">
               <h3 class="Grey-Text">Which option best describes you?</h3>
            </div>
            <div class="Profile-SelectMenu">
              <select class="Profile-SelectMenuOne">
                   <option value="B">Bussinessman</option>
                   <option value="T">Teacher</option>
               </select>
            </div>
            <div class="piyt">
                <h3 class="Grey-Text">Which industry does the workplace/business belong to?</h3>
             </div>
             <div class="Profile-SelectMenu">
             <select class="Profile-SelectMenuTwo">
               <option value="data">Data Analytics, Management & Internet</option>
             </select>
              </div>
              <h3 class="Grey-Text">Add your organisation</h3>
              <div class="Profile-Text">
                  <input type="text" class="Profile-OrganisationText" value="Organisation"></input>
                  <input class="Button" type="submit" value="Add"></input>
              </div>
              <div class="Profile-Information">
                 <div class="Profile-ImageInstitute"></div>
                   <div class="Profile-EducationalInfo">
                     <h4>XYZ School</h4>
                     <p>August 2009 to April 2014, seoul, Koria</p>
                     <p class="Grey-Text">Working as Sr Software Engr.</p>
                 </div>
                 <div class="Profile-InputForm">
             <FormControl variant="outlined" className={classes.formControl}>
                 <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                 </InputLabel>
                 <Select
                    native
                    value={state.option3}
                    className={classes.selectControl}
                    onChange={handleChange('option3')}
                    input={
                      <OutlinedInput name="option3" labelWidth={labelWidth} id="outlined-age-native-simple" />
                    }
                 >
                  <option value={0}>Options</option>
                  <option value={10}>Delete</option>
                  <option value={20}>Edit</option>
                 </Select>
              </FormControl>
                 </div>
              </div>
             <hr></hr>
             <h3>Professional Skills</h3>
             <div class="Profile-Text">
                 <h3 class="Grey-Text">Professional Skills</h3>
                 <input type="text" class="Profile-TextSelect" value="ABCD"></input>
                 <input class="Button" type="submit" value="Add"></input>
             </div>
             <hr></hr>
              <h3>Education</h3>
               <h3 class="Grey-Text">High School</h3>
               <div class="Profile-Information">
                  <div class="Profile-ImageInstitute"></div>
                  <div class="Profile-EducationalInfo">
                    <h4>XYZ School</h4>
                    <p>August 2009 to April 2014, seoul, Koria</p>
                    <p class="Grey-Text">Lorem ipsum</p>
                    <h3>Add School</h3>
                  </div>
                  <div class="Profile-InputForm">
              <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                  </InputLabel>
                  <Select
                     native
                     className={classes.selectControl}
                     value={state.option1}
                     onChange={handleChange('option1')}
                     input={
                       <OutlinedInput name="option1" labelWidth={labelWidth} id="outlined-age-native-simple" />
                     }
                  >
                    <option value={0}>Options</option>
                    <option value={10}>Delete</option>
                    <option value={20}>Edit</option>
                  </Select>
               </FormControl>
                  </div>
               </div>
               <h3 class="Grey-Text">University</h3>
               <div class="Profile-Information">
                  <div class="Profile-ImageInstitute"></div>
                    <div class="Profile-EducationalInfo">
                       <h4>XYZ School</h4>
                       <p>August 2009 to April 2014, seoul, Koria</p>
                       <p class="Grey-Text">Lorem ipsum</p>
                       <h3>Add University</h3>
                    </div>
                  <div class="Profile-InputForm">
              <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                  </InputLabel>
                  <Select
                     native
                     className={classes.selectControl}
                     value={state.option2}
                     onChange={handleChange('option2')}
                     input={
                       <OutlinedInput name="option2" labelWidth={labelWidth} id="outlined-age-native-simple" />
                     }
                  >
                   <option value={0}>Options</option>
                   <option value={10}>Delete</option>
                   <option value={20}>Edit</option>
                  </Select>
               </FormControl>
                  </div>
               </div>
             <hr></hr>
             <h3>Your Website Address</h3>
             <div class="Profile-Text">
                 <h3 class="Grey-Text">Website link</h3>
                 <input type="text" class="Profile-TextSelect" value="Add"></input>
                 <input class="Button" type="submit" value="Add"></input>
             </div>
             <hr></hr>
             <h3>Linked Accounts</h3>
             <div>
             <AddButton size="small" variant="outlined" color="disabled">
                  Facebook
                 <AddIcon className={classes.ButtonControl}/>
             </AddButton>
             <AddButton size="small" variant="outlined" color="disabled">
                  Linkedin
                 <AddIcon className={classes.ButtonControl}/>
             </AddButton>
             <AddButton size="small" variant="outlined" color="disabled">
                  Vimeo
                 <AddIcon className={classes.ButtonControl}/>
             </AddButton>
             <AddButton size="small"  variant="outlined" color="disabled">
                  Behance
                 <AddIcon className={classes.ButtonControl}/>
             </AddButton>
             <AddButton size="small"  variant="outlined" color="disabled">
                  GitHub
                 <AddIcon className={classes.ButtonControl}/>
             </AddButton>
             </div>
         </div>
      </div>
    </div>
  );
}
export default Profile;
