import React, {useState} from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import {
  AppButton,
  AppHeader,
  DeleteModal,
  HomeHeader,
  Spacer,
  TransactionsCard,
} from '../../../../components';
import {appImages, colors, TopUp_List, WP} from '../../../../shared/exporter';
import styles from './styles';

const Wallet = ({navigation}) => {
  const [showAppModal, setShowAppModal] = useState(false);

  const renderItem = ({item, index}) => (
    <TransactionsCard
      title={item.title}
      subTitle={item.subTitle}
      leftIcon={item.leftIcon}
      price={item.price}
    />
  );
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader title="Wallet" />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <ImageBackground
        source={appImages.wallet_bg}
        resizeMode="cover"
        style={styles.bgImg}>
        <View style={styles.mainContainer}>
          <Text style={styles.textStyle}>Available Balance</Text>
          <Text style={styles.priceText}>$40.00</Text>
          <AppButton
            title="Top Up"
            titleTxtStyle={styles.btnText}
            width={WP('40')}
            height={WP('10')}
            bgColor={colors.btn_gradient}
            onPress={() => setShowAppModal(!showAppModal)}
          />
        </View>
      </ImageBackground>
      <Text style={styles.titleTxtStyle}>Recent Transactions</Text>
      <FlatList
        data={TopUp_List}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index.toString()}
      />
      {showAppModal && (
        <DeleteModal
          show={showAppModal}
          title="Alert!"
          subTitle={`By adding amount to your SwapSpot Wallet, you will enjoy the privilege of having a quick connection between SpotSwap users. ${'\n\n'} Please be advised that money in the wallet is not refundable and can’t be withdrawn back. By selecting “Ok” mean you agree to this condition.`}
          bgColor={colors.b_gradient}
          btnTitle="Okay"
          subBtnTitle="Cancel"
          onPressHide={() => {
            setShowAppModal(false);
            navigation.navigate('Wallet');
          }}
        />
      )}
    </ImageBackground>
  );
};

export default Wallet;
