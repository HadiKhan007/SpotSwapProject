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
    fontFamily: family.SFProText_SemiBold,
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
    width: WP('15'),
    height: WP('15'),
    borderRadius: WP('7.5'),
    resizeMode: 'contain',
    marginTop: WP('3'),
    marginRight: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  innerView: {
    paddingVertical: WP('5'),
  },
  btn: {
    width: '25%',
    height: '30%',
    backgroundColor: colors.p5,
    borderRadius: 100,
    marginTop: WP('5'),
    marginHorizontal: WP('4'),
  },
  btnText: {
    color: colors.b4,
    textAlign: 'center',
    fontSize: size.tiny,
    fontFamily: family.SFProText_Medium,
    fontWeight: '600',
    lineHeight: 27,
  },
  bottomText: {
    color: colors.w1,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
    paddingVertical: 10,
  },
});

export default styles;
