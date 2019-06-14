import React from 'react';
import './popup.css';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { black } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const GreenRadio = withStyles({
  root: {
    color: '#D3D3D3',
    background:"#D3D3D3",
     marginRight:'4%',
     marginLeft:'2%',
     height:'1%',
    padding:'0',
    '&$checked': {
      color: '#ffffff',
      background: '#D3D3D3',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

function Popup(){
  const [selectedValue, setSelectedValue] = React.useState('a');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedD: true
  });

  const handleChange1 = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div className="popup">
       <h3>MarketPlace Updates</h3>
       <div class="jt">
          <GreenRadio
           checked={selectedValue === 'c'}
           onChange={handleChange}
           value="c"
           name="radio-button-demo"
           inputProps={{ 'aria-label': 'C' }}
           />
           <div>
             <h4>Lorem ipsum</h4>
             <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
           </div>
           <Switch
           checked={state.checkedA}
           onChange={handleChange1('checkedA')}
           value="checkedA"
           color="default"
           inputProps={{ 'aria-label': 'checkbox with default color' }}
         />
      </div>
      <div class="jt">
         <GreenRadio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
          />
          <div>
            <h4>Lorem ipsum</h4>
            <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
          </div>
          <Switch
          checked={state.checkedA}
          onChange={handleChange1('checkedA')}
          value="checkedA"
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
     </div>
     <div class="jt">
        <GreenRadio
         checked={selectedValue === 'c'}
         onChange={handleChange}
         value="c"
         name="radio-button-demo"
         inputProps={{ 'aria-label': 'C' }}
         />
         <div>
           <h4>Lorem ipsum</h4>
           <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
         </div>
         <Switch
         checked={state.checkedA}
         onChange={handleChange1('checkedA')}
         value="checkedA"
         color="default"
         inputProps={{ 'aria-label': 'checkbox with default color' }}
       />
    </div>
    <div class="jt">
       <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
        />
        <div>
          <h4>Lorem ipsum</h4>
          <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
        </div>
        <Switch
        checked={state.checkedA}
        onChange={handleChange1('checkedA')}
        value="checkedA"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
   </div>
   <div class="jt">
      <GreenRadio
       checked={selectedValue === 'c'}
       onChange={handleChange}
       value="c"
       name="radio-button-demo"
       inputProps={{ 'aria-label': 'C' }}
       />
       <div>
         <h4>Lorem ipsum</h4>
         <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
       </div>
       <Switch
       checked={state.checkedA}
       onChange={handleChange1('checkedA')}
       value="checkedA"
       color="default"
       inputProps={{ 'aria-label': 'checkbox with default color' }}
     />
  </div>
  <div class="jt">
     <GreenRadio
      checked={selectedValue === 'c'}
      onChange={handleChange}
      value="c"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'C' }}
      />
      <div>
        <h4>Lorem ipsum</h4>
        <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
      </div>
      <Switch
      checked={state.checkedA}
      onChange={handleChange1('checkedA')}
      value="checkedA"
      color="default"
      inputProps={{ 'aria-label': 'checkbox with default color' }}
    />
 </div>
 <div class="jt">
    <GreenRadio
     checked={selectedValue === 'c'}
     onChange={handleChange}
     value="c"
     name="radio-button-demo"
     inputProps={{ 'aria-label': 'C' }}
     />
     <div>
       <h4>Lorem ipsum</h4>
       <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
     </div>
     <Switch
     checked={state.checkedA}
     onChange={handleChange1('checkedA')}
     value="checkedA"
     color="default"
     inputProps={{ 'aria-label': 'checkbox with default color' }}
   />
</div>
<div class="jt">
   <GreenRadio
    checked={selectedValue === 'c'}
    onChange={handleChange}
    value="c"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'C' }}
    />
    <div>
      <h4>Lorem ipsum</h4>
      <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
    </div>
    <Switch
    checked={state.checkedA}
    onChange={handleChange1('checkedA')}
    value="checkedA"
    color="default"
    inputProps={{ 'aria-label': 'checkbox with default color' }}
  />
</div>
<div class="jt">
   <GreenRadio
    checked={selectedValue === 'c'}
    onChange={handleChange}
    value="c"
    name="radio-button-demo"
    inputProps={{ 'aria-label': 'C' }}
    />
    <div>
      <h4>Lorem ipsum</h4>
      <p class="iyyy">You'll always get notifications about activity that involves you, such as when someone tags you in a photo or comments on your post.</p>
    </div>
    <Switch
    checked={state.checkedA}
    onChange={handleChange1('checkedA')}
    value="checkedA"
    color="default"
    inputProps={{ 'aria-label': 'checkbox with default color' }}
  />
</div>
<div>
  <input class="btn" type="submit" value="Save"></input>
</div>
    </div>
  );
}
export default Popup;
