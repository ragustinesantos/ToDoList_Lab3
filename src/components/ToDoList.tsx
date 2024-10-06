import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ToDoList({tasks}): React.JSX.Element {
  const taskView = tasks.map((task: string, index: number) => {
    return (
      <Text style={style.incomplete} key={index}>
        {task}
      </Text>
    );
  });

  return <View>{taskView}</View>;
}

const style = StyleSheet.create({
  incomplete: {},
});

export default ToDoList;
