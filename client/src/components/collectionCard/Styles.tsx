import styled from 'styled-components'
import { Button } from '..'

export interface StyledImageProps {
  imageUrl: string
}

export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${(props: StyledImageProps) => `url(${props.imageUrl})`};
`

export const StyledButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 43px;
  display: none;
`

export const StyledCollectionCard = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${StyledImage} {
    opacity: 0.8;
    transition: all 0.2s ease-out;
  }

  &:hover ${StyledButton} {
    opacity: 0.9;
    display: flex;
    transition: all 0.6s ease-out;
  }
`

export const StyledCollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const StyledPrice = styled.span`
  width: 10%;
`
