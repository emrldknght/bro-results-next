import "./chords.scss";
import {ChordProvider} from "@/state/ChordContext";
import {TooFretboard} from "@/components/chords/TooFretboard";
import {TooPianoRoll} from "@/components/chords/TooPianoRoll";
import {RollProvider} from "@/state/RollContext";

export const FRETS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const STRINGS = [5, 4, 3, 2, 1, 0];

const compose = (providers) =>
  // eslint-disable-next-line react/display-name
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
));

const Provider = compose([
  ChordProvider,
  RollProvider,
]);



export default function Chords() {

  return (
      <Provider>
        <div style={{
          fontFamily: 'monospace',
        }}>
          <h2>Chords</h2>
          <TooPianoRoll />
          <TooFretboard />
        </div>
      </Provider>
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