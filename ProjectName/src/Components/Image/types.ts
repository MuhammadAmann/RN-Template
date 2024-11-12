import {ImageProps} from 'react-native';
import {TColors} from 'ProjectName/src/config/globalStyles';

export interface IImage extends ImageProps {
  size?: number;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  color?: TColors;
  border?: boolean;
  bgColor?: TColors;
}
