import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {appImages} from '../../../../../shared/exporter';
import styles from './styles';
import {AppButton} from '../../../../../components';

const PaymentSuccessful = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Text style={styles.titleText}>Payment Successful</Text>
      <Text style={styles.subText}>Your payment has been successful </Text>
      <View style={styles.bottomView}>
        <AppButton title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

export default PaymentSuccessful;
