// HomeScreen.tsx
import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image } from "react-native";
import TicTacToeLogo from "../../assets/Designer.png";
import { CommonButton } from "../components/CommonButton";
import { PlayerNameModal } from "../components/PlayerNameModal";

export const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [mode, setMode] = useState<"onePlayer" | "twoPlayers">("onePlayer");

  const handlePress = (selectedMode: "onePlayer" | "twoPlayers") => {
    setMode(selectedMode);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image source={TicTacToeLogo} style={styles.image} />
      <View style={{ marginTop: 50, width: "100%", alignItems: "center" }}>
        <CommonButton onPress={() => handlePress("onePlayer")} text="Play Alone" />
        <CommonButton onPress={() => handlePress("twoPlayers")} text="Play with Other" />
      </View>
      <PlayerNameModal
        isVisible={isModalVisible}
        mode={mode}
        onClose={() => setModalVisible(false)}
      />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
