import { View, Text, StyleSheet } from "react-native";
import { Square } from "./Square";
import { Player } from "../interfaces/playInterfaces";

interface BoardProps {
  squares: Player[];
  onPress: (i: number) => void;
  winner: Player | null;
  player1Name: string
  player2Name: string
}

export const Board = ({ squares, onPress, winner, player1Name, player2Name }: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onPress={() => onPress(i)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {winner
          ? `Winner: ${winner}`
          : `Next player: ${
              squares.filter(Boolean).length % 2 === 0 ? player1Name :player2Name
            }`}
      </Text>
      <View style={styles.board}>
        <View style={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  status: {
    fontSize: 24,
    marginBottom: 10,
  },
  board: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#999",
  },
  boardRow: {
    flexDirection: "row",
  },
});
