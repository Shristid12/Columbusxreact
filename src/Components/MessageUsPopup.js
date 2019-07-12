import React from 'react';
import '../Styles/ContactUs.css';
import Cross from '../assets/cross.png';
import Dots from '../assets/dots.png';
import Smiley from '../assets/smiley.png';
import Clip from '../assets/clip.png';
import Camera from '../assets/camera.png';
import Cards from'../Components/Cards.js';
import Popup from 'reactjs-popup';

const contentStyle = {
   width: "22%",
   borderRadius: 4,
 };
function MessageUsPopup(props) {
  const [state, setState] = React.useState({
     emogi:false,
     name:'',
     value:"hey i would like to present my problem and it is serious.Please help me out!!"
  });
  const textChange = name =>event=> {
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const enterPressed = value =>event=> {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      setState({
        ...state,
        [value]:state.name,
      });  //Do stuff in here
    }
}
  const openModal = emogi => event => {
    setState({
      ...state,
      [emogi]: true,
    });
  };
  const closeModal = emogi => event => {
    setState({
      ...state,
      [emogi]: false,
    });
  };
  return (
    <div className="MessageUs">
        <div class="Account-Popup">
           <h3>columbusX</h3>
           <img onClick={props.onCloseModdal} src={Cross} class="Contact-Popup-Cross"></img>
         </div>
         <div class="Account-Popup">
             <h3>CX Support</h3>
             <div class="Contact-Popup">
                <p><span class="Grey-Text-Message">Company</span><br></br>Your Name<br></br>
                <span class="Grey-Text-Message">Designation</span></p>
             </div>
            <img onClick={props.onCloseModdal} src={Dots} class="Contact-Popup-Dots"></img>
         </div>
         <hr></hr>
         <div class="Message-From-Cx">
             <p class="Grey-Text-Message">CX</p>
             <p class="CX-MessageBox">Hi Alison,how can I help you?</p>
         </div>
         <div class="Message-From-User">
             <p class="User-MessageBox">{state.value}</p>
         </div>
         <div class="Fix-at-Bottom">
            <input type="text" class="Message-TextBox"
             onChange={textChange('name')}
             value={state.name}
             onKeyPress={enterPressed('value')}
             placeholder="Type your message here"></input>
            <div class="ConatctUs-Section">
               <img class="message-options" src={Smiley} onClick={openModal('emogi')}></img>
               <Popup
                contentStyle={contentStyle}
                open={state.emogi}
                closeOnDocumentClick
                onClose={closeModal('emogi')}
               >
                 <Cards
                 onCloseModdal={closeModal('emogi')}/>
              </Popup>
               <img class="message-options" src={Clip}></img>
               <input type='file' class="invisibleClip"></input>
               <img class="message-options" src={Camera}></img>
               <input type='file' class="invisibleCamera"></input>
            </div>
         </div>
    </div>
  );
}

export default MessageUsPopup;
