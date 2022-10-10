import React from 'react';
import {Text, ScrollView, ImageBackground} from 'react-native';
import {AppHeader} from '../../../../components';
import {appImages} from '../../../../shared/exporter';
import styles from './styles';

const History = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleTxtStyle}>History</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default History;
