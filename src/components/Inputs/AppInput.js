import * as React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  family,
  size,
  colors,
  WP,
  platformOrientedCode,
} from '../../shared/exporter';

const AppInput = ({
  title,
  capitalize,
  placeholder,
  onChangeText,
  keyboardType,
  bottom = WP('7'),
  rightIcon = false,
  secureTextEntry = false,
  phTextColor = colors.g2,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <>
      {title && <Text style={styles.labelTxtStyle}>{title}</Text>}
      <View style={styles.inputContainer(bottom)}>
        <TextInput
          placeholder={placeholder}
          selectionColor={colors.s4}
          secureTextEntry={showPass}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={capitalize}
          placeholderTextColor={phTextColor}
          style={styles.inputStyle(rightIcon)}
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
    </>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  labelTxtStyle: {
    color: colors.g2,
    fontSize: size.tiny,
    paddingBottom: WP('3'),
    fontFamily: family.SFProText_Regular,
  },
  inputContainer: bottom => {
    return {
      width: '100%',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: bottom,
      borderColor: colors.s3,
      backgroundColor: colors.t1,
      paddingHorizontal: WP('3.2'),
      height: platformOrientedCode(55, 55),
    };
  },
  inputStyle: rightIcon => {
    return {
      color: colors.white,
      fontSize: size.normal,
      width: rightIcon ? '90%' : '100%',
      bottom: platformOrientedCode(0, 1),
      height: platformOrientedCode(55, 55),
    };
  },
  iconContainer: {
    width: '10%',
    left: WP('1.5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
