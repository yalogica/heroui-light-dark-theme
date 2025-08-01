# HeroUI Light & Dark Theme Boilerplate

A fairly simple template demonstrating how to create a web application with light & dark theme support using the HeroUI React component library.

![Demo](demo.gif)

**Getting Started:**

- Clone or download the repository.
- Install dependencies with `npm install` or `yarn install` or `pnpm install`.
- Run `pnpm dev` to start the development server and watch for changes.
- Edit boilerplate files in the `src/` directory.

All color settings for the themes are located in the `main.css` file. Additionally, the `hero.ts` file contains color configurations for the HeroUI library components. Although, in principle, everything could be moved into a single main.css file by simply overriding colors using global variables like --heroui-background, etc., in this case we would need to adhere to the HSL format, which might not be very intuitive or clear.


**Requirements:**
- TypeScript
- React 19
- HeroUI 2.8
- Vite 7.0


## License

[MIT](LICENSE)