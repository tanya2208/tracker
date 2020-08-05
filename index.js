import React from 'react';
import EMPLOYEES from './employees-db.js';
import Employee from './Employee.js';
import MobileTable from './MobileTable.js';
import ReactDOM from 'react-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

class DesktopTable extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      displayedEmployees: EMPLOYEES,
      searchQuery: "",
      isAvailabilityChecked: false,
      isFavoriteChecked: false,
      checkedLabel: 'Show available only (off)',
      favLabel: 'Show favourites only (off)',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  // Search handler
  handleSearch = (event) => {
    this.setState({
      searchQuery: event.target.value.toLowerCase()
    })
  }

  // Toggle availability handler (on/off)
  handleCheckbox = (event) => {
  if(this.state.isAvailabilityChecked !== true){
    this.setState({
      displayedEmployees: this.state.displayedEmployees.filter(el => el.availability === 'not busy'),
      isAvailabilityChecked: true,
      checkedLabel: 'Show available only (on)'
    });
  }
    else {
      this.setState({
        isAvailabilityChecked: false,
        checkedLabel: 'Show available only (off)'
      })
      if(this.state.isFavoriteChecked == true){
        this.setState({
          displayedEmployees: this.state.displayedEmployees.filter(el => el.favorite === true)
        })
      }
      else{
        this.setState({
          displayedEmployees: EMPLOYEES
        })
      }
    }
  }

  // Toggle favorites handler (on/off)
  handleFav = (event) => {
  if(this.state.isFavoriteChecked !== true){
    this.setState({
      displayedEmployees: this.state.displayedEmployees.filter(el => el.favorite === true),
      isFavoriteChecked: true,
      favLabel: 'Show favorite only (on)'
    });
  }
    else {
      this.setState({
        isFavoriteChecked: false,
        favLabel: 'Show favorite only (off)'
      })
      if(this.state.isAvailabilityChecked == true){
        this.setState({
          displayedEmployees: EMPLOYEES.filter(el => el.availability === 'not busy')
        })
      }
      else{
        this.setState({
          displayedEmployees: EMPLOYEES
        })
      }

    }
  }

    render(){
    const usersArray = this.state.displayedEmployees.filter(el => el.name.toLowerCase().indexOf(this.state.searchQuery) !== -1);

    // Array with ux emplloyees
    const uxArray = usersArray.filter(el => el.department === 'UX')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = 'not-in-office';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with dev emplloyees
    const devArray = usersArray.filter(el => el.department === 'DEV')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with pm emplloyees
    const pmArray = usersArray.filter(el => el.department === 'PM')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with founder emplloyees
    const founderArray = usersArray.filter(el => el.department === 'FOUNDER')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with hr emplloyees
    const hrArray = usersArray.filter(el => el.department === 'HR')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with qa emplloyees
    const qaArray = usersArray.filter(el => el.department === 'QA')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with marketing emplloyees
    const marketingArray = usersArray.filter(el => el.department === 'MARKETING')
    .map(function(el){
    let office = (el.office === true) ? office = 'in-office' : office = ' ';
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} office={office} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

      return(
        <div className="container">
          <div className="tools">
            <input className="search-field" type="text" placeholder="Search for employee" onChange={this.handleSearch}/>
            <div className="toggle">
              <label className="switch" >
                <input type="checkbox" onClick={this.handleCheckbox}/>
                <span className="slider round"></span>
              </label>
              <p>{this.state.checkedLabel}</p>
            </div>

            <div className="toggle">
              <label className="switch" >
                <input type="checkbox" onClick={this.handleFav}/>
                <span className="slider round"></span>
              </label>
              <p>{this.state.favLabel}</p>
            </div>
          </div>
       <BrowserView>
          <div className="employees-container">
            <div className="ux-container">
              <p className="department-label">UX</p>
              <div className="employee-array">{uxArray}</div>
            </div>
            <div className="qa-container">
              <p className="department-label">QA</p>
              <div className="employee-array">{qaArray}</div>
            </div>
            <div className="dev-container">
              <p className="department-label">DEV</p>
              <div className="employee-array">{devArray}</div>
            </div>
            <div className="pm-container">
              <p className="department-label">PM</p>
              <div className="employee-array">{pmArray}</div>
            </div>
            <div className="founder-container">
              <p className="department-label">FOUNDERS</p>
              <div className="employee-array">{founderArray}</div>
            </div>
            <div className="marketing-container">
              <p className="department-label">MARKETING</p>
              <div className="employee-array">{marketingArray}</div>
            </div>
            <div className="hr-container">
              <p className="department-label">HR</p>
              <div className="employee-array">{hrArray}</div>
            </div>
          </div>
          </BrowserView>
          <MobileView>
          <div>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>DEV</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{devArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>PM</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{pmArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>QA</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{qaArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>FOUNDERS</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{founderArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>UX</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{uxArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>HR</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{hrArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  id="panel1a-header">
              <h2>MARKETING</h2>
              <p>{this.state.found}</p>
            </ExpansionPanelSummary>
                <ExpansionPanelDetails className="panel-container">
                   <div className="employee-array">{marketingArray}</div>
                </ExpansionPanelDetails>
          </ExpansionPanel>
          </div>
          </MobileView>
        </div>
    );
  }
}
ReactDOM.render(
  <DesktopTable/>,
  document.querySelector('.tracker-container')
);
