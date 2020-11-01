import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import UiComponents from 'ui-components';

export default function App() {
  return (
    <View style={styles.container}>
      <UiComponents.Row>
        <UiComponents.SizedBox width={10} />
        <UiComponents.SizedBox height={10} />
      </UiComponents.Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
