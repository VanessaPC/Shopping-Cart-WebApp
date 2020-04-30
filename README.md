This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Personal notes on the project progression.

This are personal notes, taken while working on it, you can completely discard or ignore them.

### Major decissions behind it:

- Why NextJS?.
- Why Redux?
- Why simple server set up and not something fancier like GraphQL or stuff.

### Timeline of events:

- Monday:
  Aprox. 2 Hours -> initial set up for Next and Server. Initial server structure added. Decided fon the full stack to use.
  Initial set up for shopping cart routes, server calls, etc. Also, initial set up of mock user.
- Wednesday:
  Approx. 2 Hours -> Done with routes and calls for Server to create a shopping cart in MongoDB, updating user cart, adding and removing items.
  Clean up of code, and biggest code smells. Happy with idea behind it and how is looking.
- Thursday:
  -> Set up of conbined server plus client side app. Typescript set up. Calls to server set up and working, initial code architecture set up for server side render and initial minimal store,
  initial design set up.

### I'd like to add:

- [ ] TS to the server.
- [ ] Authentication to server.
- [ ] code documentation

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
