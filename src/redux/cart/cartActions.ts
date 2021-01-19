import { CollectionItem } from '../../components'

export enum ActionType {
  ToggleCartVisibility = 'ToggleCartVisibility',
  AddItemToCart = 'AddItemToCart',
}

export interface ToggleCartVisibilityAction {
  type: ActionType.ToggleCartVisibility
  payload: undefined
}

export interface AddItemToCartAction {
  type: ActionType.AddItemToCart
  payload: CollectionItem
}

export type ToggleCartVisibilityActionCreator = () => ToggleCartVisibilityAction

export type AddItemToCartActionCreator = (
  item: CollectionItem
) => AddItemToCartAction

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
