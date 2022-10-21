import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {family, size, WP, colors} from '../../shared/exporter';

const HistoryCard = ({PlaceName, monthDate, time, price, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.bgCard}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.historyRow}>
        <Text style={styles.parkingTxtStyle}>{PlaceName}</Text>
        <Text style={styles.parkingTxtStyle}>{price}</Text>
      </View>
      <Text style={styles.dateTxtStyle}>
        {monthDate} <Text> • </Text> {time}
      </Text>
    </TouchableOpacity>
  );
};

export {HistoryCard};

const styles = StyleSheet.create({
  bgCard: {
    width: '100%',
    borderRadius: 10,
    padding: WP('4'),
    marginTop: WP('3'),
    backgroundColor: colors.t3,
  },

  historyContainer: {
    paddingHorizontal: WP('5'),
  },
  historyRow: {
    marginTop: WP('1'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parkingTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
  },
  dateTxtStyle: {
    color: colors.w1,
    marginTop: WP('1'),
    fontSize: size.xsmall,
    fontFamily: family.SFProText_Regular,
  },
});
