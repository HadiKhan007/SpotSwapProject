import React from 'react';
import {Text, View, Image, FlatList, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {WP, appImages} from '../../../shared/exporter';
import {Spacer, AppButton} from '../../../components';
import styles from './styles';

const AddCarPics = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('Welcome');
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text>Item</Text>
      </View>
    );
  };

  const keyExtractor = item => item?.id;

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
        <Text style={styles.passTxtStyle}>Tell us about{'\n'}your car</Text>
        <Spacer androidVal={WP('8')} iOSVal={WP('8')} />
        <Text style={styles.nameTxtStyle}>
          Toyota Avanza 55LG (Default Image)
        </Text>
        <Image source={appImages.car} style={styles.imgStyle} />
        <Text style={styles.uploadTxtStyle}>Upload Photos (Optional)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        <Spacer androidVal={WP('9')} iOSVal={WP('9')} />
        <View style={styles.bottomView}>
          <AppButton title="Submit" onPress={() => handleSubmit()} />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AddCarPics;
