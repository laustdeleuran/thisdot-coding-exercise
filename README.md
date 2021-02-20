# Coding Exercise for This Dot

[Visit site →](https://thisdot-coding-exercise.vercel.app/)

Quick solution for the [coding exercise provided by This Dot Labs](./SOW.md). Key components:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Emotion](https://emotion.sh/)
- [Next.JS](https://nextjs.org/)
- [SWR](https://swr.vercel.app/)
- [Github GraphQL API](https://docs.github.com/en/graphql)

It's basically a quick search interface mocked up with React and Emotion that calls an Next.JS API handler, that then does the GraphQL API call. I wrapped it in a Next.JS API handler since it conveniently solves two issues: any potential CORS is done away with and any secret tokens can be kept secret (if it wasn't for this repo).

Potential improvements if I had more time:

- Search as you type.
- Avoid results list flickering in and out when loading the next page.
- Add current search parameters to browser URI so that search results can be referenced and shared.

---

## NextJS readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
