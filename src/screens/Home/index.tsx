import React from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Title from "../../../assets/title-todo.svg";
import Plus from "../../../assets/plus.svg";
import Clipboard from "../../../assets/clipboard.svg";
import Task from "../../components/Task";

const Home = () => {
  const [inputText, setinputText] = React.useState("");
  const [itensLista, setItensLista] = React.useState<string[]>([]);

  console.log(itensLista);

  function handleTaskAdd() {
    if (inputText === "")
      return Alert.alert(
        "Nova Tarefa",
        "Por favor preencha o campo para adicionar uma nova tarefa",
      );

    Alert.alert("Nova tarefa", "Deseja adicionar uma nova tarefa ?", [
      {
        text: "Sim",
        onPress: () => setItensLista([...itensLista, inputText]),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    setinputText("");
  }

  function handleRemoveTask(task: string) {
    Alert.alert("Remover tarefa", "Deseja realmente remover essa tarefa ?", [
      {
        text: "sim",
        onPress: () =>
          setItensLista(itensLista.filter((item) => item !== task)),
      },
      {
        text: "não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title width={140} height={140} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicone uma tarefa"
            placeholderTextColor={"#808080"}
            value={inputText}
            onChangeText={(text) => setinputText(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={handleTaskAdd}>
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

        <FlatList
          style={styles.tasksList}
          data={itensLista}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task taskText={item} onRemove={() => handleRemoveTask(item)} />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Clipboard width={80} height={80} />
              <Text style={styles.emptyListBoldText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListRegularText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default Home;
