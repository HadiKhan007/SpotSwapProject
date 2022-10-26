import {StyleSheet} from 'react-native';
import {
  colors,
  family,
  platformOrientedCode,
  size,
  StatusBarHeight,
  WP,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.b1,
    paddingHorizontal: WP('5'),
    paddingTop: StatusBarHeight,
  },
  inputStyles: {
    width: '88%',
    paddingRight: 5,
    // color: colors.p8,
    color: '#000',
    alignSelf: 'center',
    fontSize: size.xsmall,
    textAlignVertical: 'top',
    fontFamily: family.SFProText_Light,
    padding: platformOrientedCode(11, 15),
    paddingTop: platformOrientedCode(5, 5),
    paddingBottom: platformOrientedCode(3, 2),
  },
  iconStyle: {
    width: WP('10'),
    height: WP('10'),
    alignSelf: 'center',
  },
  senderBubble: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  senderBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    maxWidth: '75%',
    borderRadius: 25,
    borderBottomEndRadius: 3,
    backgroundColor: colors.p4,
  },
  senderMsgStyles: {
    color: colors.b1,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Light,
  },
  // Receiver Bubble
  receiverBubble: {
    width: '100%',
    flexDirection: 'row',
  },
  receiverBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    borderRadius: 25,
    maxWidth: '100%',
    borderBottomStartRadius: 3,
    backgroundColor: colors.p1,
  },
  imgStyle: {
    top: WP('5'),
    width: WP('13.5'),
    height: WP('13.5'),
    borderRadius: WP('13.5'),
  },
  receiverMsgStyles: {
    fontSize: size.tiny,
    color: colors.white,
    fontFamily: family.SFProText_Light,
  },
  msgContainer: {
    marginBottom: WP('4.6'),
    marginHorizontal: WP('5'),
  },
  personImgStyle: {
    width: WP('22'),
    height: WP('22'),
    borderRadius: WP('22'),
    backgroundColor: '#ccc',
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
    paddingVertical: WP('4'),
    fontFamily: family.SFProText_Light,
  },
  noRecords: {
    marginRight: 17,
    color: colors.p1,
    fontSize: size.large,
    fontFamily: family.SFProText_Light,
  },
  noRecordsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
