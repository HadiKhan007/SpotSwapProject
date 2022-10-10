import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {AppHeader} from '../../../components';
import RenderHtml from 'react-native-render-html';
import {appImages, scrWidth} from '../../../shared/exporter';
import styles from './styles';

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

const PrivacyPolicy = ({navigation}) => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleTxtStyle}>Privacy Policy</Text>
        <View style={styles.contentContainer}>
          <RenderHtml contentWidth={scrWidth} source={source} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PrivacyPolicy;
