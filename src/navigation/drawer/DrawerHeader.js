import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  WP,
  size,
  colors,
  family,
  appImages,
  StatusBarHeight,
  platformOrientedCode,
} from '../../shared/exporter';
import {drawerList} from '../../shared/utilities/constant';

const DrawerHeader = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.headerView}
        onPress={() => navigation.navigate('Profile')}>
        <Image source={appImages.car} style={styles.imgStyle} />
        <View>
          <Text style={styles.nameTxtStyle}>{userInfo?.name}</Text>
          <Text style={styles.profileTxtStyle}>Profile</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dividerView} />
      {drawerList.map((item, i) => (
        <>
          <TouchableOpacity
            key={item?.id}
            activeOpacity={0.7}
            style={styles.rowContainer}
            onPress={() => navigation.navigate(item.screen)}>
            <Image
              source={item.icon}
              resizeMode={'contain'}
              style={styles.iconStyle}
            />
            <Text style={styles.labelTextStyle}>{item.label}</Text>
          </TouchableOpacity>
          <View style={styles.dividerView} />
        </>
      ))}
    </SafeAreaView>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.g6,
    paddingTop: StatusBarHeight,
  },
  headerView: {
    width: WP('72'),
    marginTop: WP('2'),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: WP('2'),
    paddingHorizontal: WP('9'),
  },
  imgStyle: {
    width: WP('10'),
    height: WP('10'),
    borderRadius: 30,
  },
  nameTxtStyle: {
    marginLeft: 9,
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.SFProText_SemiBold,
  },
  profileTxtStyle: {
    marginTop: 4,
    marginLeft: 9,
    color: colors.white,
    fontSize: size.xxxtiny,
    fontFamily: family.SFProText_Medium,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: WP('4'),
    marginTop: platformOrientedCode(WP('7.7'), WP('8.2')),
    paddingHorizontal: platformOrientedCode(WP('9.2'), WP('9.7')),
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
  },
  labelTextStyle: {
    left: 10,
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Medium,
  },
  dividerView: {
    height: 1,
    width: '100%',
    backgroundColor: colors.g7,
  },
});
