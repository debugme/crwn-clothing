import { FunctionComponent, InputHTMLAttributes } from 'react'

import './FormInput.scss'

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}

export const FormInput: FunctionComponent<FormInputProps> = (
  props: FormInputProps
): JSX.Element => {
  const { label, value = '', ...rest } = props
  const labelClass = `${value.length ? `shrink` : ``} form-input-label`
  return (
    <div className="group">
      <input className="form-input" {...rest} />
      {label && (
        <label className={labelClass} htmlFor={rest.name}>
          {label}
        </label>
      )}
    </div>
  )
}
