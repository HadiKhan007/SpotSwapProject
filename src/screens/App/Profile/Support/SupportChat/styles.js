import {StyleSheet} from 'react-native';
import {colors, StatusBarHeight, WP} from '../../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
  },
  text: {
    paddingTop: WP('50'),
    color: colors.w2,
    textAlign: 'center',
  },
  receiveView: {
    backgroundColor: colors.p8,
    padding: WP('5'),
    borderRadius: 10,
    alignSelf: 'flex-end',
    width: '80%',
  },
  receiveText: {
    color: colors.white,
  },
  timeText: {
    color: colors.w1,
    alignSelf: 'flex-end',
    paddingVertical: WP('1'),
  },
  bottomView: {
    paddingVertical: WP('5'),
  },
});

export default styles;
