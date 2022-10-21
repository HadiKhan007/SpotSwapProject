import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {appImages} from '../../../../../shared/exporter';
import {AppHeader} from '../../../../../components';
import styles from './styles';

const HistoryDetail = ({navigation}) => {
  const Row = ({title, val}) => {
    return (
      <View style={styles.rowStyle}>
        <Text style={styles.hTxtStyle}>{title}</Text>
        <Text style={styles.valTxtStyle}>{val}</Text>
      </View>
    );
  };
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader title="History" onBackPress={() => navigation.goBack()} />
      <View style={styles.boxContainer}>
        <View style={styles.rowContainer}>
          <Image source={appImages.car} style={styles.ImgStyle} />
          <View style={styles.innerView}>
            <Text style={styles.titleTxtStyle}>Antoine Madie Smith</Text>
            <Text style={styles.bottomText}>Honda Civic GL300</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>swappee</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxView}>
        <Row title="Date" val="July 25, 2022" />
        <Row title="Time" val="10:00 AM" />
        <Row title="Location" val="Washington DC, USA" />
      </View>
      <View style={styles.boxView}>
        <Row title="Swapper Fee" val="$10.00" />
        <Row title="SpotSwap Fee" val="$1.00" />
        <Row title="Total" val="$11.00" />
      </View>
    </ImageBackground>
  );
};

export default HistoryDetail;
