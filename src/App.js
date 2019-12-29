import React from 'react';
import Register from './register'
import Login from './login'
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Welcome from './welcome';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    }
  }
}); 

class App extends React.Component { 

  constructor(props){
    super(props);
    this.state ={data:[{
      id:1,
      name:"Sarthak",
      user:"sarthak.iih@gmail.com",
      pass:"sarthak.iih@123"
    },{
      id:2,
      name:"Sarthak2",
      user:"sarthak2.iih@gmail.com",
      pass:"sarthak2.iih@123"
    }]
  }

  }

  register = (userData) =>{
    
    const user = this.state.data.find(o => o.user === userData.email)
    if(!user){
      this.state.data.push(userData)
    }else{
      console.log("Email Already Exsist")  
    }
  }

  render(){
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={props => <Login {...props} data={this.state.data}/>}/>
            <Route exact path="/welcome" component={Welcome}/>
            <Route exact path="/register" component={props => <Register {...props} registerHandle={this.register}/>}/>
          </Router>    
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
