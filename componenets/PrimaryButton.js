// Import necessary components and modules
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "./constants/color";

// PrimaryButton component with props
export default function PrimaryButton({ child, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{child}</Text>
      </View>
    </Pressable>
  );
}

// Styles for PrimaryButton componen
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 50,
    paddingVertical: 8,
    minWidth: 140,
  },

  text: {
    textAlign: "center",
    color: "white",
  },

  pressed: {
    opacity: 0.5, // opacity when pressed
    backgroundColor: "#5f0331", // background color when pressed
    borderRadius: 50, // border radius when pressed
  },
});
