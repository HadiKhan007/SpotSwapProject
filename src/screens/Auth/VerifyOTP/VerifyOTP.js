import React, {useRef, useState} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {
  Cursor,
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Toast from 'react-native-simple-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {WP, appImages, platformOrientedCode} from '../../../shared/exporter';
import {Spacer, AppButton} from '../../../components';
import styles from './styles';

const VerifyOTP = ({navigation}) => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerifyOTP = () => {
    if (value === '') {
      Toast.show('Please enter an OTP.', Toast.SHORT, ['UIAlertController']);
    } else if (value.length < 6) {
      Toast.show('Please enter complete OTP.', Toast.SHORT, [
        'UIAlertController',
      ]);
    } else {
      navigation.navigate('ResetPassword');
    }
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Spacer androidVal={WP('14')} iOSVal={WP('14')} />
        <Text style={styles.passTxtStyle}>Enter OTP</Text>
        <Text style={styles.descTxtStyle}>
          Please enter your verification code sent to your user-email@gmail.com
        </Text>
        <Spacer androidVal={WP('15')} iOSVal={WP('15')} />
        <CodeField
          ref={ref}
          value={value}
          cellCount={6}
          {...codeFieldProps}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          onChangeText={val => setValue(val)}
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={styles.cellStyle}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.txtStyle}>
                {symbol || (isFocused ? <Cursor /> : '0')}
              </Text>
            </View>
          )}
        />
        <Spacer androidVal={WP('20')} iOSVal={WP('20')} />
        <Text style={styles.notReceivedTxtStyle}>
          Didn’t receive a code?{' '}
          <Text style={styles.resendTxtStyle} onPress={() => {}}>
            Resend
          </Text>
        </Text>
        <Spacer androidVal={WP('21')} iOSVal={WP('21')} />
        <AppButton title="Submit" onPress={() => handleVerifyOTP()} />
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default VerifyOTP;
