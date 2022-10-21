import React from 'react';
import {ScrollView, ImageBackground, FlatList} from 'react-native';
import {HistoryCard, HomeHeader} from '../../../../components';
import {appImages, History_List} from '../../../../shared/exporter';
import styles from './styles';

const History = ({navigation}) => {
  const renderCard = ({item, index}) => (
    <HistoryCard
      PlaceName={item.PlaceName}
      price={item.price}
      time={item.time}
      monthDate={item.monthDate}
      onPress={() => navigation.navigate('HistoryDetail')}
    />
  );
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader title="Histrory" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={History_List}
          renderItem={renderCard}
          keyExtractor={(index, item) => index + item.toString()}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default History;
