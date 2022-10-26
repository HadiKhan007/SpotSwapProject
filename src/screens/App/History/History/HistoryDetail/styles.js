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
  boxView: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: WP('5'),
    paddingBottom: WP('8'),
    marginTop: WP('4'),
    backgroundColor: colors.t3,
  },
  boxContainer: {
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: WP('5'),
    backgroundColor: colors.t3,
    marginTop: WP('5'),
  },
  titleTxtStyle: {
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Regular,
  },
  rowStyle: {
    marginTop: WP('5.5'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hTxtStyle: {
    color: colors.w1,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
  },
  valTxtStyle: {
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_SemiBold,
  },
  ImgStyle: {
    width: WP('10'),
    height: WP('10'),
    borderRadius: WP('5'),
    resizeMode: 'contain',
    marginTop: WP('3'),
    marginRight: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  innerView: {
    paddingVertical: WP('5'),
    width: WP('46'),
  },
  btn: {
    width: '25%',
    height: '25%',
    backgroundColor: colors.p5,
    borderRadius: 100,
    marginTop: WP('5'),
    marginLeft: WP('2'),
    alignItems: 'center',
  },
  btnText: {
    color: colors.b4,
    textAlign: 'center',
    fontSize: size.tiny,
    fontFamily: family.SFProText_Light,
    fontWeight: '400',
    lineHeight: 22,
  },
  bottomText: {
    color: colors.w1,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
    paddingVertical: 10,
  },
});

export default styles;
