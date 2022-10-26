import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  DeleteModal,
  Spacer,
} from '../../../../../components';
import PaymentCard from '../../../../../components/AppCard/PaymentCard';
import {
  appIcons,
  appImages,
  colors,
  PaymentCardList,
  WP,
} from '../../../../../shared/exporter';
import {SwipeListView} from 'react-native-swipe-list-view';

import styles from './styles';

const PaymentScreen = ({navigation}) => {
  const [rowId, setRowId] = useState('');
  const [showAppModal, setShowAppModal] = useState(false);

  const renderItem = ({item, index}) => (
    <PaymentCard
      leftIcon={item.leftIcon}
      titleText={item.titleText}
      subTitle={item.subTitle}
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
    setShowAppModal(!showAppModal);
  };

  const handleEdit = () => {
    navigation.navigate('EditCardDetails');
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
      <AppHeader title="Payment" onBackPress={() => navigation.goBack()} />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {}}
        activeOpacity={0.7}>
        <Image source={appIcons.addCard} style={styles.addIconStyle} />
      </TouchableOpacity>
      <SwipeListView
        useFlatList
        alwaysBounceHorizontal
        ensureScrollEnabled
        data={PaymentCardList}
        extraData={PaymentCardList}
        renderItem={renderItem}
        leftOpenValue={0}
        rightOpenValue={-115}
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
          title="Remove Card"
          subTitle="Are you sure you want to remove this payment method?"
          btnTitle="Confirm"
          subBtnTitle="Cancel"
          bgColor={colors.r_gradient}
          onPressHide={() => {
            setShowAppModal(false);
            navigation.navigate('Payment');
          }}
        />
      )}
      <View style={styles.bottomView}>
        <Text style={styles.detailText}>View details</Text>
        <AppButton
          title="Pay $11.00"
          onPress={() => navigation.navigate('AddPaymentMethod')}
        />
      </View>
    </ImageBackground>
  );
};

export default PaymentScreen;
