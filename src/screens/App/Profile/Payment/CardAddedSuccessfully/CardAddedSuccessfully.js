import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {appImages} from '../../../../../shared/exporter';
import styles from './styles';
import {AppButton} from '../../../../../components';

const CardAddedSuccessfully = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Text style={styles.titleText}>Card Added Successfully</Text>
      <Text style={styles.subText}>
        Your credit card has been added {'\n'} successfully.
      </Text>
      <View style={styles.bottomView}>
        <AppButton
          title="Pay Now"
          onPress={() => navigation.navigate('PaymentSuccessful')}
        />
      </View>
    </ImageBackground>
  );
};

export default CardAddedSuccessfully;
