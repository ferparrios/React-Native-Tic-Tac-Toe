import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Board } from "../components/Board";
import { CommonButton } from "../components/CommonButton";
import { Player } from "../interfaces/playInterfaces";
import { calculateWinner } from "../functions/functions";

export const PlayboardScreen = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | null>(null);

  const handlePress = (i: number) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winningPlayer = calculateWinner(newSquares);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        Player 1
      </Text>
      <Board squares={squares} onPress={handlePress} winner={winner} player1Name='Player 1' player2Name="Player 2" />
      <CommonButton onPress={handleReset} text="Reset Game" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B78AF",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
