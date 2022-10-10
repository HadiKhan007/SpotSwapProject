import React from 'react';
import {Text, ScrollView, ImageBackground} from 'react-native';
import {HomeHeader} from '../../../../components';
import {appImages} from '../../../../shared/exporter';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader isHome={true} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleTxtStyle}>Home</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
