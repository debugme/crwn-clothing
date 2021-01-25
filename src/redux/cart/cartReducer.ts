import { CartItemProps } from '../../components'
import { CartActionList, ActionType } from '../cart/cartActions'

import { addItem, removeItem, clearItem } from './cartUtils'

export interface CartState {
  isVisible: boolean
  items: CartItemProps[]
}

export const defaultCartState: CartState = {
  isVisible: false,
  items: [],
}

export const cartReducer = (
  cartState = defaultCartState,
  action: CartActionList
): CartState => {
  const { type, payload } = action
  switch (type) {
    case ActionType.ToggleCartVisibility:
      return { ...cartState, isVisible: !cartState.isVisible }
    case ActionType.AddItemToCart:
      return { ...cartState, items: addItem(cartState.items, payload) }
    case ActionType.RemoveItemFromCart:
      return { ...cartState, items: removeItem(cartState.items, payload) }
    case ActionType.ClearItemFromCart:
      return { ...cartState, items: clearItem(cartState.items, payload) }
    case ActionType.ClearCart:
      return { ...cartState, items: [] }
    default:
      return cartState
  }
}
