import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Board } from "../components/Board";
import { Player } from "../interfaces/playInterfaces";
import { CommonButton } from "../components/CommonButton";
import { calculateWinner, findBestMove } from "../functions/functions";
import { PlayerContext } from "../context/PlayerContext";
import { HeaderContainer } from "../components/HeaderContainer";
import { WinnerModal } from "../components/WinnerModal";

export const OnePlayerGameScreen: React.FC = () => {
  const { player1Name, player2Name } = useContext(PlayerContext);
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        const bestMove = findBestMove(squares);
        if (bestMove !== null) {
          const newSquares = squares.slice();
          newSquares[bestMove] = "O";
          setSquares(newSquares);
          setIsXNext(true);

          const winningPlayer = calculateWinner(newSquares);
          if (winningPlayer) {
            setWinner(winningPlayer);
            setIsModalVisible(true);
          } else if (!newSquares.includes(null)) {
            setWinner(null);
            setIsModalVisible(true);
          }
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, squares, winner]);

  const handlePress = (i: number) => {
    if (squares[i] || winner || !isXNext) return;

    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
    setIsXNext(false);

    const winningPlayer = calculateWinner(newSquares);
    if (winningPlayer) {
      setWinner(winningPlayer);
      setIsModalVisible(true);
    } else if (!newSquares.includes(null)) {
      setWinner(null);
      setIsModalVisible(true);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.boardContainer}>
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
        player2Name="Computer"
      />
      <CommonButton onPress={handleReset} text="Reset Game" />

      <WinnerModal
        isVisible={isModalVisible}
        winner={winner}
        player1Name={player1Name}
        player2Name="Computer"
        onNewGame={handleReset}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    backgroundColor: "#1B78AF",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
