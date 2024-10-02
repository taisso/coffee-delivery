import { Minus, Plus } from "@phosphor-icons/react";
import * as S from "./styles";

interface ActionCounterProps {
  quantity?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ActionCounter({
  quantity = 1,
  onDecrement,
  onIncrement,
}: Readonly<ActionCounterProps>) {
  return (
    <S.ActionsContainer>
      <S.CounterContainer>
        <button type="button" onClick={onDecrement}>
          <Minus size={14} />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={onIncrement}>
          <Plus size={14} />
        </button>
      </S.CounterContainer>
    </S.ActionsContainer>
  );
}
