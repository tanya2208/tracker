import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EMPLOYEES from './employees-db.js';
import Employee from './Employee.js';

class MobileTable extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      displayedEmployees: EMPLOYEES,
      searchQuery: '',
      isChecked: false,
      checkedLabel: 'Show available only (off)'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  // Search handler
  handleSearch = (event) => {
    this.setState({
      searchQuery: event.target.value.toLowerCase(),
    })
  }

  // Toggle handler (on/off)
  handleCheckbox = (event) => {
  if(this.state.isChecked !== true){
    this.setState({
      displayedEmployees: this.state.displayedEmployees.filter(el => el.availability === 'not busy'),
      isChecked: true,
      checkedLabel: 'Show available only (on)'
    });
  }
    else {
      this.setState({
        displayedEmployees: EMPLOYEES,
        isChecked: false,
        checkedLabel: 'Show available only (off)'
      })
    }
  }

  render(){
    const usersArray = this.state.displayedEmployees.filter(el => el.name.toLowerCase().indexOf(this.state.searchQuery) !== -1);

    // Array with ux employees
    const uxArray = usersArray.filter(el => el.department === 'UX')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status={status} skype={el.skype} email={el.email}/>;
    });

    // Array with dev employees
    const devArray = usersArray.filter(el => el.department === 'DEV')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status={status} skype={el.skype} email={el.email}/>;
    });

    // Array with pm employees
    const pmArray = usersArray.filter(el => el.department === 'PM')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status={status} skype={el.skype} email={el.email}/>;
    });

    // Array with founder employees
    const founderArray = usersArray.filter(el => el.department === 'FOUNDER')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status={status} skype={el.skype} email={el.email}/>;
    });

    // Array with hr employees
    const hrArray = usersArray.filter(el => el.department === 'HR')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with qa employees
    const qaArray = usersArray.filter(el => el.department === 'QA')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    // Array with marketing employees
    const marketingArray = usersArray.filter(el => el.department === 'MARKETING')
    .map(function(el){
    let status = (el.availability === 'not busy') ? status = 'green' : (el.availability === 'busy') ? status = 'yellow' : status = 'red';
      return <Employee key={el.id} name={el.name} availability={el.availability} status = {status} skype = {el.skype} email = {el.email}/>;
    });

    return <div>
      <div className="tools-mob">
      <input className="search-field" type="text" placeholder="Search for employee" onChange={this.handleSearch}/>
        <div className="availability-check">
          <label className="switch" >
            <input type="checkbox" onClick={this.handleCheckbox}/>
            <span className="slider round"></span>
          </label>
          <p>{this.state.checkedLabel}</p>
        </div>
      </div>
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
  }
}

export default MobileTable;
