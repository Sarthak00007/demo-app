import React from 'react';
import { 
  ValidatorForm, 
  TextValidator
} from 'react-material-ui-form-validator';  
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';

class Form extends React.Component{

  constructor(props){
    super(props)
    this.state={
      email:""
    }
  }

  login = (e) =>{
    //this.props.history("/")
    e.preventDefault();
  }
  handleChange = (e) =>{
    this.setState({email:e.target.value})
  }
    render(){
      return(
          <div className="form">
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}>  
            <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}/>
                <Button onClick={this.login}>Login</Button>   
            </ValidatorForm>
          </div>
      )
    }
  }
  export default Form 