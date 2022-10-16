import React, {useState} from 'react';
import {
  Text,
  Image,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Spacer, AppHeader, AppLoader} from '../../../../components';
import {appImages, WP} from '../../../../shared/exporter';
import {
  guideLines,
  commonSettings,
} from '../../../../shared/utilities/constant';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {logoutRequset} from '../../../../redux/actions';

const Settings = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  const handleLogout = values => {
    navigation.replace('Auth');
    // setIsLoading(true);
    // const params = new FormData();
    // params.append('fcm_token', 'fcm_token');
    // dispatch(
    //   logoutRequset(
    //     params,
    //     res => {
    //       console.log('Res ==> ', res);
    //       setIsLoading(false);
    //       navigation.replace('Auth');
    //     },
    //     err => {
    //       console.log('Err ==> ', err);
    //       setIsLoading(false);
    //       Alert.alert('Logout Fail', err, [
    //         {
    //           text: 'OK',
    //         },
    //       ]);
    //     },
    //   ),
    // );
  };

  const Row = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => {
          if (item?.title === 'Log out') {
            handleLogout();
          } else {
            navigation.navigate(item?.screen);
          }
        }}>
        <Image source={item?.icon} style={item.iconStyle} />
        <Text style={styles.itemTxtStyle}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
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
