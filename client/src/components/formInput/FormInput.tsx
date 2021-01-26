import { FunctionComponent, InputHTMLAttributes } from 'react'

import { StyledGroup, StyledFormInput, StyledFormInputLabel } from './Styles'

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}

export const FormInput: FunctionComponent<FormInputProps> = (
  props: FormInputProps
): JSX.Element => {
  const { label, value, ...rest } = props
  return (
    <StyledGroup>
      <StyledFormInput {...rest} />
      {label && (
        <StyledFormInputLabel htmlFor={rest.name} value={value}>
          {label}
        </StyledFormInputLabel>
      )}
    </StyledGroup>
  )
}
