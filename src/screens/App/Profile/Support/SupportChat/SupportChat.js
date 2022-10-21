import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader, ChatInput} from '../../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SupportChat = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <AppHeader
          title="Spot Swap Admin"
          onBackPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>You opened a ticket</Text>
        <View style={styles.receiveView}>
          <Text style={styles.receiveText}>
            Hello, I’d like to raise a few questions regarding the app as I see
            some features aren’t working...
          </Text>
        </View>
        <Text style={styles.timeText}>Today 11:06</Text>
        <View style={{flex: 1}}></View>
        <View style={styles.bottomView}>
          <ChatInput />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SupportChat;
