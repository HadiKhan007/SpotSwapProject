import React, {useEffect} from 'react';
import {Text, Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appImages, appLogos} from '../../shared/theme/assets';
import styles from './styles';

// redux stuff
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  // redux stuff
  const {userInfo} = useSelector(state => state?.auth);

  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    const isWalkthrough = await AsyncStorage.getItem('walkthrough');
    setTimeout(() => {
      if (isWalkthrough) {
        if (userInfo?.token) {
          navigation.replace('App');
        } else {
          navigation.replace('Auth');
        }
      } else {
        navigation.replace('Walkthrough');
      }
    }, 500);
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.splash_bg}>
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
