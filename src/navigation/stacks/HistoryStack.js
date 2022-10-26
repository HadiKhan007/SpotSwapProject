import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import History from '../../screens/App/History/History';
import HistoryDetail from '../../screens/App/History/History/HistoryDetail';

const Stack = createNativeStackNavigator();

function HistoryStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
    </Stack.Navigator>
  );
}

export default HistoryStack;
