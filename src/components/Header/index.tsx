import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

import * as S from "./styles";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useContext(CheckoutContext)

  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />

      <S.AsideContainer>
        <S.LocalizationsContainer>
          <MapPin size={24} weight="fill" /> Porto Alegre, RS
        </S.LocalizationsContainer>

        <Link to="/checkout" aria-disabled={!!cart.length}>
          <ShoppingCart size={24} weight="fill" />
          {!!cart.length && <span>{cart.length}</span>}
        </Link>
      </S.AsideContainer>
    </S.HeaderContainer>
  );
}
