import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ChatCard,
  DeleteModal,
  HomeHeader,
  Spacer,
} from '../../../../components';
import {
  appIcons,
  appImages,
  ChatCard_List,
  colors,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {SwipeListView} from 'react-native-swipe-list-view';

const Chat = ({navigation}) => {
  const [rowId, setRowId] = useState('');
  const [showAppModal, setShowAppModal] = useState(false);
  const [showDellModal, setShowDellModal] = useState(false);

  const renderItem = ({item, index}) => (
    <ChatCard
      Iconimage={item.Iconimage}
      Title={item.Title}
      subTitle={item.subTitle}
      onPress={() => navigation.navigate(item.onPress)}
    />
  );
  const closeRow = (map, key) => {
    setRowId('');
    map && map[key] && map[key].closeRow();
  };

  const onRowDidOpen = rowKey => {
    setRowId(rowKey);
  };
  const keyExtractor = item => item?.id;

  const handleDelete = () => {
    setShowDellModal(!showDellModal);
  };

  const handleEdit = () => {
    setShowAppModal(!showAppModal);
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
            setRowId('');
          }}>
          <Image
            resizeMode="contain"
            source={appIcons.chatBlock}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            closeRow(rowMap, data?.route);
            handleDelete(data);
            setRowId('');
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
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader title="Inbox" />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <SwipeListView
        useFlatList
        alwaysBounceHorizontal
        ensureScrollEnabled
        data={ChatCard_List}
        extraData={ChatCard_List}
        renderItem={renderItem}
        leftOpenValue={0}
        rightOpenValue={-87}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        closeOnScroll
        onRowDidOpen={onRowDidOpen}
        onRowClose={(rowKey, rowMap) => {
          setRowId('');
        }}
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

      {showAppModal && (
        <DeleteModal
          show={showAppModal}
          title="Block"
          subTitle="Are you sure you want to block this conversation"
          btnTitle="Block"
          subBtnTitle="Cancel"
          bgColor={colors.r_gradient}
          onPressHide={() => {
            setShowAppModal(!showAppModal);
            setRowId('');
          }}
        />
      )}
      {showDellModal && (
        <DeleteModal
          show={showDellModal}
          title="Delete"
          subTitle="Are you sure you want to delete this conversation"
          btnTitle="Delete"
          subBtnTitle="Cancel"
          bgColor={colors.r_gradient}
          onPressHide={() => {
            setShowDellModal(false);
            setRowId('');
          }}
        />
      )}
    </ImageBackground>
  );
};

export default Chat;
