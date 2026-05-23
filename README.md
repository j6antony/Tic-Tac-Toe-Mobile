# Tic-Tac-Toe Mobile

A simple mobile Tic Tac Toe game built with React Native and Expo. Players take turns placing `X` and `O` on a 3x3 board until one player wins or the game ends in a draw.

## Features

- Two-player local Tic Tac Toe gameplay
- Turn indicator for the current player
- Win detection for rows, columns, and diagonals
- Draw detection when the board is full
- Winner/draw banner after each game
- Reset button to start a new round

## Tech Stack

- React Native
- Expo
- React

## Project Structure

```text
Tic-Tac-Toe-Mobile/
├── README.md
└── frontend/
    ├── App.js
    ├── package.json
    └── components/
        └── banner.js
```

The main app code lives in `frontend/App.js`, and the result banner component lives in `frontend/components/banner.js`.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Expo CLI or the Expo Go mobile app

### Installation

1. Clone the repository:

```bash
git clone https://github.com/j6antony/Tic-Tac-Toe-Mobile.git
```

2. Move into the frontend folder:

```bash
cd Tic-Tac-Toe-Mobile/frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the Expo development server:

```bash
npm start
```

You can then open the project in Expo Go, an Android emulator, an iOS simulator, or a browser depending on your setup.

## Available Scripts

From the `frontend/` directory, you can run:

```bash
npm start
```

Starts the Expo development server.

```bash
npm run android
```

Runs the app on Android.

```bash
npm run ios
```

Runs the app on iOS.

```bash
npm run web
```

Runs the app in a web browser.

## How to Play

1. Player `X` goes first.
2. Players take turns tapping empty squares.
3. The first player to get three marks in a row, column, or diagonal wins.
4. If all squares are filled and no player has won, the game ends in a draw.
5. Tap **Reset Game** to play again.

## Future Improvements

- Add score tracking
- Add single-player mode against a computer opponent
- Improve mobile styling and animations
- Add sound effects or haptic feedback

## License

No license has been added yet.
