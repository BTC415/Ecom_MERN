import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../typings";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item: IProduct) => ({
    price_data: {
      currency: "cad",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [{ shipping_rate: "shr_1M3liKLqDHsIaXlfZyXwBv7Z" }],
    shipping_address_collection: {
      allowed_countries: ["CA", "US", "GB"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: IProduct) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
