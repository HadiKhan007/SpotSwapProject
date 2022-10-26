import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  appIcons,
  appImages,
  ChatCard_List,
  colors,
  WP,
} from '../../../../shared/exporter';
import {AppHeader, ChatCard, DeleteModal, Spacer} from '../../../../components';
import {SwipeListView} from 'react-native-swipe-list-view';

const BlockList = ({navigation}) => {
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
      <AppHeader title="BlockList" onBackPress={() => navigation.goBack()} />
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
          title="Unblock Profile"
          subTitle="Are you sure you want to unblock Laziz Puth?"
          btnTitle="Yes"
          subBtnTitle="Cancel"
          bgColor={colors.b_gradient}
          onPressHide={() => {
            setShowAppModal(!showAppModal);
          }}
        />
      )}
      {showDellModal && (
        <DeleteModal
          show={showDellModal}
          title="Permanent Delete Profile"
          subTitle="Are you sure you want to permanently delete Laziz Puth?"
          btnTitle="Yes"
          subBtnTitle="Cancel"
          bgColor={colors.b_gradient}
          onPressHide={() => {
            setShowDellModal(false);
          }}
        />
      )}
    </ImageBackground>
  );
};

export default BlockList;
