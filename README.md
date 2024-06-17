# Bounty rules

1. Code must be typesafe
2. Code must be modular
3. Update the files present only in (external-pages) folder
4. Update the landing page to match the design
5. Update the footer.tsx file as needed
6. Update the navigation menu as needed
7. Install and setup magic-ui to render magic ui based components
8. Don't install any other packages
9. Don't add too many comments. Keep it simple.
10. Remove unused code (don't leave it commented out)
11. `pnpm tsc` should not throw any errors
12. `pnpm lint` should not throw any errors



## Acceptance rules

1. As close to pixel perfection as possible
2. Landing page must match design in both desktop and mobile
3. Tablet view should look reasonably well.
4. No new colors or arbitrary changes.

## Developer environment

## Installation Instructions

To set up the project, follow these steps:

1. **Install Dependencies**:
   Ensure you have `pnpm` installed. If not, you can install it globally using npm:
   ```sh
   npm install -g pnpm
   ```

   Once `pnpm` is installed, navigate to your project directory and run:
   ```sh
   pnpm install
   ```

   This will install all the necessary dependencies for the project.

2. **Run the Development Server**:
   After the dependencies are installed, you can start the development server by running:
   ```sh
   pnpm dev
   ```

   This will start the server, and you can view the project in your browser at `http://localhost:3000`.

3. **Build for Production**:
   If you need to build the project for production, you can run:
   ```sh
   pnpm build
   ```

   This will create an optimized build of your project in the `dist` directory.

4. **Additional Commands**:
   - To run typecheck:
     ```sh
     pnpm tsc
     ```
   - To lint the code:
     ```sh
     pnpm lint
     ```

By following these steps, you should be able to set up and run the project locally without any issues.
