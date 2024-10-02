import styled from "styled-components";

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
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 8px;
  gap: 0.21875rem;

  span {
    display: block;
  }

  button {
    padding: .75rem;
    background-color: transparent;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors["purple-dark"]};
      }
    }
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
