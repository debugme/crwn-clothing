import { FunctionComponent } from 'react'

import './FormInput.scss'

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}

export const FormInput: FunctionComponent<FormInputProps> = (
  props: FormInputProps
): JSX.Element => {
  const { label, name, value = '', type = 'text', onChange, required } = props
  const labelClass = `${value.length ? `shrink` : ``} form-input-label`
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        required={required}
        onChange={onChange}
      />
      {label && (
        <label className={labelClass} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  )
}
