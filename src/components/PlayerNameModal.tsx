import React, { useContext, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigation } from "@react-navigation/native";
import { CommonButton } from "./CommonButton";
import AntDesign from "@expo/vector-icons/AntDesign";

interface PlayerNameModalProps {
  isVisible: boolean;
  mode: "onePlayer" | "twoPlayers";
  onClose: () => void;
}

export const PlayerNameModal: React.FC<PlayerNameModalProps> = ({
  isVisible,
  mode,
  onClose,
}) => {
  const { setPlayer1Name, setPlayer2Name } = useContext(PlayerContext);
  const [player1, setPlayer1] = useState<string>("Player 1");
  const [player2, setPlayer2] = useState<string>("Player 2");
  const navigation = useNavigation();

  const handleConfirm = () => {
    setPlayer1Name(player1 || "Player 1");
    if (mode === "twoPlayers") {
      setPlayer2Name(player2 || "Player 2");
      navigation.navigate("Playboard");
    } else {
      navigation.navigate("OnePlayer");
      setPlayer2Name("Computer");
    }
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeModalButtonContainer}
          >
            <AntDesign name="closecircle" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Enter Player Name(s)</Text>
          <TextInput
            style={styles.input}
            value={player1}
            onChangeText={setPlayer1}
            placeholder="Player 1 Name"
          />
          {mode === "twoPlayers" && (
            <TextInput
              style={styles.input}
              value={player2}
              onChangeText={setPlayer2}
              placeholder="Player 2 Name"
            />
          )}
          <CommonButton text="Confirm" onPress={handleConfirm} />
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#ADCACB",
    marginVertical: "50%",
    marginHorizontal: 50,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  closeModalButtonContainer: {
    padding: 10,
    alignItems: "flex-end",
    width: "100%",
  },
});
