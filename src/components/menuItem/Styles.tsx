import styled from 'styled-components'

interface StyledBackgroundImageProps {
  imageUrl: string
}

interface StyledMenuItemProps {
  size?: string
}

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.6) inset; // vignette effect
  background-image: ${(props: StyledBackgroundImageProps) =>
    `url(${props.imageUrl})`};
`

export const StyledContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const StyledMenuItem = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  height: ${(props: StyledMenuItemProps) =>
    props.size === 'large' ? '380px;' : '240px;'}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${StyledBackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover ${StyledContent} {
    opacity: 0.9;
    transition: opacity 1s ease-in-out;
  }

  &:not(:hover) ${StyledBackgroundImage} {
    transform: scale(1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:not(:hover) ${StyledContent} {
    opacity: 0.7;
    transition: opacity 1s ease-in-out;
  }
`

export const StyledTitle = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

export const StyledSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`
