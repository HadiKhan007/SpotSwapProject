import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HomeHeader} from '../../../../components';
import {appIcons, appImages} from '../../../../shared/exporter';
import styles from './styles';

const Profile = ({navigation}) => {
  const Row = ({title, val}) => {
    return (
      <View style={styles.rowStyle}>
        <Text style={styles.hTxtStyle}>{title}</Text>
        <Text style={styles.valTxtStyle}>{val}</Text>
      </View>
    );
  };

  const renderImages = ({item, index}) => {
    return (
      <>
        <Image source={appImages.car} style={styles.itemImgStyle} />
        {index % 2 === 0 ? <View style={styles.spaceView} /> : null}
      </>
    );
  };

  const renderHistory = ({item, index}) => {
    return (
      <>
        <View style={styles.historyContainer}>
          <View style={styles.historyRow}>
            <Text style={styles.parkingTxtStyle}>
              Washington Main DC Parking
            </Text>
            <Text style={styles.parkingTxtStyle}>$11.00</Text>
          </View>
          <Text style={styles.dateTxtStyle}>
            July 25, 2022 <Text> • </Text> 10:00AM
          </Text>
        </View>
        <View style={styles.dividerView} />
      </>
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <HomeHeader
        title="Profile"
        onPress={() => {}}
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Settings')}>
            <Image source={appIcons.settingsIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <View style={styles.imageContainer}>
            <Image source={appImages.car} style={styles.imgStyle} />
          </View>
          <View>
            <Text style={styles.nameTxtStyle}>Lilac macbeth</Text>
            <Text style={styles.carTxtStyle}>Toyota Avanza 55LG</Text>
          </View>
        </View>
        <View style={styles.boxView}>
          <Text style={styles.titleTxtStyle}>Car Details</Text>
          <Row title="Made/Brand" val="Toyota" />
          <Row title="Car Model" val="Toyota Avanza 55LG" />
          <Row title="Color" val="Gray" />
          <Row title="Plate Number" val="123 HHJ" />
        </View>
        <View style={styles.boxView}>
          <Text style={styles.titleTxtStyle}>My Car Image</Text>
          <FlatList
            data={[1, 2, 3]}
            numColumns={2}
            renderItem={renderImages}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flStyle}
          />
        </View>
        <View style={[styles.boxView, styles.paddingHorizontal]}>
          <Text style={[styles.titleTxtStyle, styles.txtPaddingHorizontal]}>
            Recent History
          </Text>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={renderHistory}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flStyle}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
