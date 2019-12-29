import React from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Button,Typography} from '@material-ui/core';
import {} from 'react-router-dom' 

class Register extends React.Component{

  constructor(props){
    super(props)
    this.state={
      userData:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        cpassword:''
      },
    }
  }

  componentDidMount(){
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if(value !== this.state.userData.password){
        return false
      }
      return true;
    });
  }

  componentWillMount(){
    ValidatorForm.removeValidationRule('isPasswordMatch');
  }

  login = () =>{
    this.props.history.push("/")
  }

  handleChange = (e) =>{
    this.setState({userData:{...this.state.userData,[e.target.id] : e.target.value,}})
  }

  register = () =>{
    this.props.registerHandle(this.state.userData)
  }

  render(){
    return(
        <ValidatorForm 
          className="form" 
          onSubmit={this.register}>
            <Typography component="h1" color="primary" variant="h5">
            Register
          </Typography>
        <span>
            <TextValidator 
              id="firstName"
              value={this.state.userData.firstName} 
              validators={['required']}
              errorMessages={['Required*']} 
              onChange={this.handleChange} 
              color="secondary" 
              variant="outlined" 
              label="First Name"></TextValidator>
            <TextValidator 
              id="lastName"  
              value={this.state.userData.lastName}
              validators={['required']}
              errorMessages={['Required*']}   
              onChange={this.handleChange} 
              color="secondary" 
              variant="outlined" 
              label="Last Name"></TextValidator>
        </span>
        <span>
          <TextValidator 
          id="email" 
          label="Email" 
          onChange={this.handleChange}
          name="email"  
          variant="outlined"
          validators={['required','isEmail']}
          errorMessages={['This field is required','Email is not valid']}
          value={this.state.userData.email}>
          </TextValidator>
          </span>
        <span>
          <TextValidator 
            id="password" 
            autoComplete="new-password" 
            onChange={this.handleChange} 
            color="secondary" 
            type="password" 
            variant="outlined"
            validators={['required']}
            errorMessages={['This field is required']} 
            value={this.state.userData.password}
            label="Password"></TextValidator>
          <TextValidator 
            id="cpassword" 
            onChange={this.handleChange} 
            type="password" 
            variant="outlined"
            color="secondary" 
            validators={['isPasswordMatch','required']} 
            errorMessages={['Password Mismatch','This field is required']}
            value={this.state.userData.cpassword}
            label="Confirn Password"></TextValidator>
        </span>
        <span>
          <Button type="submit" variant="outlined" color="primary" >Register</Button>
          <Button variant="contained" color="primary" onClick={this.login}>Login</Button>
        </span>
      </ValidatorForm>
    )
  }
}

  export default Register 