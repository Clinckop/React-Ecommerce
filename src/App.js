import './App.css';
import HomePage from './pages/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentuser: user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
          <Header currentUser={this.state.currentuser}/>
          <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/shop">
                <ShopPage/>
              </Route>
              <Route exact path="/signin">
                <SignInAndSignUp/>
              </Route>
          </Switch>
          {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;
