import { CollectionItem } from '../../components'

export enum ActionType {
  ToggleCartVisibility = 'ToggleCartVisibility',
  AddItemToCart = 'AddItemToCart',
  RemoveItemFromCart = 'RemoveItemFromCart',
  ClearItemFromCart = 'ClearItemFromCart',
}

export interface ToggleCartVisibilityAction {
  type: ActionType.ToggleCartVisibility
  payload: undefined
}

export interface AddItemToCartAction {
  type: ActionType.AddItemToCart
  payload: CollectionItem
}

export interface RemoveItemFromCartAction {
  type: ActionType.RemoveItemFromCart
  payload: CollectionItem
}

export interface ClearItemFromCartAction {
  type: ActionType.ClearItemFromCart
  payload: CollectionItem
}

export type CartActionList =
  | ToggleCartVisibilityAction
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | ClearItemFromCartAction
