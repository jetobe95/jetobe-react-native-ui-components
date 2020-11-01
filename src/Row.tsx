import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
export function Row({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
