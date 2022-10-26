import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const PaymentMethodCard = ({showState, title, onPress, source}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <Image source={source} style={styles.IconStyle} />
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export {PaymentMethodCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.t1,
    borderRadius: 10,
    padding: WP('5'),
    flexDirection: 'row',
    marginTop: WP('5'),
    alignItems: 'center',
  },
  IconStyle: {
    width: WP('7'),
    height: WP('7'),
    resizeMode: 'cover',
  },
  titleStyle: {
    color: colors.white,
    fontSize: size.normal,
    fontWeight: '400',
    fontFamily: family.SFProText_Medium,
    marginHorizontal: WP('3'),
  },
});
