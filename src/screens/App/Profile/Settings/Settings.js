import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Spacer, AppHeader} from '../../../../components';
import {appImages, WP} from '../../../../shared/exporter';
import {
  commonSettings,
  guideLines,
} from '../../../../shared/utilities/constant';
import styles from './styles';

const Settings = ({navigation}) => {
  const Row = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => navigation.navigate(item?.screen)}>
        <Image source={item?.icon} style={item.iconStyle} />
        <Text style={styles.itemTxtStyle}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader title="Settings" onBackPress={() => navigation.goBack()} />
      <Spacer androidVal={WP('7')} iOSVal={WP('7')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {commonSettings.map(item => {
          return <Row item={item} />;
        })}
        <Text style={styles.hTxtStyle}>Guidelines</Text>
        {guideLines.map(item => {
          return <Row item={item} />;
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default Settings;
