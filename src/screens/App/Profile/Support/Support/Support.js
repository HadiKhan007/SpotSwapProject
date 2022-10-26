import React, {useState} from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {appImages, WP} from '../../../../../shared/exporter';
import {AppButton, AppHeader, Spacer} from '../../../../../components';
import styles from './styles';
import Pending from './Pending';
import Completed from './Completed';

const Support = ({navigation}) => {
  const [tab, setTab] = useState('Pending');

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader title="Support" onBackPress={() => navigation.goBack()} />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setTab('Pending')}
          style={styles.feedTabStyle(tab == 'Pending')}>
          <Text style={styles.tabTxtStyle(tab == 'Pending')}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setTab('Completed')}
          style={styles.friendsTabStyle(tab !== 'Pending')}>
          <Text style={styles.tabTxtStyle(tab !== 'Pending')}>Completed</Text>
        </TouchableOpacity>
      </View>
      {tab === 'Pending' ? <Pending /> : <Completed />}
      <View style={styles.bottomView}>
        <AppButton
          title="Create Ticket"
          onPress={() => navigation.navigate('CreateTicket')}
        />
      </View>
    </ImageBackground>
  );
};

export default Support;
