import { MapPin, Money, Timer } from "@phosphor-icons/react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { useParams } from "react-router-dom";

const paymentMethod = {
  money: "Dinheiro",
  credit: "Cartão de crédito",
  debit: "Cartão de débito",
};

export function Success() {
  const { order } = useContext(CheckoutContext);
  const theme = useTheme();
  const { id } = useParams()

  const orderFound = order?.id === id;

  if(!order || !orderFound)return null;
  

  return (
    <S.SuccessContainer>
      <S.OrderContainer>
        <S.HeaderContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.HeaderContainer>

        <S.InfoContainer>
          <S.InfoContent>
            <div>
              <MapPin
                size={32}
                style={{ backgroundColor: theme.colors.purple }}
                weight="fill"
              />
              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {order?.street}, {order?.number}
                  </strong>
                </span>
                <span>
                  {order?.neighborhood} - {order?.city}, {order?.uf}
                </span>
              </div>
            </div>
            <div>
              <Timer
                size={32}
                style={{ backgroundColor: theme.colors["yellow"] }}
                weight="fill"
              />
              <div>
                Previsão de entrega para <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <Money
                size={32}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
                weight="fill"
              />
              <div>
                Pagamento na entrega <strong>{paymentMethod[order?.paymentMethod]}</strong>
              </div>
            </div>
          </S.InfoContent>
        </S.InfoContainer>
      </S.OrderContainer>

      <img src="src/assets/illustration.svg" alt="" />
    </S.SuccessContainer>
  );
}
