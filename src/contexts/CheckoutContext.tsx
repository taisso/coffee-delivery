import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { checkoutReducer, Item, Order } from "../reducers/checkout/reducer";
import { addItemAction, checkoutAction, decrementItemAction, incrementItemAction, removeItemAction } from "../reducers/checkout/action";

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  tags: string[];
}

interface CheckoutContextType {
  cart: Item[];

  order: Order | null;

  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  checkout: (order: Omit<Order, "id">) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutContextProviderProps {
  children: React.ReactNode;
}

export function CheckoutContextProvider({
  children,
}: Readonly<CheckoutContextProviderProps>) {
  const navigate = useNavigate();

  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    cart: [],
    order: null,
  });

  const { cart, order } = checkoutState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id));
  }

  function incrementItem(id: string) {
    dispatch(incrementItemAction(id));
  }

  function decrementItem(id: string) {
    dispatch(decrementItemAction(id));
  }

  function checkout(order: Omit<Order, "id">) {
    const id = String(new Date().getTime());
    dispatch(checkoutAction({ ...order, id }));

    navigate(`/success/${id}`);
  }

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        order,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        checkout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
