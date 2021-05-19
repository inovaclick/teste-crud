import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  color: string;
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.button<CardProps>`
  height: 100px;
  width: 125px;
  margin-top: 8px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  border: 0;
  border-radius: 10px;
  ${(props) =>
    css`
      background: ${props.color};
    `}
  &:hover {
    ${(props) =>
      css`
        background: ${shade(0.3, props.color)};
      `}
  }
`;
