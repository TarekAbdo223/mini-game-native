import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constatnts/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleInput(enteredText) {
    setEnteredNumber(enteredText);
    console.log(enteredNumber);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(enteredNumber);
    console.log("valid one");
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  return (
    <View style={styles.inputCntainer}>
      <View style={styles.centerInput}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInput}
          value={enteredNumber}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputCntainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // this is for andriod only
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  buttonContainer: {
    flex: 1,
  },
});
