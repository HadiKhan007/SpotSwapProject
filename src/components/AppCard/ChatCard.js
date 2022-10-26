import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appImages, colors, family, size, WP} from '../../shared/exporter';

const ChatCard = ({Iconimage, Title, subTitle, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainConatiner}
      TouchableOpacity={0.7}
      onPress={onPress}>
      <Image source={Iconimage} style={styles.imgStyles} resizeMode="contain" />
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>{Title}</Text>
        <Text style={styles.subText}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {ChatCard};

const styles = StyleSheet.create({
  mainConatiner: {
    marginTop: WP('3'),
    flexDirection: 'row',
    backgroundColor: colors.t1,
    borderRadius: 10,
    padding: WP('3'),
    alignItems: 'center',
  },
  imgStyles: {
    width: WP('15'),
    height: WP('15'),
    borderRadius: WP('7.5'),
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  innerContainer: {
    marginLeft: WP('2'),
  },
  titleText: {
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Medium,
  },
  subText: {
    color: colors.w1,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Light,
    paddingTop: WP('2'),
  },
});
