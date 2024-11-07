"use client";

import React, {type ComponentProps} from "react";
import type {TeamId} from "@/api/getResults";
import {AVATARS} from "@/api";

interface BroChipProps extends ComponentProps<'div'> {
  chip: TeamId;
}

export function BroChip({chip}: BroChipProps) {
  const getAvatar = (key: TeamId) => {
    let avatar = '';

    if (AVATARS[key]) {
      avatar = AVATARS[key];
    }

    return (avatar) ? `url(avatars/${avatar})` : '';
  }

  return (
    <div
      className={'chip'}
      data-teamid={chip}
      style={{
        backgroundImage: getAvatar(chip),
      }}
    >
      {chip}
    </div>
  )
}