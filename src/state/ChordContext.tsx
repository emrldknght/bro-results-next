"use client";

import React, {useState, createContext, type FC, useContext} from 'react';

interface IChordContext {
  chord: number[];
  setChord?: (chord: number[]) => void;
  // getCurrent?: () => string[];
  current: string[];
}

const defaultState: IChordContext = {
  chord: [0, 0, 0, 0, 0, 0],
  current: [],
};

export const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const NOTES_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const getNoteFromString = (string: string, pos: number) => {
    const notes = [...NOTES_FLAT];
    const idx = notes.indexOf(string);
    const tune = [...notes.slice(idx), ...notes.slice(0, idx)];

    return tune[pos % tune.length];
};

export const getCurrent = (chord: number[]) => {
    const _o = [
        getNoteFromString('E', chord[0]),
        getNoteFromString('A', chord[1]),
        getNoteFromString('D', chord[2]),
        getNoteFromString('G', chord[3]),
        getNoteFromString('B', chord[4]),
        getNoteFromString('E', chord[5]),
    ];

    // console.log()

    return _o.filter(n => n);
};


const ChordContext = createContext<IChordContext>(defaultState);

export const ChordProvider: FC = ({children}) => {
  const [chord, _setChord] = useState([0, 0, 0, 0, 0, 0]);

  const _d = getCurrent(chord);
  const [current, setCurrent] = useState(_d);


  const setChord = (chord: number[]) => {
    _setChord(chord);

    const k = getCurrent(chord);

    setCurrent(k);
  };

  return (
    <ChordContext.Provider
      value={{
        chord,
        setChord,
        current,
      }}
    >
      {children}
    </ChordContext.Provider>
  );
};

export const useChordContext = () => useContext(ChordContext);

export default ChordContext;
