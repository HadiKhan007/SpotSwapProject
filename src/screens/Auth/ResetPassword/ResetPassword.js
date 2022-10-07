import React, {useRef} from 'react';
import {Text, ImageBackground} from 'react-native';
import {Formik} from 'formik';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  appImages,
  resetPassVS,
  resetPassFormFields,
  platformOrientedCode,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton} from '../../../components';
import styles from './styles';

const ResetPassword = ({navigation}) => {
  const formikRef = useRef();

  const handleUpdatePassword = values => {
    formikRef.current?.resetForm();
    navigation.navigate('PasswordUpdated');
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Formik
        innerRef={formikRef}
        initialValues={resetPassFormFields}
        onSubmit={values => {
          handleUpdatePassword(values);
        }}
        validationSchema={resetPassVS}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
            <Text style={styles.passTxtStyle}>Create New Password</Text>
            <Text style={styles.descTxtStyle}>
              Set your new password for recovery
            </Text>
            <Spacer androidVal={WP('20')} iOSVal={WP('20')} />
            <AppInput
              secureTextEntry
              bottom={WP('3')}
              renderErrorMessage
              disableFullscreenUI
              blurOnSubmit={false}
              value={values.password}
              touched={touched.password}
              keyboardType="email-address"
              errorMessage={errors.password}
              onSubmitEditing={handleSubmit}
              title="Enter your new password"
              placeholderTextColor={colors.g2}
              placeholder="New password"
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
              title="Confirm new password"
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
            <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
            <AppButton title="Create Password" onPress={() => handleSubmit()} />
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default ResetPassword;
