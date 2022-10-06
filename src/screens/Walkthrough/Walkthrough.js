import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Video from 'react-native-video';
import {appVideos} from '../../shared/exporter';
import styles from './styles';

const Walkthrough = ({navigation}) => {
  const video = useRef(null);
  const isFocus = useIsFocused();
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!isFocus) {
      setPause(true);
    }
  }, [!isFocus]);

  return (
    <View style={styles.rootContainer}>
      <Video
        ref={video}
        repeat={true}
        source={appVideos.appIntro}
        resizeMode="contain"
        style={styles.videoStyle}
        paused={pause}
        playInBackground={false}
        ignoreSilentSwitch={'obey'}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation?.replace('Auth');
        }}
        style={styles.buttonCircle}>
        <Text style={styles.skipTxtStyle}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Walkthrough;
