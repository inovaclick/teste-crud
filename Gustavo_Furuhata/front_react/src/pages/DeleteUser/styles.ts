import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;

  height: 95%;
  color: #333;

  align-items: center;

  h1 {
    color: #f2f2f2;
    display: flex;
    margin: 4px;
  }

  h3 {
    color: #f2f2f2;
    display: flex;
    margin: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    & + input {
      margin-top: 8px;
    }

    border-radius: 5px;
    border: 0;
    padding: 4px;

    &:hover {
      border: 1px solid #f74b;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 120px;
  background: #337e3e;
  color: #f2f2f2;
  margin-top: 8px;
  border-radius: 5px;
  border: 0;

  &:hover {
    background: ${lighten(0.2, '#337e3e')};
    border: 0 !important;
  }
`;

export const ReturnButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 120px;
  background: #ec2300;
  color: #f2f2f2;
  margin-top: 8px;
  border-radius: 5px;
  border: 0;
  margin-bottom: 8px;

  &:hover {
    background: ${lighten(0.2, '#ec2300')};
    border: 0 !important;
  }
`;

export const UserCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 4px;
  margin-top: 8px;
  color: #f2f2f2;
`;

export const DeleteCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
