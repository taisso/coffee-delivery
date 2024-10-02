import styled from "styled-components";

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  & img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1rem;
    margin-bottom: 0.75rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const TagContent = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  font: ${({ theme }) => theme.typegraphy.roboto["font-xs"]};
  font-size: 0.625rem;
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
`;

export const CardInfo = styled.div`
  text-align: center;
  margin-top: 1rem;
  flex: 1;

  & > h3 {
    margin-bottom: 0.5rem;
    font: ${({ theme }) => theme.typegraphy.baloo["font-sm"]};
  }

  & > p {
    font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.0625rem;
  width: 100%;

  & > strong {
    color: ${({ theme }) => theme.colors["base-text"]};
    font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};
    font-weight: bold;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > button {
    appearance: none;
    border: none;
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 8px;
  gap: 0.21875rem;

  button {
    padding: 0.65rem 0.5rem;
    background-color: transparent;
  }

  & > button {
    appearance: none;
    border: none;
    color: ${({ theme }) => theme.colors["purple"]};
    border-radius: 6px;

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`;
