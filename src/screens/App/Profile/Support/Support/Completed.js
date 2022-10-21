import {FlatList, View} from 'react-native';
import React from 'react';
import {AppCard} from '../../../../../components';
import {Completed_List} from '../../../../../shared/exporter';

const Completed = () => {
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
        data={Completed_List}
        renderItem={renderCard}
        keyExtractor={(index, item) => index + item.toString()}
      />
    </View>
  );
};

export default Completed;
