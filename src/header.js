  import React from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import Button from '@material-ui/core/Button';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu';
  import { withStyles } from '@material-ui/styles';
  import PropTypes from 'prop-types';

  const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });
  
  class Header extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit">
              <MenuIcon/>
              </IconButton> */}
              <Typography variant="h6" className={classes.title}>
                TaskApp
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Hi, {localStorage.getItem('name')}
              </Typography>
              <Button onClick={this.props.logout} color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }

  Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Header);