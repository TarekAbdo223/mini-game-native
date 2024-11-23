import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2, // this is for Android only
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
