import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {AppHeader, AppLoader} from '../../../components';
import RenderHtml from 'react-native-render-html';
import {appImages, scrWidth} from '../../../shared/exporter';
import styles from './styles';

// redux stuff
import {useSelector, useDispatch} from 'react-redux';
import {staticPagesRequest} from '../../../redux/actions';

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

const TermsConditions = ({navigation}) => {
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch(null);

  useEffect(() => {
    getTerms();
  }, []);

  const getTerms = () => {
    setIsLoading(true);
    dispatch(
      staticPagesRequest(
        'faqs',
        res => {
          setIsLoading(false);
          setTerms(res);
          console.log('Res is kl ==> ', res);
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
        <Text style={styles.titleTxtStyle}>Terms &{'\n'}Condition</Text>
        <View style={styles.contentContainer}>
          <RenderHtml contentWidth={scrWidth} source={source} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TermsConditions;
