import {StyleSheet} from 'react-native';
import {
  WP,
  colors,
  StatusBarHeight,
  size,
  family,
} from '../../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
  },
  mainContainer: {},
  titleText: {
    paddingTop: WP('60'),
    color: colors.white,
    fontSize: size.h2,
    lineHeight: 34,
    fontFamily: family.SFProText_SemiBold,
    textAlign: 'center',
  },
  text: {
    color: colors.w1,
    textAlign: 'center',
    fontSize: size.xxlarge,
    fontFamily: family.SFProText_Light,
    lineHeight: 20,
    paddingTop: WP('3'),
  },
});

export default styles;
