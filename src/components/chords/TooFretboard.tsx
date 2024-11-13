"use client";

import {TooFret} from "@/components/chords/TooFret";

import {useChordContext} from "@/state/ChordContext";
import {FRETS} from "@/app/chords/page";
import {TooChord} from "@/components/chords/TooChord";

export function TooFretboard() {
  const { chord, current } = useChordContext();

  return (
      <>
          <div className={'raw'}>
              {JSON.stringify(chord)}
          </div>
          <TooChord current={current} />
          <div className="too-fretboard">
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