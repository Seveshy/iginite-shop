// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/src/lib/stripe';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = 'price_1MZFxNHPUPvrrcE1soLFbe9h';

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })

  return res.status(201).json({
     checkoutUrl: checkoutSession.url
  })  
}
