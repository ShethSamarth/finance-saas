# Finance SaaS Platform

This is a repository for Fullstack Finance SaaS Platform: Next.js 14, Clerk, Hono, PostgreSQL, Drizzle, React, TailwindCSS, ShadCN UI.

Key Features:

- Track your income and expenses
- Categorize transactions
- Assign transactions to specific accounts
- Detailed summary of income and expenses
- Hono for API
- PostgreSQL with Drizzle
- Clerk Authentication
- ShadcnUI & TailwindCSS
- Full mobile responsiveness

# Final Version

To visit the website, [click here.](https://financesaas-ss.vercel.app)

### Cloning the repository

```shell
git clone https://github.com/ShethSamarth/finance-saas.git
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

NEXT_PUBLIC_APP_URL=
```

### Install packages

```shell
bun install
```

### Setup database

```
bun run db:generate
bun run db:migrate
```

### Start the app

```shell
bun run dev
```
