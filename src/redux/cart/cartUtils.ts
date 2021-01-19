import { CartItemProps, CollectionItem } from '../../components'

export const addItem = (
  items: CartItemProps[],
  payload: CollectionItem | undefined
): CartItemProps[] => {
  if (!payload) return items
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

export const clearItem = (
  items: CartItemProps[],
  payload: CollectionItem | undefined
): CartItemProps[] => {
  if (!payload) return items
  const itemInCart = items.find((item) => item.id === payload.id)
  if (!itemInCart) {
    return items
  }
  const newItems = items.filter((item) => item.id !== payload.id)
  return newItems
}

export const removeItem = (
  items: CartItemProps[],
  payload: CollectionItem | undefined
): CartItemProps[] => {
  if (!payload) return items
  const itemInCart = items.find((item) => item.id === payload.id)
  if (!itemInCart) {
    return items
  }
  if (itemInCart.quantity === 0) {
    return clearItem(items, payload)
  }
  const newItems = items.map((item) => {
    if (item.id === payload.id) {
      const quantity = item.quantity - 1
      const newItem = { ...item, quantity }
      return newItem
    }
    return item
  })
  return newItems
}
