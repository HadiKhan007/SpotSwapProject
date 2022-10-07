import {StyleSheet} from 'react-native';
import {
  WP,
  size,
  colors,
  family,
  StatusBarHeight,
} from '../../../shared/exporter';

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
  passTxtStyle: {
    color: colors.white,
    fontSize: size.title,
    fontFamily: family.SFProText_SemiBold,
  },
  nameTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
  },
  imgStyle: {
    width: '100%',
    height: WP('54'),
    borderRadius: 15,
    marginTop: WP('3'),
  },
  uploadTxtStyle: {
    color: colors.g2,
    marginTop: WP('6'),
    fontSize: size.tiny,
    fontFamily: family.SFProText_Regular,
  },
  bottomView: {
    bottom: 16,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default styles;
