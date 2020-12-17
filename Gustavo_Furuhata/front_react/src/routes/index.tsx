import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import AddUser from '../pages/AddUser';
import SearchUsers from '../pages/SearchUsers';
import SearchUser from '../pages/SearchUser';
import UpdateUser from '../pages/UpdateUser';
import DeleteUser from '../pages/DeleteUser';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/add" exact component={AddUser} />
    <Route path="/users" exact component={SearchUsers} />
    <Route path="/user" exact component={SearchUser} />
    <Route path="/update" exact component={UpdateUser} />
    <Route path="/delete" exact component={DeleteUser} />
  </Switch>
);

export default Routes;
