import React from 'react';
import{Link} from 'react-router-dom';
import '../Styles/frontpage.css';

function FrontPageFilter(props){
  return (
    <div className="FrontPageFilter">
       <div class="FrontPage-Selection">
          <div class="FrontPage-Selection-left">
             <select class="Service">
               <option>Service Category</option>
             </select>
             <select class="Service">
               <option>Default Value Chain</option>
               <option>Create Value Chain</option>
               <option>Active Value Chain</option>
               <option>Alternate Value Chain</option>
             </select>
          </div>
          <div class="FrontPage-Selection-right">
          </div>
          <hr class="Frontpage-HastagLine"></hr>
          <div class="BookmarkSection">
             <p>Refined by:</p>
             {[0, 1, 2,4,5,6,7,8,9,10].map(value => (
                <input class="HastagButton" type="submit" value="Hashtag"></input>
             ))}
          </div>
          <hr class="Frontpage-HastagLine"></hr>
       </div>
    </div>
  );
}
export default FrontPageFilter;
