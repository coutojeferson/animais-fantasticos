import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Counter } from '../components/Counter';
import { Task } from '../components/Task';

import { styles } from './styles';

export function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  function handleAddTask() {
    if (task.includes(taskDescription)) {
      return Alert.alert(
        'Memória ruim, hein ?!',
        'Já existe uma tarefa com a descrição idêntica rs',
      );
    }
    if (taskDescription === '') {
      return Alert.alert('Ops!', 'Digite no mínimo um caractere, beleza ?');
    }
    setTask((prevState) => [...prevState, taskDescription]);
    setTaskDescription('');
  }
  function handleRemoveTask(taskDescription: string) {
    Alert.alert('Remover', `Deseja realmente remover essa tarefa ?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTask((prevState) =>
            prevState.filter((task) => task !== taskDescription),
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('../../assets/logo.png')} style={styles.img} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image
              source={require('../../assets/adicionar.png')}
              style={styles.iconAdd}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewCountTask}>
          <View style={styles.viewCreated}>
            <Text style={styles.created}>Criadas</Text>
            <Counter quantity={task.length} />
          </View>
          <View style={styles.viewDone}>
            <Text style={styles.done}>Concluídas</Text>
            <Counter quantity={0} />
          </View>
        </View>
        <FlatList
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task text={item} onRemove={() => handleRemoveTask(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <View style={styles.line}></View>
              <View style={styles.viewEmpty}>
                <Image
                  source={require('../../assets/clipboard.png')}
                  style={styles.imgEmpty}
                />
                <Text style={styles.firstTextEmpty}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.secondTextEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
}
