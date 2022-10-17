import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  appImages,
  updateCarInfoVS,
  updateCarInfoFormFields,
} from '../../../../shared/exporter';
import {
  Spacer,
  AppModal,
  AppInput,
  AppButton,
  AppLoader,
  DropdownPicker,
  ImagePickerModal,
} from '../../../../components';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {getCarSpecsRequest} from '../../../../redux/actions';

const UpdateCarInfo = ({navigation}) => {
  const formikRef = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [carBrands, setCarBrands] = useState(false);
  const [carModels, setCarModels] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [carImages, setCarImages] = useState([{img: ''}]);
  const [showAppModal, setShowAppModal] = useState(false);
  const [showImgPicker, setShowImgPicker] = useState(false);
  const [openBrandPicker, setOpenBrandPicker] = useState(false);
  const [openModelPicker, setOpenModelPicker] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  useEffect(() => {
    getCarSpecs();
  }, []);

  const getCarSpecs = () => {
    setIsLoading(true);
    dispatch(
      getCarSpecsRequest(
        res => {
          setIsLoading(false);
          setCarBrands(res?.car_brand);
        },
        err => {
          setIsLoading(false);
          console.log('Err ==> ', err);
        },
      ),
    );
  };

  const handleUpdateInfo = values => {
    setShowAppModal(true);
    // formikRef.current?.resetForm();
  };

  //Gallery Handlers
  const openGallery = () => {
    setShowImgPicker(false);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
      }).then(image => {
        setCarImages([...carImages, {img: image}]);
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
        setCarImages([...carImages, {img: image}]);
      });
    }, 400);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        {item?.img === '' ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowImgPicker(true)}
            style={styles.pickImgViewStyle}>
            <Icon
              name={'add'}
              type={'materialIcons'}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        ) : (
          <Image
            source={{uri: item?.img?.path}}
            style={styles.itemImgStyle(index)}
          />
        )}
      </View>
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
      <Formik
        innerRef={formikRef}
        initialValues={updateCarInfoFormFields}
        onSubmit={values => {
          handleUpdateInfo(values);
        }}
        validationSchema={updateCarInfoVS}>
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
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewStyle}>
            <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
            <Text style={styles.passTxtStyle}>Tell us about{'\n'}your car</Text>
            <Spacer androidVal={WP('8')} iOSVal={WP('8')} />
            <DropdownPicker
              data={carBrands}
              onSelect={(selectedItem, index) => {
                setFieldValue('brand', {selectedItem});
                setCarModels(selectedItem?.car_models);
              }}
              title={'Made / Brand'}
              touched={touched.brand}
              errorMessage={errors.brand}
              isPickerOpen={openBrandPicker}
              defaultButtonText="Choose Brand"
              onFocus={() => setOpenBrandPicker(true)}
              onBlur={() => setOpenBrandPicker(false)}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <DropdownPicker
              data={carModels}
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
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <View style={styles.inputsRow}>
              <AppInput
                width={WP('28')}
                renderErrorMessage
                disableFullscreenUI
                value={values.length}
                title="Length (mm)"
                blurOnSubmit={false}
                touched={touched.length}
                keyboardType="numeric"
                placeholder="Length"
                errorMessage={errors.length}
                placeholderTextColor={colors.g2}
                onChangeText={handleChange('length')}
                onBlur={() => setFieldTouched('length')}
              />
              <AppInput
                width={WP('28')}
                renderErrorMessage
                disableFullscreenUI
                value={values.width}
                title="Width (mm)"
                blurOnSubmit={false}
                touched={touched.width}
                keyboardType="numeric"
                placeholder="Width"
                errorMessage={errors.width}
                placeholderTextColor={colors.g2}
                onChangeText={handleChange('width')}
                onBlur={() => setFieldTouched('width')}
              />
              <AppInput
                width={WP('28')}
                renderErrorMessage
                disableFullscreenUI
                value={values.height}
                title="Height (ratio)"
                blurOnSubmit={false}
                touched={touched.height}
                keyboardType="numeric"
                placeholder="Height"
                errorMessage={errors.height}
                placeholderTextColor={colors.g2}
                onChangeText={handleChange('height')}
                onBlur={() => setFieldTouched('height')}
              />
            </View>
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
            <Spacer androidVal={WP('2.5')} iOSVal={WP('2.5')} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.checkoxRow}
              onPress={() => setIsChecked(!isChecked)}>
              <Icon
                type={'antdesign'}
                size={22}
                name={isChecked ? 'checksquare' : 'checksquareo'}
                color={isChecked ? colors.p5 : colors.g2}
              />
              <Text style={styles.showTxtStyle}>Show in profile</Text>
            </TouchableOpacity>
            <Text style={styles.uploadTxtStyle}>Upload Photos</Text>
            <FlatList
              data={carImages}
              numColumns={2}
              extraData={carImages}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
            />
            <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
            <AppButton title="Update" onPress={() => handleSubmit()} />
            <Spacer androidVal={WP('2')} iOSVal={WP('2')} />
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
          title={'Car Info Successfully\nUpdated!'}
          onPressHide={() => setShowAppModal(false)}
        />
      )}
    </ImageBackground>
  );
};

export default UpdateCarInfo;
