import {
  ToggleCartVisibilityAction,
  ActionType,
  AddItemToCartAction,
} from '../cart/cartActions'

export interface CartState {
  isVisible: boolean
  items: any[]
}

export const defaultCartState: CartState = {
  isVisible: false,
  items: [],
}

export const cartReducer = (
  cartState = defaultCartState,
  action: ToggleCartVisibilityAction | AddItemToCartAction
): CartState => {
  const { type, payload } = action
  switch (type) {
    case ActionType.ToggleCartVisibility:
      return { ...cartState, isVisible: !cartState.isVisible }
    case ActionType.AddItemToCart:
      return { ...cartState, items: [...cartState.items, payload] }
    default:
      return cartState
  }
}
