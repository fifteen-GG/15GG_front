import { SummonerInfo } from '../types/summonerInfo';
import { MatchInfo } from '../types/matchInfo';
import { userRank } from './components/UserRank';
import { userStat } from './components/UserStatInfo';
import { userChampion } from './components/PreferChampion';

const romanToNum = (str: string) => {
  const romeNum = {
    I: 1,
    V: 5,
  };
  let number = 0;
  const romeArray = str.split('');
  const numArray = romeArray.map((rome: string) => rome in romeNum);
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < numArray[i + 1]) {
      number -= numArray[i] as unknown as number;
    } else {
      number += numArray[i] as unknown as number;
    }
  }
  return number;
};

export const formatRankInfo = (
  summonerInfo: SummonerInfo,
  ranktype: string,
) => {
  let tier: string;
  let rank: string;
  let state: userRank = {
    name: '',
    lp: 0,
    win_rate: 0,
    win: 0,
    losses: 0,
  };
  if (ranktype === 'solo') {
    if (!summonerInfo.solo) {
      state.name = 'Unranked';
      state.lp = 0;
      state.win_rate = 0;
      state.win = 0;
      state.losses = 0;
      return state;
    }
    tier =
      summonerInfo.solo.tier.charAt(0) +
      summonerInfo.solo.tier.slice(1).toLowerCase();
    rank = summonerInfo.solo.rank;
    state.lp = summonerInfo.solo.lp;
    state.win_rate = summonerInfo.solo.win_rate;
    state.win = summonerInfo.solo.win;
    state.losses = summonerInfo.solo.losses;
  } else {
    if (!summonerInfo.flex) {
      state.name = 'Unranked';
      state.lp = 0;
      state.win_rate = 0;
      state.win = 0;
      state.losses = 0;
      return state;
    }
    tier =
      summonerInfo.flex.tier.charAt(0) +
      summonerInfo.flex.tier.slice(1).toLowerCase();
    rank = summonerInfo.flex.rank;
    state.lp = summonerInfo.flex.lp;
    state.win_rate = summonerInfo.flex.win_rate;
    state.win = summonerInfo.flex.win;
    state.losses = summonerInfo.flex.losses;
  }
  if (tier === 'Master' || tier === 'Grandmaster' || tier === 'Challenger')
    state.name = tier;
  else state.name = tier + ' ' + romanToNum(rank);
  return state;
};

export const formatStatInfo = (summonerInfo: SummonerInfo) => {
  let state: userStat = {
    win_rate: 0,
    win: 0,
    losses: 0,
    kda_avg: 0,
    kills_avg: 0,
    deaths_avg: 0,
    assists_avg: 0,
    prefer_position: ['없음'],
    position_rate: [0],
  };
  if (!summonerInfo.kda_avg) {
  } else {
    state.win_rate = summonerInfo.solo.win_rate;
    state.win = summonerInfo.solo.win;
    state.losses = summonerInfo.solo.losses;
    state.kda_avg = summonerInfo.kda_avg;
    state.kills_avg = summonerInfo.kills_avg;
    state.deaths_avg = summonerInfo.deaths_avg;
    state.assists_avg = summonerInfo.assists_avg;
  }
  if (!summonerInfo.prefer_position) {
  } else {
    state.prefer_position = Object.keys(summonerInfo.prefer_position);
    state.position_rate = Object.values(summonerInfo.prefer_position);
  }
  return state;
};

export const formatChampionsInfo = (summonerInfo: SummonerInfo) => {
  let state: userChampion = [
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
  ];
  if (!summonerInfo.champions) {
    return state;
  }
  state.map((champion, index: number) => {
    if (!summonerInfo.champions[index]) return state;
    else {
      state[index].championName =
        process.env.REACT_APP_DDRAGON_API_ROOT +
        `/champion/${summonerInfo.champions[index].championName}.png`;
      state[index].counts = summonerInfo.champions[index].counts;
      state[index].win_rate =
        Math.round(
          (summonerInfo.champions[index].wins /
            summonerInfo.champions[index].counts) *
            100,
        ) + '%';
      state[index].kda =
        Math.round(
          ((summonerInfo.champions[index].kills +
            summonerInfo.champions[index].assists) /
            summonerInfo.champions[index].deaths) *
            100,
        ) / 100;
    }
  });
  return state;
};

export const formatMatchInfo = (matchInfo: MatchInfo) => {
  let mode = '';
  if (matchInfo.queue_mode === '5v5 Ranked Solo games') {
    mode = '솔로랭크';
  } else if (matchInfo.queue_mode === '5v5 Ranked Flex games') {
    mode = '자유랭크';
  } else if (matchInfo.queue_mode === '5v5 Blind Pick games') {
    mode = '일반게임';
  } else if (matchInfo.queue_mode === '5v5 ARAM games') {
    mode = '칼바람나락';
  } else {
    mode = '사용자설정';
  }
  return mode;
};

export const formatAnalysisStatus = (status: string) => {
  let result = '';
  if (status === 'live') result = '실시간 분석';
  else if (status === 'complete') result = '분석완료';
  else result = '미분석';
  return result;
};
