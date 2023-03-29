import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    marginTop: 29,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
  },
});
