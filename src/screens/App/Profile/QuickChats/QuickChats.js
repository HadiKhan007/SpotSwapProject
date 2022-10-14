import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Spacer, AppHeader} from '../../../../components';
import {appIcons, appImages, WP} from '../../../../shared/exporter';
import {faq} from '../../../../shared/utilities/constant';
import styles from './styles';

const QuickChats = ({navigation}) => {
  const [chat, setChat] = useState(faq);
  const [isRowOpen, setIsRowOpen] = useState(false);

  const renderItem = ({item}) => {
    return (
      <View key={item?.id} style={styles.itemContainer}>
        <Text style={styles.quesTxtStyle}>{item?.ques}</Text>
      </View>
    );
  };

  const closeRow = (map, key) => {
    setIsRowOpen(false);
    map && map[key] && map[key].closeRow();
  };

  const onRowDidOpen = rowKey => {
    setIsRowOpen(true);
    console.log('This row opened', rowKey);
  };

  const handleDelete = () => {};

  const handleEdit = () => {
    navigation.navigate('EditQuickChat');
  };

  const renderHiddenItem = (data, rowMap) => {
    return isRowOpen ? (
      <View style={styles.backBtnsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            closeRow(rowMap, data?.index);
            handleEdit(data);
          }}>
          <Image
            resizeMode="contain"
            source={appIcons.editIcon}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            closeRow(rowMap, data?.index);
            handleDelete(data);
          }}>
          <Image
            resizeMode="contain"
            source={appIcons.delIcon}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        rightIcon
        title="Quick Chat"
        onBackPress={() => navigation.goBack()}
        onRightPress={() => navigation.navigate('AddQuickChat')}
      />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <SwipeListView
        useFlatList
        data={chat}
        extraData={chat}
        renderItem={renderItem}
        leftOpenValue={0}
        rightOpenValue={-115}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        closeOnScroll
        onRowDidOpen={onRowDidOpen}
        onRowOpen={(rowKey, rowMap) => {
          let key = rowKey;
          if (key === rowKey) {
            return;
          }
          setTimeout(() => {
            rowMap[rowKey].closeRow();
          }, 2000);
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flStyle}
        keyExtractor={keyExtractor}
        renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap)}
      />
    </ImageBackground>
  );
};

export default QuickChats;
