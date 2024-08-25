import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image } from "react-native";
import TicTacToeLogo from "../../assets/Designer.png";
import { CommonButton } from "../components/CommonButton";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={TicTacToeLogo} style={styles.image} />
      <View style={{
        marginTop: 50,
        width: '100%',
        alignItems: 'center'
      }}>
        <CommonButton
          onPress={() => navigation.navigate("OnePlayer")}
          text="One Player"
        />
        <CommonButton
          onPress={() => navigation.navigate("Playboard")}
          text="Two Players"
        />
      </View>
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
