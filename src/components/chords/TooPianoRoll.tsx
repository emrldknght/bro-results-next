"use client";

import {ChangeEvent, useEffect, useState} from "react";
import {Roll} from "@/types/Roll";

const DEFAULT_LINE = [-1, -1, -1, -1, -1, -1];

export function TooPianoRoll() {

  const [roll, setRoll] = useState<Roll>([
    { id: 0, content: [...DEFAULT_LINE] },
    { id: 1, content: [...DEFAULT_LINE] },
    { id: 2, content: [...DEFAULT_LINE] },
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log('kd', e);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, line: number, beat: number) => {
    const value = (e.target as HTMLInputElement).value;

    const newRoll = [...roll];

    console.log('beat', beat, 'line', line)
    const newBeat = {...roll[beat]};
    newBeat.content[line] = Number(value);
    console.log('nb', newBeat);

    newRoll[beat] = newBeat;

    setRoll(newRoll);

  }


  return (
    <div >
      <div className={'raw'}>{JSON.stringify(roll)}</div>
      <div className={'piano-roll'}>
        {roll.map((beat, j) =>
          <div key={beat.id} className={'piano-roll--beat'}>
            {beat.content.map((line, i) =>
              <div key={`beat_${beat.id}_${i}`} className={'piano-roll--line'}>
                <input
                    type={'number'}
                    value={roll[j].content[i]}
                    onChange={(e) => handleChange(e, i, j)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}