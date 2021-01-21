import styled from 'styled-components'

export const StyledGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

interface StyledFormLabelProps {
  value: string | undefined
}

export const StyledFormInputLabel = styled.label`
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
transition: 300ms ease all;
top: ${(props: StyledFormLabelProps) => (props.value ? '-14px;' : '10px;')}
font-size: ${(props: StyledFormLabelProps) => (props.value ? '12px;' : '16px;')}
color: ${(props: StyledFormLabelProps) => (props.value ? 'black;' : 'grey;')}
`

export const StyledFormInput = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${StyledFormInputLabel} {
    top: -14px;
    font-size: 12px;
    color: black;
  }
`
