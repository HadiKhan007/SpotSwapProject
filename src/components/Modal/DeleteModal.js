import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  colors,
  family,
  platformOrientedCode,
  size,
  WP,
} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {AppButton} from '../AppButton/AppButton';

const DeleteModal = ({
  show,
  onPressHide,
  title,
  subTitle,
  bgColor,
  btnTitle,
  subBtnTitle,
}) => {
  return (
    <Modal isVisible={show}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subText}>{subTitle} </Text>
        <AppButton
          title={btnTitle}
          bgColor={bgColor}
          onPress={onPressHide}
          width={WP('45')}
        />
        <Text style={styles.textCancel}>{subBtnTitle}</Text>
      </View>
    </Modal>
  );
};

export {DeleteModal};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: WP('1.5'),
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: WP('5'),
  },
  titleText: {
    color: colors.b1,
    fontFamily: family.SFProText_Medium,
    fontWeight: '600',
    fontSize: size.xxlarge,
    paddingVertical: WP('5'),
    textAlign: 'center',
  },
  subText: {
    color: colors.b1,
    fontWeight: '600',
    fontSize: size.normal,
    textAlign: 'center',
    fontFamily: family.SFProText_Regular,
    paddingVertical: WP('5'),
  },
  buttonContainer: (width, height) => {
    return {
      width: width,
      borderWidth: 1,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      borderColor: colors.s3,
      justifyContent: 'center',
      height: platformOrientedCode(height, height),
    };
  },
  btnTxtStyle: {
    textAlign: 'right',
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.SFProText_SemiBold,
  },
  textCancel: {
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.SFProText_Medium,
    textAlign: 'center',
    paddingVertical: WP('5'),
  },
});
