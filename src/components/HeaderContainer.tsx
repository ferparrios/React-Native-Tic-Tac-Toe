import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

interface HeaderContainerProps {
  player1Name: string;
  player2Name: string;
  winner: any;
  isXNext: any;
}

export const HeaderContainer = ({
  player1Name,
  player2Name,
  winner,
  isXNext,
}: HeaderContainerProps) => {
  const navigation = useNavigation();
  console.log(player2Name)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={styles.playerNameText}>
          {player1Name} VS {player2Name ? player2Name : "Computer"}
        </Text>
      </View>

      <Text style={styles.status}>
        {winner
          ? `Winner: ${winner === "X" ? player1Name : "Computer"}`
          : `Next Player: ${isXNext ? player1Name :  player2Name || "Computer"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    position: "absolute",
    left: 10,
  },
  playerNameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
});
