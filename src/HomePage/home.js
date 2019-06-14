import React from 'react';
import './home.css';

function Home(props){
  return (
    <div className="Home">
     <div class="Home-Welcome">
       <h1 class="Home-WelcomeMessage">Welcome to Columbus X</h1>
       <p>An email has been sent to <a class="Home-Email" href="https://mail.google.com/mail/u/0/#inbox" alt="">felix.jungwookim@mckinleyrice.com</a>. Please check your email and follow the link to activate your account.
       <span class="Home-Resend">Resend</span></p>
     </div>
     <div class="Home-Skip">
       <input class="Home-Skip-Button" type="submit" value="Skip for now"></input>
       <p>New to ColumbusX? Watch the <span class="Home-Tutorial">Tutorial</span></p>
     </div>
    </div>
  );
}
export default Home;
