import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 7.75rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const HeroContentLeft = styled.div`
  & > header {
    margin-bottom: 4.125rem;

    & > h1 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font: ${({ theme }) => theme.typegraphy.baloo["font-xl"]};
    }

    & > p {
      margin-top: 1rem;
      font: ${({ theme }) => theme.typegraphy.roboto["font-lg"]};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }

  & > nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};

    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const MainContainer = styled.main`
  margin-top: 8.75rem;

  & > h2 {
    font: ${({ theme }) => theme.typegraphy.baloo["font-lg"]};
  }
`;
