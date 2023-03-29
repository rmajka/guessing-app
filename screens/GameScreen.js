// Import necessary components from React Native and other files
import { View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../componenets/Title";
import PrimaryButton from "../componenets/PrimaryButton";
import NumberContainer from "../componenets/NumberContainer";
import Card from "../componenets/Card";
import Colors from "../componenets/constants/color";
import InstructionText from "../componenets/InstructionText";
import GuessLogItem from "../componenets/GuessLogItem";

// If the generated number is the excluded number, call the function again to generate a new number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  // If the generated number is the excluded number, call the function again to generate a new number
  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// Initialize minimum and maximum boundary values for the random number generator
let minBoundary = 1;
let maxBoundary = 100;

// Define a functional component for the game screen
export default function GameScreen({ userNumber, onGameOver }) {
  // Generate an initial guess for the opponent's number
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  // Use the useState hook to set the current guess state
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  // Use the useEffect hook to check if the game is over
  useEffect(() => {
    if (currentGuess === parseInt(userNumber)) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  // A function to generate the next guess based on whether the user's number is higher or lower than the current guess
  function nextGuess(direction) {
    // Check if the user lied about the direction of their number
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    // Update the minimum or maximum boundary value based on the direction of the user's number
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    // Generate a new random number between the updated boundaries
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  }

  const guessRoundsListLenght = guessRounds.length;
  // Render the game screen with the opponent's guess and buttons to indicate whether the user's number is higher or lower
  return (
    <View style={styles.GameScreen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Lower or higher?</InstructionText>

        <View style={styles.btnsContainer}>
          <PrimaryButton
            onPress={nextGuess.bind(this, "lower")}
            child={<Ionicons name="md-remove" size={24} />}
          />
          <PrimaryButton
            onPress={nextGuess.bind(this, "higher")}
            child={<Ionicons name="md-add" size={24} />}
          />
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

// Define the styles for the game screen
const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    marginTop: 29,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
  },

  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    padding: 30,
  },

  listContainer: {
    flex: 1,
    padding: 16,
  },
});
