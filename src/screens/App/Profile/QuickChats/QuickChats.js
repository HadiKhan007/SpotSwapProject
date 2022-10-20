import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Spacer, AppHeader, AppLoader} from '../../../../components';
import {appIcons, appImages, WP} from '../../../../shared/exporter';
import {chats} from '../../../../shared/utilities/constant';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {getQuickChatsRequest} from '../../../../redux/actions';

const QuickChats = ({navigation}) => {
  const [chats, setChats] = useState([]);
  const [rowId, setRowId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  useEffect(() => {
    getCarSpecs();
  }, []);

  const getCarSpecs = () => {
    setIsLoading(true);
    dispatch(
      getQuickChatsRequest(
        res => {
          console.log('Res is ==> ', res?.chats);
          setIsLoading(false);
          setChats(res?.chats);
        },
        err => {
          setIsLoading(false);
          console.log('Err ==> ', err);
        },
      ),
    );
  };

  const renderItem = ({item}) => {
    return (
      <View key={item?.id} style={styles.itemContainer}>
        <Text style={styles.quesTxtStyle}>{item?.message}</Text>
      </View>
    );
  };

  const closeRow = (map, key) => {
    setRowId('');
    map && map[key] && map[key].closeRow();
  };

  const onRowDidOpen = rowKey => {
    setRowId(rowKey);
  };

  const handleDelete = () => {};

  const handleEdit = () => {
    navigation.navigate('EditQuickChat');
  };

  const renderHiddenItem = (data, rowMap) => {
    return data?.item?.id === rowId ? (
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
      <AppLoader loading={isLoading} />
      <AppHeader
        rightIcon
        title="Quick Chat"
        onBackPress={() => navigation.goBack()}
        onRightPress={() => navigation.navigate('AddQuickChat')}
      />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <SwipeListView
        useFlatList
        data={chats}
        extraData={chats}
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
