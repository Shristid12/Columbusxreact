import React from 'react';
import{Link} from 'react-router-dom';
import '../Styles/home.css';
import bookmark from '../assets/bookmark.png';
import share from '../assets/share.png';

function HomePageCard(props){
  return (
    <div className="HomePageCard">
        <div class="ValueChain-TextCard">
           <div class="ValueChain-ImageCard"></div>
           <div class="ValueChain-Text">
              <p class="ValueChainOne"><span class="valuechainhead">Tech Mahindra</span><br></br>
            Boutique Blockchain Firm <br></br>5 Endorsments 874 chains <br></br>St. Petersburg, Russia</p>
           </div>
        </div>
        <hr></hr>
        <div class="BookmarkSection">
          <p class="BookmarkSectionContent">Last Updated 1 minute ago</p>
          <img class="ValueChainImage" src={bookmark}></img>
        </div>
        <p>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
         sed diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
         sed diam nonumy eirmod tempor invidunt ut
        </p>
        <div class="imagecard">
           <p class="ValueChainText">310</p>
          <img class="ValueChainImageShare" src={share}></img>
        </div>
    </div>
  );
}
export default HomePageCard;
