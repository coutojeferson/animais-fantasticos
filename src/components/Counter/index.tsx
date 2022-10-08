import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  quantity: number;
};
export function Counter({ quantity }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{quantity}</Text>
    </View>
  );
}
