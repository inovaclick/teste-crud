import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import AddUser from '../pages/AddUser';
import SearchUsers from '../pages/SearchUsers';
import SearchUser from '../pages/SearchUser';
import UpdateUser from '../pages/UpdateUser';
import DeleteUser from '../pages/DeleteUser';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="AddUser" component={AddUser} />
    <App.Screen name="SearchUsers" component={SearchUsers} />
    <App.Screen name="SearchUser" component={SearchUser} />
    <App.Screen name="UpdateUser" component={UpdateUser} />
    <App.Screen name="DeleteUser" component={DeleteUser} />
  </App.Navigator>
);

export default AppRoutes;
