import React from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Button, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import './App.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types'; 

const posi = [
  { vertical: "top", horizontal: "center" },
  { vertical: "top", horizontal: "right" },
  { vertical: "bottom", horizontal: "right" },
  { vertical: "bottom", horizontal: "center" },
  { vertical: "bottom", horizontal: "left" },
  { vertical: "top", horizontal: "left" }
]

const styles = theme =>( {
  close:{
    padding: theme.spacing(0.5),
  },
  logo:{
    backgroundColor:"red"
  }
})

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
      user:{
        email:"",
        password:""
      },
      vertical: "top", horizontal: "center"
    }
  }
  
  handleClose = () => this.setState({ open: false })

  handleOpen = (newState) =>{this.setState({open:true, ...newState})}
  
  login = async (e) =>{
    e.preventDefault();
    var randomVal = Math.floor(Math.random() * 7);
    const user = this.props.data.find(o => o.user === this.state.user.email)
    if(user){
      if(user.pass === this.state.user.password){
        localStorage.setItem("isLogin","true")
        for (var prop in user) {
          (user.hasOwnProperty(prop)) && localStorage.setItem(prop,user[prop]);
      }
        this.props.history.push('/welcome')
      }else{
        this.handleOpen(posi[randomVal])
      }
    }
  };

  handlechange = (e) => {
    this.setState({user:{...this.state.user,[e.target.id] : e.target.value,}})
  };

  registerNav = (e) =>{
    this.props.history.push("/register")  
    e.preventDefault();
  }

  render(){
    const { open, vertical, horizontal} = this.state
    const { classes } = this.props;
    return(
      <React.Fragment>
        {(!localStorage.getItem('isLogin')) ? (
          <ValidatorForm
            className="form"
            ref="form"
            onSubmit={this.login}
            onError={error => console.log(error)}>
              <Typography variant="h5" className="logo" color="primary">TaskApp</Typography>
              <Typography variant="h5" color="primary">Login </Typography>
            <span><TextValidator
              id="email"
              label="Email"
              onChange={this.handlechange}
              name="email"
              variant="outlined"
              validators={['required','isEmail']}
              errorMessages={['This field is required','Email is not valid']}
              value={this.state.user.email}/></span>
              <span>
            <TextValidator 
              id="password" 
              value={this.state.user.password} 
              onChange={this.handlechange}
              variant="outlined"
              validators={['required']}
              errorMessages={['this field is required']} 
              type="password" 
              label="Password"/></span>
              <span>
            <Button type="submit" color="primary" variant="outlined">Login</Button>
            <Button variant="contained" color="primary" onClick={this.registerNav}>Register</Button></span>

            <Snackbar
              anchorOrigin={{vertical,horizontal}}  
              open={open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{'aria-describedby': 'message-id',}}
              message={"Wrong Password"}
              action={[
                <IconButton
                  key="close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}>
                  <CloseIcon />
                </IconButton>,
              ]}
            />

          </ValidatorForm>
        ) : (
          this.props.history.push('/welcome')
        )}         
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Login)