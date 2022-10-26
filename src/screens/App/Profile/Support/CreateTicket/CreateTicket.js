import React, {useState, useRef} from 'react';
import {View, ImageBackground, Text, TextInput} from 'react-native';
import {
  appImages,
  colors,
  sendMailFormFields,
  ticketFormField,
  ticketVs,
  WP,
} from '../../../../../shared/exporter';
import {
  AppButton,
  AppHeader,
  AppInput,
  Spacer,
} from '../../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const CreateTicket = ({navigation}) => {
  const formikRef = useRef();

  const onSubmit = ({value}) => {
    navigation.navigate('SentSuccess');
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Create Ticket"
        onBackPress={() => navigation.goBack()}
      />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <Formik
        innerRef={formikRef}
        initialValues={ticketFormField}
        onSubmit={values => {
          onSubmit(values);
        }}
        validationSchema={ticketVs}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
          setFieldTouched,
          handleBlur,
        }) => (
          <KeyboardAwareScrollView
            contentContainerStyle={{flexGrow: 1}}
            bounces
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}>
            <Text style={styles.titleText}>
              We’d love to help you{'\n'}with your concern.
            </Text>
            <AppInput
              renderErrorMessage
              placeholder="Lilac Macbeth"
              phTextColor={colors.white}
              title="Enter your name"
              onChangeText={handleChange('name')}
              value={values.name}
              touched={touched.name}
              errorMessage={errors.name}
              onBlur={() => setFieldTouched('name')}
            />
            <Text style={[styles.msgText, {marginTop: errors.name ? 7 : 0}]}>
              Message
            </Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.inputStyle]}
                placeholder="Type here..."
                placeholderTextColor={colors.w1}
                maxLength={600}
                multiline={true}
                onBlur={handleBlur('discription')}
                value={values.discription}
                onChangeText={handleChange('discription')}
              />
              <Text style={styles.countText}>
                {values.discription.length}/600
              </Text>
            </View>
            {errors.discription && touched.discription ? (
              <Text style={styles.errorText}>{errors.discription}</Text>
            ) : null}
            <View style={styles.bottomView}>
              <AppButton
                title="Submit"
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default CreateTicket;
