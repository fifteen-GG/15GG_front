import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTimer } from 'use-timer';
import {
  DataCodeWrapper,
  SingleDataCodeWrapper,
  SingleDataCode,
  Footer,
  FooterContent,
  RefreshButton,
} from '../styles/datacode.s';

export const Datacode = () => {
  const [code, setCode] = useState([0, 0, 0, 0, 0, 0]);
  const [codeExpired, setCodeExpired] = useState(0);
  const [refresh, setRefresh] = useState(0);
  //useTimer library
  const { time, start, reset, status } = useTimer({
    initialTime: 5 * 60,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  const getNewCode = async () => {
    try {
      const value = await axios.get(`${process.env.REACT_APP_GG_API_ROOT}code`);
      console.log(value);
      if (value.status === 200) {
        setCode(value.data.value.split(''));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewCode();
    reset();
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeExpired, refresh]);

  useEffect(() => {
    if (status === 'STOPPED' && time === 0) {
      setCodeExpired(data => data + 1);
    }
  }, [status, time]);

  return (
    <>
      <DataCodeWrapper>
        {code.map((value: number, index: number) => {
          return (
            <SingleDataCodeWrapper key={index}>
              <SingleDataCode>{value}</SingleDataCode>
            </SingleDataCodeWrapper>
          );
        })}
      </DataCodeWrapper>
      <Footer>
        <FooterContent>
          남은시간 {Math.trunc(time / 60)}:
          {Math.trunc(time % 60) < 10
            ? '0' + Math.trunc(time % 60)
            : Math.trunc(time % 60)}
          {' ·'}
        </FooterContent>
        <RefreshButton onClick={() => setRefresh(data => data + 1)}>
          재생성
        </RefreshButton>
      </Footer>
    </>
  );
};
