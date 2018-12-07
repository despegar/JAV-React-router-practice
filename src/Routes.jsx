
// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const AppRoutes = () => {
return <App>
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
    </Switch>
</App>
};

export default AppRoutes;