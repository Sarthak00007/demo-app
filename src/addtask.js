import React from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Button, Typography} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import './App.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './App.css'

const styles = theme =>( {
  close:{
    padding: theme.spacing(0.5),
  },
})

class Addtask extends React.Component{

  constructor(props){
    super(props);
    this.state={
      tasks:{
        name:'',
        desc:''
      },
      vertical: "bottom", horizontal: "left"
    }
  }
  
  handleClose = () => this.setState({ open: false })

  handleOpen = () =>{this.setState({open:true})}

  handlechange = (e) => { this.setState({tasks:{...this.state.tasks,[e.target.id] : e.target.value,}})};

  handleAdd = () => {
    this.props.handleAdd(this.state.tasks)
  }

  render(){
    const { open, vertical, horizontal} = this.state
    const { classes } = this.props; 
    return(
      <React.Fragment>
          <ValidatorForm
            className="form"
            ref="form"
            onSubmit={this.handleAdd}
            onError={error => {console.log(error)}}>
              <Typography variant="h5" className="logo" color="primary">
                <Fab size="medium" color="secondary"><AddIcon/></Fab> 
                Task
              </Typography>
            <span>
                <TextValidator
                    id="name"
                    label="Task"
                    onChange={this.handlechange}
                    name="name"
                    variant="outlined"
                    validators={['required']}
                    errorMessages={['Task Name is required']} 
                    value={this.state.tasks.name}/>
            </span>    
            <span>
                <TextValidator 
                    id="desc" 
                    value={this.state.tasks.desc} 
                    onChange={this.handlechange}
                    variant="outlined"
                    validators={['required']}
                    errorMessages={['Task description is required']} 
                    label="Describe"/>
            </span>
            <span>
                <Fab color="primary"type="submit" aria-label="add"><AddIcon/></Fab>
            </span>
            <Snackbar anchorOrigin={{vertical,horizontal}}  
              open={open}
              autoHideDuration={1000}
              onClose={this.handleClose}
              ContentProps={{'aria-describedby': 'message-id',}}
              message={"Task Added"}/>
          </ValidatorForm>         
      </React.Fragment>
    )
  }
}

Addtask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Addtask)