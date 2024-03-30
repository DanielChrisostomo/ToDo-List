import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    width: "100%",
    marginBottom: 12,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  paragraph: {
    color: "#F2F2F2",
    maxWidth: 260,
  },
  paragraphChecked: {
    color: "#808080",
    maxWidth: 260,
    textDecorationLine: "line-through",
  },
  checkbox: {
    padding: 1,
    borderRadius: 50,
    marginRight: 8,
  },
  btnRemove: {
    position: "absolute",
    right: 20,
  },
  data: {
    fontSize: 9,
    color: "#808080",
    marginLeft: 8,
  },
});
