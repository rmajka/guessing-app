import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "./constants/color";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width; //get device width (window means without topbar)

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 360 ? 12 : 24, //add responsive ternary operator
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 360 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
