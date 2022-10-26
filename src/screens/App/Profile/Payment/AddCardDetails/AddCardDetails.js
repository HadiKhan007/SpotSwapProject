import {View, ImageBackground} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {
  appImages,
  cardDetailsVs,
  cardFormField,
  colors,
  WP,
} from '../../../../../shared/exporter';
import {
  AppButton,
  AppHeader,
  AppInput,
  Spacer,
} from '../../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const AddCardDetails = ({navigation}) => {
  const formikRef = useRef();
  const onAdd = value => {
    navigation.navigate('CardAddSuccessfully');
  };
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Formik
        innerRef={formikRef}
        initialValues={cardFormField}
        onSubmit={values => {
          onAdd(values);
        }}
        validationSchema={cardDetailsVs}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView
            bounces
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <AppHeader
              title="Add Card Details"
              onBackPress={() => navigation.goBack()}
            />
            <Spacer androidVal={WP('7')} iOSVal={WP('7')} />

            <AppInput
              placeholder="1234 456 9087"
              title="Card Number"
              phTextColor={colors.white}
              touched={touched.number}
              errorMessage={errors.number}
              renderErrorMessage
              keyboardType="numeric"
              onBlur={() => setFieldTouched('number')}
              value={values.number}
              onChangeText={handleChange('number')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppInput
                width={WP('42')}
                title="Expiry Date"
                blurOnSubmit={false}
                keyboardType="numeric"
                placeholder="12/29"
                phTextColor={colors.white}
                touched={touched.expiry}
                errorMessage={errors.expiry}
                renderErrorMessage
                onBlur={() => setFieldTouched('expiry')}
                value={values.expiry}
                onChangeText={handleChange('expiry')}
              />
              <AppInput
                width={WP('42')}
                title="CVV"
                blurOnSubmit={false}
                keyboardType="numeric"
                placeholder="458"
                phTextColor={colors.white}
                touched={touched.cvv}
                errorMessage={errors.cvv}
                renderErrorMessage
                onBlur={() => setFieldTouched('cvv')}
                value={values.cvv}
                onChangeText={handleChange('cvv')}
                maxLength={3}
              />
            </View>
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              placeholder="Lilac Macbeth"
              title="Name on card"
              phTextColor={colors.white}
              touched={touched.name}
              errorMessage={errors.name}
              renderErrorMessage
              onBlur={() => setFieldTouched('name')}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <AppInput
              placeholder="105 Westfield Washington DC"
              title="Address"
              phTextColor={colors.white}
              touched={touched.address}
              errorMessage={errors.address}
              renderErrorMessage
              onBlur={() => setFieldTouched('address')}
              value={values.address}
              onChangeText={handleChange('address')}
            />
            <AppInput
              placeholder="USA"
              title="Country"
              phTextColor={colors.white}
              touched={touched.country}
              errorMessage={errors.country}
              renderErrorMessage
              onBlur={() => setFieldTouched('country')}
              value={values.country}
              onChangeText={handleChange('country')}
            />
            <View style={styles.bottomView}>
              <AppButton
                title="Add Card"
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

export default AddCardDetails;
