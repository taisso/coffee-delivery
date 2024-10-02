import box from "../../assets/box.svg";
import coffee from "../../assets/coffee.svg";
import hero from "../../assets/hero.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import timer from "../../assets/timer.svg";
import products from "../../../data.json";

import { CardItem } from "./components/Card/CardItem";
import { CardList } from "./components/Card/CardList";
import * as S from "./styles";


export function Home() {
  return (
    <S.HomeContainer>
      <S.HeroContainer>
        <S.HeroContentLeft>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </header>

          <nav>
            <span>
              <img src={shoppingCart} alt="" />
              Compra simples e segura
            </span>
            <span>
              <img src={box} alt="" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <img src={timer} alt="" />
              Entrega rápida e rastreada
            </span>
            <span>
              <img src={coffee} alt="" />O café chega fresquinho até você
            </span>
          </nav>
        </S.HeroContentLeft>

        <img src={hero} alt="" />
      </S.HeroContainer>

      <S.MainContainer>
        <h2>Nossos cafés</h2>

        <CardList>
          {products.map((product) => (
            <CardItem key={product.id} {...product} />
          ))}

        </CardList>
      </S.MainContainer>
    </S.HomeContainer>
  );
}