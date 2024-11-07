import type {ComponentProps} from "react";
import {useChordContext} from "@/ChordContext";

interface TooStringProps extends ComponentProps<'div'> {
  string: number;
  fret: number;
}
export function TooString({ string, fret}: TooStringProps) {
  const { chord, setChord } = useChordContext()

  const isActive = fret === chord[string]

  const handleClick = (string: number, fret: number) => {
    const newChord = [...chord]
    newChord[string] = fret
    if (setChord) {
      setChord(newChord)
    }
  }

  return (
    <div className={`too-string-wrapper ${isActive ? 'active' : ''}`}>
      <button
        className={
          isActive ? 'active' : ''
        }
        type={'button'}
        onClick={() => handleClick(string, fret)}
      >&nbsp;</button>
    </div>
  )
}