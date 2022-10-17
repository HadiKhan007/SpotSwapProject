import React, {useState, useEffect} from 'react';
import {Text, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import {Spacer, AppHeader, AppLoader} from '../../../../components';
import {appImages, WP} from '../../../../shared/exporter';
import {faq} from '../../../../shared/utilities/constant';
import styles from './styles';

const FAQs = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(faq);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSelection = ({id}) => {
    let dataArr = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }
      return {
        ...item,
        isSelected: false,
      };
    });
    setData(dataArr);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => handleSelection(item)}>
        <Text style={styles.quesTxtStyle}>{item?.ques}</Text>
        {item.isSelected && <Text style={styles.ansTxtStyle}>{item?.ans}</Text>}
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
      <AppHeader title="FAQs" onBackPress={() => navigation.goBack()} />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <FlatList
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

export default FAQs;
