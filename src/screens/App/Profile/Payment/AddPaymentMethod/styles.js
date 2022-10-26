import {StyleSheet} from 'react-native';
import {
  colors,
  family,
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
  logoStyle: {
    width: WP('15'),
    height: WP('10'),
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.g11,
    paddingVertical: WP('10'),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 12,
    marginVertical: WP('10'),
  },
  textStyle: {
    color: colors.white,
    fontSize: size.large,
    fontWeight: '600',
    fontFamily: family.SFProText_Medium,
  },
});

export default styles;
