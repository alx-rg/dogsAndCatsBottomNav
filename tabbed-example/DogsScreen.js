import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'


export default function DogsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Ionicons name="bicycle-outline" size={32} />
      <Text>Dogs!</Text>
    </View>
  );
}
