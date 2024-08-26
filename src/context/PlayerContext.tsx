import React, { createContext, useState, ReactNode } from "react";

interface PlayerContextProps {
  player1Name: string;
  player2Name: string;
  setPlayer1Name: (name: string) => void;
  setPlayer2Name: (name: string) => void;
}

export const PlayerContext = createContext<PlayerContextProps>({
  player1Name: "Player 1",
  player2Name: "Player 2",
  setPlayer1Name: () => {},
  setPlayer2Name: () => {},
});

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");
  const [player2Name, setPlayer2Name] = useState<string>("Player 2");

  return (
    <PlayerContext.Provider value={{ player1Name, player2Name, setPlayer1Name, setPlayer2Name }}>
      {children}
    </PlayerContext.Provider>
  );
};
