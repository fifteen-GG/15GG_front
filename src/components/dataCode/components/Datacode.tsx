import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [expireTime, setExpireTime] = useState(0);
  const [refresh, setRefresh] = useState(0);
  let currentTime = new Date().getTime();

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
  }, [refresh]);

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
        <FooterContent>남은시간 2:21 · </FooterContent>
        <RefreshButton onClick={() => setRefresh(data => data + 1)}>
          재생성
        </RefreshButton>
      </Footer>
    </>
  );
};
