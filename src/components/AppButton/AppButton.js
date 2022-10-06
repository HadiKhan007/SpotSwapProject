import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  size,
  colors,
  family,
  platformOrientedCode,
} from '../../shared/exporter';

const AppButton = ({title, onPress, width = '100%'}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        colors={colors.b_gradient}
        style={styles.buttonContainer(width)}>
        <Text style={styles.btnTxtStyle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: width => {
    return {
      width: width,
      borderWidth: 1,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      borderColor: colors.s3,
      justifyContent: 'center',
      height: platformOrientedCode(55, 55),
    };
  },
  buttonStyle: width => {
    return {
      width: width,
      borderWidth: 1,
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      borderColor: colors.s3,
      justifyContent: 'center',
      height: platformOrientedCode(55, 55),
      backgroundColor: 'red',
    };
  },
  btnTxtStyle: {
    textAlign: 'right',
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.SFProText_SemiBold,
  },
});

export {AppButton};
