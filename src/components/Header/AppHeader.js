import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {WP, size, colors, family} from '../../shared/exporter';

export const AppHeader = ({rightIcon = false, onBackPress, title = ''}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Icon
          type={'ionicon'}
          name={'arrow-back'}
          size={24}
          color={colors.white}
          onPress={onBackPress}
        />
        <Text style={styles.txtStyle}>{title}</Text>
        {rightIcon ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onBackPress}>
            <Icon
              type={'ionicon'}
              name={'arrow-back'}
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>
        ) : (
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
