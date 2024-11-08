import "./chords.scss";
import {ChordProvider} from "@/state/ChordContext";
import {TooFretboard} from "@/components/chords/TooFretboard";
import {TooPianoRoll} from "@/components/chords/TooPianoRoll";

export const FRETS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const STRINGS = [5, 4, 3, 2, 1, 0];

export default function Chords() {

  return (
      <ChordProvider>
        <div>
          <h2>Chords</h2>
          <TooPianoRoll />
          <TooFretboard />
        </div>
      </ChordProvider>
  );
}

/*
Chords.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
 */