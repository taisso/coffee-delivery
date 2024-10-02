import { produce } from "immer";

export interface Item {
  id: string;
  quantity: number;
}

export interface Order {
  id: string;
  cep: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: "money" | "credit" | "debit";
}

interface CheckoutState {
  cart: Item[];
  order: Order | null;
}

export function checkoutReducer(state: CheckoutState, action: any) {
  switch (action.type) {
    case "ADD_ITEM": {
      return produce(state, (draft) => {
        const { payload } = action;

        const cartIndex = draft.cart.findIndex(
          (item) => item.id === payload.item.id
        );

        if (cartIndex >= 0) {
          draft.cart[cartIndex].quantity += payload.item.quantity;
        } else {
          draft.cart.push(payload.item);
        }
      });
    }
    case "REMOVE_ITEM": {
      return produce(state, (state) => {
        const { cart } = state;
        const { id } = action.payload;

        const cartIndex = cart.findIndex((product) => product.id === id);

        if (cartIndex >= 0) cart.splice(cartIndex, 1);
      });
    }
    case "INCREMENT_ITEM": {
      return produce(state, (draft) => {
        const { cart } = draft;
        const { id } = action.payload;

        const cartIndex = cart.findIndex((product) => product.id === id);

        if (cartIndex >= 0) cart[cartIndex].quantity += 1;
      });
    }
    case "DECREMENT_ITEM": {
      return produce(state, (draft) => {
        const { cart } = draft;
        const { id } = action.payload;

        const cartIndex = cart.findIndex((product) => product.id === id);

        if (cartIndex >= 0 && cart[cartIndex].quantity > 0) {
          cart[cartIndex].quantity -= 1;
        }
      });
    }
    case "CHECKOUT": {
      return produce(state, (draft) => {
        const { payload } = action;

        draft.order = payload.order;
        draft.cart = [];
      });
    }
  }

  return state;
}
