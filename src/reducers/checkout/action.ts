import { Item, Order } from "./reducer";

export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM = "INCREMENT_ITEM",
  DECREMENT_ITEM = "DECREMENT_ITEM",
  CHECKOUT = "CHECKOUT",
}

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  };
}

export function removeItemAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { id },
  };
}

export function incrementItemAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: { id },
  };
}

export function decrementItemAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: { id },
  };
}

export function checkoutAction(order: Order) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: { order },
  };
}