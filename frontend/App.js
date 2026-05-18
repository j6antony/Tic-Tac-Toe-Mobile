import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Banner from "./components/banner";

export default function App() {
  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [old, setOld] = useState(board);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;

      if (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  };

  const handlePress = (index) => {
    if (board[index] !== "" || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    if (!newBoard.includes("")) {
      setWinner("Draw");
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard([
      "", "", "",
      "", "", "",
      "", "", ""
    ]);
    setTurn("X");
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <Banner winner={winner} />

      {!winner && (
        <Text style={styles.turnText}>Current Turn: {turn}</Text>
      )}

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

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
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

  turnText: {
    fontSize: 22,
    marginBottom: 20,
  },

  resetButton: {
    marginTop: 30,
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  resetText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});