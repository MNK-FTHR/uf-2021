import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { createHashHistory } from 'history'

import Admin from './Admin/Admin'

const Main = () => {
    const history = createHashHistory()

    return (
        <Router>
                <ul>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to='/'>Back</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/admin" render={() => <Admin/>}/>
                </Switch>
        </Router>
    )
}

export default Main
