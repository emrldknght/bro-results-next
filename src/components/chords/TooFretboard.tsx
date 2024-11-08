"use client";

import {TooFret} from "@/components/chords/TooFret";

import {useChordContext} from "@/state/ChordContext";
import {FRETS} from "@/app/chords/page";
import {Chord} from "tonal";

export function TooFretboard() {
  const { chord, current } = useChordContext();

  const k = Chord.detect(current);

  return (
      <>
          <div className={'raw'}>
              {JSON.stringify(chord)}
          </div>
          <div className={'raw'}>
              {JSON.stringify(k)}
          </div>
          <div className={'raw'}>
              {JSON.stringify(current)}
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
  );
}