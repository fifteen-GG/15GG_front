import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import * as Palette from '../../../assets/colorPalette';
import { GameSliderWrapper } from '../styles/gameslider.s';

// const convertTime = (seconds: number) => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes}:${remainingSeconds}`;
// };

const GameSlider = () => {
  const [values, setValues] = useState([0]);
  const STEP = 10;
  const MIN = 0;
  const MAX = 1500;
  return (
    <GameSliderWrapper>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => {
          setValues(values);
          console.log(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '4px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: values,
                  colors: [Palette.GG_RED, Palette.GG_WHITE_100],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '12px',
              borderRadius: '6px',
              backgroundColor: '#d9d9d9',
              outline: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: isDragged ? '0px 0px 5px #AAA' : 'none',
            }}
          >
            <div
              style={{
                height: '16px',
                width: '6px',
                borderRadius: '3px',
              }}
            />
          </div>
        )}
      />
    </GameSliderWrapper>
  );
};

export default GameSlider;
