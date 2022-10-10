import React, {useRef, useState} from 'react';
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
  appIcons,
  appLogos,
  appImages,
  registerVS,
  registerFormFields,
  platformOrientedCode,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton} from '../../../components';
import styles from './styles';

const Register = ({navigation}) => {
  const formikRef = useRef();
  const [country, setcountry] = useState(null);
  const [cca2, setcca2] = useState('US');
  const [countryCode, setCountryCode] = useState('1');
  const [showCountryPicker, setshowCountryPicker] = useState(false);

  const handleRegister = values => {
    formikRef.current?.resetForm();
    navigation.navigate('AddCarInfo');
  };

  const handleGoogleLogin = () => {};
  const handleFBLogin = () => {};
  const handleAppleLogin = () => {};

  const setCountryValue = val => {
    setCountryCode(val.callingCode[0]);
    setcca2(val.cca2);
    setcountry(val);
    setshowCountryPicker(false);
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Formik
        innerRef={formikRef}
        initialValues={registerFormFields}
        onSubmit={values => {
          handleRegister(values);
        }}
        validationSchema={registerVS}>
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
              onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
            <Image
              resizeMode="contain"
              source={appLogos.appLogo}
              style={styles.logoStyle}
            />
            <Spacer androidVal={WP('11')} iOSVal={WP('11')} />
            <AppInput
              renderErrorMessage
              disableFullscreenUI
              value={values.name}
              blurOnSubmit={false}
              touched={touched.name}
              title="Enter your name"
              errorMessage={errors.name}
              placeholder="Enter your name"
              placeholderTextColor={colors.g2}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
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
              leftIcon
              cca2={cca2}
              countryInput
              renderErrorMessage
              disableFullscreenUI
              blurOnSubmit={false}
              autoCapitalize="none"
              value={values.number}
              touched={touched.number}
              keyboardType={'phone-pad'}
              title={'Enter phone number'}
              placeholder={'000 0000 000'}
              errorMessage={errors.number}
              onChangeText={handleChange('number')}
              onBlur={() => setFieldTouched('number')}
              onSelect={val => {
                setCountryValue(val);
              }}
              countryCode={countryCode}
              country={country}
              onPressCountryPicker={() => {
                setshowCountryPicker(true);
              }}
              countryPicker={showCountryPicker}
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
              title="Enter password"
              keyboardType="email-address"
              errorMessage={errors.password}
              onSubmitEditing={handleSubmit}
              placeholderTextColor={colors.g2}
              placeholder="Enter password"
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
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              secureTextEntry
              bottom={WP('3')}
              renderErrorMessage
              disableFullscreenUI
              blurOnSubmit={false}
              title="Confirm password"
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              keyboardType="email-address"
              errorMessage={errors.confirmPassword}
              onSubmitEditing={handleSubmit}
              placeholderTextColor={colors.g2}
              placeholder="Confirm password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              rightIcon={
                <Icon
                  name={'eye'}
                  type={'feather'}
                  size={18}
                  color={colors.g20}
                />
              }
            />
            <Spacer androidVal={WP('9')} iOSVal={WP('9')} />
            <AppButton title="Create Account" onPress={() => handleSubmit()} />
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
              <Text onPress={() => {}}>Terms & Condition</Text>
              {'\n'}and <Text onPress={() => {}}>Privacy Policy </Text>
              Conditions.
            </Text>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default Register;
