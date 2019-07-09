import React from 'react';
import{Link} from 'react-router-dom';
import '../Styles/frontpage.css';
import Nav from'../Components/nav.js';
import FrontPageFilter from '../Components/frontpagefilter.js';
import HomePageCard from '../Components/HomePageCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));

function FrontPage(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    page:'front',
  });

  return (
    <div className="FrontPage">
     <Nav page={state.page}/>
      <div class="Front-PageBelowNav">
         <div class="FrontPage-BlackTab">
           <p class="Nav-menuItemFirst">Market Entry</p>
           <p class="Nav-menuItem">Outsourcing</p>
           <p class="Nav-menuItem">Investments</p>
         </div>
         <div class="FrontPage-PinkBar">
            <div class="FrontPage-option">
              <p><b>The Platform</b></p>
              <p>The Value Chain</p>
              <p>cX Legal Support</p>
              <p>cX Support</p>
              <p>Opportunities</p>
            </div>
            <div class="FrontPage-PinkBarText">
              <h1 class="FrontPage-heading">Post Project & We<br>
              </br>Help you expand your Business.</h1>
              <p class="PinkBar-text">Lorem ipsum dolor sit amet, consetetur sadipscing <br></br>
              elitr,sed diam nonumy eirmod tempor
              invidunt ut <br></br>labore et dolore magna
              <br></br>Read More.</p>
              <input class="Front-Button" type="submit" value="Post Project"></input>
              <input class="Front-Button" type="submit" value="Browse Projects"></input>
            </div>
            <div class="ColumbusXIcon">

            </div>
         </div>
         <FrontPageFilter/>
         <div class="FrontPageCardSection">
           <Grid container spacing={1}>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
          </Grid>
         </div>
         <div class="FrontPageCardSection">
           <Grid container spacing={1}>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
          </Grid>
         </div>
         <div class="FrontPageCardSection">
           <Grid container spacing={1}>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
              <Grid item xs={3}>
                <HomePageCard/>
              </Grid>
          </Grid>
         </div>
      </div>
    </div>
  );
}
export default FrontPage;
