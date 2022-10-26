import {StyleSheet} from 'react-native';
import {
  colors,
  family,
  platformOrientedCode,
  size,
  StatusBarHeight,
  WP,
} from '../../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: colors.white,
    fontSize: size.h4,
    fontWeight: '600',
    fontFamily: family.SFProText_SemiBold,
    textAlign: 'center',
  },
  subText: {
    color: colors.w1,
    fontSize: size.normal,
    fontWeight: '600',
    fontFamily: family.SFProText_Medium,
    textAlign: 'center',
    marginTop: WP('2'),
  },
  bottomView: {
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    bottom: platformOrientedCode(WP('2'), WP('12')),
  },
});
export default styles;
