import type {ComponentProps} from "react";
import type {Beat} from "@/types/Roll";
import {TooRollLine} from "@/components/chords/TooRollLine";

interface TooBeatProps extends ComponentProps<'div'>{
  beat: Beat;
  beatNum: number;
}
export function TooRollBeat({beat, beatNum} : TooBeatProps) {

  return (
    <div className={'piano-roll--beat'}>
      {beat.content.map((line, lineNumber) =>
        <TooRollLine
          key={`beat_${beat.id}_${lineNumber}`}
          beatNum={beatNum}
          lineNumber={lineNumber}
        />
      )}
    </div>
  );
}