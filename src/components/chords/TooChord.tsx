import {Chord} from "tonal";

interface TooChordProps {
  current: string[];
}
export function TooChord({current}: TooChordProps) {
  const k = Chord.detect(current);

  return (
    <div className={'too-chord'}>
      <div className={'raw'}>
        {JSON.stringify(k)}
      </div>
      <div className={'raw'}>
        {JSON.stringify(current)}
      </div>
    </div>
    );
  }