import React, {useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  LoginVS,
  appIcons,
  appLogos,
  appImages,
  loginFormFields,
  platformOrientedCode,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton} from '../../../components';
import styles from './styles';

const Login = ({navigation}) => {
  const formikRef = useRef();

  const handleLogin = values => {
    formikRef.current?.resetForm();
    navigation.navigate('App');
  };

  const handleGoogleLogin = () => {};
  const handleFBLogin = () => {};
  const handleAppleLogin = () => {};

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={values => {
          handleLogin(values);
        }}
        validationSchema={LoginVS}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={styles.regTxtStyle}
              onPress={() => navigation.navigate('App')}>
              Register
            </Text>
            <Image
              resizeMode="contain"
              source={appLogos.appLogo}
              style={styles.logoStyle}
            />
            <Spacer androidVal={WP('17.5')} iOSVal={WP('17.5')} />
            <AppInput
              renderErrorMessage
              disableFullscreenUI
              value={values.email}
              blurOnSubmit={false}
              touched={touched.email}
              title="Enter your email"
              errorMessage={errors.email}
              keyboardType="email-address"
              placeholder="Enter your email"
              placeholderTextColor={colors.g2}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              secureTextEntry
              bottom={WP('3')}
              renderErrorMessage
              disableFullscreenUI
              blurOnSubmit={false}
              value={values.password}
              touched={touched.password}
              title="Enter your password"
              keyboardType="email-address"
              errorMessage={errors.password}
              onSubmitEditing={handleSubmit}
              placeholderTextColor={colors.g2}
              placeholder="Enter your password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              rightIcon={
                <Icon
                  name={'eye'}
                  type={'feather'}
                  size={18}
                  color={colors.g20}
                />
              }
            />
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text
                style={styles.forgotTxtStyle}
                onPress={() => navigation.navigate('ForgotPassword')}>
                forgot your password
              </Text>
            </TouchableOpacity>
            <Spacer androidVal={WP('11')} iOSVal={WP('11')} />
            <AppButton title="Login" onPress={() => handleSubmit()} />
            <Spacer androidVal={WP('11')} iOSVal={WP('11')} />
            <View style={styles.orViewContainer}>
              <View style={styles.lineView} />
              <Text style={styles.orTxtStyle}>or</Text>
              <View style={styles.lineView} />
            </View>
            <Spacer androidVal={WP('10')} iOSVal={WP('10')} />
            <View style={styles.iconContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleGoogleLogin()}>
                <Image
                  resizeMode="contain"
                  source={appIcons.googleIcon}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleFBLogin()}>
                <Image
                  resizeMode="contain"
                  source={appIcons.fbIcon}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleAppleLogin()}>
                <Image
                  resizeMode="contain"
                  source={appIcons.appleIcon}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>
            <Spacer androidVal={WP('21')} iOSVal={WP('21')} />
            <Text style={styles.descTxtStyle}>
              By signing in you agree to our{' '}
              <Text onPress={() => navigation.navigate('TermsConditions')}>
                Terms & Condition
              </Text>
              {'\n'}and{' '}
              <Text onPress={() => navigation.navigate('PrivacyPolicy')}>
                Privacy Policy{' '}
              </Text>
              Conditions.
            </Text>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default Login;
