import React, {useEffect} from 'react';
import {Text, Image, StatusBar, ImageBackground} from 'react-native';
import {appImages, appLogos} from '../../shared/theme/assets';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      // navigation.replace('Walkthrough');
    }, 2500);
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.splash_bg}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Image
        resizeMode="contain"
        source={appLogos.appLogo}
        style={styles.logoStyle}
      />
      <Text style={styles.logoTxtStyle}>Your easy fix in finding parking</Text>
    </ImageBackground>
  );
};

export default Splash;
