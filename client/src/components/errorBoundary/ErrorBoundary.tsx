import { Component } from 'react'
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './Styles'

export class ErrorBoundary extends Component {
  state = { hasErrors: false }
  static getDerivedStateFromError() {
    return { hasErrors: true }
  }
  componentDidCatch(error: any, info: any) {
    console.error('[ErrorBoundary] Error: ', error)
    console.error('[ErrorBoundary] Info: ', info)
  }
  render() {
    const { hasErrors } = this.state
    const { children } = this.props
    if (!hasErrors) return children
    return (
      <ErrorImageOverlay>
        <ErrorImageContainer slot="https://i.imgur.com/yW2W9SC.png" />
        <ErrorImageText>Sorry but this page is broken!</ErrorImageText>
      </ErrorImageOverlay>
    )
  }
}
