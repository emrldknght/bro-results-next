"use client";

import {TooFret} from "@/components/chords/TooFret";

import {useChordContext} from "@/ChordContext";
import {FRETS} from "@/app/chords/page";

export function TooFretboard() {
  const { chord } = useChordContext()

  return (
    <>
      <div className={'raw'}>
        {JSON.stringify(chord)}
      </div>
      <div className="fretboard">
        {FRETS.map(fret =>
          <TooFret
            key={fret}
            fret={fret}
          />
        )}
      </div>
    </>
  )
}