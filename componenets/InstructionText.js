import { Text, StyleSheet } from "react-native";
import Colors from "./constants/color";

export default function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 17,
    fontFamily: "open-sans",
  },
});
