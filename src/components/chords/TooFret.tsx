import { TooString } from '@/components/chords/TooString';
import type { ComponentProps } from 'react';

import {romanize} from "@/lib/romanize";
import {STRINGS} from "@/app/chords/page";

interface TooFretProps extends ComponentProps<'div'> {
	fret: number;
}

export function TooFret({ fret }: TooFretProps) {
	return (
		<div key={fret} className="fret">
			{STRINGS.map((string) => (
				<TooString
					key={string}
					stringNum={string}
					fret={fret}
				/>
			))}
			<div className={'info'}>
				{ ((fret % 2) || fret === 12) ? romanize(fret) : '' }
			</div>
		</div>
	);
}
