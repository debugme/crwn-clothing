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
  const handleToken = async (token: Token) => {
    try {
      const endpoint = 'http://localhost:5000/payment' // how come the proxy in package.json is not working??
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: priceInCents,
          token,
        }),
      }
      await fetch(endpoint, options)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceInCents}
        panelLabel="Pay Now"
        token={handleToken}
        stripeKey={stripeKey}
      />
    </div>
  )
}
