# TypeScript Mission

A hands-on TypeScript learning project featuring practical code examples for core TypeScript concepts. Each file in `mission-01/src/` demonstrates a specific feature or pattern, making this repository a great resource for beginners and those looking to solidify their TypeScript fundamentals.

## Project Structure

```
mission-01/
  └── src/
      ├── 01-first-program.ts
      ├── 02-basic-data-types.ts
      ├── 03-object-optional-literal.ts
      ├── 04-function.ts
      ├── 05-spread-rest-operator.ts
      ├── 06-destructuring.ts
      ├── 07-type-alias.ts
      ├── 08-union-intersection-type.ts
      ├── 09-ternary-optional-chaining-nullish-coalescing-operator.ts
      └── 10-never-unknown-nullable-type.ts
```

## Example File Descriptions

- **01-first-program.ts**: Your first TypeScript program and basic output.
- **02-basic-data-types.ts**: Demonstrates string, number, boolean, undefined, null, array, and tuple types.
- **03-object-optional-literal.ts**: Shows object types, optional properties, and literal types.
- **04-function.ts**: Function declarations, arrow functions, and object methods.
- **05-spread-rest-operator.ts**: Usage of spread and rest operators with arrays and objects.
- **06-destructuring.ts**: Array and object destructuring examples.
- **07-type-alias.ts**: Creating and using type aliases for objects and functions.
- **08-union-intersection-type.ts**: Union and intersection types in practice.
- **09-ternary-optional-chaining-nullish-coalescing-operator.ts**: Ternary operator, optional chaining, and nullish coalescing.
- **10-never-unknown-nullable-type.ts**: Advanced types: never, unknown, and nullable types.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [TypeScript](https://www.typescriptlang.org/) (install globally with `npm install -g typescript`)

### Setup

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd typescript-mission
   ```
2. Install dependencies (if any):
   ```sh
   npm install
   ```
3. Compile TypeScript files:
   ```sh
   tsc
   ```
   Or to compile a specific file:
   ```sh
   tsc mission-01/src/01-first-program.ts
   ```

### Running Examples

After compiling, run the generated JavaScript with Node.js:

```sh
node mission-01/src/01-first-program.js
```

Or use `ts-node` to run TypeScript directly (install with `npm install -g ts-node`):

```sh
ts-node mission-01/src/01-first-program.ts
```

## License

This project is for educational purposes. Feel free to use and adapt the examples!
