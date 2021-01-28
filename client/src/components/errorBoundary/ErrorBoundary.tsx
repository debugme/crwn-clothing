import { Component } from 'react'

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
    return <h2>Unable to load component because of errors</h2>
  }
}
