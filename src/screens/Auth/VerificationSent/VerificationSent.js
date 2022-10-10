import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {WP, appImages} from '../../../shared/exporter';
import {Spacer, AppButton} from '../../../components';
import styles from './styles';

const VerificationSent = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
      <Text style={styles.passTxtStyle}>Verification Sent</Text>
      <Text style={styles.descTxtStyle}>
        Please check your messages if you’ve received an OTP
      </Text>
      <Spacer androidVal={WP('22')} iOSVal={WP('22')} />
      <AppButton
        title="Enter OTP"
        onPress={() => navigation.navigate('VerifyOTP')}
      />
    </ImageBackground>
  );
};

export default VerificationSent;
