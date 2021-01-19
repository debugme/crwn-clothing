import { ToggleCartVisibilityAction, ActionType } from '../cart/cartActions'

export interface CartState {
  isVisible: boolean
}

export const defaultCartState: CartState = {
  isVisible: false,
}

export const cartReducer = (
  cartState = defaultCartState,
  action: ToggleCartVisibilityAction
): CartState => {
  const { type } = action
  switch (type) {
    case ActionType.ToggleCartVisibility:
      return { ...cartState, isVisible: !cartState.isVisible }
    default:
      return cartState
  }
}
