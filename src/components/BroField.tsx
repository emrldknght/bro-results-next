"use client";
// import Image from 'next/image';

import React, {useEffect, useState} from "react";
import {getResults, type ResultsApiAnswer} from "@/api/getResults";
import type {TeamData} from "@/types";
import {getTeamsList} from "@/api/getTeamList";
import {BroFieldStep} from "@/components/BroFieldStep";

const STEPS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42,
];

export default function BroField() {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [resultsData, setResultsData] = useState<ResultsApiAnswer>();

  useEffect( () => {
    const fetchTeams = async () => {
      const teams = await getTeamsList();
      setTeams(teams);
    };

    const fetchResults = async () => {
      const resultsData = await getResults(21);
      setResultsData(resultsData);
    };
    
    const fetchData = async () => {
      await fetchTeams();

      await fetchResults();
    };

    fetchData()
      .catch(console.error);

  }, []);

  const resultsOnLine = (pos: number) => {
    const rf = [];

    const r = resultsData?.results || {};

    for(const id of Object.keys(r)) {
    // Object.keys(r).forEach(id => {
      const _result = r[id];
      if (_result === pos) {
        rf.push(id);
      }
    }

    return rf;
  };

  const jetOnLine = (pos: number) => {
    return (resultsData?.jets || [])
      .filter(jet => jet.position === pos);
  };


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
      <div>{JSON.stringify(resultsData?.specials)}</div>
      <div className={'bro-field--steps'}>
        {
          STEPS.map(step =>
            <BroFieldStep
              key={step}
              step={step}
              results={resultsOnLine(step)}
              jets={jetOnLine(step)}
              hasKm={step === resultsData?.specials?.kmPosition}
              hasAuction={step === resultsData?.specials?.auctionPosition}
              hasHotPot={step === resultsData?.specials?.hotPotPosition}
              hasFloppy={step === resultsData?.specials?.floppyPosition}
            />
          )
        }
      </div>
    </div>
  );
}