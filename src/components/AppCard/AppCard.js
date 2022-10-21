import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {family, size, WP, colors} from '../../shared/exporter';

const AppCard = ({numberText, monthYear, time, messageText}) => {
  return (
    <View style={styles.bgCard}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{numberText}</Text>
        <Text style={styles.dateTxtStyle}>
          {monthYear} <Text> • </Text> {time}
        </Text>
      </View>
      <View style={styles.dividerView} />
      <Text style={styles.msgText}>{messageText}</Text>
    </View>
  );
};

export {AppCard};

const styles = StyleSheet.create({
  bgCard: {
    width: '100%',
    borderRadius: 15,
    padding: WP('2'),
    marginTop: WP('3'),
    backgroundColor: colors.t3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
    fontFamily: family.SFProText_Light,
    fontSize: size.xsmall,
  },
  dateTxtStyle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Light,
  },
  dividerView: {
    height: 1,
    width: '100%',
    marginTop: WP('3'),
    marginBottom: WP('1.2'),
    backgroundColor: colors.g8,
  },
  msgText: {
    color: colors.w1,
    fontSize: size.xtiny,
    fontFamily: family.SFProText_Medium,
  },
});
