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
  },
  addIconStyle: {
    width: WP('7'),
    height: WP('7'),
    resizeMode: 'contain',
  },
  addBtn: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.g10,
    padding: WP('10'),
    alignSelf: 'center',
    marginVertical: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    color: colors.p9,
    textAlign: 'center',
    fontSize: size.normal,
    fontWeight: '600',
    fontFamily: family.SFProText_Medium,
    paddingVertical: WP('3'),
  },
  itemContainer: {
    borderRadius: 10,
    marginBottom: WP('3'),
    paddingVertical: WP('5'),
    paddingHorizontal: WP('4'),
    backgroundColor: colors.t1,
  },
  quesTxtStyle: {
    color: colors.white,
    fontSize: size.normal,
    marginLeft: WP('2.5'),
    fontFamily: family.SFProText_Regular,
  },
  ansTxtStyle: {
    color: colors.w1,
    paddingTop: WP('3.8'),
    fontSize: size.xsmall,
    marginLeft: WP('2.5'),
    fontFamily: family.SFProText_Regular,
  },
  backBtnsContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backRightBtn: {
    top: 0,
    bottom: 0,
    width: 85,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  backRightBtnLeft: {
    right: 52,
    width: 49,
    borderRadius: 10,
    height: WP('15'),
    backgroundColor: colors.p6,
    marginTop: WP('6'),
  },
  backRightBtnRight: {
    right: 0,
    width: 48,
    borderRadius: 10,
    height: WP('15'),
    backgroundColor: colors.s5,
    marginTop: WP('6'),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  bottomView: {
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    bottom: platformOrientedCode(WP('2'), WP('12')),
  },
});

export default styles;
