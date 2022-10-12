import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../../screens/App/Profile/Profile';
import Settings from '../../screens/App/Profile/Settings';
import FAQs from '../../screens/App/Profile/FAQs';
import PersonalInfo from '../../screens/App/Profile/PersonalInfo';
import UpdateCarInfo from '../../screens/App/Profile/UpdateCarInfo';
import QuickChats from '../../screens/App/Profile/QuickChats';
import AddQuickChat from '../../screens/App/Profile/AddQuickChat';
import EditQuickChat from '../../screens/App/Profile/EditQuickChat';
import PrivacyPolicy from '../../screens/Auth/PrivacyPolicy';
import TermsConditions from '../../screens/Auth/TermsConditions';

const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="UpdateCarInfo" component={UpdateCarInfo} />
      <Stack.Screen name="QuickChats" component={QuickChats} />
      <Stack.Screen name="AddQuickChat" component={AddQuickChat} />
      <Stack.Screen name="EditQuickChat" component={EditQuickChat} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
