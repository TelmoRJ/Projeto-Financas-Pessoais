import styled from "styled-components";

export const Container = styled.div`
  margin: -10rem auto 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  grid-template-rows: 9rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    margin-top: 1.5rem;
    display: block;
    font-size: 2rem;
    font-weight: 500;
  }

  div:last-child {
    background-color: var(--green);
  }

  .seta_pra_cima {
    transform: rotate(180deg);
  }

  img {
    width: 15px;
    margin: 0;
    padding: 0;
  }
`;
