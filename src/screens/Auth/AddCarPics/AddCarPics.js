import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  FlatList,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {WP, appImages, colors} from '../../../shared/exporter';
import {
  Spacer,
  AppButton,
  AppLoader,
  ImagePickerModal,
} from '../../../components';
import styles from './styles';

// redux stuff
import {useSelector, useDispatch} from 'react-redux';
import {createCarProfileRequest} from '../../../redux/actions';

const AddCarPics = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [carImages, setCarImages] = useState([{img: ''}]);
  const [showImgPicker, setShowImgPicker] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);
  const {userInfo} = useSelector(state => state?.auth);

  const handleSubmit = () => {
    let values = route?.params?.item;
    setIsLoading(true);
    const params = new FormData();
    params.append('user_id', userInfo?.id);
    params.append('car_brand_id', values?.brand?.selectedItem?.id);
    params.append('car_model_id', values?.model?.selectedItem?.id);
    params.append('length', values?.length);
    params.append('color', values?.color);
    if (values?.plate_number) {
      params.append('plate_number', values?.plateNumber);
    }
    carImages?.forEach(item => {
      if (item?.img) {
        params.append('photos[]', {
          uri: Platform.OS === 'ios' ? item?.img?.sourceURL : item?.img?.path,
          name: item?.img?.filename || 'image',
          type: item?.img?.mime,
        });
      }
    });
    dispatch(
      createCarProfileRequest(
        params,
        res => {
          setIsLoading(false);
          Alert.alert('Created', 'Car profile created successfully.', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Welcome');
              },
            },
          ]);
        },
        err => {
          setIsLoading(false);
          Alert.alert('Car Information', err[0], [
            {
              text: 'OK',
            },
          ]);
        },
      ),
    );
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
      <>
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
          <Image source={{uri: item?.img?.path}} style={styles.itemImgStyle} />
        )}
        {index % 2 === 0 ? <View style={styles.spaceView} /> : null}
      </>
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
        <Text style={styles.passTxtStyle}>Tell us about{'\n'}your car</Text>
        <Spacer androidVal={WP('8')} iOSVal={WP('8')} />
        <Text style={styles.nameTxtStyle}>
          Toyota Avanza 55LG (Default Image)
        </Text>
        <Image source={appImages.car} style={styles.imgStyle} />
        <Text style={styles.uploadTxtStyle}>Upload Photos (Optional)</Text>
        <FlatList
          data={carImages}
          numColumns={2}
          extraData={carImages}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        <Spacer androidVal={WP('17')} iOSVal={WP('17')} />
      </KeyboardAwareScrollView>
      <View style={styles.bottomView}>
        <AppButton title="Submit" onPress={() => handleSubmit()} />
      </View>
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
    </ImageBackground>
  );
};

export default AddCarPics;
