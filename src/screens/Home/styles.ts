import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    height: "100%",
  },
  title: {
    backgroundColor: "#000",
    width: "100%",
    height: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    gap: 5,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
    position: "absolute",
    bottom: -28,
    height: 60,
  },
  input: {
    backgroundColor: "#262626",
    padding: 10,
    flex: 1,
    borderRadius: 5,
    fontSize: 16,
    color: "white",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    width: 60,
    padding: 10,
    borderRadius: 5,
  },
  tasksContainer: {
    marginTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  createdAndConcluded: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 50,
  },
  createdText: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  concludedText: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  num: {
    color: "white",
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50,
    backgroundColor: "#808080",
  },
  tasksList: {},
  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  emptyListBoldText: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 24,
    marginBottom: 2,
  },
  emptyListRegularText: {
    color: "#808080",
    fontSize: 16,
  },
});
