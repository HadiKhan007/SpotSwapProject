import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {AppHeader, AppLoader} from '../../../components';
import RenderHtml from 'react-native-render-html';
import {appImages, scrWidth} from '../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useDispatch} from 'react-redux';
import {staticPagesRequest} from '../../../redux/actions';

const PrivacyPolicy = ({navigation}) => {
  const [policy, setPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  useEffect(() => {
    getPolicy();
  }, []);

  const getPolicy = () => {
    setIsLoading(true);
    dispatch(
      staticPagesRequest(
        'privacy_policy',
        res => {
          setIsLoading(false);
          setPolicy(res?.page?.content);
        },
        err => {
          setIsLoading(false);
          console.log('Err ==> ', err);
        },
      ),
    );
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppLoader loading={isLoading} />
      <AppHeader onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleTxtStyle}>Privacy Policy</Text>
        <View style={styles.contentContainer}>
          {policy === '' ? (
            <Text style={styles.txtStyle} />
          ) : (
            <RenderHtml contentWidth={scrWidth} source={{html: policy}} />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PrivacyPolicy;
