"use client";

import React, {type ComponentProps, useEffect, useState} from "react";
import {ArrowUp} from "@/components/ArrowUp";
import type {TeamId, JetData} from "@/api/getResults";
import {BroChip} from "@/components/BroChip";

interface BroFieldStepProps extends ComponentProps<'div'> { // extends ComponentProps<'div'>
    step: number;
    results: TeamId[];
    jets?: JetData[];
    hasKm?: boolean;
    hasAuction?: boolean;
    hasHotPot?: boolean;
    hasFloppy?: boolean;
}




export function BroFieldStep({
    step, jets, results,
    hasAuction, hasFloppy,
}: BroFieldStepProps) {
    const jet = (jets || [])[0];

    const root = React.createRef<HTMLDivElement>();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (root) {
            const _h = root.current?.offsetHeight
            // console.log('h->', _h);
            if (_h) {
                setHeight(_h);
            }
        }
    }, [root]);

    const aucRef = React.createRef<HTMLDivElement>();
    const [aucHeight, setAucHeight] = useState(50)

    useEffect(() => {
        const of = aucRef.current?.offsetHeight;
        console.log(of)

        if (of) {
            const padding = 1;
            const _h = (of - padding) * 3;
            console.log('arf->', _h);
            setAucHeight(_h);
        }
    }, [aucRef]);


    return (
      <div
        ref={root}
        className={'bro-field--steps-item results-steps__item'}
      >
          {(height > 0 && jet && jet.amount !== 0) && (
            <ArrowUp amount={jet.amount} height={height}/>
          )}
          {/*<div className={'sn'}>{step}</div>*/}
          {(step > 0)
            ? (
              <img
                src={`field_parts/${step}.png`}
                alt={'step'}

              />)
            : (
              <span>&nbsp;</span>
            )
          }
          <div className={'bro-field--steps-item--chips'}>
              {results.map(chip =>
                <BroChip key={chip} chip={chip}/>
              )}
          </div>
          <div
            className={'specs-wrapper'}
          >
              {hasAuction &&
                    <div
                      className="spec-el auc-el"
                      ref={aucRef}
                    >
                        <span>Аукцион</span>
                        <img
                          src={'avatars/auccion.svg'}
                          alt={'floppy'}
                          style={{
                              width: `${aucHeight}px`,
                              height: `${aucHeight}px`,
                          }}
                        />
                    </div>
              }
              {hasFloppy &&
                  <div className="spec-el floppy-el">
                      <span>Дискета</span>
                      <img
                        src={'avatars/disk.svg'}
                        alt={'floppy'}
                      />
                  </div>
              }
          </div>

      </div>
    )
}