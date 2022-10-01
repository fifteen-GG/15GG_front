import React, { useState } from 'react';
import {
  LiveGameWrapper,
  LiveGameTitleWrapper,
  LiveGameTitle,
  LiveGameLabel,
  LiveGameTeamsWrapper,
  LiveGameSingleTeamWrapper,
  LiveGameTeamsRow,
} from '../styles/livegame.s';
import { LiveUser } from './LiveUser';

interface userData {
  name: string;
  champion: string;
  position: string;
}

interface gameData {
  gameType: string;
  gameDate: string;
  redTeam: userData[];
  blueTeam: userData[];
}

export const LiveGame = () => {
  const [game, setGame] = useState<gameData>({
    gameType: '솔로랭크',
    gameDate: '07/08',
    redTeam: [
      { name: '정잭영...', champion: 'Aatrox', position: 'top' },
      { name: '정잭일...', champion: 'Trundle', position: 'jgl' },
      { name: '정잭이...', champion: 'Azir', position: 'mid' },
      { name: '정잭삼...', champion: 'Zeri', position: 'adc' },
      { name: '정잭사...', champion: 'Yuumi', position: 'sup' },
    ],
    blueTeam: [
      { name: '정잭오...', champion: 'Kalista', position: 'adc' },
      { name: '정잭육...', champion: 'Amumu', position: 'sup' },
      { name: '정잭칠...', champion: 'Sejuani', position: 'top' },
      { name: '정잭팔...', champion: 'Graves', position: 'jgl' },
      { name: '정잭구...', champion: 'Galio', position: 'mid' },
    ],
  });
  return (
    <LiveGameWrapper>
      <LiveGameTitleWrapper>
        <LiveGameLabel />
        <LiveGameTitle>
          {game.gameDate} · {game.gameType}
        </LiveGameTitle>
      </LiveGameTitleWrapper>
      <LiveGameTeamsWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveUser
              row="left"
              name={game.redTeam[0].name}
              champion={game.redTeam[0].champion}
              pos={game.redTeam[0].position}
            />
            <LiveUser
              row="left"
              name={game.redTeam[1].name}
              champion={game.redTeam[1].champion}
              pos={game.redTeam[1].position}
            />
            <LiveUser
              row="left"
              name={game.redTeam[2].name}
              champion={game.redTeam[2].champion}
              pos={game.redTeam[2].position}
            />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser
              row="left"
              name={game.redTeam[3].name}
              champion={game.redTeam[3].champion}
              pos={game.redTeam[3].position}
            />
            <LiveUser
              row="left"
              name={game.redTeam[4].name}
              champion={game.redTeam[4].champion}
              pos={game.redTeam[4].position}
            />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveUser
              row="right"
              name={game.blueTeam[0].name}
              champion={game.blueTeam[0].champion}
              pos={game.blueTeam[0].position}
            />
            <LiveUser
              row="right"
              name={game.blueTeam[1].name}
              champion={game.blueTeam[1].champion}
              pos={game.blueTeam[1].position}
            />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser
              row="right"
              name={game.blueTeam[2].name}
              champion={game.blueTeam[2].champion}
              pos={game.blueTeam[2].position}
            />
            <LiveUser
              row="right"
              name={game.blueTeam[3].name}
              champion={game.blueTeam[3].champion}
              pos={game.blueTeam[3].position}
            />
            <LiveUser
              row="right"
              name={game.blueTeam[4].name}
              champion={game.blueTeam[4].champion}
              pos={game.blueTeam[4].position}
            />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
      </LiveGameTeamsWrapper>
    </LiveGameWrapper>
  );
};
