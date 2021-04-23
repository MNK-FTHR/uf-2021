import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Clients from './ClientsGestion/ClientsGestion'
  import News from './NewsGestion/NewsGestion'
const Admin = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/admin/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/admin/news">News</Link>
                    </li>
                    <li>
                        <Link to='/'>Back</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/admin/clients">
                        <Clients />
                    </Route>
                    <Route exact path="/admin/news">
                        <News />
                    </Route>
                </Switch>
            </div>
            
        </Router>
    )
}

export default Admin
