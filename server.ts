import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'

const isProduction = process.env.NODE_ENV === 'production'
if (!isProduction) dotenv.config()

const server = express()

server.use(express.json()) // for JSON defined in Postman
server.use(express.urlencoded({ extended: true })) // for JSON defined in submitted html forms
server.use(cors()) // for handling requests from web pages that were not served from this server

if (isProduction) server.use(express.static('client/build'))

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
  typescript: true,
})

server.get('*', (request, response) => {
  response.sendFile('client/build/index.html')
})

server.post('/payment', async (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: 'usd',
  }
  try {
    const result = await stripe.charges.create(body)
    console.log('[server] result', result)
    return response.status(200).send({ success: result })
  } catch (error) {
    console.error('[server] error was ', error)
    return response.status(500).send({ error })
  }
})

const handler = () =>
  console.log(`[server] listening on port ${process.env.PORT}`)
server.listen(process.env.PORT, handler)
