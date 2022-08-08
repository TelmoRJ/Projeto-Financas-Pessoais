import styled from "styled-components";

import { transparentize } from 'polished'

export const Container = styled.form`
  input {
    padding: 0rem 1.5rem;
    height: 4rem;
    display: block;
    background: #e7e9ee;
    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 1px 1px 2px #333333;
    transition: 0.3s;

    &:hover {
      background: #fff;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    border: 0;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 0;
    background: var(--green);
    font-weight: 500;
    color: #ffffff;
    transition: filter 0.2s;
    box-shadow: 1px 1px 2px #333333;

    &:hover {
      filter: brightness(1.1);
    }
  }

  button[type="button"] {
    background-color: none;
    border: none;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
  }

  img {
    cursor: pointer;
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;

  .deposit {
    outline: 3px solid var(--green);
  }

  .widhdraw {
    outline: 3px solid var(--red);
  }

  img {
    width: 15px;
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  padding: 0rem 1.5rem;
  height: 4rem;
  display: block;
  background: #e7e9ee;
  border-radius: 0.5rem;
  border: 1px solid #d7d7d7;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 1px 1px 2px #333333;
  transition: 0.3s;

  background: ${(props) =>
    props.isActive ? transparentize(0.3, colors[props.activeColor]) : "transparent"};

  img {
    margin-right: 0.5rem;
  }

  .setaPraCima {
    rotate: 180deg;
  }

  span {
    color: ${(props) => (props.isActive ? "#FFFFFF" : "var(--text-title)")};
  }
`;
