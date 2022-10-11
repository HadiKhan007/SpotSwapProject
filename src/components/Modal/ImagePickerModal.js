import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors, WP, appIcons, family, size} from '../../shared/exporter';

export const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
}) => {
  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
          <View style={styles.leftContainer}>
            <Image source={appIcons.cameraIcon} style={styles.imageStyle} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.btnText}>Take Image from Camera</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
          <View style={styles.leftContainer}>
            <Image source={appIcons.galleryIcon} style={styles.imageStyle} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.btnText}>Pick Image from Gallery</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.b1,
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnText: {
    color: colors.g5,
    textAlign: 'left',
    fontSize: size.small,
    paddingVertical: WP('5'),
    fontFamily: family.SFProText_SemiBold,
  },
  imageStyle: {
    width: 20,
    height: 20,
    tintColor: colors.g5,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',
    alignItems: 'center',
    paddingVertical: WP('5'),
    justifyContent: 'center',
  },
});
