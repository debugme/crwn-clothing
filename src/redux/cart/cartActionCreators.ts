import { CollectionItem } from '../../components'
import {
  ActionType,
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
  ToggleCartVisibilityAction,
} from './cartActions'

export type ToggleCartVisibilityActionCreator = () => ToggleCartVisibilityAction

export type AddItemToCartActionCreator = (
  item: CollectionItem
) => AddItemToCartAction

export type RemoveItemFromCartActionCreator = (
  item: CollectionItem
) => RemoveItemFromCartAction

export type ClearItemFromCartActionCreator = (
  item: CollectionItem
) => ClearItemFromCartAction

export const toggleCartVisibility: ToggleCartVisibilityActionCreator = () => {
  return {
    type: ActionType.ToggleCartVisibility,
    payload: undefined,
  }
}

export const addItemToCart: AddItemToCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.AddItemToCart,
    payload: item,
  }
}

export const removeItemFromCart: RemoveItemFromCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.RemoveItemFromCart,
    payload: item,
  }
}

export const clearItemFromCart: ClearItemFromCartActionCreator = (
  item: CollectionItem
) => {
  return {
    type: ActionType.ClearItemFromCart,
    payload: item,
  }
}
