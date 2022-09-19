import React from 'react';
import {
  DataCodeWrapper,
  SingleDataCodeWrapper,
  SingleDataCode,
} from '../styles/datacode.s';
const code = [7, 2, 1, 9, 3, 4];

export const Datacode = () => {
  return (
    <DataCodeWrapper>
      {code.map((value: number, index: number) => {
        return (
          <SingleDataCodeWrapper key={index}>
            <SingleDataCode>{value}</SingleDataCode>
          </SingleDataCodeWrapper>
        );
      })}
    </DataCodeWrapper>
  );
};
