import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6.375rem;
`;

export const HeaderContainer = styled.header`
  h1 {
    font: ${({ theme }) => theme.typegraphy.baloo["font-lg"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  p {
    font: ${({ theme }) => theme.typegraphy.roboto["font-lg"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
`;

export const InfoContainer = styled.div`
  border-radius: 6px 36px;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors["yellow"]},
      ${({ theme }) => theme.colors["purple"]}
    )
    border-box;
  border: 1px solid transparent;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  font: ${({ theme }) => theme.colors["base-text"]};
  font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${({ theme }) => theme.colors["white"]};
      border-radius: 50%;
      padding: 0.5rem;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
