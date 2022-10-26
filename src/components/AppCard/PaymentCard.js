import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const PaymentCard = ({leftIcon, titleText, subTitle, titleStyle}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={leftIcon} style={styles.ImgStyle} />
      <View style={styles.innerView}>
        <Text style={[styles.titleText, {...titleStyle}]}>{titleText}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.t1,
    borderRadius: 10,
    padding: WP('3'),
    flexDirection: 'row',
    marginTop: WP('5'),
  },
  innerView: {
    paddingHorizontal: WP('4'),
  },
  ImgStyle: {
    width: WP('15'),
    height: WP('10'),
    resizeMode: 'contain',
  },
  titleText: {
    color: colors.white,
    fontSize: size.normal,
    fontWeight: '400',
    fontFamily: family.SFProText_Medium,
  },
  subTitle: {
    color: colors.w1,
    fontSize: size.tiny,
    paddingVertical: WP('1'),
    fontFamily: family.SFProText_Light,
  },
});
