"use client";

import useLocalStorage from "@/lib/useLocalStorage";
import type {Roll} from "@/types/Roll";
import {createContext, type FC, useContext} from "react";
import type React from "react";

interface IRollContext {
    roll: Roll;
    setRoll: (roll: Roll) => void;
    setValue: (beat: number, line: number, value: number) => void;
    addBeatLast: () => void;
}

const DEFAULT_LINE = [-1, -1, -1, -1, -1, -1];

const E_MAJ = [0, 2, 2, 1, 0, 0];

const defaultState: IRollContext = {
    roll: [
        { id: 0, content: [...E_MAJ] },
        { id: 1, content: [...DEFAULT_LINE] },
        { id: 2, content: [...DEFAULT_LINE] },
    ],
    setRoll: () => {},
    setValue: () => {},
    addBeatLast: () => {},
};

const RollContext = createContext<IRollContext>(defaultState);

interface RollProviderProps {
    children?: React.ReactNode;
}

export const RollProvider: FC = ({children}: RollProviderProps) => {
    const [roll, _setRoll] = useLocalStorage<Roll>('too-roll', [...defaultState.roll]);

    const setRoll = (roll: Roll) => {
      _setRoll(roll);
    };

    const setValue = (beat: number, line: number, value: number) => {
      const newRoll = [...roll];
      // console.log('beat', beat, 'line', line);

      const newBeat = {...roll[beat]};
      newBeat.content[line] = Number(value);
      // console.log('nb', newBeat);

      newRoll[beat] = newBeat;
      setRoll(newRoll);

    };

    const addBeatLast = () => {
      const newRoll = [...roll];
      newRoll.push({ id: newRoll.length, content: [...DEFAULT_LINE] });
      setRoll(newRoll);
    };

    return (
      <RollContext.Provider
        value={{
            roll,
            setRoll,
            setValue,
            addBeatLast,
        }}
      >
          {children}
      </RollContext.Provider>
    );
};

export const useRollContext = () => useContext(RollContext);

export default RollContext;