import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../componenets/PrimaryButton";
import Card from "../componenets/Card";
import Colors from "../componenets/constants/color";
import Title from "../componenets/Title";
import InstructionText from "../componenets/InstructionText";
import { useState } from "react";

export default function StartGame({ pickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState();

  function numberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInput() {
    setEnteredNumber();
  }

  function confirmNumber() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    pickedNumber(enteredNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View>
        <Card>
          <InstructionText>Guess a number</InstructionText>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={numberHandler}
            value={enteredNumber}
          />
          <View style={styles.btnsContainer}>
            <PrimaryButton child="Reset" onPress={resetInput} />
            <PrimaryButton child="Confirm" onPress={confirmNumber} />
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    marginTop: 34,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 9,
    elevation: 40,
    height: 180,
    width: 340,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
  },

  input: {
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderColor: "grey",
    borderBottomWidth: 1,
    fontSize: 32,
    fontWeight: "bold",
    padding: 2,
    color: Colors.accent500,
    width: 50,
  },

  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    padding: 30,
  },
});
