import styled from 'styled-components'

export const StyledCheckOutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const StyledImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const StyledName = styled.span`
  width: 23%;
`

export const StyledPrice = styled.span`
  width: 23%;
`

export const StyledQuantity = styled.span`
  width: 23%;
  display: flex;
`

export const StyledArrow = styled.div`
  cursor: pointer;
`

export const StyledValue = styled.span`
  margin: 0 10px;
`

export const StyledRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
