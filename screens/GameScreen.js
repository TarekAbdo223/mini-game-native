import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  console.log(userNumber);
  const initialGuess = generateRandomBetween(1, 100, {
    userNumber,
  });
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    console.log(typeof currentGuess, typeof userNumber, "useEffect");

    if (currentGuess === +userNumber) {
      onGameOver();
      console.log("equal");
    }
  }, [currentGuess, onGameOver, userNumber]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie You know that this is wrong...", "wrong", [
        {
          text: "Got it!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      // i mean if the direction is higher or lower
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    console.log(minBoundry, maxBoundry);

    const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, {
      currentGuess,
    });
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => [...prevRounds, newRndNumber]);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instructions style={styles.instruction}>Higher or Lower?</Instructions>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
        {/* + - */}
      </Card>
      <View>
        {/* {guessRounds.map((guess) => (
          <Text key={guess}>{guess}</Text>
        ))} */}
        <FlatList></FlatList>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // padding: 16,
    // marginTop: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  instruction: {
    marginBottom: 24,
  },
});
