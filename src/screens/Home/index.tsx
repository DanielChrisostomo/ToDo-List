import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Title from "../../../assets/title-todo.svg";
import Plus from "../../../assets/plus.svg";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title width={140} height={140} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicone uma tarefa"
            placeholderTextColor={"#D9D9D9"}
          />
          <TouchableOpacity style={styles.btn}>
            <Plus width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.createdAndConcluded}>
          <View style={styles.row}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.num}>0</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.concludedText}>Concluidas</Text>
            <Text style={styles.num}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
