# GitHub Pages Portfolio

This is a simple portfolio website that I created using GitHub Pages. It is a static website that is hosted on GitHub.
The website is built using Next.js. The website is responsive and works well on all devices.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the server on http://localhost:3000:

```bash
npm run dev
```

## GitHub Actions

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment is triggered when a new
commit is pushed to the `main` branch.

## Your Task

### Step 1

Create a new repository on your personal GitHub account named `portfolio`. The repository should be public and should
use https://github.com/Ensign-College/CS22-portfolio-template.git as the template repository.

2.
3.
4. Create a new Next.js project in the `portfolio` repository.
   ```bash
   npx create-next-app@latest
   ```
3. Attach the `portfolio` repository to a new GitHub Pages site.
   ```bash
   git remote add origin <URL>
   git push -u origin main
   ```

### Step 2

Create a new file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: [ "main" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # If source files changed but packages didn't, rebuild from a prior cache.
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Show me the files
        run: ls -la
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

