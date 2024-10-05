// HomeScreen.tsx
import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import TicTacToeLogo from "../../assets/tic-tac-toe-logo.png";
import { CommonButton } from "../components/CommonButton";
import { PlayerNameModal } from "../components/PlayerNameModal";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { StatusBar } from "expo-status-bar";

export const HomeScreen = () => {
  const adUnitId = TestIds.BANNER;
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [mode, setMode] = useState<"onePlayer" | "twoPlayers">("onePlayer");

  const handlePress = (selectedMode: "onePlayer" | "twoPlayers") => {
    setMode(selectedMode);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={TicTacToeLogo} style={styles.image} />
      <View style={{ marginTop: 50, width: "100%", alignItems: "center" }}>
        <CommonButton
          onPress={() => handlePress("onePlayer")}
          text="Play Alone"
        />
        <CommonButton
          onPress={() => handlePress("twoPlayers")}
          text="Play with Other"
        />
      </View>
      <PlayerNameModal
        isVisible={isModalVisible}
        mode={mode}
        onClose={() => setModalVisible(false)}
      />
      <View
        style={{
          position: "absolute",
          bottom: 30,
        }}
      >
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
            networkExtras: {
              collapsible: "bottom",
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B78AF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
