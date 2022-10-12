import React, {useRef, useState} from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  appImages,
  personalInfoVS,
  personalInfoFormFields,
} from '../../../../shared/exporter';
import {
  Spacer,
  AppInput,
  AppModal,
  AppButton,
  AppHeader,
  ImagePickerModal,
} from '../../../../components';
import styles from './styles';

const PersonalInfo = ({navigation}) => {
  const formikRef = useRef();
  const [cca2, setcca2] = useState('US');
  const [country, setcountry] = useState(null);
  const [personImage, setPersonImage] = useState('');
  const [countryCode, setCountryCode] = useState('1');
  const [showAppModal, setShowAppModal] = useState(false);
  const [showImgPicker, setShowImgPicker] = useState(false);
  const [showCountryPicker, setshowCountryPicker] = useState(false);

  const handleUpdateInfo = values => {
    setShowAppModal(true);
    // formikRef.current?.resetForm();
  };

  const setCountryValue = val => {
    setCountryCode(val.callingCode[0]);
    setcca2(val.cca2);
    setcountry(val);
    setshowCountryPicker(false);
  };

  //Gallery Handlers
  const openGallery = () => {
    setShowImgPicker(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
      }).then(image => {
        setPersonImage(image);
      });
    }, 400);
  };

  //Camera Handlers
  const openCamera = () => {
    setShowImgPicker(false);
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
      }).then(image => {
        setPersonImage(image);
      });
    }, 400);
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Personal Information"
        onBackPress={() => navigation.goBack()}
      />
      <Formik
        innerRef={formikRef}
        initialValues={personalInfoFormFields}
        onSubmit={values => {
          handleUpdateInfo(values);
        }}
        validationSchema={personalInfoVS}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollViewStyle}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.imageContainer}
              onPress={() => setShowImgPicker(true)}>
              <ImageBackground
                source={personImage ? {uri: personImage?.path} : appImages.car}
                style={styles.imgStyle}
                blurRadius={10}
                imageStyle={styles.imgRadiusStyle}>
                <Icon
                  type={'feather'}
                  name={'edit-3'}
                  size={18}
                  color={colors.white}
                />
              </ImageBackground>
            </TouchableOpacity>
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
            <Spacer androidVal={WP('9')} iOSVal={WP('9')} />
            <View style={styles.bottomView}>
              <AppButton title="Update" onPress={() => handleSubmit()} />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
      {showImgPicker && (
        <ImagePickerModal
          show={showImgPicker}
          onPressGallery={() => {
            openGallery();
          }}
          onPressCamera={() => {
            openCamera();
          }}
          onPressHide={() => setShowImgPicker(false)}
        />
      )}
      {showAppModal && (
        <AppModal
          show={showAppModal}
          title={'Profile Successfully\nUpdated!'}
          onPressHide={() => setShowAppModal(false)}
        />
      )}
    </ImageBackground>
  );
};

export default PersonalInfo;
