# Fast Marketplace: eCommerce Platform Project

Fast Marketplace is a case study of a eCommerce platform implemented using Next.js, TypeScript, Tailwind CSS, Redux, NextAuth, Cloud Firestore Database, Webhooks, and Stripe Payments Checkout.

Includes eCommerce features like Shopping Cart, Checkout Payment, and Customer Order History.

![smartmockups_laiiihlb](https://user-images.githubusercontent.com/42308135/201991734-fa2bc896-d49d-4276-8221-a80fd112e4df.jpg)


## Tech Stack

- Next.js
- React.js
- TypeScript
- Redux
- Tailwind CSS
- NextAuth
- Stripe Checkout
- Webhooks
- Firebase

## Features

- Responsive UI with Tailwind CSS.
- Shopping Cart
- Payment Checkout flow with Stripe
- Customer Order History
- State Management with Redux.
- Data fetching and caching techniques using SSR (Server Side Rendering) with Next.js.
- User Authentication with NextAuth.
- Robust code using TypeScript.

## Screen Captures
<img src="https://user-images.githubusercontent.com/42308135/201999021-956dac52-2e90-44c5-9ad2-6d3ba47e8237.gif" width="750" />
<img src="https://user-images.githubusercontent.com/42308135/202000898-b3213473-7d99-4a76-a834-69f359b944eb.gif" width="750" />

## Screenshots

<img src="https://user-images.githubusercontent.com/42308135/201992650-10ea69fb-b242-4f0a-8bb6-5c5077d905d8.png" width="750" />
<img src="https://user-images.githubusercontent.com/42308135/201992966-143562bb-19f9-4278-916a-6d951288fe15.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993041-667db403-9234-4aa1-8316-ff9f1448ca2b.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993326-aaf43d57-791d-4c8b-8c2d-5265939657e3.png" width="600" />
<img src="https://user-images.githubusercontent.com/42308135/201993396-2c608f87-e407-4dd9-888c-c8bb37574f5a.png" width="600" />


## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker.git

cd travel-nextjs-typescript-tailwind-mapbox-calendar-date-picker

code .
```

Then, create a .env.local file in the root of the project and configure the following environment variables:

```
# Authentication
# Need to add Authorized redirect URIs to Google Cloud
# http://localhost:3000/api/auth/callback/google
# https://your.deployment.url.com/api/auth/callback/google
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=

# Firebase Admin SDK
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_PRIVATE_KEY=
FIREBASE_ADMIN_CLIENT_EMAIL=

# Stripe Payments
# More info: https://stripe.com/docs/payments/accept-a-payment
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=

HOST=http://localhost:3000
```

To send Stripe events to a local webhook install Stripe CLI, login into your Stripe account, and use the --forward-to flag pointing to the webhook endpoint, and create a trigger for successful customer payments :

```bash
brew install stripe/stripe-cli/stripe

stripe login

stripe listen --forward-to localhost:3000/api/webhook

stripe trigger checkout.session.completed
```

Finally, install all the Fast Marketplace dependencies and run the application:

```bash
yarn

yarn dev
```

Now the application is running on http://localhost:3000 🚀

## How to test Stripe Checkout

The current Stripe Checkout implementation simulates payments in test mode. 

⛔️ Please, do not use real card details. Use the following test card details:

* Use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.
* Use a valid future date, such as 12/34.
* Use any three-digit CVC (four digits for American Express cards).
* Use any value you like for other form fields.

![Testing form with test card number 4242 4242 4242 4242](https://b.stripecdn.com/docs-statics-srv/assets/test-card.c3f9b3d1a3e8caca3c9f4c9c481fd49c.jpg)

## Deployment details

Fast Marketplace deployed using Vercel:

[Deployment Activity Log](https://github.com/javigong/fast-marketplace-nextjs-typescript-tailwind-redux-nextauth-firebase/deployments/activity_log?environment=Production)
