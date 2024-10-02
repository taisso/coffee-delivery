import * as S from "./styles";

interface CardListProps {
  children: React.ReactNode;
}

export function CardList({ children }: Readonly<CardListProps>) {
  return <S.CardList>{children}</S.CardList>;
}
