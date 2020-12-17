import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #f2f2f2;
  flex-direction: column;
  color: #000;

  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.5, '#000')};
    }
  }

  h1 {
    margin-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 4px;
    & + div {
      border-top: 1px solid #ccc;
    }

    &:hover {
      background: #ccc;
    }
  }
`;
