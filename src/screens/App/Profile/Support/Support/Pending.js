import {View, FlatList} from 'react-native';
import React from 'react';
import {AppCard} from '../../../../../components';
import {Pending_List} from '../../../../../shared/exporter';

const Pending = () => {
  const renderCard = ({item, index}) => (
    <AppCard
      numberText={item.numberText}
      monthYear={item.monthYear}
      time={item.time}
      messageText={item.messageText}
    />
  );
  return (
    <View>
      <FlatList
        data={Pending_List}
        renderItem={renderCard}
        keyExtractor={(index, item) => index + item.toString()}
      />
    </View>
  );
};

export default Pending;
