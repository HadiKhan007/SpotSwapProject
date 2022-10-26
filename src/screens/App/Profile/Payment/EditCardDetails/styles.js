import {StyleSheet} from 'react-native';
import {
  colors,
  platformOrientedCode,
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
  bottomView: {
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    bottom: platformOrientedCode(WP('2'), WP('12')),
  },
});
export default styles;
