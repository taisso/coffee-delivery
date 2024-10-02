import * as S from "./styles";

import cupCoffee1 from "../../../../../assets/cup-coffee-1.svg";
import { ShoppingCart } from "@phosphor-icons/react";
import { ActionCounter } from "../../../../../components/ActionCounter";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../../../../contexts/CheckoutContext";

interface CardItemProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  tags: string[];
}

export function CardItem({
  id,
  name,
  description,
  price,
  tags,
}: Readonly<CardItemProps>) {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CheckoutContext);

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decrementQuantity() {
    if(quantity > 0) setQuantity((prev) => prev - 1);
  }

  function handleAddToCart() {
    addItem({ id, quantity });
    setQuantity(0)
  }

  return (
    <S.CardItem>
      <img src={cupCoffee1} alt="" />

      <S.TagContainer>
        {tags.map((tag) => (
          <S.TagContent key={tag}>{tag}</S.TagContent>
        ))}
      </S.TagContainer>

      <S.CardInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </S.CardInfo>

      <S.BuyContainer>
        <strong>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>

        <S.ActionsContainer>
          <ActionCounter
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </S.ActionsContainer>
      </S.BuyContainer>
    </S.CardItem>
  );
}
