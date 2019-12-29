import React from 'react';
import Header from './header'
import Addtask from './addtask'
import {} from 'react-router-dom'   
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Viewtask from './viewTask'

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

const tasks=[{  
    name:'Learn React',
    desc:'Top priority'
},{
  name:'Learn Material',
  desc:'Second priority'
},{
  name:'Redux',
  desc:'Third priority'
}]


class Welcome extends React.Component{
    handleClose = () => this.setState({ open: false })

    handleOpen = () =>{
        this.setState({
        open:true
        })
    }
    addTask = (task) =>{
      console.log("Add")
      tasks.push(task)
      this.setState({
        task
      })
    }
    logout = () =>{ 
        localStorage.clear();
        this.props.history.push('/')
    }
    render(){
        const {classes} =this.props
        return(
            <div className={classes.root} >   
            {localStorage.getItem('isLogin') ? (
                <div>
                    <Header logout={this.logout}/>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>  <Addtask  handleAdd = {this.addTask}/></Grid>
                        <Grid item xs={6}><Viewtask taskData = {tasks}/></Grid>
                    </Grid>
                </div>
              ) : (
                this.props.history.push('/')
              )}         
            </div >
        )
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Welcome)