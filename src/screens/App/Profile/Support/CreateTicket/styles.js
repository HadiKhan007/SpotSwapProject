import {StyleSheet} from 'react-native';
import {
  WP,
  colors,
  StatusBarHeight,
  platformOrientedCode,
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
  titleText: {
    paddingVertical: WP('7'),
    color: colors.white,
    fontSize: size.h2,
    lineHeight: 34,
    fontFamily: family.SFProText_SemiBold,
  },
  inputView: {
    backgroundColor: colors.t1,
    borderRadius: 15,
    borderColor: colors.s3,
    borderWidth: 1,
  },
  inputStyle: {
    color: colors.white,
    width: '100%',
    height: WP('35'),
    textAlignVertical: 'top',
    padding: WP('2'),
  },
  countText: {
    color: colors.white,
    textAlign: 'right',
    padding: WP('2'),
  },
  bottomView: {
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    bottom: platformOrientedCode(WP('2'), WP('8')),
  },
  keyBoardStyle: {
    marginBottom: WP('20'),
  },
  errorText: {
    top: WP('1'),
    color: colors.s1,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Regular,
  },
  msgText: {
    color: colors.g2,
    fontSize: size.tiny,
    paddingBottom: WP('2.5'),
    fontFamily: family.SFProText_Regular,
  },
});

export default styles;
