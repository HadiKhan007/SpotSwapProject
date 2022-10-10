import React, {useRef, useState} from 'react';
import {Text, ImageBackground} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  appImages,
  carInfoVS,
  carInfoFormFields,
} from '../../../shared/exporter';
import {Spacer, AppInput, AppButton, DropdownPicker} from '../../../components';
import styles from './styles';

const AddCarInfo = ({navigation}) => {
  const formikRef = useRef();
  const [openBrandPicker, setOpenBrandPicker] = useState(false);
  const [openModelPicker, setOpenModelPicker] = useState(false);

  const handleRegister = values => {
    formikRef.current?.resetForm();
    navigation.navigate('AddCarPics');
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <Formik
        innerRef={formikRef}
        initialValues={carInfoFormFields}
        onSubmit={values => {
          handleRegister(values);
        }}
        validationSchema={carInfoVS}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
            <Text style={styles.passTxtStyle}>Tell us about{'\n'}your car</Text>
            <Spacer androidVal={WP('8')} iOSVal={WP('8')} />
            <DropdownPicker
              onSelect={(selectedItem, index) => {
                setFieldValue('brand', {selectedItem});
              }}
              title={'Made / Brand'}
              touched={touched.brand}
              errorMessage={errors.brand}
              isPickerOpen={openBrandPicker}
              defaultButtonText="Choose Brand"
              onFocus={() => setOpenBrandPicker(true)}
              onBlur={() => setOpenBrandPicker(false)}
              data={['Tesla', 'Toyota', 'Hyundai', 'Isuzu']}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <DropdownPicker
              onSelect={(selectedItem, index) => {
                setFieldValue('model', {selectedItem});
              }}
              title={'Car Model'}
              touched={touched.model}
              errorMessage={errors.model}
              isPickerOpen={openModelPicker}
              defaultButtonText="Choose Model"
              onFocus={() => setOpenModelPicker(true)}
              onBlur={() => setOpenModelPicker(false)}
              data={[
                'Tesla Model 1',
                'Tesla Model 2',
                'Tesla Model 3',
                'Tesla Model 4',
              ]}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              renderErrorMessage
              disableFullscreenUI
              value={values.length}
              title="Length (mm)"
              blurOnSubmit={false}
              touched={touched.length}
              keyboardType="numeric"
              placeholder="Enter Length"
              errorMessage={errors.length}
              placeholderTextColor={colors.g2}
              onChangeText={handleChange('length')}
              onBlur={() => setFieldTouched('length')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              title="Color"
              renderErrorMessage
              disableFullscreenUI
              value={values.color}
              blurOnSubmit={false}
              touched={touched.color}
              placeholder="Enter Color"
              errorMessage={errors.color}
              placeholderTextColor={colors.g2}
              onChangeText={handleChange('color')}
              onBlur={() => setFieldTouched('color')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <AppInput
              renderErrorMessage
              disableFullscreenUI
              value={values.plateNumber}
              blurOnSubmit={false}
              touched={touched.plateNumber}
              errorMessage={errors.plateNumber}
              title="Plate Number (Optional)"
              placeholderTextColor={colors.g2}
              placeholder="Enter Plate Number"
              onChangeText={handleChange('plateNumber')}
              onBlur={() => setFieldTouched('plateNumber')}
            />
            <Spacer androidVal={WP('9')} iOSVal={WP('9')} />
            <AppButton title="Continue" onPress={() => handleSubmit()} />
            <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default AddCarInfo;
