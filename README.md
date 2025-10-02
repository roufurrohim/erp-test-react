# Welcome to project

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
bun i

# Step 4: Start the development server with auto-reloading and an instant preview.
bun run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Running Tests

Run the test suite:

```bash
bun test
```

Run tests in watch mode:

```bash
bun test -- --watch
```

Run tests with coverage:

```bash
bun test -- --coverage
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── ui/           # shadcn/ui components
│   ├── __tests__/    # Component tests
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LoginDialog.tsx
├── pages/            # Page components
│   ├── __tests__/    # Page tests
│   ├── Index.tsx
│   └── NotFound.tsx
├── test/             # Test utilities
│   └── setup.ts
├── assets/           # Static assets
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```