import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';

export const HomeHeader = ({
  onPress,
  rightIcon,
  title = '',
  isHome = false,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation?.toggleDrawer()}>
          <Image source={appIcons.drawerIcon} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.txtStyle}>{title}</Text>
        {isHome && (
          <LinearGradient
            colors={colors.g_gradient}
            style={styles.gradientStyle}>
            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={onPress}
              style={styles.rowStyle}>
              <Image
                source={appIcons.walletIcon}
                style={styles.walletIconStyle}
              />
              <Text style={styles.balanceTxtColor}>$40.00</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        {rightIcon && rightIcon}
        {!rightIcon && !isHome && (
          <Text style={styles.dummyTxtColor}>spots</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('1.5'),
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
  },
  gradientStyle: {
    padding: 10,
    borderRadius: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIconStyle: {
    width: 19,
    height: 18,
  },
  balanceTxtColor: {
    paddingLeft: 8,
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_SemiBold,
  },
  txtStyle: {
    left: WP('2.3'),
    color: colors.white,
    fontSize: size.xxlarge,
    fontFamily: family.SFProText_SemiBold,
  },
  dummyTxtColor: {
    color: 'transparent',
  },
});
