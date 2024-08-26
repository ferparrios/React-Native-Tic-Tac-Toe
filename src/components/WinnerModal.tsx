import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CommonButton } from "./CommonButton";

interface WinnerModalProps {
  isVisible: boolean;
  winner: string | null;
  player1Name: string;
  player2Name: string;
  onNewGame: () => void;
  onClose: () => void;
}

export const WinnerModal: React.FC<WinnerModalProps> = ({
  isVisible,
  winner,
  player1Name,
  player2Name,
  onNewGame,
  onClose,
}) => {
  const message = winner
    ? `Winner: ${winner === "X" ? player1Name : player2Name || "Computer"}`
    : "It's a Draw!";

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={styles.message}>{message}</Text>
          <CommonButton text="New Game" onPress={() => {
            onNewGame()
            onClose()
            }} />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 300,
    backgroundColor: "#ADCACB",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  message: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
