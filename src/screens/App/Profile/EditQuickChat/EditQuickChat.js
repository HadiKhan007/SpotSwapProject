import React, {useRef, useState} from 'react';
import {View, ImageBackground} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  WP,
  colors,
  appImages,
  quickChatVS,
  quickChatFormFields,
} from '../../../../shared/exporter';
import {
  Spacer,
  AppInput,
  AppModal,
  AppButton,
  AppHeader,
} from '../../../../components';
import styles from './styles';

const EditQuickChat = ({navigation}) => {
  const formikRef = useRef();
  const [showAppModal, setShowAppModal] = useState(false);

  const handleEditQuickChat = values => {
    setShowAppModal(true);
    // formikRef.current?.resetForm();
  };

  return (
    <ImageBackground style={styles.rootContainer} source={appImages.app_bg}>
      <AppHeader
        title="Edit Quick Chat"
        onBackPress={() => navigation.goBack()}
      />
      <Formik
        innerRef={formikRef}
        initialValues={quickChatFormFields}
        onSubmit={values => {
          handleEditQuickChat(values);
        }}
        validationSchema={quickChatVS}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollViewStyle}
            showsVerticalScrollIndicator={false}>
            <Spacer androidVal={WP('11')} iOSVal={WP('11')} />
            <AppInput
              renderErrorMessage
              disableFullscreenUI
              value={values.chat}
              blurOnSubmit={false}
              touched={touched.chat}
              title="Enter your quick chat"
              errorMessage={errors.chat}
              placeholder="Enter quick chat"
              placeholderTextColor={colors.g2}
              onChangeText={handleChange('chat')}
              onBlur={() => setFieldTouched('chat')}
            />
            <Spacer androidVal={WP('3')} iOSVal={WP('3')} />
            <View style={styles.bottomView}>
              <AppButton title="Save" onPress={() => handleSubmit()} />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
      {showAppModal && (
        <AppModal
          show={showAppModal}
          title={'Quick Chat\nSuccessfully Updated'}
          onPressHide={() => setShowAppModal(false)}
        />
      )}
    </ImageBackground>
  );
};

export default EditQuickChat;
