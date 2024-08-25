import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Player } from "../interfaces/playInterfaces";

interface SquareProps {
  value: Player;
  onPress: () => void;
}

export const Square = ({ value, onPress }: SquareProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  squareText: {
    fontSize: 36,
  },
});
