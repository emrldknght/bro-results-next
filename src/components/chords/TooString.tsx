import type {ComponentProps} from "react";
import {useChordContext} from "@/ChordContext";
import {clsx} from "clsx";

interface TooStringProps extends ComponentProps<'div'> {
  stringNum: number;
  fret: number;
}
export function TooString({ stringNum, fret}: TooStringProps) {
  const { chord, setChord } = useChordContext();

  const isActive = fret === chord[stringNum];
  const isX = fret === 0 && chord[stringNum] === -1;

  const handleClick = (stringNum: number, fret: number) => {
    const newChord = [...chord];

    const old = newChord[stringNum];
    // console.log('fret', fret, 'old', old);

    newChord[stringNum] = (fret === 0)
        ? (old === 0)
            ? -1
            : 0
        : fret;


    if (setChord) {
      setChord(newChord);
    }
  };

  const tClass = clsx({
    'too-string-wrapper': true,
    'active': isActive,
    'is-x': isX
  })

  return (
    <div className={
      tClass
    }>
      <button
        className={
          isActive ? 'active' : ''
        }
        type={'button'}
        onClick={() => handleClick(stringNum, fret)}
      >&nbsp;</button>
    </div>
  );
}