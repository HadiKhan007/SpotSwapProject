import {StyleSheet} from 'react-native';
import {
  colors,
  family,
  platformOrientedCode,
  scrHeight,
  scrWidth,
  size,
  StatusBarHeight,
  WP,
} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  videoStyle: {
    width: scrWidth,
    height: scrHeight,
    backgroundColor: colors.b1,
  },
  buttonCircle: {
    width: scrWidth,
    position: 'absolute',
    top: StatusBarHeight,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  skipTxtStyle: {
    right: WP('5'),
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Regular,
  },
});

export default styles;
