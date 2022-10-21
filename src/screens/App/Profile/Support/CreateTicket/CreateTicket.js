import React, {useState} from 'react';
import {View, ImageBackground, Text, TextInput} from 'react-native';
import {appImages, colors} from '../../../../../shared/exporter';
import {AppButton, AppHeader, AppInput} from '../../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CreateTicket = ({navigation}) => {
  const [textInput, setTextInput] = useState('');

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Create Ticket"
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}>
        <Text style={styles.titleText}>
          We’d love to help you{'\n'}with your concern.
        </Text>
        <AppInput
          placeholder="Lilac Macbeth"
          phTextColor={colors.white}
          title="Enter your name"
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type here..."
            placeholderTextColor={colors.w1}
            maxLength={600}
            multiline={true}
            value={textInput}
            onChangeText={text => setTextInput(text)}
          />
          <Text style={styles.countText}>{textInput.length}/600</Text>
        </View>
        <View style={styles.bottomView}>
          <AppButton
            title="Submit"
            onPress={() => navigation.navigate('SentSuccess')}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default CreateTicket;
