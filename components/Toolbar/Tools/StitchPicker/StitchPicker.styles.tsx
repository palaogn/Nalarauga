import styled from 'styled-components';

const circleHeight = 40;
const circleWidth = 40;

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: ${circleHeight * 1.5}px;
  width: ${circleWidth * 1.5}px;
  cursor: pointer;
`;

export const Rectangle = styled.div<{ color: string }>`
  width: ${circleWidth}px;
  height: ${circleHeight}px;
  border-radius: 2px;
  border: 1px solid #000000;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StitchWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const AdditionalColorWrapper = styled.div`
  position: absolute;
  left: ${circleHeight * 0.8}px;
  top: ${circleHeight * 0.5}px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
`;
