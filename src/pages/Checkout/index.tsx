import { Bank, CreditCard, MapPin, Money, Trash } from "@phosphor-icons/react";
import * as S from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import products from "../../../data.json";
import cupCoffee1 from "../../assets/cup-coffee-1.svg";
import { ActionCounter } from "../../components/ActionCounter";
import { CheckoutContext, Product } from "../../contexts/CheckoutContext";
import { Item } from "../../reducers/checkout/reducer";

const shippingPrice = 3.5;

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(1).min(1, { message: "Rua é obrigatória" }),
  number: zod.number(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: "Bairro é obrigatório" }),
  city: zod.string().min(1, { message: "Cidade é obrigatória" }),
  uf: zod.string().min(2, { message: "UF é obrigatório" }),
  paymentMethod: zod.enum(["money", "credit", "debit"], { invalid_type_error: "Forma de pagamento obrigatória" }),
});

type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const { cart, incrementItem, decrementItem, removeItem, checkout } = useContext(CheckoutContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: 0,
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    }
  });


  const productsInCart: (Product & Pick<Item, "quantity">)[] = cart
    .map((item) => {
      const productInCart = products.find((product) => item.id === product.id);

      if (productInCart) {
        return {
          ...item,
          ...productInCart,
        };
      }

      return null as any;
    })
    .filter(Boolean);

  const totalItemsPrice = productsInCart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  function handleDecrementItem(id: string) {
    decrementItem(id);
  }

  function handleIncrementItem(id: string) {
    incrementItem(id);
  }

  function handleRemoveItem(id: string) {
    removeItem(id)
  } 

  function handleCheckout(values: CheckoutFormValues) {
    checkout(values)
    reset()
  }

  return (
    <S.CheckoutContainer>
      <S.InfoContainer>
        <S.Title>Complete seu pedido</S.Title>
        <S.FormContainer id="checkout" onSubmit={handleSubmit(handleCheckout)}>
          <S.ContentFormTop>
            <header>
              <MapPin size={24} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <div>
              <div>
                <input type="text" placeholder="CEP" {...register("cep")} />
                {errors.cep && <small>{errors.cep?.message}</small>}
              </div>
              <div></div>
              <div>
                <input type="text" placeholder="Rua" {...register("street")} />
                {errors.street && <small>{errors.street?.message}</small>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Número"
                  {...register("number", { valueAsNumber: true })}
                />
                {errors.number && <small>{errors.number?.message}</small>}
              </div>
              <div>
                <S.InputContainer $isOptional>
                  <input
                    type="text"
                    id="complement"
                    placeholder="Complemento"
                    {...register("complement")}
                  />
                  <label htmlFor="complement">Opcional</label>
                </S.InputContainer>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
                {errors.neighborhood && (
                  <small>{errors.neighborhood?.message}</small>
                )}
              </div>
              <div>
                <input type="text" placeholder="Cidade" {...register("city")} />
                {errors.city && <small>{errors.city?.message}</small>}
              </div>
              <div>
                <input type="text" placeholder="UF" {...register("uf")} />
                {errors.uf && <small>{errors.uf?.message}</small>}
              </div>
            </div>
          </S.ContentFormTop>

          <S.ContentFormBottom>
            <header>
              <MapPin size={24} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div>
              <S.PaymentMethod>
                <input
                  type="radio"
                  id="money"
                  value="money"
                  {...register("paymentMethod")}
                />
                <CreditCard size={16} />
                Dinheiro
              </S.PaymentMethod>

              <S.PaymentMethod>
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  {...register("paymentMethod")}
                />
                <Bank size={16} />
                Cartão de Crédito
              </S.PaymentMethod>

              <S.PaymentMethod>
                <input
                  type="radio"
                  id="debit"
                  value="debit"
                  {...register("paymentMethod")}
                />
                <Money size={16} />
                Cartão de Débito
              </S.PaymentMethod>
            </div>
            {errors.paymentMethod && <small>{errors.paymentMethod?.message}</small>}
          </S.ContentFormBottom>
        </S.FormContainer>
      </S.InfoContainer>
      <S.PaymentContainer>
        <S.Title>Cafés selecionados</S.Title>

        <div>
          {productsInCart.map((product) => (
            <S.Product key={product.id}>
              <img src={cupCoffee1} alt="Café" />
              <div>
                <S.ProductInfo>
                  <h3>{product.name}</h3>
                  <strong>{formatCurrency(product.price)}</strong>
                </S.ProductInfo>
                <S.ActionsContainer>
                  <ActionCounter
                    quantity={product.quantity}
                    onDecrement={() => handleDecrementItem(product.id)}
                    onIncrement={() => handleIncrementItem(product.id)}
                  />
                  <S.RemoveButton onClick={() => handleRemoveItem(product.id)}>
                    <Trash size={16} />
                    Remover
                  </S.RemoveButton>
                </S.ActionsContainer>
              </div>
            </S.Product>
          ))}

          <S.TotalContainer>
            <div>
              <h5>Total de items</h5>
              <strong>{formatCurrency(totalItemsPrice)}</strong>
            </div>
            <div>
              <h5>Entrega</h5>
              <strong>{formatCurrency(shippingPrice)}</strong>
            </div>
            <div>
              <h4>Total</h4>
              <strong>{formatCurrency(totalItemsPrice + shippingPrice)}</strong>
            </div>
            <S.CheckoutButton type="submit" form="checkout">
              CONFIRMAR PEDIDO
            </S.CheckoutButton>
          </S.TotalContainer>
        </div>
      </S.PaymentContainer>
    </S.CheckoutContainer>
  );
}
