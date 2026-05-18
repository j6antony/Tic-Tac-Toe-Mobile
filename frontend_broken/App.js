import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const handlePress = (index) => {
    if (board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={styles.square}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
  },

  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  square: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  cellText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});