import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../../screens/App/Profile/Profile';
import Settings from '../../screens/App/Profile/Settings';

const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
