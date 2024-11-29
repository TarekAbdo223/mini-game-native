import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constatnts/colors";

const Instructions = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default Instructions;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
