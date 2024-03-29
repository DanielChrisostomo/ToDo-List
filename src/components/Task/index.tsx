import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import Trash from "../../../assets/trash.svg";

type Props = {
  taskText: string;
  onRemove: () => void;
};

const Task = ({ taskText, onRemove }: Props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text style={styles.paragraph}>{taskText}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
