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
      return { ...cartState, items: addItem(cartState.items, payload) }
    default:
      return cartState
  }
}

const addItem = (items: any[], payload: any): any[] => {
  const itemInCart = items.find((item) => item.id === payload.id)
  if (!itemInCart) {
    return [...items, { ...payload, quantity: 1 }]
  }
  const newItems = items.map((item) => {
    if (item.id === payload.id) {
      const quantity = item.quantity + 1
      const newItem = { ...item, quantity }
      return newItem
    }
    return item
  })
  return newItems
}
