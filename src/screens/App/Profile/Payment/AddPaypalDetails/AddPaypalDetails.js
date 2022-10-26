import {View, ImageBackground} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {Formik} from 'formik';
import {
  appImages,
  colors,
  payPalDetailFormField,
  payPalDetailVs,
  WP,
} from '../../../../../shared/exporter';
import {
  AppButton,
  AppHeader,
  AppInput,
  Spacer,
} from '../../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddPaypalDetails = ({navigation}) => {
  const formikRef = useRef();

  const onConnect = ({value}) => {
    navigation.navigate('PaypalAddedSuccessfully');
  };
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Add Paypal Details"
        onBackPress={() => navigation.goBack()}
      />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <Formik
        innerRef={formikRef}
        initialValues={payPalDetailFormField}
        onSubmit={values => {
          onConnect(values);
        }}
        validationSchema={payPalDetailVs}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <AppInput
              title="Enter Email"
              placeholder="lilacmacbeth@gmail.com"
              phTextColor={colors.white}
              touched={touched.email}
              errorMessage={errors.email}
              renderErrorMessage
              onBlur={() => setFieldTouched('email')}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <View style={styles.bottomView}>
              <AppButton title="Connect" onPress={() => handleSubmit()} />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default AddPaypalDetails;
