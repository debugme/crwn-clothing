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
  payload: any
}

export type ToggleCartVisibilityActionCreator = () => ToggleCartVisibilityAction

export type AddItemToCartActionCreator = (item: any) => AddItemToCartAction

export const toggleCartVisibility: ToggleCartVisibilityActionCreator = () => {
  return {
    type: ActionType.ToggleCartVisibility,
    payload: undefined,
  }
}

export const addItemToCart: AddItemToCartActionCreator = (item: any) => {
  return {
    type: ActionType.AddItemToCart,
    payload: item,
  }
}
