import styled from 'styled-components';

export const ConversionList = styled.ul`
  margin: 3% 0 3%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #EEE;
    border-radius: 4px;
    padding: 10%;

    h4 {
      color: #BBB;
      font-weight: 500;
      text-decoration: underline;
    }
  }

  strong {
    text-align: center;
    padding: 10%;
    color: #777;
  }
`;