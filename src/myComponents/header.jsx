import React from 'react';
import {Button, TextField} from "@material-ui/core" 

export class Header extends React.Component  {
    handelChange = (e) => {
      if(e.target.value.length <= 25) {
        this.props.Change(e.target.value);
      }  
    }
  
    handelClick = () => {
      this.props.Click();
    }
    render() {
      let errorMessage = "";
      let errorMessageBottom = "";
      errorMessage = this.props.InputError ? errorMessage = "Invalid text" : errorMessage = "Input text";
      errorMessageBottom = this.props.InputError ? errorMessageBottom = "Error message" : errorMessageBottom=" ";
      return(
        <div className="header">
          <h1>ToDo List</h1>
          <TextField value={this.props.value} onChange={this.handelChange} variant="outlined" error={this.props.InputError} label={errorMessage}helperText={errorMessageBottom} color="secondary"/>
          <Button variant="contained" color="primary" onClick={this.handelClick}>Add</Button>
        </div> 
      );
    }
  }