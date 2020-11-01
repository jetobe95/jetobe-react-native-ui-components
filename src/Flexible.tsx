import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import React, { useMemo } from 'react';
import { View } from 'react-native';

interface Props {
  flex?: number;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
export function Flexible({ children, style, flex = 1 }: Props) {
  const allStyles = useMemo(() => [{ flex }, style], [style, flex]);
  return <View style={allStyles}>{children}</View>;
}
