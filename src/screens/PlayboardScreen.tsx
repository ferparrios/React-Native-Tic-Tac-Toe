import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Board } from "../components/Board";
import { CommonButton } from "../components/CommonButton";
import { Player } from "../interfaces/playInterfaces";
import { calculateWinner } from "../functions/functions";
import { PlayerContext } from "../context/PlayerContext";
import { HeaderContainer } from "../components/HeaderContainer";
import { WinnerModal } from "../components/WinnerModal";

export const PlayboardScreen = () => {
  const { player1Name, player2Name } = useContext(PlayerContext);
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handlePress = (i: number) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winningPlayer = calculateWinner(newSquares);
    if (winningPlayer) {
      setWinner(winningPlayer);
      setIsModalVisible(true);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  console.log('Player 2: ', player2Name)

  return (
    <View style={styles.container}>
      <HeaderContainer
        player1Name={player1Name}
        player2Name={player2Name}
        winner={winner}
        isXNext={isXNext}
      />
      <Board
        squares={squares}
        onPress={handlePress}
        winner={winner}
        player1Name={player1Name}
        player2Name={player2Name}
      />
      <CommonButton onPress={handleReset} text="Reset Game" />

      <WinnerModal
        isVisible={isModalVisible}
        winner={winner}
        player1Name={player1Name}
        player2Name={player2Name || "Computer"}
        onNewGame={handleReset}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B78AF",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
