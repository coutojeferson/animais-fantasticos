import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  text: string;
  onRemove: () => void;
};

export function Task({ text, onRemove }: Props) {
  const [doneTask, setDoneTask] = useState(false);
  function handleCheckTask() {
    setDoneTask(!doneTask);
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewCheck}>
        <TouchableOpacity onPress={handleCheckTask}>
          <Image
            source={
              !doneTask
                ? require('../../../assets/check.png')
                : require('../../../assets/done.png')
            }
            style={!doneTask ? styles.check : styles.done}
          />
        </TouchableOpacity>
        <Text style={!doneTask ? styles.textTask : styles.textDoneTask}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require('../../../assets/trash.png')}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  );
}
