import {TextProps} from 'react-native';
import {TColors} from 'ProjectName/src/config/globalStyles';
import {TypographyType} from 'ProjectName/src/config/styles';

export interface ITextProps extends TextProps {
  color?: TColors;
  typography?: TypographyType;
  fontSize?: number;
  bold?: boolean;
  width?: string | number;
  paddingVertical?: number;
  marginTop?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
}
