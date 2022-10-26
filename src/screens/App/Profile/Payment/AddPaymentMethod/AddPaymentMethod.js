import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  appIcons,
  appImages,
  appLogos,
  CardMethod,
  WP,
} from '../../../../../shared/exporter';
import styles from './styles';
import {AppHeader, PaymentMethodCard, Spacer} from '../../../../../components';

const AddPaymentMethod = ({navigation}) => {
  const [showIcon, setshowIcon] = useState(CardMethod);

  const renderItem = ({item, index}) => {
    return (
      <PaymentMethodCard
        title={item.title}
        showState={showIcon}
        source={item.selected ? appIcons.checkIcon : appIcons.unCheckIcon}
        onPress={() =>
          setshowIcon(
            showIcon.map(obj =>
              obj.id == item.id
                ? {...obj, selected: true}
                : {...obj, selected: false},
            ),
          ) || navigation.navigate(item.route)
        }
      />
    );
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Add Payment Method"
        onBackPress={() => navigation.goBack()}
      />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />

      <View style={styles.rowContainer}>
        <Image source={appLogos.cardLogo} style={styles.logoStyle} />
        <Image source={appLogos.masterCardLogo} style={styles.logoStyle} />
        <Image source={appLogos.visaLogo} style={styles.logoStyle} />
      </View>
      <Text style={styles.textStyle}>Select Payment Method</Text>
      <FlatList
        data={showIcon}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </ImageBackground>
  );
};

export default AddPaymentMethod;
