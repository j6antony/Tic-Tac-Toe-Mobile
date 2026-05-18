import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Banner({ winner }) {
  if (!winner) {
    return null;
  }

  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>
        {winner === "Draw" ? "It's a draw!" : `${winner} wins!`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
  },

  bannerText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
});