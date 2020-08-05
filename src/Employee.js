import React from 'react';
import EMPLOYEES from './employees-db.js';
import Popover from '@material-ui/core/Popover';

class Employee extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false,
      popoverEl: null
    };
  }
  // Popover on click
  handleClick = (event) => {
     this.setState({
       isPopoverOpen: true,
       popoverEl: event.currentTarget
     })
   };

   addToFavs = (event) => {
     const name = event.target.parentNode.childNodes[0].outerText;
     const favElement = EMPLOYEES.find(el => el.name === name);
     //db favElement.favorite : true
     document.querySelector('.delete-btn').style.display = 'flex';
     document.querySelector('.add-to-fav-btn').style.display = 'none';

   };

   delFromFavs = (event) => {
     const name = event.target.parentNode.childNodes[0].outerText;
     const favElement = EMPLOYEES.find(el => el.name === name);
     document.querySelector('.add-to-fav-btn').style.display = 'flex';
     //db favElement.favorite : false
     document.querySelector('.delete-btn').style.display = 'none';
   };

  render(){
    return <div>
    <div className="employee" onClick={this.handleClick}>
    <div className="photo"></div>
    <div className={"status " + this.props.status} ></div>
    <div className={"office " + this.props.office} >In office</div>
    <div className="name" >{this.props.name}</div>
    </div>
    <Popover
       open={this.state.isPopoverOpen}
       anchorEl={this.state.popoverEl}
       onClose={() => this.setState({isPopoverOpen: false})}
       anchorOrigin={{
         vertical: 'top',
         horizontal: 'right',
       }}
       transformOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }}
    >
   <div className="popover-container">
     <div className="photo big"></div>
     <div className="info">
       <div className="popover-name">{this.props.name}</div>
       <div className={"popover-status " + this.props.status}>{this.props.availability}</div>
       <div className="skype">Skype: {this.props.skype}</div>
       <div className="email">Email: {this.props.email}</div>
       <div className="popover-btns">
       <div className="add-to-fav-btn" onClick={this.addToFavs}>Add to favorites</div>
       <div className="delete-btn" onClick={this.delFromFavs}>Delete</div>
       </div>
     </div>
   </div>
 </Popover>
    </div>
  }
}

export default Employee;
