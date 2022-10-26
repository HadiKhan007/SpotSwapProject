import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  appIcons,
  appImages,
  colors,
  platformOrientedCode,
} from '../../../../shared/exporter';
import {Icon} from 'react-native-elements';
import ImageCropPicker from 'react-native-image-crop-picker';

const Inbox = () => {
  const [message, setMessage] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [galleryImage, setGalleryImage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [loadingAllMessages, setLoadingAllMessages] = useState(false);
  const [fresh, setFresh] = useState(true);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.msgContainer}>
        {item?.user_id === userInfo?.user?.id ? (
          // Sender Bubble
          <View style={styles.senderBubble}>
            <View style={styles.senderBubbleStyles}>
              <Image
                source={appIcons.blockIcon}
                style={{
                  height: HP('15'),
                  width: HP('20'),
                  borderRadius: 10,
                  paddingBottom: 5,
                }}
              />
              <Text
                style={[
                  styles.senderMsgStyles,
                  {paddingTop: item?.image ? 10 : null},
                ]}>
                {item.body}
              </Text>
            </View>
          </View>
        ) : (
          // Receiver Bubble
          <View style={styles.receiverBubble}>
            <View style={{width: '70%'}}>
              <View style={styles.receiverBubbleStyles}>
                {item?.image ? (
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      height: HP('15'),
                      width: HP('20'),
                      borderRadius: 10,
                      paddingBottom: 5,
                    }}
                  />
                ) : null}
                <Text
                  style={[
                    styles.receiverMsgStyles,
                    {paddingTop: item?.image ? 10 : null},
                  ]}>
                  {item.body}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  const onSend = () => {
    setVisibility(true);
  };

  //Gallery Handlers

  const showGallery = () => {
    setTimeout(() => {
      ImageCropPicker.openPicker({
        height: 400,
      }).then(image => {
        setGalleryImage(image);
      });
    }, 400);
  };
  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <FlatList
        inverted
        data={allMessages}
        extraData={fresh}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => {
          return (
            <View style={styles.personView}>
              <Image
                source={appIcons.cameraIcon}
                style={styles.personImgStyle}
              />
              <Text style={styles.nameTxtStyle}>hello</Text>
            </View>
          );
        }}
      />
      <KeyboardAvoidingView
        behavior={platformOrientedCode('height', 'padding')}>
        {
          <View style={styles.inputView}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder={'Type here...'}
                value={message}
                ellipsizeMode="tail"
                multiline
                maxHeight={75}
                onChangeText={text => setMessage(text)}
                placeholderTextColor={colors.g4}
                style={styles.inputStyles}
              />
              {visibility ? (
                <ActivityIndicator
                  animating
                  size={'small'}
                  color={colors.p1}
                  style={{left: 3}}
                />
              ) : (
                <Icon
                  name={'send'}
                  type={'ionicons'}
                  size={22}
                  color={colors.g12}
                  onPress={() => onSend()}
                />
              )}
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => showGallery()}>
              <Image source={appIcons.gallery} style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Image source={appIcons.sendbutton} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
        }
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Inbox;
