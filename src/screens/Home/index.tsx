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

type Tasks = {
  id: number;
  taskText: string;
  checked: boolean;
};

const Home = () => {
  const [inputText, setinputText] = React.useState("");
  const [itensLista, setItensLista] = React.useState<Tasks[]>([]);
  const [numConcluidas, setNumConcluidas] = React.useState(0);

  function handleTaskAdd() {
    if (inputText === "")
      return Alert.alert(
        "Nova Tarefa",
        "Por favor preencha o campo para adicionar uma nova tarefa",
      );

    Alert.alert("Nova tarefa", "Deseja adicionar uma nova tarefa ?", [
      {
        text: "Sim",
        onPress: () => {
          const newTask: Tasks = {
            id: itensLista.length,
            taskText: inputText,
            checked: false,
          };
          setItensLista([...itensLista, newTask]);
        },
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
          setItensLista(itensLista.filter((item) => item.taskText !== task)),
      },
      {
        text: "não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskToggle(id: number, checked: boolean) {
    setItensLista(
      itensLista.map((task) => {
        if (task.id === id) {
          return { ...task, checked };
        }
        return task;
      }),
    );
  }

  React.useEffect(() => {
    function handleConcludedTasks() {
      let numConcluidasAtualizado = itensLista.filter(
        (task) => task.checked === true,
      ).length;
      setNumConcluidas(numConcluidasAtualizado);
    }
    handleConcludedTasks();
  }, [itensLista]);

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
            <Text style={styles.num}>{itensLista.length}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.concludedText}>Concluidas</Text>
            <Text style={styles.num}>{numConcluidas}</Text>
          </View>
        </View>

        <FlatList
          data={itensLista}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemove={() => handleRemoveTask(item.taskText)}
              onToggle={(checked) => handleTaskToggle(item.id, checked)}
            />
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
