import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CommonButtonProps {
  onPress: () => void;
  text: string;
}

export const CommonButton = ({ onPress, text }: CommonButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3C301",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#FFFFFF",
  },
});
