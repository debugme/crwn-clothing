import styled, { css } from 'styled-components'

import { ButtonProps } from './Button'

const commonCSS = css`
  min-width: 165px;
  width: auto;
  height: 52px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
const googleCSS = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`

const invertedCSS = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

export const StyledButton = styled.button`
  ${commonCSS}
  ${(props: ButtonProps) => (props.isGoogleSignIn ? googleCSS : '')}
  ${(props: ButtonProps) => (props.inverted ? invertedCSS : '')}
`
