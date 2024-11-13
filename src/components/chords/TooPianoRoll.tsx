"use client";

import {useEffect, useState} from "react";
import {useRollContext} from "@/state/RollContext";
import {TooRollBeat} from "@/components/chords/TooRollBeat";
import {TooChord} from "@/components/chords/TooChord";
import {getCurrent} from "@/state/ChordContext";

const focusNext = (x: number, y: number) => {
  const next = document.querySelector(`input[data-x="${x}"][data-y="${y}"]`);
  if (next) {
    (next as HTMLInputElement).focus();
  }
};


export function TooPianoRoll() {

  const { roll, setValue } = useRollContext();
  const [currentX, setCurrentX] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const k = e.code;
      const t = e.target as HTMLElement;


      const tagName = (t as HTMLElement).tagName;

      if (tagName === 'INPUT') {

        const x = Number(t.dataset.x);
        const y = Number(t.dataset.y);

        switch (k) {
          case 'Backspace': {
              if (Number((t as HTMLInputElement).value) === 0) {

                e.preventDefault();
                setValue(x, y, -1);
                break;
              }
              break;
          }
          case 'KeyW':
          // case 'ArrowUp':
          {
            e.preventDefault();
            focusNext(x, y + 1);
            break;
          }
          case 'KeyS':
          // case 'ArrowDown':
          {
            e.preventDefault();
            focusNext(x, y - 1);
            break;
          }
          case 'KeyA':
          // case 'ArrowLeft':
          {
            e.preventDefault();
            focusNext(x - 1, y);
            break;
          }
          case 'KeyD':
          // case 'ArrowRight':
          {
            e.preventDefault();
            focusNext(x + 1, y);
            break;
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [setValue]);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const t = e.target as HTMLElement;
      const tagName = (t as HTMLElement).tagName;
      if (tagName === 'INPUT') {
        const x = Number(t.dataset.x);
        // const y = Number(t.dataset.y);
        setCurrentX(x);
      }
    };
    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('focusin', handleFocus);
    };

  }, []);

  useEffect(() => {
    const handleFocusOut = () => {
      setCurrentX(-1);
    };
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusout', handleFocusOut);
    };

  }, []);

  const k = (currentX > -1)
    ? getCurrent(roll[currentX].content)
    : null;

  return (
    <div>
      <div className={'raw'}>{JSON.stringify(roll)}</div>
      <div className={'raw'}>currentX: {currentX}</div>
      <div className={'raw'}>{JSON.stringify(k)}</div>
      {k && <TooChord current={k} /> }
      <div className={'piano-roll'}>
        {roll.map((beat, j) =>
          <TooRollBeat
            key={beat.id}
            beat={beat}
            beatNum={j}
          />
        )}
      </div>
    </div>
  );
}