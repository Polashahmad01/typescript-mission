# TypeScript Mission

A hands-on TypeScript learning project featuring practical code examples for core TypeScript concepts. Each file in `mission-01/src/`, `mission-02/src`, and `mission-03/src` demonstrates a specific feature or pattern, making this repository a great resource for beginners and those looking to solidify their TypeScript fundamentals.

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
mission-02/
  └── src/
      ├── 01-type-assertion-type-narrowing.ts
      ├── 02-interface-type-vs-interface.ts
      ├── 03-introduction-to-generics.ts
      ├── 04-generic-with-interface.ts
      ├── 05-generic-with-function.ts
      ├── 06-constraints.ts
      ├── 07-constraints-using-keyof.ts
      ├── 08-asynchronous.ts
      ├── 09-conditional-types.ts
      ├── 10-mapped-types.ts
      └── 11-utility-type.ts
mission-03/
  └── src/
      ├── 01-class-object.ts
      ├── 02-inheritance.ts
      ├── 03-type-guard-using-typeof-and-in.ts
      ├── 04-type-guard-using-instance-of.ts
      ├── 05-access-modifiers.ts
      ├── 06-getter-setter.ts
      ├── 07-statics.ts
      ├── 08-polymorphism.ts
      ├── 09-abstraction.ts
      └── 10-encapsulation.ts
```

## Example File Descriptions

### Mission 01

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

### Mission 02

- **01-type-assertion-type-narrowing.ts**: Type assertion and type narrowing.
- **02-interface-type-vs-interface.ts**: Differences between type alias and interface.
- **03-introduction-to-generics.ts**: Introduction to generics.
- **04-generic-with-interface.ts**: Generics with interfaces.
- **05-generic-with-function.ts**: Generics with functions.
- **06-constraints.ts**: Generic constraints.
- **07-constraints-using-keyof.ts**: Generic constraints using `keyof`.
- **08-asynchronous.ts**: Asynchronous programming in TypeScript.
- **09-conditional-types.ts**: Conditional types.
- **10-mapped-types.ts**: Mapped types.
- **11-utility-type.ts**: Utility types.

### Mission 03

- **01-class-object.ts**: Introduction to classes and objects in TypeScript.
- **02-inheritance.ts**: Demonstrates inheritance in classes.
- **03-type-guard-using-typeof-and-in.ts**: Type guards using `typeof` and `in` operators.
- **04-type-guard-using-instance-of.ts**: Type guards using `instanceof` operator.
- **05-access-modifiers.ts**: Usage of access modifiers (`public`, `private`, `protected`).
- **06-getter-setter.ts**: Getters and setters in classes.
- **07-statics.ts**: Static properties and methods.
- **08-polymorphism.ts**: Polymorphism in TypeScript classes.
- **09-abstraction.ts**: Abstract classes and methods.
- **10-encapsulation.ts**: Encapsulation in object-oriented programming.

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
