"use client";
// import Image from 'next/image';

import React, {ComponentProps, useEffect, useRef, useState} from "react";
import {getResults, JetData, ResultsApiAnswer} from "@/api/getResults";
import {TeamData} from "@/types";
import {getTeamsList} from "@/api/getTeamList";
import {ArrowUp} from "@/components/ArrowUp";

const STEPS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42,
];

interface BroFieldStepProps extends ComponentProps<'div'>{
  step: number;
  results: string[];
  jets?: JetData[];
}

export function BroFieldStep({ step, jets }: BroFieldStepProps) {
  const jet = (jets || [])[0];

  const root = React.createRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (root) {
      const _h = root.current?.offsetHeight
      console.log('h->', _h);
      if (_h) {
        setHeight(_h);
      }
    }
  }, [root]);


  return (
    <div
      ref={root}
      className={'bro-field--steps-item results-steps__item'}
    >
      {(height > 0 && jet && jet.amount !== 0) && (
        <ArrowUp amount={jet.amount} height={height} />
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

    </div>
  )
}

export default function BroField() {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [resultsData, setResultsData] = useState<ResultsApiAnswer>();

  useEffect( () => {
    const fetchTeams = async () => {
      const teams = await getTeamsList();
      setTeams(teams);
    };

    const fetchResults = async () => {
      const resultsData = await getResults(27);
      setResultsData(resultsData);
    };
    
    const fetchData = async () => {
      await fetchTeams()

      await fetchResults()
    }

    fetchData()
      .catch(console.error)

  }, []);

  const resultsOnLine = (pos: number) => {
    const rf = []

    const r = resultsData?.results || {}

    Object.keys(r).forEach(id => {
      const _id = r[id];
      if (_id === pos) {
        rf.push(_id);
      }
    })

    return rf;
  }

  const jetOnLine = (pos: number) => {
    return (resultsData?.jets || [])
      .filter(jet => jet.position === pos)
  }


  return (
    <div className={'bro-field--wrapper'}>
      <div>Bro Field &beta;</div>
      <div style={{display: 'none'}}>
        <div>teams:</div>
        {
          teams.map(team => (
            <div key={team.id}>{team.name}</div>
          ))
        }
      </div>
      <div>{JSON.stringify(resultsData?.jets)}</div>
      <div className={'bro-field--steps'}>
        {
          STEPS.map(step =>
            <BroFieldStep
              key={step}
              step={step}
              results={resultsOnLine(step)}
              jets={jetOnLine(step)}
            />
          )
        }
      </div>
    </div>
  )
}