import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import History from '../../screens/App/History/History';

const Stack = createNativeStackNavigator();

function HistoryStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}

export default HistoryStack;
