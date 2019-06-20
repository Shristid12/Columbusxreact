import React from 'react';
import '../Styles/popup.css';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { black } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

const GreenRadio = withStyles({
  root: {
    color: '#D3D3D3',
    background:"#D3D3D3",
    marginRight:'2%',
    marginTop:'3%',
    marginLeft:'2%',
    height:'10px',
    width:'10px',
    padding:'0%',
    '&$checked': {
      color: 'black',
      height:'10px',
      width:'10px',
      background: '#ffffff',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

function PopUpCard(){
  const [selectedValue, setSelectedValue] = React.useState('a');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange1 = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div className="PopUpCard">
       <div class="PopUpCardDiv">
          <GreenRadio
             checked={selectedValue === 'c'}
             onChange={handleChange}
             value="c"
             name="radio-button-demo"
             inputProps={{ 'aria-label': 'C' }}/>
           <div class="PopupCardText">
             <p class="popupTextHead">Lorem ipsum</p>
             <p class="Grey-Text">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
           </div>
           <div class="PopUpCardSwitch">
           <Switch
             checked={state.checkedA}
             onChange={handleChange1('checkedA')}
             value="checkedA"
             color="default"
             inputProps={{ 'aria-label': 'checkbox with default color' }}/>
           </div>
      </div>
    </div>
  );
}
export default PopUpCard;
