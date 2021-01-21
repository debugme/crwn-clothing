import { FunctionComponent } from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

export interface StripeButtonProps {
  price: number
}

export const StripeButton: FunctionComponent<StripeButtonProps> = (
  props: StripeButtonProps
): JSX.Element => {
  const { price } = props
  const priceInCents = price * 100
  const stripeKey = process.env.REACT_APP_stripeKey || ''
  console.log('process.env is ', process.env)
  const handleToken = (token: Token) => {
    console.log('token was ', token)
    alert('Payment was successful')
  }
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ${price}`}
        amount={priceInCents}
        panelLabel="Pay Now"
        token={handleToken}
        stripeKey={stripeKey}
      />
    </div>
  )
}
