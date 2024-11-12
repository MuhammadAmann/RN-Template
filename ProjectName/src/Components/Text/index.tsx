/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText} from 'react-native';
import globalStyles from 'ProjectName/src/config/globalStyles';
import {fontRef, heightRef} from 'ProjectName/src/config/screenSize';
import {TypographyStyles} from 'ProjectName/src/config/styles';
import {ITextProps} from './types';

const Text = ({
  color = 'PrimaryColor',
  typography = 'normal',
  fontSize = 24,
  bold,
  width,
  children,
  paddingVertical = 0,
  marginTop = 0,
  style,
  textAlignVertical = 'center',
  textAlign = 'center',
  onPress,
  ...rest
}: ITextProps) => {
  const istranlate = false;
  console.log({children});
  return (
    <RNText
      style={[
        {
          // @ts-ignore
          color: globalStyles.Theme[color] ?? color,
          fontWeight: bold !== undefined ? 'bold' : undefined,
          fontSize: fontSize * fontRef,
          paddingVertical: paddingVertical * heightRef,
          marginTop: marginTop * heightRef,
          textAlignVertical,
          textAlign,
        },
        TypographyStyles[typography],
        width !== undefined ? {width} : {},
        style,
      ]}
      onPress={onPress}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
