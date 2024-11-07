"use client";

import React, {useState, createContext, type FC, useContext} from 'react';

interface IChordContext {
  chord: number[];
  setChord?: (chord: number[]) => void;
}

const defaultState: IChordContext = {
  chord: [0, 0, 0, 0, 0, 0],
}

const ChordContext = createContext<IChordContext>(defaultState);

export const ChordProvider: FC = ({children}) => {
  const [chord, setChord] = useState([0, 0, 0, 0, 0, 0])

  return (
    <ChordContext.Provider
      value={{
        chord,
        setChord
      }}
    >
      {children}
    </ChordContext.Provider>
  )
}

export const useChordContext = () => useContext(ChordContext)

export default ChordContext;
