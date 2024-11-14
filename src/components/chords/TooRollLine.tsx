import type {ChangeEvent, ComponentProps} from "react";
import {useRollContext} from "@/state/RollContext";

interface TooRollLineProps extends ComponentProps<'div'>{
  beatNum: number;
  lineNumber: number;
}
export function TooRollLine({beatNum, lineNumber}: TooRollLineProps) {
  const { roll, setValue } = useRollContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>, line: number, beat: number) => {
    const value = (e.target as HTMLInputElement).value;
    setValue(beat, line, Number(value));
  };

  const v = roll[beatNum].content[lineNumber];
  // const ti = (beatNum + 1) * 100 + lineNumber;
  const ti = beatNum + lineNumber;

  return (
  <div className={'piano-roll--line'}>
    {/*
    <div
      contentEditable={true}
      data-x={beatNum}
      data-y={lineNumber}
      onChange={(e) => handleChange(e, lineNumber, beatNum)}
    >
      {v}
    </div>
    */}

    <input
      tabIndex={ti}
      data-x={beatNum}
      data-y={lineNumber}
      type={'number'}
      value={(v === -1) ? '' : v}
      onChange={(e) => handleChange(e, lineNumber, beatNum)}
      max={24}
    />

  </div>
  );
}