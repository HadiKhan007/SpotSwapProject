import {StyleSheet} from 'react-native';
import {colors, StatusBarHeight, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
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
    right: 45,
    width: 40,
    borderRadius: 5,
    height: WP('18'),
    backgroundColor: colors.s6,
    marginTop: WP('5'),
  },
  backRightBtnRight: {
    right: 0,
    width: 40,
    borderRadius: 5,
    height: WP('18'),
    backgroundColor: colors.s5,
    marginTop: WP('5'),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default styles;
