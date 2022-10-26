import {StyleSheet} from 'react-native';
import {
  WP,
  size,
  colors,
  family,
  StatusBarHeight,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: WP('5'),
    backgroundColor: colors.b1,
    paddingTop: StatusBarHeight,
  },
  mainContainer: {
    paddingVertical: WP('5'),
    alignItems: 'center',
  },
  titleTxtStyle: {
    color: colors.white,
    fontSize: size.xxlarge,
    fontFamily: family.SFProText_SemiBold,
    marginVertical: WP('5'),
  },

  bgImg: {
    width: WP('92'),
    height: WP('50'),
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  textStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Light,
    fontWeight: '400',
  },
  priceText: {
    color: colors.white,
    fontSize: size.xxtitle,
    fontFamily: family.SFProText_SemiBold,
    fontWeight: '600',
    marginBottom: WP('5'),
  },
  btnText: {
    color: colors.white,
    fontSize: size.xsmall,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default styles;
