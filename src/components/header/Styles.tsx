import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const StyledLogo = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StyledOption = styled(Link)`
  min-width: 90px;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  &:hover {
    &::after {
      content: '•';
      font-size: 20px;
      color: red;
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
    }
  }
  padding: 25px 15px 20px 15px;
`
