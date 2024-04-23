import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import Trash from "../../../assets/trash.svg";

type TaskProps = {
  task: {
    id: number;
    taskText: string;
    checked: boolean;
  };
  onRemove: () => void;
  onToggle: (checked: boolean) => void;
};

const Task = ({ task, onRemove, onToggle }: TaskProps) => {
  return (
    <>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={task.checked}
          onValueChange={onToggle}
          color={task.checked ? "#5E60CE" : "#4EA8DE"}
        />
        <Text style={task.checked ? styles.paragraphChecked : styles.paragraph}>
          {task.taskText}
        </Text>
        <TouchableOpacity onPress={onRemove} style={styles.btnRemove}>
          <Trash width={16} height={16} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Task;
