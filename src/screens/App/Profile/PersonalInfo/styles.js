import {StyleSheet} from 'react-native';
import {WP, colors, StatusBarHeight} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
  imageContainer: {
    width: WP('35'),
    height: WP('35'),
    marginTop: WP('5'),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: WP('35'),
    justifyContent: 'center',
    backgroundColor: colors.t2,
  },
  imgStyle: {
    width: WP('26'),
    height: WP('26'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgRadiusStyle: {
    borderRadius: WP('25'),
  },
  bottomView: {
    bottom: WP('12'),
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
});

export default styles;
