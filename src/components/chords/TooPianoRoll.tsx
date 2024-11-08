"use client";

import {useEffect, useState} from "react";

type Line = number[];

type Beat = {
  id: number,
  content: Line,
}
type Roll = Beat[];

const DEFAULT_LINE = [-1, -1, -1, -1, -1, -1];

export function TooPianoRoll() {

  const [roll] = useState<Roll>([
    { id: 0, content: [...DEFAULT_LINE] },
    { id: 1, content: [...DEFAULT_LINE] },
    { id: 2, content: [...DEFAULT_LINE] },
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('kd', e);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, []);


  return (
    <div >
      <div className={'raw'}>{JSON.stringify(roll)}</div>
      <div className={'piano-roll'}>
        {roll.map((beat) =>
          <div key={beat.id} className={'piano-roll--beat'}>
            {beat.content.map((line, i) =>
              <div key={`beat_${beat.id}_${i}`} className={'piano-roll--line'}>
                <input type={'number'} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}