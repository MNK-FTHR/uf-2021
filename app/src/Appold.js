import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Main from './components/Main'
import NoMatch from './components/Misc/Notfound/NotFound';
import Login from './components/Login/Login'
const App = () => {
    const [isLog, setIsLog] = useState(false);
    return (
      <Router>
          <Switch>
            {
              //https://github.com/Anshuman301/insta-repo-app/blob/master/src/App.js
              !isLog &&
              <Route exact path='/login' render={() => <Login/>}/>
            }
          <Route path='*' component={NoMatch}/>
          </Switch>
      </Router>
    )
}

export default App
