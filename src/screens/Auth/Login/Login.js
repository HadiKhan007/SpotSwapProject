import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  appIcons,
  appImages,
  appLogos,
  colors,
  platformOrientedCode,
  WP,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton} from '../../../components';
import styles from './styles';

const Login = () => {
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.regTxtStyle}>Register</Text>
        <Image
          resizeMode="contain"
          source={appLogos.appLogo}
          style={styles.logoStyle}
        />
        <Spacer androidVal={68} iOSVal={WP('17.5')} />
        <AppInput
          title="Enter your email"
          placeholder="lilacmc@gmail.com"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor={colors.g2}
        />
        <AppInput
          placeholder="Enter your password"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor={colors.g2}
          secureTextEntry
          bottom={WP('3')}
          rightIcon={
            <Icon name={'eye'} type={'feather'} size={18} color={colors.g20} />
          }
        />
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Text style={styles.forgotTxtStyle}>forgot your password</Text>
        </TouchableOpacity>
        <Spacer androidVal={45} iOSVal={WP('11')} />
        <AppButton
          title="Login"
          onPress={() => {}}
          width={platformOrientedCode(235, WP('60'))}
        />
        <Spacer androidVal={45} iOSVal={WP('11')} />
        <View style={styles.orViewContainer}>
          <View style={styles.lineView} />
          <Text style={styles.orTxtStyle}>or</Text>
          <View style={styles.lineView} />
        </View>
        <Spacer androidVal={40} iOSVal={WP('10')} />
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            source={appIcons.googleIcon}
            style={styles.iconStyle}
          />
          <Image
            resizeMode="contain"
            source={appIcons.fbIcon}
            style={styles.iconStyle}
          />
          <Image
            resizeMode="contain"
            source={appIcons.appleIcon}
            style={styles.iconStyle}
          />
        </View>
        <Spacer androidVal={40} iOSVal={WP('21')} />
        <Text style={styles.descTxtStyle}>
          By signing in you agree to our{' '}
          <Text onPress={() => {}}>Terms & Condition</Text>
          {'\n'}and <Text onPress={() => {}}>Privacy Policy</Text>
          Conditions.
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
