import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const TransactionsCard = ({leftIcon, title, subTitle, price}) => {
  return (
    <View style={styles.mainCintainer}>
      <Image source={leftIcon} style={styles.arrowImg} resizeMode="contain" />
      <View style={styles.rowContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.topUpText}>{title}</Text>
          <Text style={styles.subText}>{subTitle}</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
};

export {TransactionsCard};

const styles = StyleSheet.create({
  mainCintainer: {
    backgroundColor: colors.t1,
    borderRadius: 10,
    padding: WP('3.5'),
    flexDirection: 'row',
    marginTop: WP('3'),
  },
  arrowImg: {
    width: WP('10'),
    height: WP('10'),
    alignSelf: 'center',
  },
  innerContainer: {
    paddingLeft: WP('2'),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  topUpText: {
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Medium,
    lineHeight: 19,
  },
  subText: {
    color: colors.g2,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Light,
    paddingTop: WP('1'),
  },
  priceText: {
    color: colors.white,
    fontFamily: family.SFProText_SemiBold,
    fontSize: size.large,
    alignSelf: 'center',
  },
});
