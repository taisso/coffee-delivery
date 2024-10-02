import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin-bottom: 0.9375rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font: ${({ theme }) => theme.typegraphy.baloo["font-xs"]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  small {
    color: red;
    font-size: 0.625rem;
  }
`;

export const BaseContent = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;

  header {
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};
    }

    p {
      color: ${({ theme }) => theme.colors["base-text"]};
      font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};
    }
  }
`;

export const ContentFormTop = styled(BaseContent)`
  header svg {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  & > div {
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    gap: 1rem;
    grid-template-areas:
      "A B B"
      "C C C"
      "D E E"
      "F G H";

    > div input {
      width: 100%;
    }

    input {
      background-color: ${({ theme }) => theme.colors["base-input"]};
      border-radius: 4px;
      padding: 0.75rem;
      border: 1px solid ${({ theme }) => theme.colors["base-button"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};

      &:focus {
        outline: 1px solid ${({ theme }) => theme.colors["yellow-dark"]};

        &::placeholder {
          color: transparent;
        }
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }

    & :nth-child(1) {
      grid-area: A;
    }

    & :nth-child(2) {
      grid-area: B;
    }

    & :nth-child(3) {
      grid-area: C;
    }

    & :nth-child(4) {
      grid-area: D;
    }

    & :nth-child(5) {
      grid-area: E;
    }

    & :nth-child(6) {
      grid-area: F;
    }

    & :nth-child(7) {
      grid-area: G;
    }

    & :nth-child(8) {
      grid-area: H;
    }
  }
`;

export const ContentFormBottom = styled(BaseContent)`
  margin-top: 0.75rem;

  header svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const PaymentMethod = styled.label`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 1rem;
  border-radius: 6px;
  font: ${({ theme }) => theme.typegraphy.roboto["font-xs"]};
  font-weight: normal;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors["base-text"]};
  text-transform: uppercase;

  input {
    position: absolute;
    opacity: 0;
    outline: inherit;
    inset: 0;

    &:hover {
      cursor: pointer;
    }
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors["purple"]};
  }

  &:has(:checked),
  &:has(:focus) {
    outline: 1px solid ${({ theme }) => theme.colors["purple"]};
    background-color: ${({ theme }) => theme.colors["purple-light"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }
`;

interface InputContainerProps {
  $isOptional?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;

  input {
    width: 100%;

    &:focus + label {
      opacity: 0;
    }
  }

  label {
    position: absolute;
    color: ${({ theme }) => theme.colors["base-label"]};
    right: 0;
    bottom: 0;
    height: 100%;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    opacity: ${({ $isOptional }) => ($isOptional ? 1 : 0)};
    font: ${({ theme }) => theme.typegraphy.roboto["font-xs"]};
    line-height: normal;
    font-weight: 400;
    transition: opacity 0.1s;
    font-style: italic;
  }
`;

export const PaymentContainer = styled.div`
  flex: .8;

  & > div {
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 44px;
    padding: 2.5rem;
    gap: 1.5rem;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.5rem;
  font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};

  h3 {
    font: inherit;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  strong {
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 0.75rem;
  border-radius: 6px;
  font: ${({ theme }) => theme.typegraphy.roboto["font-xs"]};
  font-weight: 400;
  line-height: 0;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
    cursor: pointer;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
      font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    strong {
      font: ${({ theme }) => theme.typegraphy.roboto["font-md"]};
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    &:nth-child(3) {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      font: ${({ theme }) => theme.typegraphy.roboto["font-lg"]};

      h4 {
        font: inherit;
        font-weight: bold;
      }

      strong {
        font: inherit;
        font-weight: bold;
      }
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  border-radius: 6px;
  padding-block: 0.75rem;
  width: 100%;
  font: ${({ theme }) => theme.typegraphy.roboto["font-sm"]};
  color: ${({ theme }) => theme.colors["white"]};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors["yellow"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    cursor: pointer;
  }
`;
