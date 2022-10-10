import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {WP, appImages, colors} from '../../../shared/exporter';
import {Spacer, AppButton, ImagePickerModal} from '../../../components';
import styles from './styles';

const AddCarPics = ({navigation}) => {
  const [carImages, setCarImages] = useState([{img: ''}]);
  const [showImgPicker, setShowImgPicker] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('Welcome');
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
        setCarImages(image);
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
