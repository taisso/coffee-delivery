import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
`;



export const AsideContainer = styled.aside`
  display: flex;
  gap: 0.75rem;

  a {
    appearance: none;
    display: flex;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    position: relative;

    span {
      font: ${({ theme }) => theme.typegraphy.roboto["font-xs"]};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
      border-radius: 50%;
      color: ${({ theme }) => theme.colors["white"]};
      padding: .25rem .7rem;
      font-weight: bold;
      bottom: 70%;
      left: 70%;
      right: 0;

    }
  }
`;

export const LocalizationsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.625rem 0.5rem;

  background-color: ${({ theme }) => theme.colors["purple-light"]};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["purple"]};
  font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};
`;
