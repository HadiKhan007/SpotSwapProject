import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HomeHeader} from '../../../../components';
import {appIcons, appImages} from '../../../../shared/exporter';
import styles from './styles';

const Profile = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader
        title="Profile"
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Settings')}>
            <Image source={appIcons.settingsIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        }
        onPress={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleTxtStyle}>Profile</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
