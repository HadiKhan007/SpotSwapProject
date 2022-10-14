import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Icon} from 'react-native-elements';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  LoginVS,
  appIcons,
  appLogos,
  appImages,
  loginFormFields,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton, AppLoader} from '../../../components';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {loginRequest, socialLoginRequest} from '../../../redux/actions';

const Login = ({navigation}) => {
  const formikRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  const handleLogin = values => {
    setIsLoading(true);
    const params = new FormData();
    params.append('name', values?.name);
    params.append('email', values?.email);
    params.append('contact', values?.number);
    params.append('password', values?.password);
    dispatch(
      loginRequest(
        params,
        res => {
          setIsLoading(false);
          formikRef.current?.resetForm();
          if (res?.user?.profile_complete) {
            navigation.navigate('App');
          } else {
            navigation.navigate('AddCarInfo');
          }
        },
        err => {
          setIsLoading(false);
          Alert.alert('Login Fail', err, [
            {
              text: 'OK',
            },
          ]);
        },
      ),
    );
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      if (idToken) {
        handleSocialLogin('google', idToken);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancel');
        setIsLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setIsLoading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleFBLogin = () => {
    try {
      LoginManager.logOut();
      if (Platform.OS === 'android') {
        LoginManager.setLoginBehavior('web_only');
      }
      // Attempt a login using the Facebook login dialog asking for default permissions.
      LoginManager.logInWithPermissions(['public_profile', 'email'])
        .then(res => {
          console.log('[Permission Granted]', res);
          if (res?.isCancelled) {
            console.log('User canceled login');
          } else {
            AccessToken.getCurrentAccessToken()
              .then(token => {
                console.log('Token ==> ', token?.accessToken);
                handleSocialLogin('facebook', token?.accessToken);
              })
              .catch(error => console.log('error', error));
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log('[facebook err]', err);
    }
  };

  const handleAppleLogin = () => {};

  const handleSocialLogin = (provider, token) => {
    setIsLoading(true);
    const params = new FormData();
    params.append('token', token);
    params.append('provider', provider);
    dispatch(
      socialLoginRequest(
        params,
        res => {
          setIsLoading(false);
          console.log('Res is ==> ', res);
          if (res?.user?.profile_complete) {
            navigation.navigate('App');
          } else {
            navigation.navigate('AddCarInfo');
          }
        },
        err => {
          setIsLoading(false);
          Alert.alert('Login Fail', err, [
            {
              text: 'OK',
            },
          ]);
        },
      ),
    );
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
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
              onPress={() => navigation.navigate('Register')}>
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
