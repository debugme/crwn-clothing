export enum ActionType {
  ToggleCartVisibility = 'ToggleCartVisibility',
}

export interface ToggleCartVisibilityAction {
  type: ActionType.ToggleCartVisibility
  payload: undefined
}

export type ToggleCartVisibilityActionCreator = () => ToggleCartVisibilityAction

export const toggleCartVisibility: ToggleCartVisibilityActionCreator = () => {
  return {
    type: ActionType.ToggleCartVisibility,
    payload: undefined,
  }
}
