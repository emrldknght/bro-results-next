"use client";

import type {Roll} from "@/types/Roll";
import {createContext, type FC, useContext, useState} from "react";

interface IRollContext {
    roll: Roll;
    setRoll: (roll: Roll) => void;
    setValue: (beat: number, line: number, value: number) => void;
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
};

const RollContext = createContext<IRollContext>(defaultState);

export const RollProvider: FC = ({children}) => {
    const [roll, _setRoll] = useState<Roll>([...defaultState.roll]);

    const setRoll = (roll: Roll) => {
      _setRoll(roll);
    };

    const setValue = (beat: number, line: number, value: number) => {
      const newRoll = [...roll];
      console.log('beat', beat, 'line', line);

      const newBeat = {...roll[beat]};
      newBeat.content[line] = Number(value);
      console.log('nb', newBeat);

      newRoll[beat] = newBeat;
      setRoll(newRoll);

    };

    return (
      <RollContext.Provider
        value={{
            roll,
            setRoll,
            setValue,
        }}
      >
          {children}
      </RollContext.Provider>
    );
};

export const useRollContext = () => useContext(RollContext);

export default RollContext;