"use client";

import {Roll} from "@/types/Roll";
import {createContext, FC, useState} from "react";

interface IRollContext {
    roll: Roll;
    setRoll?: (roll: Roll) => void;
}

const DEFAULT_LINE = [-1, -1, -1, -1, -1, -1];

const defaultState: IRollContext = {
    roll: [
        { id: 0, content: [...DEFAULT_LINE] },
        { id: 1, content: [...DEFAULT_LINE] },
        { id: 2, content: [...DEFAULT_LINE] },
    ]
};

const RollContext = createContext<IRollContext>(defaultState);

export const RollProvider: FC = ({children}) => {
    const [roll, setRoll] = useState<Roll>([...defaultState.roll]);

    return (
      <RollContext.Provider
        value={{
            roll,
            setRoll,
        }}
      >
          {children}
      </RollContext.Provider>
    );
}