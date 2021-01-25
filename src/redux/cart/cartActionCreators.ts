import { CollectionItem } from '../../components'
import {
  ActionType,
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
  ToggleCartVisibilityAction,
  ClearCartAction,
} from './cartActions'

export type AddItemToCartActionCreator = (
  item: CollectionItem
) => AddItemToCartAction

export const addItemToCart: AddItemToCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.AddItemToCart,
    payload: item,
  }
}

export type RemoveItemFromCartActionCreator = (
  item: CollectionItem
) => RemoveItemFromCartAction

export const removeItemFromCart: RemoveItemFromCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.RemoveItemFromCart,
    payload: item,
  }
}

export type ClearItemFromCartActionCreator = (
  item: CollectionItem
) => ClearItemFromCartAction

export const clearItemFromCart: ClearItemFromCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.ClearItemFromCart,
    payload: item,
  }
}

export type ClearCartActionCreator = () => ClearCartAction

export const clearCart: ClearCartActionCreator = () => {
  return {
    type: ActionType.ClearCart,
    payload: undefined,
  }
}

export type ToggleCartVisibilityActionCreator = () => ToggleCartVisibilityAction

export const toggleCartVisibility: ToggleCartVisibilityActionCreator = () => {
  return {
    type: ActionType.ToggleCartVisibility,
    payload: undefined,
  }
}
