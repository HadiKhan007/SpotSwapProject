import * as React from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import {
  WP,
  size,
  colors,
  family,
  platformOrientedCode,
} from '../../shared/exporter';

const AppInput = ({
  cca2,
  title,
  value,
  onBlur,
  touched,
  onSelect,
  countryCode,
  placeholder,
  countryInput,
  blurOnSubmit,
  onChangeText,
  keyboardType,
  errorMessage,
  countryPicker,
  leftIcon = false,
  onSubmitEditing,
  rightIcon = false,
  renderErrorMessage,
  capitalize = 'none',
  disableFullscreenUI,
  onPressCountryPicker,
  secureTextEntry = false,
  phTextColor = colors.g2,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <>
      {title && <Text style={styles.labelTxtStyle}>{title}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && (
          <>
            {countryInput ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPressCountryPicker}
                style={styles.countryInputContainer}>
                <CountryPicker
                  onSelect={onSelect}
                  translation="eng"
                  withFlag={true}
                  withEmoji={true}
                  countryCode={cca2}
                  withFilter={true}
                  withFlagButton={false}
                  withAlphaFilter={true}
                  visible={countryPicker}
                  theme={styles.modalBgColor}
                />
                <Text style={styles.countryInput}>+{countryCode}</Text>
                <Icon
                  name={'caretdown'}
                  type={'antdesign'}
                  size={10}
                  color={colors.g2}
                />
              </TouchableOpacity>
            ) : null}
          </>
        )}
        <TextInput
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          selectionColor={colors.s4}
          secureTextEntry={showPass}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={capitalize}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={phTextColor}
          errorMessage={touched && errorMessage}
          renderErrorMessage={renderErrorMessage}
          disableFullscreenUI={disableFullscreenUI}
          style={styles.inputStyle(leftIcon, rightIcon)}
        />
        {rightIcon && (
          <View style={styles.iconContainer}>
            <Icon
              name={showPass ? 'eye-off' : 'eye'}
              type={'feather'}
              size={18}
              color={colors.g2}
              onPress={() => setShowPass(!showPass)}
            />
          </View>
        )}
      </View>
      {touched && errorMessage ? (
        <Text style={styles.errorTxtStyle}>{errorMessage}</Text>
      ) : (
        <Text style={styles.errorTxtStyle} />
      )}
    </>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  labelTxtStyle: {
    color: colors.g2,
    fontSize: size.tiny,
    paddingBottom: WP('2.5'),
    fontFamily: family.SFProText_Regular,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: colors.s3,
    backgroundColor: colors.t1,
    paddingHorizontal: WP('3.2'),
    height: platformOrientedCode(55, 55),
  },
  inputStyle: (leftIcon, rightIcon) => {
    return {
      color: colors.white,
      fontSize: size.normal,
      bottom: platformOrientedCode(0, 1),
      height: platformOrientedCode(55, 55),
      width: leftIcon || rightIcon ? '90%' : '100%',
    };
  },
  iconContainer: {
    width: '10%',
    left: WP('1.5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTxtStyle: {
    top: WP('1'),
    color: colors.s1,
    fontSize: size.tiny,
    fontFamily: family.SFProText_Regular,
  },
  countryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: WP('2'),
    justifyContent: 'center',
  },
  countryInput: {
    color: colors.white,
    fontSize: size.normal,
    fontFamily: family.SFProText_Regular,
    left: Platform.select({android: -8, ios: -5}),
  },
  modalBgColor: {
    backgroundColor: colors.s3,
    onBackgroundTextColor: colors.white,
  },
});
