import React from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}
export function SizedBox({ style, width, height }: Props) {
  const _styles = React.useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );
  return <View style={[_styles, style]} />;
}
